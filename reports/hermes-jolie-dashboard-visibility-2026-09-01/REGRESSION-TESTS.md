# REGRESSION-TESTS — zoekfix, 16 gevallen + bestaande leads-suite

## Methode

- Geïsoleerde teststack: `aos-test-postgres`, `aos-test-redis`, `aos-test-qdrant` (docker-netwerk `aos-test`).
- Scratch-DB `aos_test` — per testrun DROP/CREATE; **geen productie-databasewrites**.
- Throwaway-container `aos-base:fbad669`, `pip install -r api/requirements-dev.txt`, `timeout 1500 python -m pytest leads/tests/test_leads.py leads/tests/test_leads_search.py -q`.
- Logbestand: `/opt/aos/app/pytest-jolie-search.log`.

## Resultaat (definitieve run)

```
61 passed, 2 warnings in 104.68s
EXIT=0
```

## Dekking vs de 16 vereiste gevallen

| # | Vereist geval | Test | Resultaat |
|---|---|---|---|
| 1 | volledige organisatienaam | test_search_full_org_name | PASS |
| 2 | gedeeltelijke organisatienaam | test_search_partial_org_name | PASS |
| 3 | domein | test_search_domain | PASS |
| 4 | contact-e-mailadres | test_search_contact_email | PASS |
| 5 | hoofdletterverschil | test_search_case_insensitive | PASS |
| 6 | omliggende spaties | test_search_trims_whitespace | PASS |
| 7 | multi-contact-organisatie één keer | test_multiple_contacts_single_row | PASS |
| 8 | contact van andere organisatie lekt niet | test_other_org_contact_no_leak | PASS |
| 9 | statusfilters blijven werken | test_status_filter_intact | PASS |
| 10 | bronfilters blijven werken | test_source_filter_intact | PASS |
| 11 | paginering correct | test_pagination_intact | PASS |
| 12 | total_count correct | test_total_count_with_search | PASS |
| 13 | lege zoekterm = geen filter | test_empty_search_no_filter | PASS |
| 14 | niet-bestaande term = 0 resultaten | test_unknown_term_zero | PASS |
| 15 | ongeauthenticeerd blijft 401/403 | test_unauthenticated_blocked | PASS |
| 16 | read-only-lid krijgt geen ruimere toegang | test_read_only_member_scope | PASS |

Plus de volledige bestaande `test_leads.py`-suite (create/list/rechten) — 45 tests, alle PASS.

## Lint

- `ruff check leads/routers/leads.py` → 22 pre-existente fouten (B008 Depends/Query-defaults + importstijl), **identiek aan HEAD** (`c6bc837`) — de patch introduceert 0 nieuwe lintfouten.
- `ruff check leads/tests/test_leads_search.py` → **All checks passed**.

## Eerste runs (eerlijk vastgelegd)

- Run 1: 60 passed / 1 failed — test_read_only_member_scope (testbug: read-only test vergat setup-data; niet gerelateerd aan productiecode). Gefixt in testfile.
- Run 2: 61/61 PASS (definitief).
