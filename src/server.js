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
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
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
  const { user_id, channel, urgency, project, limit = 50 } = req.query;
  let msgs = db.getMessages();
  if (user_id) msgs = msgs.filter(m => m.user_id === user_id);
  if (channel) msgs = msgs.filter(m => m.channel === channel);
  if (urgency) msgs = msgs.filter(m => m.urgency === urgency);
  if (project) msgs = msgs.filter(m => m.project === project);
  res.json(msgs.slice(-Number(limit)).reverse());
});

app.get('/api/messages/:channel', (req, res) => {
  const { channel } = req.params;
  let msgs = db.getMessages().filter(m => m.channel === channel);
  res.json(msgs.reverse());
});

app.post('/api/messages/:id/status', (req, res) => {
  const { id } = req.params;
  const { read, urgency } = req.body;
  const updated = db.updateMessage(id, { read, urgency });
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: 'Message not found' });
  }
});

app.get('/api/tasks', (req, res) => {
  const { user_id, status, project, channel } = req.query;
  let tasks = db.getTasks();
  if (user_id) tasks = tasks.filter(t => t.user_id === user_id);
  if (status) tasks = tasks.filter(t => t.status === status);
  if (project) tasks = tasks.filter(t => t.project === project);
  if (channel) tasks = tasks.filter(t => t.source_channel === channel);
  res.json(tasks);
});

app.patch('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const updated = db.updateTask(id, updates);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.get('/api/projects', (req, res) => {
  res.json(db.getProjects());
});

