# VERIFIED-ACCOMPLISHMENTS — wat aantoonbaar klopt (2026-09-01)

Alles hieronder is deze run onafhankelijk geverifieerd (live checks, DB-queries, git, primaire bronnen). Gerapporteerd-werk dat NIET klopte staat apart onder "Gecorrigeerd".

## A. Live infrastructuur
1. **vareya.ai** draait op Next.js 16 op Vercel — alle 8 geteste routes 200, SSL geldig, HSTS/nosniff/frame-headers aanwezig (CSP ontbreekt nog).
2. **Kennisbank** live: 15 knowledge-artikelen (go.vareya.com → vareya.ai/knowledge/), sitemap + robots + llms.txt aanwezig.
3. **leads.jmconcepts.cloud** live (nginx, 200, login). **Leaddatabase live op VPS1**: 333 leads, 2 dashboard-sends (27-08), 7 replied, contactability-gate actief.
4. **jmconcepts.cloud** live op Hostinger/LiteSpeed; SSL OK.
5. **go.vareya.com** redirectt (single-hop 301, geen loops/ketens); 606-rijen-map aanwezig en statisch valide (0 duplicaten, 0 malformed, 0 ketens).
6. **IndexNow 6u-cron** actief (laatste run 31-08 19:41).

## B. Claims-governance
7. **Claimsregister v1.5** is de bron van waarheid (21-08, evidence 24-08): PostNL class-A-evidence, "strategic partner" verboden, brand-counts/testimonials/logo's/%-claims uitgesloten, 10 beschermde klanten (no-contact).
8. **PostNL-live-wording** op vareya.ai is correct ("main carrier"); nul "strategic partner"-hits live.
9. **Landenlijst** (41 landen) staat compleet op /eu-fulfilment/ (41/41 geverifieerd); "ROW"/"Rest of the World" nergens gebruikt.
10. **Exacte register-zinnen** (cut-off, volume, returns, PostNL) verbatim op de homepage.

## C. E01–E05 Recommendation Engine
11. Alle vijf interventies exact teruggevonden: commit 719fb96 + 5 experimentrapporten + meetdata. E01 = ShipBob-alternative-pagina, E02 = cosmetics-FAQ's, E03 = Amazon-FBM-pagina, E04 = switching-gids, E05 = hreflang NL↔EN + PostNL-fix. Alle live 200.

## D. AI-visibility
12. Frozen 264-query set bestaat en is ongewijzigd gebruikt (V1 21-08, V2 21-08, V3 vandaag). V3: DeepSeek 264/264 geldig, Vareya opnieuw 0/0/0 (verwacht; model-memory-lag). OpenAI NOT TESTED (credits). Tweede frozen set: 36 Goodie-prompts (geen account → NOT TESTED).

## E. Gecorrigeerde claims uit eerdere rapportages
13. "1.000+ merken" — nooit bewezen; vandaag live verwijderd van jmconcepts.cloud (blijft op vareya.com — geblokkeerd).
14. "42 landen" — feitelijk 41; llms.txt + entity-pack gecorrigeerd (live).
15. "292 leads/168 contacted/2 qualified" — verjaard; actueel: 333/190/0.
16. "0 outreach verstuurd" — verjaard; 2 dashboard-sends op 27-08 (Not Basics, Tom's Trunks).
17. Claude's "cooperative niet live" — onjuist; stond wél live op /about/ (vandaag gefixt).
18. Claude's "528-benchmark spoorloos" — onjuist voor de lokale omgeving; V2-data bestaat in research/data/.

## F. Externe primaire bronnen (deze run verzameld)
19. €3-heffing = Verordening (EU) 2026/382 (live 01-07-2026 t/m 01-07-2028, per item, ≤€150); handling fee verwacht 01-11-2026; Customs Data Hub e-commerce 01-07-2028. 15 primaire bronnen met quotes opgeslagen in research/hermes-run/evidence/.
