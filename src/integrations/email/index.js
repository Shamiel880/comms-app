const { normalise } = require('../../normaliser');

// ── Tag definitions ────────────────────────────────────────────────────────
const TAGS = {
  '[ACTION]':  { urgency: 'normal',  category: 'action',  extractTask: true  },
  '[FYI]':     { urgency: 'low',     category: 'fyi',     extractTask: false },
  '[URGENT]':  { urgency: 'urgent',  category: 'action',  extractTask: true  },
  '[TENDER]':  { urgency: 'normal',  category: 'tender',  extractTask: true  },
  '[INVOICE]': { urgency: 'normal',  category: 'invoice', extractTask: true  },
  '[QUOTE]':   { urgency: 'normal',  category: 'quote',   extractTask: true  },
  '[MEETING]': { urgency: 'normal',  category: 'meeting', extractTask: true  },
  '[REPORT]':  { urgency: 'low',     category: 'report',  extractTask: false },
  '[SITE:':    { urgency: 'normal',  category: 'site',    extractTask: true  },
};

function parseSubjectTag(subject) {
  if (!subject) return null;
  const upper = subject.toUpperCase();

  const siteMatch = subject.match(/\[SITE:([^\]]+)\]/i);
  if (siteMatch) {
    const siteName = siteMatch[1].trim();
    return {
      tag: `[SITE:${siteName}]`,
      category: 'site',
      urgency: 'normal',
      extractTask: true,
      project: siteName,
      cleanSubject: subject.replace(siteMatch[0], '').trim(),
    };
  }

  for (const [tag, meta] of Object.entries(TAGS)) {
    if (tag === '[SITE:') continue;
    if (upper.includes(tag)) {
      return {
        tag,
        category: meta.category,
        urgency: meta.urgency,
        extractTask: meta.extractTask,
        project: null,
        cleanSubject: subject.replace(new RegExp('\\' + tag, 'i'), '').trim(),
      };
    }
  }
  return null;
}

function parseSender(body) {
  const raw = body.from || body.sender || '';
  if (!raw) return { name: 'Unknown', email: 'unknown' };
  const match = raw.match(/^(.*?)\s*<(.+?)>$/);
  if (match) return { name: match[1].trim() || match[2].trim(), email: match[2].trim() };
  return { name: raw.trim(), email: raw.trim() };
}

function init(app) {
  app.post('/webhooks/email', async (req, res) => {
    res.status(200).send('OK');

    if (process.env.MODE !== 'mock') return;

    try {
      const { name, email } = parseSender(req.body);
      const rawSubject = req.body.subject || '';
      const body = req.body.text || req.body.body || '';
      const tagResult = parseSubjectTag(rawSubject);

      if (!tagResult) {
        if (process.env.ALLOW_UNTAGGED === 'true') {
          console.log(`[email webhook] no tag — allowing through (ALLOW_UNTAGGED=true)`);
        } else {
          console.log(`[email webhook] ignored — no recognised tag in: "${rawSubject}"`);
          return;
        }
      }

      const urgency      = tagResult?.urgency     || 'normal';
      const category     = tagResult?.category    || 'general';
      const project      = tagResult?.project     || null;
      const cleanSubject = tagResult?.cleanSubject || rawSubject;

      console.log(`[email webhook] from: ${name} <${email}> | tag: ${tagResult?.tag || 'none'} | subject: ${cleanSubject}`);

      await normalise({
        channel:   'email',
        sender:    name,
        user_id:   email,
        subject:   cleanSubject,
        body,
        urgency,
        category,
        project,
        timestamp: new Date(),
        raw:       req.body,
      });

    } catch (err) {
      console.error('[email webhook] error:', err.message);
    }
  });
}

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
      const rawSubject = parsed.subject || '';
      const tagResult = parseSubjectTag(rawSubject);
      if (!tagResult && process.env.ALLOW_UNTAGGED !== 'true') {
        console.log(`[email IMAP] ignored — no tag in subject: "${rawSubject}"`);
        continue;
      }
      await normalise({
        channel:   'email',
        sender:    parsed.from?.value?.[0]?.name || parsed.from?.value?.[0]?.address || 'unknown',
        user_id:   parsed.from?.value?.[0]?.address || 'unknown',
        subject:   tagResult?.cleanSubject || rawSubject,
        body:      parsed.text || parsed.html || '',
        urgency:   tagResult?.urgency  || 'normal',
        category:  tagResult?.category || 'general',
        project:   tagResult?.project  || null,
        timestamp: parsed.date || new Date(),
        raw:       { messageId: parsed.messageId },
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

module.exports = { name: 'email', init, poll: startEmailIdle, startEmailIdle, sendEmail, parseSubjectTag };