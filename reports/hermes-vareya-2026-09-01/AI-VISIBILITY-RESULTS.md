# AI-VISIBILITY-RESULTS — V3-meting 2026-09-01

## Frozen benchmarksets (ongewijzigd bewaard)
1. **264-query API-set** (`research/data/ai-query-benchmark.csv`, benchmark_date 2026-08-21) — gebruikt voor P1, V2 en nu V3. NIET gewijzigd.
2. **36-prompt Goodie-set** (`docs/aeo/goodie-prompts.csv`) — aparte frozen set voor de Goodie-SaaS-meting. Deze ronde NOT TESTED (geen Goodie-account — blocker B-08 van Claude bevestigd).

## V3-methodologie (identiek aan V2)
- Zelfde 264 frozen queries, zelfde neutrale system prompt, temperature 0, max_tokens 700.
- Modellen: deepseek-chat + openai-gpt-4o-mini (zelfde als V2 voor vergelijkbaarheid).
- **OpenAI: NOT TESTED** — API retourneert `429 insufficient credits` ("You have no credits remaining"). Alle 264 openai-rijen zijn eerlijk als ERROR geregistreerd; probe bevestigt harde quota-blokkade, niet tijdelijk.

## V3-resultaten (frozen set, DeepSeek 264/264 geldig)
| KPI | V1 (21-08) | V2 (21-08) | **V3 (01-09)** |
|---|---|---|---|
| Getest | 667 (2 modellen) | 528 (2 modellen) | **264 (1 model; OpenAI NOT TESTED)** |
| Vareya mentioned | 0 | 0 | **0** |
| Vareya top-3 | 0 | 0 | **0** |
| Vareya top-5 | 0 | 0 | **0** |
| Vareya primair | 0 | 0 | **0** |
| Citaties | 0 (API-modellen, geen web-grounding) | 0 | **0** |
| ShipBob primair | 53% | 63% | **38,6% (102/264)** |
| Top-primair | ShipBob > DHL SC > Active Ants | ShipBob dominant | ShipBob 102 · DHL 32 · Active Ants 26 · Amazon FBA 15 · PostNL 15 |

**Bronpatronen (frozen, DeepSeek V3):** ShipBob 291 vermeldingen · DHL 204 · PostNL 128 · Hive 127 · Zendbox 90 · Active Ants 86. PostNL is nu #3-vermeld — carrier-corpus groeit, Vareya nog niet.

## Exploratory set (20 actuele queries, apart bewaard — niet aan de frozen set toegevoegd)
- DeepSeek 20/20 geldig, OpenAI 20 ERROR (quota). Vareya 0/20. DHL leidt primair (6), ShipBob 3, Active Ants 2.
- Bestand: `research/hermes-run/ai-query-benchmark-v3-exploratory.csv` + `ai-benchmark-v3-exploratory-kpis.json`.

## Interpretatie (geen causaliteitsclaim)
- Derde opeenvolgende 0-meting op niet-gegroundde chat-modellen. Conform de benchmark-methodologie meet dit model-memory/trainingscorpus — content- en entity-wijzigingen van de afgelopen weken kunnen daar nog niet in zitten (crawl/training-vertraging).
- De relevante laag voor actie is web-grounded (Brave/duck.ai — zie V2-referentie) + Search Console/IndexNow. IndexNow-6u-cron draait; sitemap- en indexatiestatus volgen via de bestaande monitoring.
- Aanbevolen re-meetmoment: na 4–6 weken content-rijping + zodra OpenAI-credits weer beschikbaar zijn (dan OpenAI-rijen alsnog draaien; frozen set blijft ongewijzigd).

## KPI-scheiding
Publieke zoekvermeldingen (Search Console, directory-posities) zijn géén AI-aanbevelingen — die blijven in de aparte entity-/SEO-rapportage (ENTITY-CONSOLIDATION-SUMMARY, GEO-TECHNICAL-AUDIT), niet in deze benchmark.
