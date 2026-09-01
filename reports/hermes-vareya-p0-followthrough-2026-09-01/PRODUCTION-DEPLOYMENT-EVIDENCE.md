# PRODUCTION-DEPLOYMENT-EVIDENCE — P0-A deploy

## Productie vóór deze run

| Veld | Waarde |
|---|---|
| Productiecommit | `c587486` "docs(reports): approval-backfill executed + verified (Claude gate item 1)…" |
| Deployment-ID | `dpl_8m49anBuAoc3B9cGoKkhxGphsA4G` |
| Deployment-URL | https://vareya-website-4s9r3kdc6-vareya.vercel.app (created 2026-09-01 20:56:22 CEST) |
| Aliassen | vareya.ai · www.vareya.ai (beide → deze deployment) |
| Coöperatie-fix aanwezig? | Ja — commit `8a46ac3` zit in de historie van `c587486` |

## Wijzigingen deze run (commit zie hieronder)

1. `src/app/about/page.tsx` — expliciete zin toegevoegd: "No cooperative legal entity is currently part of Vareya's existing company structure."
2. `marketing/scan-first-outreach.md` — "takes under 3 minutes" → "takes a few minutes" (intern doc).
3. `prototypes/vareya-visual-prototype.html` — idem (intern prototype).
4. `reports/hermes-raymond-decisions-2026-09-01/EMAIL-SEND-LOG.csv` — B1-rij toegevoegd.
5. `reports/hermes-vareya-p0-followthrough-2026-09-01/` — 13 rapporten.

## QA-gate

| Check | Resultaat |
|---|---|
| tsc --noEmit | PASS (0 fouten) |
| eslint (gewijzigde bestanden) | PASS (0) |
| next build | PASS (exit 0, volledige route-tabel) |
| git diff-controle | PASS (alleen beoogde bestanden) |
| secrets-scan | PASS (0 secrets in diff) |

## Deploy

- Branch `hermes/vareya-raymond-decisions-2026-09-01` → fast-forward naar origin/main → Vercel auto-deploy.
- Nieuwe productiecommit + deployment-ID: zie EXECUTIVE-SUMMARY.md (ingevuld na deploy).
- Rollback: Vercel rollback naar `dpl_8m49anBuAoc3B9cGoKkhxGphsA4G` of `git push origin c587486:main`.
