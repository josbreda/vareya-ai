# CHANGES-MADE — Hermes autonome run 2026-09-01

## 1. LIVE GEDEPLOYD — jmconcepts.cloud (P0-claimfix, FTP Hostinger)
- `index.html` + `samenwerking.html`: "met 1.000+ merken" verwijderd → feitelijke formulering zonder klantenaantal.
- `samenwerking.html`: 4 superlatieven ("beste en goedkoopste vervoerder", "de beste vervoerder", "de beste keuze", "de beste deal") → register-veilige wording (o.a. exacte register-zin voor carrierselectie).
- `lid-worden.html`: "coöperatie Samen Verzonden" → "Samen Verzonden, het coöperatieve fulfilmentconcept" (title, meta-description, twitter-description, body-subtitle) — coöperatie bestaat juridisch nog niet.
- Verwijderd uit public_html (met lokale backup): `concept-samen-verzonden.md` + `concurrentie-analyse.md` (publiek uitgelekte interne strategie incl. dezelfde verboden claim) → nu HTTP 404.
- **Bewijs:** FTP-upload met remote SHA-256 == lokaal; live HTTPS-check 0 hits op oude claims; backup + MANIFEST in `HOS\projects\jmconcepts\backups\ftp-live-20260901-105213\`. Rollback = backup re-uploaden.

## 2. LIVE GEDEPLOYD — vareya.ai (Vercel, via origin/main)
- `/about/`: coöperatie-claim "(Coöperatie U.A.)" vervangen door development-visie-framing; "returns handling included" → "available"; "under 3 minutes" → "a few minutes"; CTA "Check your fit" → "Check your EU fulfilment fit".
- `/` (home): hero "returns handling included" → "available"; proof-chip "Returns included" → "Returns available".
- `/contact/` + `/free-rate-scan/` (+ layout-metadata): "under 3 minutes" → "a few minutes".
- Header + CTABanner: "Check your fit" → "Check your EU fulfilment fit".
- `llms.txt`: "42 approved destinations" → "41".
- Bron-fixes (nog niet per se zichtbaar, wel consistent): `src/content/pages.ts` (NL-meta PostNL "strategische partner" → "hoofdvervoerder binnen Nederland"; home/scan-meta), `docs/CLAIMS.md` (PostNL v1.5), `docs/ENTITY-SUBMISSION-PACK.md` (41 landen, v1.5), `content/content/review/COMPETITOR_POSITIONING.md` (PostNL-v1.5), `marketing/experiments.csv` (FS-TRUST-001 variant-copy), `marketing/prospect-queue.csv` (3 draft-cellen), `marketing/publication-queue.csv` (B1/B2 v1.5-alignment).
- **Bewijs:** `npm run build` PASS (0 fouten op build-niveau); live-checks na deploy: coöperatie-tekst weg (0 hits), llms.txt 41, scan/contact "a few minutes", home "returns handling available", header 5× "Check your EU fulfilment fit". Rollback = Vercel previous deployment.

## 3. Commits (branch hermes/vareya-current-state-2026-09-01 → origin/main)
- `0e78e69` fix(claims): cooperative wording, returns "available", "a few minutes", canonical CTA
- `c6f3f6e` fix(claims): register v1.5 alignment (PostNL, 41 destinations, FS-TRUST-001, queues)
- `0651f2d` docs(reports): hermes-vareya-2026-09-01 basisrapporten + agent-evidence
- `4201898` docs(reports): AI-visibility V3 exploratory resultaten
- (gerebased op origin/main 195408c — clean, geen conflicten; branch force-pushed met lease, main via ff)

## 4. Geen wijzigingen aan
- Productie-DB (alleen read-only SELECTs op leads-DB, VPS1).
- Lead-dashboard (geen API-writes, geen imports, geen sends).
- go.vareya.com/.htaccess, vareya.com/vareya.nl (geen toegang).
- Frozen benchmark-sets (264 + 36 Goodie) — ongewijzigd.
- Lokale main-worktree (WIP van andere sessie ongemoeid; reset/stash-poging door gebruiker NIET goedgekeurd → gestopt).
