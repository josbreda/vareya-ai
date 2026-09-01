# DATABASE-EVIDENCE — read-only, 2026-09-01 (productie PostgreSQL `aos`)

Query's via `docker exec aos-postgres psql -U aos -d aos` (read-only; geen writes).

## Exact één record per type (geen duplicaten)

| Entiteit | ID | Waarden |
|---|---|---|
| Organisatie | `c3636ba0-dcc4-48d9-a150-0d8c03866def` | Jolie Beauty, domain `joliebeauty.co.uk` |
| Contact (Saul) | `ef244200-b15a-4a83-a540-56562f8d40da` | Saul, `saul@joliebeauty.co.uk`, organization_id = c3636ba0… |
| Lead | `6fca56c9-308a-42f0-88ad-3d67c3be15f1` | status `qualified`, origin `inbound`, source `inbound_email`, `is_archived=f`, `owner_user_id=NULL`, `primary_contact_id=ef244200…`, created/updated 2026-09-01 22:16:14.889971+02 |
| Follow-up-taak | `76e9e04d-43e1-48a6-a971-506b1da5d79a` | "Jolie Beauty: verzamel operationele prijsdata", status `open`, due 2026-09-04 22:16:14+02, lead_id = 6fca56c9… |

## Duplicaatcontroles

- `count(*)` organisaties met lower(domain)='joliebeauty.co.uk' → **1**
- `count(*)` organisaties met name ILIKE '%jolie%' → **1**
- `count(*)` contacten met lower(work_email)='saul@joliebeauty.co.uk' → **1**

## Primary-contactkoppeling

`leads.primary_contact_id` = `ef244200-b15a-4a83-a540-56562f8d40da` = Saul's `lead_contacts.id` → koppeling klopt.

## Totalen (productie)

- leads totaal: **332**
- leads gearchiveerd: **13**
- actief via API (no-filter): **319** (= 332 − 13; bewezen via live-API-response `total: 319`)

## Conclusie

Exact één Jolie-organisatie, één actieve Jolie-lead, één Saul-contact, correcte primary-link, open follow-up-taak. Geen writes uitgevoerd.
