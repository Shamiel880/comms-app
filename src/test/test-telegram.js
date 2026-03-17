require('dotenv').config();
process.env.MODE = 'mock';
process.env.TELEGRAM_BOT_TOKEN = 'mock-token';

const express = require('express');
const telegram = require('../integrations/telegram');
const db = require('../db');

module.exports = async function () {
  db.clear();
  const app = express();
  app.use(express.json());
  telegram.init(app);
  const server = await new Promise(r => { const s = app.listen(0, () => r(s)); });
  const port = server.address().port;
  const fetch = require('node-fetch');

  try {
    await fetch(`http://localhost:${port}/webhooks/telegram/mock-token`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        update_id: 1,
        message: {
          message_id: 1,
          from: { id: 111111111, first_name: 'Alice' },
          chat: { id: 111111111, type: 'private' },
          date: Math.floor(Date.now() / 1000),
          text: 'Can you send the project update?',
        },
      }),
    });

    await new Promise(r => setTimeout(r, 100));
    const msgs = db.getMessages().filter(m => m.channel === 'telegram');
    if (msgs.length === 0) throw new Error('Telegram message not saved');
    if (msgs[0].sender !== '111111111') throw new Error('Sender not preserved');
    if (msgs[0].user_id !== 'user_alice') throw new Error('user_id not resolved');
  } finally {
    server.close();
  }
};
