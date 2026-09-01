# PRODUCTION-DRIFT-ROOT-CAUSE — P0-A coöperatietekst

**Bevinding:** een webcrawl meldde "Vareya is being built as a cooperative (Coöperatie U.A.)." op https://vareya.ai/about/. Live-onderzoek (2026-09-01 ~22:00 CEST) toont dat deze tekst **niet** in de huidige productie staat.

## 1. Wat lokaal in de bronbestanden staat

- Werkboom `vareya-ai-raymond-20260901` (branch hermes/vareya-raymond-decisions-2026-09-01): correct — "Vareya is exploring a possible future cooperative model…" (commit 8a46ac3; 01-09 22:00 aangevuld met de expliciete zin "No cooperative legal entity is currently part of Vareya's existing company structure.").
- **Stale worktrees bevatten de OUDE tekst:** `vareya-ai-kr` (branch feat/south-korea-cluster) en `vareya-ai-m2` (lead-dashboard-webhook) — beide `src/app/about/page.tsx:48`: "Vareya is being built as a cooperative (Coöperatie U.A.). We believe that the brands…" plus oude "under 3 minutes"-teksten. De lokale main-worktree (67b4c78, WIP South-Korea, achter op origin/main) bevat eveneens oude kopieën.
- Interne/historische bestanden die de oude zin **citeren als historisch feit** (geen live content): `reports/hermes-vareya-2026-09-01/*` (CLAIMS-AUDIT.csv, P0-CLAIMS-FIXES.md, CHANGES-MADE.md), `research/hermes-run/claude-reports/*`, `test-results/*` (oude playwright-snapshots).

## 2. Wat op origin/main staat

- `git grep "being built as a cooperative" origin/main` → uitsluitend hits in historische rapporten en test-snapshots; **0 hits in src/public/content**. Productiecode is schoon.

## 3. Welke commit de Vercel-productiedeployment gebruikt

- Productiedeployment: `dpl_8m49anBuAoc3B9cGoKkhxGphsA4G` (created 2026-09-01 20:56:22 CEST), bron = origin/main @ `c587486` ("docs(reports): approval-backfill executed + verified").
- `c587486` bevat in zijn historie commit `8a46ac3` (de coöperatie-fix) → de fix is in productie.

## 4. Is de fix werkelijk naar productie gemerged?

- **Ja.** `8a46ac3` is 2026-09-01 ~18:15 via fast-forward in origin/main gemerged; Vercel auto-deployde; daarna nog een docs-commit (`4248052`, `c587486`) die opnieuw deployde (20:56).

## 5. Bestaan er meerdere About-componenten/contentbronnen?

- Nee. Er is één publieke about-route: `src/app/about/page.tsx` (Next.js App Router). Geen `content/about.md`, geen CMS. Metadata via `src/content/pages.ts` (geen coöperatietekst). JSON-LD (`src/lib/seo/index.ts`) bevat geen coöperatie-verwijzing. FAQ-data: geen coöperatietekst. llms.txt: alleen de artikel-link "What is cooperative fulfilment?".

## 6. Is een oude deployment na de fix opnieuw productie geworden?

- Nee. De drie recente productiedeployments (20:56, ~14:00, ~14:00) bouwen allen vanaf origin/main; de oudste van de drie dateert van vóór de fix (4h oud) maar is **niet** opnieuw productie geworden — de actuele alias vareya.ai wijst naar `dpl_8m49anBuAoc3B9cGoKkhxGphsA4G` (20:56).

## 7. Bevat de productie-output de oude tekst?

- Nee. Directe fetch (browser-headers + cache-bypass `?cb=`): 0 hits op "Coöperatie U.A.", "being built as a cooperative", "is a cooperative", "under 3 minutes" op /about/, /, /why-vareya-ai/, /knowledge/, /knowledge/what-is-cooperative-fulfilment/, /eu-fulfilment/. (De bijgevoegde crawl-context zelf toont óók al de nieuwe tekst — de crawl-bewering is in tegenspraak met de crawl-output.)

## 8. Is er een verouderde zoekindex?

- Meest waarschijnlijke verklaring: **verouderde crawl/snapshot** van vóór 2026-09-01 18:15 CEST (het moment van de fix-deploy), of een cache van een oude deployment-URL (`vareya-website-70tgfdxxc`-achtige preview, 4h oud). Alternatief: een index die een van de stale worktrees/test-snapshots of de oude pagina-inhoud heeft gecrawld.

## Verdict

Geen productie-drift: productie was en is correct (fix gedeployed 18:15, bevestigd door eigen live-checks + Claude-releasegate + huidige directe checks). De crawl was stale. Restrisico: de stale branches (kr, m2, lokale main-WIP) bevatten de verboden tekst en mogen **niet** zonder correctie gemerged worden — opgenomen in REMAINING-BLOCKERS.
