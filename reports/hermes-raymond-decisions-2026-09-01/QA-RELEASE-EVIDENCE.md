# QA-RELEASE-EVIDENCE — Raymond-besluiten 2026-09-01

## Release: vareya.ai (Vercel, via origin/main)

- **Vorige productiecommit:** `4201898` (docs(reports): AI-visibility V3)
- **Nieuwe productiecommit:** `8a46ac3` (feat(decisions): Raymond 2026-09-01 …)
- **Branch:** `hermes/vareya-raymond-decisions-2026-09-01` → origin/main (fast-forward, 0 conflicten)
- **Bestanden:** 7 gewijzigd, 70 insertions / 24 deletions (claims-register v1.6 + publieke coöperatie-kopie + claims.ts-commentaar)

### Code/content gate

| Check | Resultaat |
|---|---|
| git diff-controle | PASS — alleen beoogde bestanden; geen onbedoelde wijzigingen |
| Lint (`eslint` op gewijzigde bestanden) | PASS — 0 errors / 0 warnings |
| Typecheck (`tsc --noEmit`) | PASS — 0 errors |
| Unit tests (`npm run test:unit`) | PASS — 14/14 |
| Production build (`next build`) | PASS — exit 0, volledige route-tabel (alle routes aanwezig incl. NL, knowledge, why-vareya-ai) |
| Routecheck (live, 5 routes) | PASS — 200: /about/, /why-vareya-ai/, /knowledge/, /knowledge/what-is-cooperative-fulfilment/, /eu-fulfilment/ |
| Broken links | n.v.t. — geen links gewijzigd (alleen teksten/register) |
| Canonical | n.v.t. — geen canonicals gewijzigd |
| Structured data | PASS — Organization-schema ongewijzigd en zonder coöperatie/Thuiswinkel-verwijzingen |
| Mobile smoke test | n.v.t. — tekstwijzigingen, geen layout/functionaliteit geraakt |
| Form smoke test | n.v.t. — scan/quote-formulieren niet aangeraakt |
| Secrets scan (git diff) | PASS — 0 secrets in diff |
| Rollback | Vercel: redeploy vorige commit `4201898` (`vercel rollback` of dashboard) |

### Database gate (besluit 4A)

| Check | Resultaat |
|---|---|
| Backup vóór writes | PASS — `leads-prewrite-20260901.sql` (7 tabellen, 1.707.864 B, VPS + lokale kopie) |
| Dry-run | PASS — read-only voorselectie op 26 DMs + 2 duplicaatparen vóór schrijven |
| Vóór/na row counts | PASS — zie PRE-WRITE-BACKUP-EVIDENCE.md |
| Change log | PASS — LEAD-IMPORT-RESULTS.csv (26 rijen incl. 7 skips) + DUPLICATE-MERGE-RESULTS.csv |
| Rollback | PASS — `decision4a-rollback-20260901.sql` (exact, gegenereerd uit pre-write dump) |

### E-mail gate (besluit 4A)

| Check | Resultaat |
|---|---|
| Zes-berichtengate | PASS — preflight per bericht (OUTREACH-PREFLIGHT.csv): 4 READY_TO_SEND, 1 NEEDS_EDIT, 1 BLOCKED |
| Recipient check | PASS — 4 verzonden naar geverifieerde org-adressen |
| Protected-relationship check | PASS — 0 hits op 10 beschermde namen (naam + domein) |
| Send log | PASS — EMAIL-SEND-LOG.csv (4 rijen met provider message-ID) + lead_channel_messages (4 rijen) |
| Provider message-ID | PASS — Graph message-ID's in log + SentItems-verificatie |
| Error log | PASS — 0 fouten; stop-regels niet geactiveerd |

## Release-gate correctie (approval-backfill, 2026-09-01 ~21:00 CEST)

Claude's release gate (SAFE_TO_CLOSE_AFTER_LISTED_CORRECTIONS) vond: de 4 verzonden mails liepen buiten de app's eigen enforced send-gate, waardoor `leads.human_approved_at` NULL bleef. Met expliciete toestemming uitgevoerd:

| Check | Resultaat |
|---|---|
| Script | `HOS/projects/vareya-ai-lead-engine/data/backfill-approval-20260901.sql` (sha256 `b3ca456c…`), byte-identiek aan de dry-run-geteste versie (diff + sha256 vóór uitvoering) |
| Backup vóór uitvoering | `/opt/aos/backups/vareya-raymond-20260901-gatecorrection/leads-prebackfill-run-20260901-205242.sql` (1.711.682 B, sha256 `95f7efb4…`, 7 tabellen) |
| Transactie | Guarded DO-block met ON_ERROR_STOP: rijen-aantal (=4), per-rij waarden, protected-check, onverwachte-rijen-check — afwijking = auto-ROLLBACK |
| Uitkomst | `GUARDS PASS: 4 rows updated` → COMMIT |
| Post-COMMIT | 4 lead-ID's hebben `human_approved_by='Raymond (Decision 4A, 2026-09-01)'`, `human_approved_at=sent_at`, `approved_message_version=1`, `sent_by`, `sent_channel='email'`; totalen 331/331/19 ongewijzigd; `leads_with_human_approval=4` |
| Rollback | Restore `leads-prebackfill-run-20260901-205242.sql` |

## Conclusie

Alle relevante gates slagen. Deploy uitgevoerd via origin/main (Vercel auto-deploy) en live geverifieerd (zie LIVE-VERIFICATION.md).
