const db = require('../db');

async function classifyAndExtract(message) {
  const mode = process.env.MODE || 'mock';
  if (mode === 'mock' || !process.env.ANTHROPIC_API_KEY) {
    return mockClassify(message);
  }
  return liveClassify(message);
}

async function liveClassify(message) {
  const fetch = require('node-fetch');

  const prompt = `You are an AI assistant that analyses business communications.

Given this message, respond with ONLY valid JSON in this exact format:
{
  "priority": "urgent" | "normal" | "low",
  "type": "action-needed" | "fyi" | "question" | "reply-needed",
  "summary": "one sentence summary",
  "tasks": [
    { "title": "task description", "due_date": "YYYY-MM-DD or null", "assignee": "name or null" }
  ]
}

Message:
Channel: ${message.channel}
From: ${message.sender}
Subject: ${message.subject || 'n/a'}
Body: ${message.body}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  const text = data.content?.[0]?.text || '{}';
  let result;
  try { result = JSON.parse(text); } catch { return; }
  await applyResult(message, result);
}

async function mockClassify(message) {
  const body = message.body.toLowerCase();

  const priority =
    body.includes('urgent') || body.includes('asap') || body.includes('emergency') ? 'urgent'
      : body.includes('no rush') || body.includes('when you get a chance') ? 'low'
        : 'normal';

  const type =
    body.includes('?') ? 'question'
      : body.includes('please') || body.includes('can you') || body.includes('need you to') ? 'action-needed'
        : 'fyi';

  const taskPatterns = [
    /(?:please|can you|need you to|could you)\s+([^.!?]{10,80})/gi,
    /(?:action required|todo|task):\s*([^.!?\n]{10,80})/gi,
  ];

  const tasks = [];
  for (const pattern of taskPatterns) {
    let match;
    while ((match = pattern.exec(message.body)) !== null) {
      tasks.push({ title: match[1].trim(), due_date: null, assignee: null });
    }
  }

  await applyResult(message, { priority, type, tasks });
}

async function applyResult(message, result) {
  if (result.tasks && result.tasks.length > 0) {
    const tasks = result.tasks.map(t => ({
      ...t,
      message_id: message.id,
      user_id: message.user_id,
      channel: message.channel,
    }));
    const saved = db.saveTasks(tasks);
    console.log(`[ai] extracted ${saved.length} task(s) from message ${message.id}`);
    saved.forEach(t => console.log(`     → \"${t.title}\"`));
  } else {
    console.log(`[ai] no tasks extracted from message ${message.id} (${result.type || 'fyi'})`);
  }
}

module.exports = { classifyAndExtract };
