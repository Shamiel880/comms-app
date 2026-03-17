require('dotenv').config();
process.env.MODE = 'mock';
process.env.WA_VERIFY_TOKEN = 'test-token';

const express = require('express');
const whatsapp = require('../integrations/whatsapp');
const db = require('../db');

module.exports = async function () {
  db.clear();
  const app = express();
  app.use(express.json());
  whatsapp.init(app);
  const server = await new Promise(r => { const s = app.listen(0, () => r(s)); });
  const port = server.address().port;
  const fetch = require('node-fetch');

  try {
    const verifyRes = await fetch(
      `http://localhost:${port}/webhooks/whatsapp?hub.mode=subscribe&hub.verify_token=test-token&hub.challenge=abc123`,
    );
    if (await verifyRes.text() !== 'abc123') throw new Error('Verification failed');

    await fetch(`http://localhost:${port}/webhooks/whatsapp`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entry: [{ changes: [{ value: { messages: [{
          from: '27821234567', type: 'text',
          timestamp: String(Math.floor(Date.now() / 1000)),
          text: { body: 'Please confirm the meeting.' },
        }] } }] }],
      }),
    });

    await new Promise(r => setTimeout(r, 100));
    const msgs = db.getMessages().filter(m => m.channel === 'whatsapp');
    if (msgs.length === 0) throw new Error('WhatsApp message not saved');
    if (msgs[0].sender !== '27821234567') throw new Error('Sender not preserved');
  } finally {
    server.close();
  }
};
