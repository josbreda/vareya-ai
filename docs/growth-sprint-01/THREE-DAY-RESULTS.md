# Growth Sprint 01 — Three-Day Results
**Date:** 18 August 2026 (Day 1-meting)

## DAY 1 — 18 AUGUST (resultaten)

| Item | Status |
|---|---|
| Search Console baseline | ⚠️ PARTIAL — sitemap + live-indexatie bewezen; UI/API-data PENDING (geen GSC-credential) |
| Sitemap & URL Inspection | ⚠️ sitemap ✅ (artikel aanwezig); URL Inspection PENDING tot GSC-toegang |
| Analytics-event verificatie | ✅ PASS client-side (5 families; quote_form_submit ontbreekt → P1) |
| Attributie-test | ✅ PARTIAL — 6/13 velden aanwezig; 5 ontbreken (gedocumenteerd) |
| Goodie workspace/integraties audit | ⚠️ NOT CONNECTED — geen credential; audit-kader staat in GOODIE-BASELINE.md |
| HubSpot growth-workflow audit | ✅ inspectie read-only gedaan; 0 workflows, 405 props, geen vareya-properties, geen deal-creatie in code; scope-beperkingen gedocumenteerd |
| Dag-1-documenten | ✅ alle aangemaakt onder docs/growth-sprint-01/ + marketing/ |

## DAY 2 — 19 AUGUST (plan)

- Goodie prompt-baseline: import van 20 prompts zodra Jos Goodie-toegang geeft; baseline vóór wijziging.
- Raymond/Jos/company post: gereed in DISTRIBUTION-PLAN (goedkeuring = 1 woord per post).
- Vijf prospects: ✅ subagent-onderzoek gereed — `marketing/growth-sprint-01-prospect-queue.csv` (5 prospects, alle contacten verified, publieke contactroutes, geen gegokte e-mails, tier A/A/A/A/B). Drafts in DISTRIBUTION-PLAN. Jos keurt goed en verstuurt handmatig.
- Alle UTM-links: getest op redirect-behoud (308 + query/UTM ✅ in Content Sprint 01-tests).

## DAY 3 — 20 AUGUST (monitorlijst)

- Indexatie & impressies (GSC — zodra toegang) · artikelbezoeken · CTA-kliks · scan starts/completes · HubSpot-records · qualification-taken · Goodie citation-baseline · fouten en drop-off.
- Alleen P0/P1-fixes. Geen Content Sprint 02.

## Open P0/P1/P2

| Sev | Item | Eigenaar |
|---|---|---|
| **P0** | **Turnstile SECRET in Vercel-productie klopt niet** — widget slaagt in browser ("Gelukt!"), server weigert token → elke scan-submit 400 "Security check failed". Bewezen: prod-sitekey correct (`0x4AAAAAAEJOkP8UXJ3d_0HJ`), lokale secret correct (paart met site), prod-secret wijst af. Fix: Vercel → Environment Variables → Production → `TURNSTILE_SECRET_KEY` = waarde uit lokale `.env.local`. | Jos (20s) |
| P1 | GSC-toegang (Jos-login of API) | Jos + Agent 1 |
| P1 | Goodie-toegang (Jos-login/API-key) | Jos + Agent 2 |
| P1 | HubSpot-token scopes voor pipelines/owners + Jos-owner-ID in taak-sync | Jos + Agent 4 (dev-ticket) |
| P1 | quote_form_submit event ontbreekt | Agent 4 (dev-ticket) |
| P2 | Attributievelden first/latest source, referring_page, content_cluster, article_slug, country | Agent 4 (dev-ticket) |
| P2 | Pre-consent dataLayer-nuance (events pushen vóór consent) | Agent 4 (dev-ticket) |
| P2 | Taak dueDate + double-submit guard | Agent 4 (dev-ticket) |
| P3 | LinkedIn-pack header verwijst naar v1.2 + "not approved" (inhoud in orde; header-tekst verouderd) | Agent 3 |
