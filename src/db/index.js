// Lightweight in-memory store for testing.
// Replace with PostgreSQL queries in production.
const { v4: uuidv4 } = require('uuid');

const store = {
  messages: [],
  tasks: [],
};

function saveMessage(msg) {
  const record = {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    ...msg,
  };
  store.messages.push(record);
  return record;
}

function saveTasks(tasks) {
  const records = tasks.map(t => ({
    id: uuidv4(),
    created_at: new Date().toISOString(),
    status: 'open',
    ...t,
  }));
  store.tasks.push(...records);
  return records;
}

function getMessages() { return store.messages; }
function getTasks() { return store.tasks; }
function clear() { store.messages = []; store.tasks = []; }

module.exports = { saveMessage, saveTasks, getMessages, getTasks, clear };
