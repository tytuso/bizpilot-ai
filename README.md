# BizPilot AI

**Run your business smarter.**

BizPilot AI is a local-first AI business operating assistant for freelancers, entrepreneurs, startups and small businesses. One saved business profile connects advice, proposals, social content, marketing campaigns, lead strategy, creative generation, money tools and a daily action plan.

## Included

- Premium responsive landing page and business workspace
- Two-step business onboarding stored in LocalStorage
- AI Business Advisor with structured results
- Proposal generator with designed multi-page PDF export
- Social Content Studio
- Complete Ad / Creative Studio
- 30-day Marketing Campaign Builder
- Lead Strategy and qualification interface
- Local profit, expense and margin calculations
- Financial Snapshot PDF
- Daily business action plan
- Light and deep-navy dark themes
- Installable PWA with offline shell cache
- Demo Mode and Live Mode server routes
- Pricing, privacy, terms and AI disclaimer content

## Technology

React 19, TypeScript, Vinext/Vite, Tailwind CSS, Lucide React, jsPDF and jsPDF AutoTable. The deployment target is a Cloudflare-compatible worker; the same UI can be adapted to standard Vite/Vercel hosting.

## Windows setup

```powershell
npm install
Copy-Item env.example .env.local
npm run dev
```

Open the local URL displayed in PowerShell.

## Environment variables

```env
APP_MODE=demo
OPENAI_API_KEY=
OPENAI_TEXT_MODEL=gpt-4.1-mini
OPENAI_IMAGE_MODEL=gpt-image-1
```

`APP_MODE=demo` makes no paid AI or image calls and does not require a key. It returns polished sample responses and displays example creatives. The visible `env.example` filename is included specifically for reliable Windows extraction.

For live generation, set `APP_MODE=live` and provide `OPENAI_API_KEY`. Keys remain server-side. Never create a `VITE_OPENAI_API_KEY` variable.

## AI architecture

- `POST /api/ai` accepts `{ tool, business, input }`.
- Supported tools: advisor, proposal, content, daily-plan, marketing, lead-strategy, lead-qualifier and financial-analysis.
- Inputs are length-limited and normalized before use.
- The endpoint selects a grounded tool instruction and requests JSON output.
- `POST /api/image` handles live image generation separately.
- Demo Mode short-circuits before any provider call.

## PDF architecture

PDF libraries load only when a user requests an export. Proposal and financial exports share a consistent BizPilot cover, header, page-number and table system. Files use clear BizPilot-prefixed names.

## Security and privacy

- The provider key is read only in server routes.
- Profile, theme and interface preferences are browser-local.
- Client briefs and generated private business content are not automatically persisted.
- Server inputs are normalized and constrained.
- User-facing errors do not expose stack traces.
- BizPilot never claims that AI-processed prompts remain on-device.

## Production build

```powershell
npm run build
```

## Future SaaS path

The application is intentionally ready for later authentication, Supabase business accounts, saved history, server-side credits, payments, teams, CRM records, usage limits and WhatsApp workflows without implementing those systems before product validation.
