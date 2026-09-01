# RECOMMENDATION ENGINE E01–E05 — exacte documentatie en status

**Controledatum:** 2026-09-01 · **Hermes autonome run (branch `hermes/vareya-current-state-2026-09-01`)**

De vijf Recommendation Engine-interventies zijn exact teruggevonden in drie sporen:
(1) git-commit `719fb96` in `HOS\projects\vareya-ai` ("feat(recommendation-engine): E01-E05 — ShipBob-alternative + FBM pages, switching guide, cosmetics FAQ expansion, NL hreflang + PostNL wording fix", 23-08-2026 21:15), (2) de vijf experimentrapporten in `HOS\projects\vareya-ai-lead-engine\reports\EXPERIMENT-0X-*.md`, (3) de meetdata in `HOS\projects\vareya-ai-lead-engine\data\experiment-0X-results.csv` + `experiments-baseline.csv` / `experiments-post.csv`.

## E01 — ShipBob-alternatiefcluster
- **Queries (10):** shipbob alternative europe, shipbob competitor, alternatieven shipbob, shipbob eu 3pl alternative, shipbob vs, shipbob pricing hidden costs, shipbob poor support, shipbob reviews europe, shipbob alternative netherlands, shipbob alternative for small brands (cluster "ShipBob alternative").
- **Baseline (20 rijen, 2 modellen):** Vareya 0/20; ShipBob 14/20 #1, DHL Supply Chain 4, Active Ants 2.
- **Build:** nieuwe pagina `/shipbob-alternative-europe/` (295 regels, gedeployed in 719fb96) + `/amazon-fbm-fulfilment/` (250 regels). Live 200 ✓.
- **Retest:** Vareya 0/20 → 0/20 (verwacht; model-memory meet geen crawl-laag binnen uren).
- **Data:** `data/experiment-01-results.csv` · rapport: `reports/EXPERIMENT-01-SHIPBOB-ALTERNATIVE.md`.

## E02 — Cosmetica/supplementen-FAQ-cluster
- **Queries (10):** o.a. cosmetics fulfilment europe, supplement 3pl, beauty brand fulfilment EU, cosmetics fulfilment netherlands.
- **Baseline:** Vareya 0/20; ShipBob #1 (dominant); DLs/Active Ants volgend.
- **Build:** FAQ-uitbreiding op `/cosmetics-supplements-fulfilment-europe/` (claims-gated; temperatuur/batch/certificering blijven correct ONGECLAIMED met approved fallback, geen retired line).
- **Retest:** Vareya 0/20 → 0/20 (verwacht).
- **Data:** `data/experiment-02-results.csv` · rapport: `reports/EXPERIMENT-02-COSMETICS-SUPPLEMENTS.md`.

## E03 — Amazon FBM-cluster
- **Queries (10):** o.a. amazon fbm 3pl, fbm fulfilment partner, amazon merchant fulfilled netherlands, FBM vs FBA.
- **Baseline:** Vareya 0/20; ShipBob #1; Amazon FBA sterk in lijsten.
- **Build:** nieuwe pagina `/amazon-fbm-fulfilment/` (FBM-positionering met register-claims: "Amazon FBM fulfilment is available").
- **Retest:** Vareya 0/20 → 0/20 (verwacht).
- **Data:** `data/experiment-03-results.csv` · rapport: `reports/EXPERIMENT-03-AMAZON-FBM.md`.

