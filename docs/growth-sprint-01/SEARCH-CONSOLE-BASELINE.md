# Growth Sprint 01 — Search Console Baseline
**Date:** 18 August 2026 (Day 1)
**Owner:** Agent 1 (Google Search & Indexation)
**Status:** PARTIAL — sitemap + live-indexation verifieerbaar; Search Console UI/API-data nog niet toegankelijk (geen GSC-credential beschikbaar in HOS/.env of Hermes .env — alleen `GOOGLE_APP_EMAIL`).

## Property

- **Canonical production domain:** https://vareya.ai/
- **Verwachte GSC-property:** domein-property `vareya.ai` (dekking van apex + www + subpaden). UI-verificatie vereist zodra Jos is ingelogd in zijn browser.
- **Search Console UI-route:** https://search.google.com/search-console — inspecteren via background-browser zodra beschikbaar.

## Sitemap (bewezen, 18-08-2026)

| Check | Resultaat |
|---|---|
| /sitemap.xml HTTP 200 | ✅ |
| Artikel-URL in sitemap | ✅ `https://vareya.ai/knowledge/fulfilment-quotation-requirements/` aanwezig |
| Canonical in sitemap-URL | ✅ identiek aan page-canonical |
| robots.txt | ✅ sitemap-referentie aanwezig, geen disallow op /knowledge/ |

## Indexatie (live-server bewijs, 18-08-2026)

| Veld | Waarde |
|---|---|
| URL bekend bij Google | PENDING — GSC URL Inspection nodig (geen API-toegang) |
| Crawl toegestaan | ✅ robots.txt + geen noindex (live HTML geverifieerd) |
| Indexeren toegestaan | ✅ `indexable: true`, robots-meta afwezig |
| User-declared canonical | ✅ `https://vareya.ai/knowledge/fulfilment-quotation-requirements/` |
| Google-selected canonical | PENDING — GSC |
| Laatste crawl | PENDING — GSC |
| Mobile usability | ✅ lokale Playwright-check 393px, geen horizontale overflow |

## Indexing request

- Nog niet aangevraagd (artikel is 1 dag live; URL Inspection eerst, request alleen als "not indexed" blijkt).
- Requestdatum wordt hier vastgelegd zodra uitgevoerd: `PENDING`.

## Query group — Content Sprint 01

Queries in `marketing/growth-sprint-01-search-queries.csv`. Geen impressie-/rankingclaims tot GSC-data beschikbaar is.

## Blokkers en vervolg

- **Blokker:** GSC-toegang (Jos inloggen in browser, of API OAuth/service-account). Zonder dit blijven URL Inspection, crawl-datum en query-impressies PENDING.
- **Vervolg (Agent 1):** zodra toegang er is → domein-property bevestigen, URL Inspection draaien, query-group aanmaken, baseline-periode vastleggen, dag 3-monitoring starten.
