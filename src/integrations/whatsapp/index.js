const { normalise } = require('../../normaliser');

function init(app) {
  app.get('/webhooks/whatsapp', (req, res) => {
    const { 'hub.mode': mode, 'hub.verify_token': token, 'hub.challenge': challenge } = req.query;
    if (mode === 'subscribe' && token === process.env.WA_VERIFY_TOKEN) {
      console.log('[whatsapp] webhook verified');
      return res.status(200).send(challenge);
    }
    res.sendStatus(403);
  });

  app.post('/webhooks/whatsapp', async (req, res) => {
    res.sendStatus(200);
    try {
      const msg = req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
      if (!msg) return;

      let body = '';
      if (msg.type === 'text') body = msg.text?.body || '';
      if (msg.type === 'button') body = msg.button?.text || '';
      if (msg.type === 'interactive') body = msg.interactive?.button_reply?.title || '';

      await normalise({
        channel: 'whatsapp',
        sender: msg.from,
        subject: null,
        body,
        timestamp: new Date(Number(msg.timestamp) * 1000),
        raw: msg,
      });
    } catch (err) {
      console.error('[whatsapp] error:', err.message);
    }
  });

  console.log('[whatsapp] routes registered: GET/POST /webhooks/whatsapp');
}

module.exports = { name: 'whatsapp', init, poll: null };
