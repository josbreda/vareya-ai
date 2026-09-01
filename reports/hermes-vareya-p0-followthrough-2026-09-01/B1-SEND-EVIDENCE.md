# B1-SEND-EVIDENCE — Edge of Ember

| Veld | Waarde |
|---|---|
| Status | **SENT** |
| Verzendtijd (UTC) | 2026-09-01T20:14:57Z |
| Account | info@vareya.ai (MS Graph app-only, MS_GRAPH_* credentials in /opt/aos/.env) |
| Ontvanger | hello@edgeofember.com |
| Onderwerp | Fulfilling EU orders from inside the EU |
| Provider message-ID | `AAMkADcwY2FlNmJmLTY2MjItNGU4OC05YmM5LTA0OWQ1MjY0ZGE0MQBGAAAAAABMxXA7TzHOTbEz7C7vvYkqBwCjMBWdZ5bES7-2Xknsy7uDAAAAAAEPAACjMBWdZ5bES7-2Xknsy7uDAAAPU-zqAAA=` |
| Body-hash (sha256) | `d44f32697b80e2741f95de6fbf147964f1af166076a38c22bd9cfe458c5b7191` |
| Template-versie | OUTREACH-DRAFTS-2026-09-01-B1FIX (volumezin verbatim register v1.6) |
| Personalisatiebron | DB notes edgeofember.com (London studio, worldwide shipping) + officiële contactpagina |

## Verificatie

1. **SentItems read-back (Graph):** `2026-09-01T20:14:57 | Fulfilling EU orders from inside the EU | hello@edgeofember.com` ✓
2. **DB-sendlog:** `lead_channel_messages` rij (channel=EMAIL_FIRST_TOUCH, claims=PASS, claims_check_hash=p0-b1-preflight-20260901, approved_by='Raymond (Decision 4A, 2026-09-01)', provider_message_id = hierboven) ✓
3. **Lead-update:** lead f2c0e8f5-83ae-49b4-bd7e-7b11cc0e02cc → status=contacted, claims_status=PASS, sent_at=2026-09-01 22:16:14+02, last_contacted_at=idem ✓
4. **EMAIL-SEND-LOG.csv:** 5 rijen (A1, A2, A3, B2, B1) ✓

## Voorafgaande backup

Pre-write backup (vóór deze send-log én de Jolie-registratie): `/opt/aos/backups/vareya-p0-followthrough-2026-09-01/leads-pre-jolie-b1-20260901-221533.sql` (1.712.026 bytes, sha256 `3f604e084baa79c13647e1d02a355108d81a6adecc711832bddf9fa88beaf2a7`).

## Rollback (DB-deel; de mail zelf is niet terugneembaar)

`UPDATE leads SET status='new', claims_status='NOT_RUN', sent_at=NULL, last_contacted_at=NULL WHERE id='f2c0e8f5-83ae-49b4-bd7e-7b11cc0e02cc';` + verwijder de channel-message-rij op claims_check_hash 'p0-b1-preflight-20260901'. Volledige restore: bovenstaande backup.
