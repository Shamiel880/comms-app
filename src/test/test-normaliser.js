require('dotenv').config();
process.env.MODE = 'mock';
const { normalise } = require('../normaliser');
const db = require('../db');

module.exports = async function () {
  db.clear();
  const result = await normalise({
    channel: 'email', sender: 'alice@example.com',
    subject: 'Test', body: 'Hello.', timestamp: new Date(), raw: {},
  });
  if (!result.id) throw new Error('Missing id');
  if (!result.user_id) throw new Error('Missing user_id');
  if (result.channel !== 'email') throw new Error('Channel not preserved');
  if (db.getMessages().length !== 1) throw new Error('Message not saved');
};
