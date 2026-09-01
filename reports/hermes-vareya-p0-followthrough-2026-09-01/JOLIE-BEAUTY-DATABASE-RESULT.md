# JOLIE-BEAUTY-DATABASE-RESULT

**Read-only controle vóór registratie:** 0 rijen op naam 'Jolie', domein 'joliebeauty.co.uk', e-mail 'saul@joliebeauty.co.uk' → **Jolie Beauty stond nog NIET in de leaddatabase.**

## Registratie (idempotent, één transactie, ON_ERROR_STOP)

Pre-write backup: `/opt/aos/backups/vareya-p0-followthrough-2026-09-01/leads-pre-jolie-b1-20260901-221533.sql` (1.712.026 bytes, sha256 `3f604e084baa79c13647e1d02a355108d81a6adecc711832bddf9fa88beaf2a7`).

| Tabel | Actie | Waarden |
|---|---|---|
| lead_organizations | INSERT (WHERE NOT EXISTS op domain/email) | id c3636ba0-dcc4-48d9-a150-0d8c03866def · name 'Jolie Beauty' · domain joliebeauty.co.uk · country UK · industry 'Beauty & Cosmetics' · ecommerce_platform Shopify · general_email saul@joliebeauty.co.uk · source inbound_email · source_url 'Inbound email 2026-09-01 (saul@joliebeauty.co.uk)' · estimated_order_volume '~1,000 EU orders/month (self-reported by Saul, 2026-09-01)' · estimated_sku_count 250 · is_protected_customer false |
| leads | INSERT (WHERE NOT EXISTS op org) | id 6fca56c9-308a-42f0-88ad-3d67c3be15f1 · status **qualified** (canoniek equivalent van QUALIFIED_INBOUND; enum heeft geen QUALIFIED_INBOUND) · origin inbound · inbound_channel email · source inbound_email · notes = volledige inbound-samenvatting + Raymonds 7 gevraagde datapunten |
| lead_contacts | INSERT (WHERE NOT EXISTS op org+email) | id ef244200-b15a-4a83-a540-56562f8d40da · first_name Saul · work_email saul@joliebeauty.co.uk · data_source 'Inbound email 2026-09-01 (saul@joliebeauty.co.uk)' · data_verified_at now() |
| leads | UPDATE primary_contact_id | → ef244200… (was NULL) |
| lead_follow_up_tasks | INSERT (WHERE NOT EXISTS op titel) | 'Jolie Beauty: verzamel operationele prijsdata' · due +3 dagen · status open · channel email |

## Post-verificatie (live DB)

- Jolie Beauty-rij: `qualified | inbound | inbound_email | Saul | saul@joliebeauty.co.uk` ✓
- Totalen: leads 332 (+1) · lead_organizations 332 (+1) · lead_contacts 20 (+1) ✓
- Duplicaten: 0 (guards op domain + email) ✓
- Geen fictief ordervolume: alleen Sauls zelfgerapporteerde "~1,000 EU orders/month" als estimated_order_volume, met bronvermelding ✓

## Rollback

`DELETE FROM lead_follow_up_tasks WHERE lead_id='6fca56c9-308a-42f0-88ad-3d67c3be15f1';` → `UPDATE leads SET primary_contact_id=NULL WHERE id='6fca56c9-308a-42f0-88ad-3d67c3be15f1';` → `DELETE FROM lead_contacts WHERE id='ef244200-b15a-4a83-a540-56562f8d40da';` → `DELETE FROM leads WHERE id='6fca56c9-308a-42f0-88ad-3d67c3be15f1';` → `DELETE FROM lead_organizations WHERE id='c3636ba0-dcc4-48d9-a150-0d8c03866def';` — of volledige restore uit de pre-write backup.
