const { normalise } = require('../../normaliser');

function init(app) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token && process.env.MODE === 'live') {
    console.warn('[telegram] TELEGRAM_BOT_TOKEN not set — skipping');
    return;
  }

  const route = `/webhooks/telegram/${token || 'mock-token'}`;

  app.post(route, async (req, res) => {
    res.sendStatus(200);
    try {
      const update = req.body;
      const msg = update.message || update.edited_message;
      if (msg) {
        await normalise({
          channel: 'telegram',
          sender: String(msg.from?.id || 'unknown'),
          subject: null,
          body: msg.text || msg.caption || '',
          timestamp: new Date(msg.date * 1000),
          raw: msg,
        });
      }
    } catch (err) {
      console.error('[telegram] error:', err.message);
    }
  });

  console.log(`[telegram] route registered: POST ${route}`);
}

async function setWebhook() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const publicUrl = process.env.PUBLIC_URL;
  if (!token || !publicUrl) return;

  const fetch = require('node-fetch');
  const res = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: `${publicUrl}/webhooks/telegram/${token}`, drop_pending_updates: true }),
  });
  const data = await res.json();
  console.log('[telegram] setWebhook:', JSON.stringify(data));
  return data;
}

module.exports = { name: 'telegram', init, poll: null, setWebhook };
