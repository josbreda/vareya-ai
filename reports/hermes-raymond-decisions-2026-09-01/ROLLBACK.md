# ROLLBACK — Raymond-besluiten 2026-09-01

## 1. Website (Vercel, vareya.ai)

**Normaal:** `vercel rollback` (dashboard) of redeploy vorige commit `4201898`.

**Via git:**
```bash
git push origin 4201898:main --force   # alleen bij noodgeval; Vercel redeployt automatisch
```

## 2. Database (productie `aos`, VPS1)

### Exacte rollback (voorkeur)
```bash
# op VPS1:
docker exec -i aos-postgres psql -U aos -d aos -v ON_ERROR_STOP=1 < decision4a-rollback-20260901.sql
```
Bestand: `HOS/projects/vareya-ai-lead-engine/backups/decision4a-rollback-20260901.sql` (draait alle 8 secties in één transactie: contact-verwijdering, primary-links, org-field-reverts, loser-restores, children-herpunt, winner-note-restores).

### Nucleaire rollback
```bash
docker exec -i aos-postgres psql -U aos -d aos < leads-prewrite-20260901.sql
```
Let op: dit is een `--data-only` dump met INSERTs — eerst de door deze batch aangemaakte rijen verwijderen (zie exact-script §1-4) om constraint-conflicten te vermijden; de exacte rollback doet dit al.

### E-mail
- Verzonden e-mails kunnen niet worden teruggenomen. Rollback = status-correctie in DB (sent_at/claims_status/channel_messages terugdraaien) + menselijke excuses-mail indien gewenst. De 4 sends zijn gelogd in EMAIL-SEND-LOG.csv.

## 3. Redundanties

| Bron | Locatie |
|---|---|
| Pre-write dump (VPS) | `/opt/aos/backups/vareya-raymond-20260901/leads-prewrite-20260901.sql` |
| Pre-write dump (lokaal) | `HOS/projects/vareya-ai-lead-engine/backups/leads-prewrite-20260901.sql` |
| Exact rollbackscript | `HOS/projects/vareya-ai-lead-engine/backups/decision4a-rollback-20260901.sql` |
| Send-log (VPS) | `/opt/aos/backups/vareya-raymond-20260901/email-send-log.jsonl` |
| Import/merge SQL | `HOS/projects/vareya-ai-lead-engine/data/decision4a-import-merge.sql` |
| Branch (site) | `hermes/vareya-raymond-decisions-2026-09-01` @ `8a46ac3` |
