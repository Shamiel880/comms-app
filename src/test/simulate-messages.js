require('dotenv').config();
process.env.MODE = 'mock';
const fetch = require('node-fetch');
const BASE = `http://localhost:${process.env.PORT || 3001}`;

const scenarios = [
  {
    name: 'Email — action needed',
    fn: async () => {
      await fetch(`${BASE}/webhooks/email`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: 'alice@example.com',
          subject: 'Q3 Report — urgent review needed',
          body: 'Hi team, please review the Q3 report and send your feedback by Friday. Also can you schedule a call with the finance team?',
          timestamp: new Date().toISOString(),
          raw: { messageId: '<sim-001@example.com>' },
        }),
      });
    },
  },
  {
    name: 'Email — FYI',
    fn: async () => {
      await fetch(`${BASE}/webhooks/email`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sender: 'bob@example.com',
          subject: 'Office closed Friday',
          body: 'Just a heads up — office closed Friday. No action needed.',
          timestamp: new Date().toISOString(),
          raw: {},
        }),
      });
    },
  },
  {
    name: 'WhatsApp — urgent task',
    fn: async () => {
      await fetch(`${BASE}/webhooks/whatsapp`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entry: [{ changes: [{ value: { messages: [{
          from: '27821234567', type: 'text',
          timestamp: String(Math.floor(Date.now() / 1000)),
          text: { body: 'Please send me the updated contract asap — client is waiting.' },
        }] } }] }] }),
      });
    },
  },
  {
    name: 'WhatsApp — question',
    fn: async () => {
      await fetch(`${BASE}/webhooks/whatsapp`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entry: [{ changes: [{ value: { messages: [{
          from: '27829876543', type: 'text',
          timestamp: String(Math.floor(Date.now() / 1000)),
          text: { body: 'What time is the standup tomorrow?' },
        }] } }] }] }),
      });
    },
  },
  {
    name: 'Telegram — task',
    fn: async () => {
      const token = process.env.TELEGRAM_BOT_TOKEN || 'mock-token';
      await fetch(`${BASE}/webhooks/telegram/${token}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ update_id: 100001, message: {
          message_id: 10, from: { id: 111111111, first_name: 'Alice' },
          chat: { id: 111111111, type: 'private' },
          date: Math.floor(Date.now() / 1000),
          text: 'Can you please update the project timeline doc before the board meeting?',
        }}),
      });
    },
  },
  {
    name: 'Telegram — urgent',
    fn: async () => {
      const token = process.env.TELEGRAM_BOT_TOKEN || 'mock-token';
      await fetch(`${BASE}/webhooks/telegram/${token}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ update_id: 100002, message: {
          message_id: 11, from: { id: 222222222, first_name: 'Bob' },
          chat: { id: 222222222, type: 'private' },
          date: Math.floor(Date.now() / 1000),
          text: 'URGENT: server is down, need you to restart the deployment pipeline now.',
        }}),
      });
    },
  },
];

async function run() {
  console.log('\n[simulate] injecting test messages...\n');
  for (const s of scenarios) {
    try { await s.fn(); console.log(`  ✓ ${s.name}`); }
    catch (err) { console.log(`  ✗ ${s.name} — ${err.message}`); }
    await new Promise(r => setTimeout(r, 200));
  }
  await new Promise(r => setTimeout(r, 600));
  try {
    const stats = await (await fetch(`${BASE}/api/stats`)).json();
    const tasks = await (await fetch(`${BASE}/api/tasks`)).json();
    console.log('\n[simulate] ── results ──');
    console.log(`  Messages: ${stats.total_messages}`);
    console.log(`  Tasks:    ${stats.total_tasks}`);
    console.log(`  Channels:`, stats.by_channel);
    tasks.forEach(t => console.log(`  [${t.status}] ${t.title}`));
  } catch { console.log('\n[simulate] server not reachable — run: npm start'); }
}
run();
