const { normalise } = require('../../normaliser');

async function startEmailIdle() {
  const { ImapFlow } = require('imapflow');

  const client = new ImapFlow({
    host: process.env.EMAIL_HOST || 'imap.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 993,
    secure: process.env.EMAIL_TLS !== 'false',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    logger: false,
  });

  client.on('exists', async data => {
    console.log(`[email] new message detected (count: ${data.count})`);
    await fetchLatest(client);
  });

  await client.connect();
  const lock = await client.getMailboxLock('INBOX');
  try {
    console.log('[email] IMAP connected, entering IDLE...');
    await client.idle();
  } finally {
    lock.release();
  }
}

async function fetchLatest(client) {
  const { simpleParser } = require('mailparser');
  const lock = await client.getMailboxLock('INBOX');
  try {
    for await (const msg of client.fetch('*', { source: true })) {
      const parsed = await simpleParser(msg.source);
      await normalise({
        channel: 'email',
        sender: parsed.from?.value?.[0]?.address || 'unknown',
        subject: parsed.subject || '',
        body: parsed.text || parsed.html || '',
        timestamp: parsed.date || new Date(),
        raw: { messageId: parsed.messageId },
      });
    }
  } finally {
    lock.release();
  }
}

async function sendEmail({ to, subject, text }) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return transporter.sendMail({ from: process.env.SMTP_USER, to, subject, text });
}

function init(app) {
  app.post('/webhooks/email', async (req, res) => {
    if (process.env.MODE !== 'mock') {
      return res.json({ status: 'email uses IMAP IDLE, not webhooks' });
    }

    try {
      const { sender, subject, body, timestamp, raw } = req.body || {};
      const saved = await normalise({
        channel: 'email',
        sender: sender || 'unknown',
        subject: subject || '',
        body: body || '',
        timestamp: timestamp ? new Date(timestamp) : new Date(),
        raw: raw || {},
      });
      return res.json({ status: 'ok', id: saved.id });
    } catch (e) {
      return res.status(400).json({ status: 'error', message: e.message });
    }
  });
}

module.exports = { name: 'email', init, poll: startEmailIdle, startEmailIdle, sendEmail };
