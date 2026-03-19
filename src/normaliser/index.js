const db = require('../db');
const { classifyAndExtract } = require('../ai');

async function normalise(raw) {
  const message = {
    channel: raw.channel,
    sender: raw.sender,
    user_id: resolveUserId(raw.sender, raw.channel),
    subject: raw.subject || null,
    body: raw.body || '',
    timestamp: raw.timestamp || new Date(),
    raw: raw.raw || {},
  };

  const saved = db.saveMessage(message);
  console.log(`[normaliser] saved ${message.channel} message from ${message.sender} (id: ${saved.id})`);

  classifyAndExtract(saved).catch(e =>
    console.error(`[normaliser] AI processing failed for ${saved.id}:`, e.message),
  );

  return saved;
}

function resolveUserId(sender, channel) {
  const map = {
    'alice@example.com':              'user_alice',
    'bob@example.com':                'user_bob',
    'shamiel.simons@lemco.co.za':     'user_shamiel',
    '27821234567':                    'user_alice',
    '27829876543':                    'user_bob',
    '111111111':                      'user_alice',
    '222222222':                      'user_bob',
  };
  return map[sender] || sender;
}

module.exports = { normalise };