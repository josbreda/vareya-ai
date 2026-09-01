# FIX-IMPLEMENTED — search-uitbreiding naam + domein + contact-e-mail

## Bestand 1: `app/leads/routers/leads.py` (endpoint `GET /api/leads`)

Vervanging van het oude blok:

```python
if search:
    stmt = stmt.where(func.lower(LeadOrganization.name).like(f"%{search.lower()}%"))
```

door:

```python
if search and search.strip():
    needle = search.strip().lower()
    escaped = needle.replace("\\", "\\\\").replace("%", "\\%").replace("_", "\\_")
    pattern = f"%{escaped}%"
    contact_email_match = (
        select(LeadContact.id)
        .where(
            LeadContact.organization_id == Lead.organization_id,
            func.lower(LeadContact.work_email).like(pattern, escape="\\"),
        )
        .exists()
    )
    stmt = stmt.where(
        or_(
            func.lower(LeadOrganization.name).like(pattern, escape="\\"),
            func.lower(LeadOrganization.domain).like(pattern, escape="\\"),
            contact_email_match,
        )
    )
```

Designkeuzes (per opdracht):
- **Gecorreleerde EXISTS-subquery** voor contacten → geen dubbele leadrijen, paginering en `total_count` blijven correct, multi-contact-organisaties verschijnen één keer.
- **Normalisatie:** trim, lowercase beide zijden, lege/whitespace-term = geen filter (zelfde resultaat als geen search).
- **Wildcard-escape:** `%`, `_` en `\` worden geliteraliseerd (geen bestaand wildcard-beleid aanwezig).
- Imports: `from sqlalchemy import func, or_, select` (or_ toegevoegd).
- Onveranderd: auth (require_any_member), autorisatie, alle overige filters (status/origin/source/owner/country/niche/datums/archived), sortering (is_hot_lead desc, daarna sort), paginering (limit/offset), responsvorm (LeadPage), statuslogica.

## Bestand 2: `apps/leads-web/src/pages/LeadsListPage.tsx`

Placeholder-regel 70: `"Zoek op organisatienaam…"` → `"Zoek op organisatie, domein of e-mailadres…"` (zelfde NL-stijl als rest van de interface).

## Bestand 3 (tests): `app/leads/tests/test_leads_search.py`

16 regressietests (zie REGRESSION-TESTS.md). Geïsoleerde teststack + scratch-DB; geen productie-databasewrites.

## Rollback

- Bestandskopie: `app/leads/routers/leads.py.pre-jolie-search` (pre-patch inhoud).
- Git: commit `cafc521` op branch `phase2c-quality`, parent `c6bc837` = rollback-target (`git revert cafc521` of checkout van de 3 bestanden op c6bc837 + rebuild).
- Docker-images vóór deploy getagd: `data-api:pre-jolie-search`, `leads-leads-web:pre-jolie-search`.

## Wat bewust NIET is gedaan

- Geen nieuw Jolie-record, geen herstelmigratie, geen pricing-/outreachdata aangeraakt.
- SQLite-stagingdatabase niet verwijderd.
- Geen andere bestanden in de WIP-werktree geraakt (commit bevat exact 3 bestanden).