app.get('/api/projects/:id', (req, res) => {
  const project = db.getProjects().find(p => p.id === req.params.id);
  if (project) {
    const messages = db.getMessages().filter(m => m.project === project.name);
    const tasks = db.getTasks().filter(t => t.project === project.name);
    res.json({ ...project, messages, tasks });
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

app.post('/api/notifications', (req, res) => {
  const { taskId, newStatus, recipients, message } = req.body;
  const notification = db.saveNotification({ taskId, newStatus, recipients, message });
  res.json(notification);
});

app.get('/api/notifications', (req, res) => {
  res.json(db.getNotifications());
});

app.post('/api/reports/schedule', (req, res) => {
  const { frequency, email } = req.body;
  const schedule = db.saveReportSchedule({ frequency, email });
  res.json(schedule);
});

app.get('/api/reports/latest', (req, res) => {
  const messages = db.getMessages();
  const tasks = db.getTasks();
  const projects = db.getProjects();
  const notifications = db.getNotifications();

  const byChannel = messages.reduce((acc, m) => {
    acc[m.channel] = (acc[m.channel] || 0) + 1;
    return acc;
  }, {});

  const byStatus = tasks.reduce((acc, t) => {
    acc[t.status] = (acc[t.status] || 0) + 1;
    return acc;
  }, {});

  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const unresolvedOld = tasks.filter(t => 
    t.status !== 'done' && t.created_at < twentyFourHoursAgo
  );

  res.json({
    generated_at: new Date().toISOString(),
    messages_by_channel: byChannel,
    tasks_by_status: byStatus,
    unresolved_tasks_older_than_24hrs: unresolvedOld.length,
    project_progress: projects.map(p => ({
      name: p.name,
      status: p.status,
      progress: p.progress
    })),
    total_notifications: notifications.length,
    recent_notifications: notifications.slice(-10)
  });
});

app.get('/api/stats', (req, res) => {
  const messages = db.getMessages();
  const tasks = db.getTasks();
  const projects = db.getProjects();
  
  const byChannel = messages.reduce((acc, m) => {
    acc[m.channel] = (acc[m.channel] || 0) + 1;
    return acc;
  }, {});

  const urgentMessages = messages.filter(m => m.urgency === 'urgent').length;
  const urgentTasks = tasks.filter(t => t.status === 'blocked' || t.priority === 'urgent').length;
  
  const totalProgress = projects.reduce((sum, p) => sum + p.progress, 0);
  const avgProgress = projects.length > 0 ? Math.round(totalProgress / projects.length) : 0;

  res.json({
    total_messages: messages.length,
    total_tasks: tasks.length,
    urgent_messages: urgentMessages,
    urgent_tasks: urgentTasks,
    portfolio_progress: avgProgress,
    by_channel: byChannel,
    users: [...new Set(messages.map(m => m.user_id))],
  });
});

// ── Register webhook routes from all integrations ─────────
integrations.forEach(integration => {
  if (integration.init) integration.init(app);
  console.log(`[server] registered integration: ${integration.name}`);
});

// ── Seed demo data ────────────────────────────────────────
function seedDemoData() {
  // Seed projects
  db.saveProject({
    name: 'Aurora Rollout',
    status: 'at-risk',
    description: 'Enterprise platform migration to new infrastructure',
    progress: 45,
    open_tasks: 12,
    urgent_items: 3
  });
  db.saveProject({
    name: 'Nexus Integration',
    status: 'on-track',
    description: 'Third-party API integrations and webhook setup',
    progress: 78,
    open_tasks: 5,
    urgent_items: 0
  });
  db.saveProject({
    name: 'Client Portal',
    status: 'watch',
    description: 'Self-service dashboard for enterprise clients',
    progress: 32,
    open_tasks: 18,
    urgent_items: 2
  });
  db.saveProject({
    name: 'Mobile App v2',
    status: 'on-track',
    description: 'React Native app redesign and performance improvements',
    progress: 91,
    open_tasks: 3,
    urgent_items: 0
  });

  // Seed messages
  db.saveMessage({
    channel: 'email',
    sender: 'Sarah Chen',
    user_id: 'sarah.chen@acme.com',
    subject: 'URGENT: Aurora deployment blocked',
    body: 'The staging environment is down and we cannot proceed with the Aurora rollout testing. DevOps team needs immediate support.',
    project: 'Aurora Rollout',
    urgency: 'urgent',
    read: false
  });
  db.saveMessage({
    channel: 'whatsapp',
    sender: 'Marcus Johnson',
    user_id: '+1234567890',
    body: 'Quick update: Nexus API integration tests passed. Moving to production review.',
    project: 'Nexus Integration',
    urgency: 'normal',
    read: false
  });
  db.saveMessage({
    channel: 'telegram',
    sender: 'Dev Team',
    user_id: 'devteam',
    body: 'Client portal security audit scheduled for Friday. Need sign-off on access controls.',
    project: 'Client Portal',
    urgency: 'normal',
    read: false
  });
  db.saveMessage({
    channel: 'email',
    sender: 'James Wilson',
    user_id: 'j.wilson@partner.io',
    subject: 'RE: Contract renewal discussion',
    body: 'Following up on our call. The client is expecting updated timeline by EOD tomorrow.',
    project: 'Aurora Rollout',
    urgency: 'urgent',
    read: false
  });
  db.saveMessage({
    channel: 'whatsapp',
    sender: 'Lisa Park',
    user_id: '+0987654321',
    body: 'Mobile app v2 final QA complete. Ready for App Store submission!',
    project: 'Mobile App v2',
    urgency: 'normal',
    read: true
  });
  db.saveMessage({
    channel: 'email',
    sender: 'Tom Bradley',
    user_id: 't.bradley@acme.com',
    subject: 'Budget approval needed',
    body: 'Client Portal project requires additional cloud resources. Please review attached cost estimate.',
    project: 'Client Portal',
    urgency: 'urgent',
    read: false
  });

  // Seed tasks
  db.saveTasks([
    {
      title: 'Fix staging environment',
      description: 'Resolve Docker networking issues blocking Aurora deployment',
      project: 'Aurora Rollout',
      source_channel: 'email',
      status: 'blocked',
      priority: 'urgent',
      assigned: 'DevOps',
      due: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      progress: 20
    },
    {
      title: 'Complete API documentation',
      description: 'Document all Nexus endpoints for partner integration',
      project: 'Nexus Integration',
      source_channel: 'whatsapp',
      status: 'in-progress',
      priority: 'normal',
      assigned: 'Backend Team',
      due: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      progress: 65
    },
    {
      title: 'Security audit preparation',
      description: 'Prepare access control documentation for Friday audit',
      project: 'Client Portal',
      source_channel: 'telegram',
      status: 'pending',
      priority: 'normal',
      assigned: 'Security Team',
      due: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      progress: 0
    },
    {
      title: 'Submit to App Store',
      description: 'Upload final build and complete App Store Connect metadata',
      project: 'Mobile App v2',
      source_channel: 'whatsapp',
      status: 'pending',
      priority: 'normal',
      assigned: 'Mobile Team',
      due: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      progress: 0
    },
    {
      title: 'Update client timeline',
      description: 'Prepare revised project timeline for stakeholder review',
      project: 'Aurora Rollout',
      source_channel: 'email',
      status: 'in-progress',
      priority: 'urgent',
      assigned: 'PM',
      due: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(),
      progress: 40
    },
    {
      title: 'Review cloud cost estimate',
      description: 'Approve additional infrastructure budget for Client Portal',
      project: 'Client Portal',
      source_channel: 'email',
      status: 'pending',
      priority: 'urgent',
      assigned: 'Finance',
      due: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
      progress: 0
    }
  ]);

  console.log('[server] Demo data seeded successfully');
}

// ── Start server ──────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`\n[server] running on http://localhost:${PORT}`);
  console.log(`[server] mode: ${process.env.MODE || 'mock'}`);

  // Seed demo data on startup
  seedDemoData();

  console.log(`\n[server] API Endpoints:`);
  console.log(`         GET  /health`);
  console.log(`         GET  /api/messages`);
  console.log(`         GET  /api/messages/:channel`);
  console.log(`         POST /api/messages/:id/status`);
  console.log(`         GET  /api/tasks`);
  console.log(`         PATCH /api/tasks/:id`);
  console.log(`         GET  /api/projects`);
  console.log(`         GET  /api/projects/:id`);
  console.log(`         POST /api/notifications`);
  console.log(`         GET  /api/notifications`);
  console.log(`         POST /api/reports/schedule`);
  console.log(`         GET  /api/reports/latest`);
  console.log(`         GET  /api/stats`);

  if (process.env.MODE === 'live') {
    console.log('\n[server] starting IMAP IDLE connection...');
    await startEmailIdle().catch(e => console.error('[email] IDLE failed:', e.message));
  } else {
    console.log('\n[server] MODE=mock — using seeded demo data\n');
  }
});
