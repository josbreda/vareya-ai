# PRE-WRITE-BACKUP-EVIDENCE — besluit 4 (A), fase 4.1

## Backup (vóór alle databasewrites)

- **Bestand:** `/opt/aos/backups/vareya-raymond-20260901/leads-prewrite-20260901.sql` (VPS1)
- **Lokale kopie:** `HOS/projects/vareya-ai-lead-engine/backups/leads-prewrite-20260901.sql`
- **Inhoud:** `pg_dump --data-only --inserts` van 7 tabellen: `leads`, `lead_organizations`, `lead_contacts`, `lead_follow_up_tasks`, `lead_activities`, `lead_channel_messages`, `lead_email_drafts`
- **Grootte:** 1.707.864 bytes · **Tijd:** 2026-09-01 17:46 CEST · **Aanmaak vóór eerste schrijfopdracht** (eerste transactie daarna: 17:53).

## Pre-write snapshot (read-only queries, zelfde moment)

| Metriek | Waarde |
|---|---|
| lead_organizations | 333 |
| leads | 333 |
| lead_contacts | 2 |
| Statusverdeling leads | contacted 190 · new 79 · not_a_fit 29 · do_not_contact 25 · replied 7 · proposal_requested 1 · nurture 1 · lost 1 |
| Beschermde relaties in pool | 0 (10 beschermde namen: 0 hits op naam én domein) |
| Duplicaatparen | carriercompany ×2 (856790e5 score 78 / f63e65b0 score 0) · komana ×2 (75f2b5da score 81 / 9dbd8485 score 0) |
| Loser-lead-kinderen (pre-write) | carrier-loser: 1 task + 1 activity · komana-loser: 1 task + 1 activity · 0 messages · 0 drafts |
| claims_status | 332 NOT_RUN / 1 PASS |

## Post-write verificatie

| Metriek | Pre | Post |
|---|---|---|
| lead_organizations | 333 | 331 |
| leads | 333 | 331 |
| lead_contacts | 2 | 19 |
| leads met primary_contact_id | 1 | 19 |
| lead_channel_messages (nieuw, 4A) | — | 4 |

## Rollbackbronnen

1. Exact-script: `HOS/projects/vareya-ai-lead-engine/backups/decision4a-rollback-20260901.sql`
2. Volledig: restore uit `leads-prewrite-20260901.sql`
3. Zie ROLLBACK.md voor exacte stappen.
