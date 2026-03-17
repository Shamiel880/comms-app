# CommsPulse — Claude notes

## Goal
CommsPulse ingests business messages from Email (IMAP), WhatsApp (Meta Cloud API), and Telegram (Bot API), normalises them into a unified schema, runs AI classification/task extraction, and serves a dark-themed dashboard UI.

## Run
- Start API + UI: `npm start`
- Run tests: `npm test`
- Inject demo data: `npm run simulate`

## Modes
- `MODE=mock`: No live connections; rule-based AI fallback is used.
- `MODE=live`: IMAP IDLE runs and webhooks can be connected; Claude API is used when `ANTHROPIC_API_KEY` is set.
