# THUISWINKEL-REMOVAL-RESULT — besluit 2 (B)

**Doel:** Vareya nergens als actueel Thuiswinkel-lid presenteren. Claim-status: `PROHIBITED_UNTIL_NEW_VERIFIED_MEMBERSHIP`.

## Repo-scan (branch, 2026-09-01)

- `src/`, `public/`, `content/*.md`: **0 hits** op "Thuiswinkel" — geen publiek logo, badge, alt-tekst, metadata, structured data, sameAs of tekst.
- Organization-schema (`src/lib/seo/index.ts`): sameAs-lijst bevat géén Thuiswinkel-URL — correct.
- Overige hits zijn uitsluitend interne documenten (geen publieke claims):
  - `docs/ENTITY-SUBMISSION-PACK.md` — "Thuiswinkel Business Partner — AANMELDEN (verzoek indienen) … Vareya nog niet" → interne actielijst, correct geformuleerd.
  - `docs/CONCURRENTIEANALYSE-SWOT.md` + `docs/STRATEGISCH-PAKKET.md` — "ACM/Thuiswinkel Markt Monitor 2024-2025" als **bronverwijzing** (marktonderzoek), geen lidmaatschapsclaim.
  - `docs/RAYMOND-AI-DECISIONS.md` — "Thuiswinkel-aanmelding" als open handmatige actie.
  - `reports/hermes-vareya-2026-09-01/*` — auditrapporten (historisch).

## Register-wijziging (v1.6)

- Claim-status vastgelegd: **PROHIBITED_UNTIL_NEW_VERIFIED_MEMBERSHIP**.
- Regel: verwijder publieke logo's/badges/claims/alt-teksten/metadata/structured data/sameAs; archiveer assets in plaats van vernietigen waar archivering volstaat; na deployment live op nul ongewenste hits controleren.

## Verwijderingen/archiveringen

- Geen publieke Thuiswinkel-assets aangetroffen → niets te verwijderen of te archiveren (geen bronassets geraakt).
- Live-check na deploy: zie LIVE-VERIFICATION.md (doel: 0 hits op vareya.ai en jmconcepts.cloud).
