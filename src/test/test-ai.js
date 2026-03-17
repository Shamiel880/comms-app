require('dotenv').config();
process.env.MODE = 'mock';
const { classifyAndExtract } = require('../ai');
const db = require('../db');

module.exports = async function () {
  db.clear();
  await classifyAndExtract({
    id: 'test-001', user_id: 'user_alice', channel: 'email',
    sender: 'alice@example.com', subject: 'Review',
    body: 'Hi, please send the Q3 report by Friday. Can you also schedule a meeting?',
  });
  await new Promise(r => setTimeout(r, 50));
  const tasks = db.getTasks();
  if (tasks.length === 0) throw new Error('No tasks extracted');
  if (!tasks[0].title) throw new Error('Task missing title');
};
