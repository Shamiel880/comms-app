require('dotenv').config();
process.env.MODE = 'mock';

const express = require('express');
const db = require('../db');
const { normalise } = require('../normaliser');

module.exports = async function () {
  db.clear();
  await normalise({ channel: 'email', sender: 'alice@example.com', body: 'Test', timestamp: new Date() });
  await normalise({ channel: 'whatsapp', sender: '27821234567', body: 'Test', timestamp: new Date() });
  await normalise({ channel: 'telegram', sender: '111111111', body: 'Please review the document', timestamp: new Date() });
  await new Promise(r => setTimeout(r, 100));

  const app = express();
  app.use(express.json());
  app.get('/api/messages', (req, res) => {
    let msgs = db.getMessages();
    if (req.query.channel) msgs = msgs.filter(m => m.channel === req.query.channel);
    res.json(msgs);
  });
  app.get('/api/tasks', (req, res) => res.json(db.getTasks()));
  app.get('/api/stats', (req, res) => {
    const msgs = db.getMessages();
    res.json({
      total_messages: msgs.length,
      total_tasks: db.getTasks().length,
      by_channel: msgs.reduce((a, m) => { a[m.channel] = (a[m.channel] || 0) + 1; return a; }, {}),
    });
  });

  const server = await new Promise(r => { const s = app.listen(0, () => r(s)); });
  const port = server.address().port;
  const fetch = require('node-fetch');

  try {
    const msgs = await (await fetch(`http://localhost:${port}/api/messages`)).json();
    const stats = await (await fetch(`http://localhost:${port}/api/stats`)).json();
    if (!Array.isArray(msgs)) throw new Error('/api/messages not array');
    if (msgs.length !== 3) throw new Error(`Expected 3 messages, got ${msgs.length}`);
    if (stats.total_messages !== 3) throw new Error(`Expected total_messages=3`);
    if (!stats.by_channel.email) throw new Error('Missing email in stats');
  } finally {
    server.close();
  }
};
