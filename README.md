# CommsPulse (comms-system)

Express.js service that normalises communications from:
- Email (IMAP IDLE via `imapflow`)
- WhatsApp (Meta Cloud API webhooks)
- Telegram (Bot API webhooks)

It stores messages/tasks in an in-memory DB (easy to swap for Postgres), runs AI classification (Anthropic Claude with mock fallback), and serves a static UI at `/ui`.

## Setup

```bash
cd comms-system
npm install
cp .env.example .env
```

## Run

```bash
npm test
npm start
```

In a second terminal:

```bash
npm run simulate
```

Open:
- `http://localhost:3000/ui/`
- `http://localhost:3000/ui/inbox.html`
- `http://localhost:3000/ui/tasks.html`
- `http://localhost:3000/ui/projects.html`
