# Growth Sprint 01 — HubSpot Growth Workflow
**Date:** 18 August 2026 (Day 1)
**Owner:** Agent 4 — inspectie uitgevoerd read-only; GEEN wijzigingen aangebracht in de portal.

## Account-inspectie (API, read-only — 18-08-2026)

| Item | Resultaat |
|---|---|
| Portal | 149057596 (bekend) |
| Contact-properties | 405 actieve properties |
| lifecyclestage | ✅ aanwezig (standaard HubSpot) |
| Vareya-specifieke properties (vareya_*, lead_*, qualif_*) | ❌ GEEN — nog niet aangemaakt |
| Workflows (automation) | **0** — sync is volledig code-gedreven (`useHubspotSync` → `hubspot/index.ts`), geen portal-automatisering |
| Deal-pipelines uitlezen | ❌ API-token heeft geen `crm.objects.deals.read`/`crm.schemas.deals.read`-scope — UI-toegang of scope-uitbreiding nodig |
| Owners uitlezen | ❌ token-scope ontbreekt (`crm.objects.owners.read`) — Jos-owner-ID niet via API te bepalen |
| Deal-creatie in code | ✅ NIET aanwezig — geen automatische deals (voldoet aan missie-eis) |
| Contact+company+taak-sync in code | ✅ aanwezig: contact, company-associatie, review-taak met body (submission, platform, volume, markets, landing, device + review-instructie "binnen 1 werkdag") |

## Aanbevolen qualification-statusmodel (missie-standaard — nog NIET aangelegd)

`NEW_SCAN · REVIEW_DUE · MORE_INFORMATION_REQUIRED · STARTUP_FORECAST_PROFILE · POSSIBLE_FIT · STRONG_PROFILE_FIT · QUALIFIED · NOT_A_FIT · DO_NOT_CONTACT`

- In te richten als aparte properties: `vareya_fit_status` (status uit de lijst), `vareya_intent_status`, `qualification_result`, naast bestaande `lead status`/`lifecyclestage`. **Niet blind bestaande lifecycle-configuratie overschrijven** — aparte velden, Jos blijft eigenaar van de overgangen naar QUALIFIED / NOT_A_FIT / opportunity.
- Jos = menselijk eigenaar van QUALIFIED, NOT_A_FIT en opportunity-creatie.

## 10-puntscheck per voltooide scan (code vs doel)

| # | Doel | Status |
|---|---|---|
| 1 | Supabase-record bestaat | ✅ code-verifieerd (Supabase-first) |
| 2 | HubSpot-contact bestaat | ✅ sync-code |
| 3 | Company-associatie waar mogelijk | ✅ v4-associatie, non-blocking |
| 4 | Jos is eigenaar | ⚠️ taak krijgt geen expliciete `hubspot_owner_id` mee in code → default-eigenaar. Jos-ID moet via UI/scope worden bepaald en toegevoegd (P1-actie na scope) |
| 5 | Één review-taak | ✅ per sync één taak |
| 6 | Bron-artikel vastgelegd | ❌ article_slug ontbreekt in lead-payload (zie ATTRIBUTION-TEST-REPORT) |
| 7 | Follow-up due date | ⚠️ review-instructie zegt "1 working day" in taak-body; expliciete dueDate niet in code te zien → P2 |
| 8 | Geen dubbele taak | ✅ sync maakt 1 taak per submit; geen idempotentie-check op dubbelklik → P2 (double-submit guard ontbreekt) |
| 9 | Geen automatische deal | ✅ bewezen — geen deal-creatie in code |
| 10 | Qualification-uitkomst rapporteerbaar | ❌ nog geen fit-status-property → na aanleg wel |

## Blokkers / vervolg

- **P1:** HubSpot-scope voor pipelines+owners (Jos, in portal: private app scope uitbreiden), dan Jos-owner-ID in sync-code.
- **P1:** `quote_form_submit` event toevoegen (ATTRIBUTION-TEST-REPORT).
- **P2:** first_source/latest_source/referring_page/content_cluster/article_slug in lead-payload; dueDate op taak; double-submit guard; pre-consent dataLayer nuance.
- **Geen wijzigingen uitgevoerd** — alle fixes als aparte, goedgekeurde dev-tickets.
