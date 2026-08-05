# Vareya.ai — Test Report

**Generated:** 2026-08-05
**Commit:** d38a6f7
**Build:** ✅ 16 routes, 0 errors, 0 warnings

## Build Status

| Check | Result |
|---|---|
| TypeScript strict | ✅ PASS |
| Production build | ✅ PASS (16 routes compiled) |
| ESLint | ✅ PASS (0 errors) |

## Route Inventory

| Route | Status | Indexable | H1 | Meta |
|---|---|---|---|---|
| `/` | ✅ | Yes | ✅ | ✅ |
| `/eu-fulfilment/` | ✅ | Yes | ✅ | ✅ |
| `/shopify-fulfilment-europe/` | ✅ | Yes | ✅ | ✅ |
| `/eu-fulfilment-us-brands/` | ✅ | Yes | ✅ | ✅ |
| `/eu-fulfilment-uk-brands/` | ✅ | Yes | ✅ | ✅ |
| `/cosmetics-supplements-fulfilment-europe/` | ✅ | Yes | ✅ | ✅ |
| `/fulfilment-scan/` | ✅ | Yes | ✅ | ✅ |
| `/request-fulfilment-quote/` | ✅ | Yes | ✅ | ✅ |
| `/contact/` | ✅ | Yes | ✅ | ✅ |
| `/privacy/` | ✅ | Yes | ✅ | ✅ |
| `/cookies/` | ✅ | Yes | ✅ | ✅ |
| `/thank-you/scan/` | ✅ | No | ✅ | ✅ |
| `/thank-you/quote/` | ✅ | No | ✅ | ✅ |
| `/sitemap.xml` | ✅ | — | — | — |
| `/robots.txt` | ✅ | — | — | — |
| `/api/leads` | ✅ | — | — | — |

## Automated Tests (Playwright)

| Test Suite | Status |
|---|---|
| Route smoke tests (14 routes) | ⏳ Pending — Playwright installing |
| Funnel tests (scan + quote) | ⏳ Pending |
| SEO tests (metadata, sitemap, structured data) | ⏳ Pending |
| Accessibility tests (keyboard, alt text) | ⏳ Pending |

## Manual QA Checklist

- [ ] Mobile layout at 360px — all routes
- [ ] Desktop layout at 1440px — all routes
- [ ] Forms keyboard accessible
- [ ] Tab order logical
- [ ] Cookie consent: accept → GTM loads
- [ ] Cookie consent: decline → no analytics cookies
- [ ] Privacy checkbox required on quote form
- [ ] Honeypot invisible to users
- [ ] Scan: all 6 steps navigable
- [ ] Scan: back button works
- [ ] Scan: validation shows errors
- [ ] Quote: all fields render
- [ ] Quote: validation blocks empty submission
- [ ] 404 page: custom design, not default

## P0/P1 Defects

None identified at build time. Full test pass pending Playwright completion.

## P2/P3 Issues

| # | Issue | Severity | Status |
|---|---|---|---|
| 1 | Rate limiting is stub — needs Redis/Upstash | P2 | Open |
| 2 | No sitemap lastmod auto-update | P3 | Open |
| 3 | Image assets not yet supplied by Raymond | P2 | Open |
| 4 | Turnstile widget not integrated (needs site key) | P2 | Blocked |
| 5 | Email templates are basic — could use design | P3 | Open |

## Security

| Check | Status |
|---|---|
| Supabase RLS: anon insert only | ✅ Designed |
| No service_role key client-side | ✅ Enforced |
| Turnstile server-side validation | ✅ Implemented |
| Honeypot field | ✅ Present |
| Input sanitisation | ✅ Implemented |
| No PII in GA4 events | ✅ Enforced by design |
| Security headers | ✅ Configured |
| No internal error details exposed | ✅ Handled |
