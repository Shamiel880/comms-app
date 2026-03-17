require('dotenv').config();
const express = require('express');
const path = require('path');
const { integrations } = require('./integrations');
const { startEmailIdle } = require('./integrations/email');
const db = require('./db');

const app = express();
app.use(express.json());

// CORS — allow UI to call API from any origin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve the UI
app.use('/ui', express.static(path.join(__dirname, '..', '..', 'ui')));

// ── Health check ──────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', mode: process.env.MODE || 'mock', uptime: process.uptime() });
});

// ── Dashboard API ─────────────────────────────────────────
app.get('/api/messages', (req, res) => {
  const { user_id, channel, limit = 20 } = req.query;
  let msgs = db.getMessages();
  if (user_id) msgs = msgs.filter(m => m.user_id === user_id);
  if (channel) msgs = msgs.filter(m => m.channel === channel);
  res.json(msgs.slice(-Number(limit)).reverse());
});

app.get('/api/tasks', (req, res) => {
  const { user_id } = req.query;
  let tasks = db.getTasks();
  if (user_id) tasks = tasks.filter(t => t.user_id === user_id);
  res.json(tasks);
});

app.get('/api/stats', (req, res) => {
  const messages = db.getMessages();
  const tasks = db.getTasks();
  const byChannel = messages.reduce((acc, m) => {
    acc[m.channel] = (acc[m.channel] || 0) + 1;
    return acc;
  }, {});
  res.json({
    total_messages: messages.length,
    total_tasks: tasks.length,
    by_channel: byChannel,
    users: [...new Set(messages.map(m => m.user_id))],
  });
});

// ── Register webhook routes from all integrations ─────────
integrations.forEach(integration => {
  if (integration.init) integration.init(app);
  console.log(`[server] registered integration: ${integration.name}`);
});

// ── Start server ──────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`\n[server] running on http://localhost:${PORT}`);
  console.log(`[server] mode: ${process.env.MODE || 'mock'}`);
  console.log(`\n[server] UI:`);
  console.log(`         http://localhost:${PORT}/ui/`);
  console.log(`         http://localhost:${PORT}/ui/inbox.html`);
  console.log(`         http://localhost:${PORT}/ui/tasks.html`);
  console.log(`         http://localhost:${PORT}/ui/projects.html`);
  console.log(`\n[server] API:`);
  console.log(`         GET  /health`);
  console.log(`         GET  /api/messages`);
  console.log(`         GET  /api/tasks`);
  console.log(`         GET  /api/stats`);
  console.log(`         POST /webhooks/whatsapp`);
  console.log(`         POST /webhooks/telegram/:token`);

  if (process.env.MODE === 'live') {
    console.log('\n[server] starting IMAP IDLE connection...');
    await startEmailIdle().catch(e => console.error('[email] IDLE failed:', e.message));
  } else {
    console.log('\n[server] MODE=mock — no live connections');
    console.log('[server] inject test data: npm run simulate\n');
  }
});
