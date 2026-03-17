require('dotenv').config();
process.env.MODE = 'mock';
const { normalise } = require('../normaliser');
const db = require('../db');

module.exports = async function () {
  db.clear();
  await normalise({
    channel: 'email', sender: 'bob@example.com',
    subject: 'Action required', body: 'Please review the contract.',
    timestamp: new Date(), raw: {},
  });
  await new Promise(r => setTimeout(r, 50));
  const msgs = db.getMessages().filter(m => m.channel === 'email');
  if (msgs.length === 0) throw new Error('Email not saved');
  if (msgs[0].user_id !== 'user_bob') throw new Error(`user_id mismatch: ${msgs[0].user_id}`);
};
