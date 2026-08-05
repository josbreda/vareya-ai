# Vareya.ai Launch Sprint — Status

**Last updated:** 2026-08-05T10:00:00+02:00
**Deadline:** 2026-08-07T15:00:00+02:00

## Overall: IN PROGRESS

| # | Workstream | Owner | Status | Evidence |
|---|---|---|---|---|
| 1 | Repository + Scaffold | Agent 1 | IN PROGRESS | Repo created, Next.js installing |
| 2 | Design System + Homepage | Agent 2 | NOT STARTED | — |
| 3 | Commercial Landing Pages (5) | Agent 2 | NOT STARTED | — |
| 4 | Fulfilment Scan Form | Agent 3 | BLOCKED | Awaiting Supabase + Turnstile credentials |
| 5 | Quote Form | Agent 3 | BLOCKED | Awaiting Supabase + Turnstile credentials |
| 6 | Supabase Schema + Migrations | Agent 3 | BLOCKED | Awaiting Supabase credentials |
| 7 | Resend Notifications | Agent 3 | BLOCKED | Awaiting Resend API key |
| 8 | Contact + Legal Pages | Agent 2 | NOT STARTED | — |
| 9 | QA + SEO + Analytics | Agent 4 | NOT STARTED | — |
| 10 | Vercel Deployment | Agent 1 | BLOCKED | Awaiting Vercel token |
| 11 | Production Launch | Agent 1 | NOT STARTED | — |

## Blockers

| Blocker | Detail | Resolution |
|---|---|---|
| Supabase URL + keys | Lead storage, schema | Need from Raymond |
| Resend API key | Transactional email | Need from Raymond |
| Cloudflare Turnstile keys | Form protection | Need from Raymond |
| Vercel token | Deployment | Need from Raymond |
| LEAD_OWNER_EMAIL | Notification recipient | Need from Raymond |

## Day 1 Gate (by 17:00)

- [ ] Preview deploy
- [ ] Scan form → Supabase → submission ID → notification → confirmation
- [ ] All routes scaffolded

## Day 2 Gate (by 17:00)

- [ ] Every route exists
- [ ] All commercial content integrated
- [ ] 2 desktop + 2 mobile submissions passed
- [ ] Attribution stored
- [ ] No P0 problems

## Day 3 Gate (before launch)

- [ ] Raymond claims approval
- [ ] Production env vars present
- [ ] Live submission → Supabase → Jos notified
- [ ] SSL works
- [ ] Sitemap works
- [ ] Preview noindex confirmed
- [ ] Rollback verified