## E04 — 3PL-switchingcluster (exact teruggevonden)
- **Datum:** 21-08-2026 · **Queries (10):** switch fulfilment provider Europe · change 3PL Netherlands · move from ShipBob Europe · 3PL migration Shopify · fulfilment provider bad support · fulfilment hidden costs · 3PL contract exit · how to change fulfilment warehouse · switching 3PL providers Europe · migrate fulfilment to Netherlands 3PL.
- **Baseline:** Vareya 0/20 · ShipBob 14/20 #1 · DHL Supply Chain 4 · Active Ants 2. Retrieval/web-grounded laag: NOT TESTABLE (geen werkende zoek-API/sessie in die ronde).
- **Pijn-evidence:** review-platformpatronen (support-responsetijd, onverwachte kosten, exit-frictie) uitsluitend als BESLISCRITERIA gebruikt — geen claims over specifieke aanbieders op basis van losse reviews. Migratie-checklist uit sectorstandaarden (data-pack, parallel run).
- **Vareya-fit mapping (alleen approved strengths):** support inclusief, all-in vaste tarieven, custom SLA's, 500+ fit, ShipHero/Shopify, FBM.
- **Build:** knowledge-gids `/knowledge/switching-fulfilment-providers-europe/` — "How to switch fulfilment providers without disrupting your ecommerce operation" (bruikbaar óók wie niet voor Vareya kiest; migration-pack 7 punten; parallel-run cutover; 7 vragen voor elke nieuwe 3PL; Vareya-fit sectie; 4 FAQ's; CTA scan). Gedeployed in 719fb96; live 200 ✓; automatisch in sitemap + knowledge-hub.
- **Retest:** Vareya 0/20 → 0/20 (verwacht); ShipBob #1 14 → 14. Geen causaliteitsclaim.
- **Data:** `data/experiment-04-results.csv` · rapport: `reports/EXPERIMENT-04-3PL-SWITCHING.md`.

## E05 — Netherlands-authoritycluster (exact teruggevonden)
- **Datum:** 21-08-2026 · **Queries (10):** Welke fulfilmentcentra zijn er in Nederland? · fulfilment Nederland · fulfilment center Netherlands · best fulfilment company Netherlands · Netherlands 3PL · Shopify fulfilment Netherlands · Dutch fulfilment partner · European fulfilment from Netherlands · fulfilment bedrijf Nederland · warehousing and fulfilment Netherlands.
- **Baseline:** Vareya 0/20; cluster wordt NIET door ShipBob gedomineerd maar door **Active Ants (10/20 #1)** en DHL Supply Chain (7). DeepSeek is het NL-bewuste model.
- **Bevindingen:** hreflang ontbrak volledig; 5 NL-teksten bevatten de geschorste "strategische partner"-wording (register-v1.4-schending live).
- **Build:**
  1. hreflang NL↔EN: `/nl/fulfilment-noord-brabant/` ↔ `/eu-fulfilment/` · `/nl/fulfilmentcentrum-kiezen/` ↔ `knowledge/ecommerce-fulfilment-netherlands-guide` · `/nl/wat-kost-fulfilment-brabant/` ↔ `knowledge/fulfilment-cost-drivers` · `/nl/fulfilment-uitbesteden-breda/` ↔ `knowledge/switching-fulfilment-providers-europe` (live geverifieerd beide richtingen).
  2. PostNL-wording op 5 plekken: "strategische partner" → "hoofdvervoerder binnen Nederland" (register v1.4-conform).
  3. EN-autoriteit versterkt via switching-gids + ShipBob-alternative-pagina (beide linken naar /eu-fulfilment/).
- **Retest:** Vareya 0/20 → 0/20 (verwacht); Active Ants blijft #1 (10/20). Geen causaliteitsclaim.
- **Data:** `data/experiment-05-results.csv` · rapport: `reports/EXPERIMENT-05-NETHERLANDS-AUTHORITY.md`.

## Overkoepelende conclusie (alle vijf)
- Alle vijf interventies zijn **live gedeployed en HTTP 200 geverifieerd** (commit 719fb96).
- Geen van de vijf produceerde binnen uren een meetbare AI-visibility-winst — verwacht en als zodanig gerapporteerd (model-memory ≠ crawl-laag).
- De werkelijke effectmeting loopt via: (a) web-grounded benchmark (Brave/duck.ai-laag, zie `research/reports/AI-BASELINE-V2.md`), (b) Search Console + IndexNow (6u-cron actief), (c) de frozen 264-query hermeting — vandaag opnieuw gedraaid als V3 (zie AI-VISIBILITY-RESULTS.md).
- Common factor concurrenten (Active Ants/ShipBob): corpus-opbouw via trade-media, lijstjes, Thuiswinkel — dat is de media-agenda, geen pagina-fix.
