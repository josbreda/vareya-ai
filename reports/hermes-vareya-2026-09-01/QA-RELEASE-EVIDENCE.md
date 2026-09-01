# QA-RELEASE-EVIDENCE — 2026-09-01

## Release 1 — jmconcepts.cloud (Hostinger FTP, statische HTML)
- **Vorige commit:** n.v.t. (geen git-repo; bron = `HOS\projects\jmconcepts\`, live-identiek bevestigd vóór wijziging).
- **Backup:** `HOS\projects\jmconcepts\backups\ftp-live-20260901-105213\` (3 HTML + 2 .md + MANIFEST.txt met sizes + SHA-256). Rollback = re-upload via `research/hermes-run/scripts/backup-jmconcepts.py`-patroon.
- **Tests:** HTML-tag-balans-check (html.parser) PASS op 3 bestanden; grep-sweep op verboden termen: 0 resterend (1 false positive op "be**st**emming").
- **Deploy:** ftplib STOR ×3; remote SHA-256 == lokaal (MATCH ×3); .md-verwijdering geverifieerd (404 ×2).
- **Smoke test (live, na deploy):** homepage 200; samenwerking.html 200; lid-worden.html 200; oude claims 0 hits; HTTPS-certificaat OK.

## Release 2 — vareya.ai (Vercel, Next.js 16)
- **Vorige commit (productie):** 195408c (Content: US/UK levy corridors #20).
- **Nieuwe commit (productie):** 4201898 (4 commits: 0e78e69 + c6f3f6e + 0651f2d + 4201898, gerebased op 195408c — clean rebase, 0 conflicten).
- **Branch:** hermes/vareya-current-state-2026-09-01 (werkboom `vareya-ai-hermes-20260901`). Merge-methode: ff op origin/main.
- **Build:** `npm run build` PASS (volledige route-tabel gegenereerd, exit 0).
- **Lint:** 36 errors/10 warnings — ALLEN pre-existent in bestanden die ik niet heb aangeraakt (waaronder knowledge/[slug]/page.tsx 'PageProps'); mijn bestanden introduceren 0 nieuwe lint-fouten.
- **Typecheck:** `tsc --noEmit` 2 pre-existente fouten (knowledge/[slug]/page.tsx PageProps) — ongewijzigd door deze release.
- **Unit/integration:** niet draaibaar in deze omgeving (pytest/vitest — eerlijk NOT RUN, zelfde status als Ronde 16).
- **Deployment-ID:** Vercel auto-deploy vanaf origin/main (geen handmatige deployment-ID opgevraagd; live-verificatie is het bewijs).
- **Preview-URL:** n.v.t. (geen preview-branch gebruikt; staging-omgeving VPS1 bleef onaangeraakt).
- **Rollback:** Vercel → Redeploy vorige commit (195408c); instructie in Vercel-dashboard of `vercel rollback`.
- **Live smoke test (na deploy, ~90s na push):**
  - /about/: nieuwe coöperatie-wording aanwezig; "Coöperatie U.A." 0 hits ✓
  - /llms.txt: "41 approved destinations" ✓
  - /free-rate-scan/: "Takes a few minutes" (2× incl. embedded data) ✓
  - /: "returns handling available" (2×), "Returns available" chip, "included" afwezig ✓
  - /contact/: "in a few minutes" ✓
  - /: "Check your EU fulfilment fit" 5× (header + CTA's) ✓
  - SSL/headers: 200 + geldig certificaat (eerder geverifieerd) ✓

## Release-gate-conclusie
Beide releases voldoen: wijzigingen beperkt tot claim-correcties, build PASS, rollback beschikbaar, live smoke PASS. Geen formulieren, geen DB, geen analytics-events geraakt.
