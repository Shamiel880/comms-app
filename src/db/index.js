// Lightweight in-memory store for testing.
// Replace with PostgreSQL queries in production.
const { v4: uuidv4 } = require('uuid');

const store = {
  messages: [],
  tasks: [],
  projects: [],
  notifications: [],
  reportSchedules: []
};

// Messages
function saveMessage(msg) {
  const record = {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    read: false,
    urgency: 'normal',
    ...msg,
  };
  store.messages.push(record);
  return record;
}

function updateMessage(id, updates) {
  const idx = store.messages.findIndex(m => m.id === id);
  if (idx !== -1) {
    store.messages[idx] = { ...store.messages[idx], ...updates, updated_at: new Date().toISOString() };
    return store.messages[idx];
  }
  return null;
}

function getMessages() { return store.messages; }

// Tasks
function saveTasks(tasks) {
  const records = tasks.map(t => ({
    id: uuidv4(),
    created_at: new Date().toISOString(),
    status: 'pending',
    priority: 'normal',
    progress: 0,
    ...t,
  }));
  store.tasks.push(...records);
  return records;
}

function updateTask(id, updates) {
  const idx = store.tasks.findIndex(t => t.id === id);
  if (idx !== -1) {
    store.tasks[idx] = { ...store.tasks[idx], ...updates, updated_at: new Date().toISOString() };
    return store.tasks[idx];
  }
  return null;
}

function getTasks() { return store.tasks; }

// Projects
function saveProject(project) {
  const record = {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    status: 'on-track',
    progress: 0,
    open_tasks: 0,
    urgent_items: 0,
    ...project,
  };
  store.projects.push(record);
  return record;
}

function getProjects() { return store.projects; }

// Notifications
function saveNotification(notification) {
  const record = {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    ...notification,
  };
  store.notifications.push(record);
  return record;
}

function getNotifications() { return store.notifications; }

// Report Schedules
function saveReportSchedule(schedule) {
  const record = {
    id: uuidv4(),
    created_at: new Date().toISOString(),
    ...schedule,
  };
  store.reportSchedules.push(record);
  return record;
}

function getReportSchedules() { return store.reportSchedules; }

// Clear all data
function clear() {
  store.messages = [];
  store.tasks = [];
  store.projects = [];
  store.notifications = [];
  store.reportSchedules = [];
}

module.exports = {
  saveMessage,
  updateMessage,
  getMessages,
  saveTasks,
  updateTask,
  getTasks,
  saveProject,
  getProjects,
  saveNotification,
  getNotifications,
  saveReportSchedule,
  getReportSchedules,
  clear
};
