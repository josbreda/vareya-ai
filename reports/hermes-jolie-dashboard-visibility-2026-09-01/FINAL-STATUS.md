# FINAL-STATUS — Jolie dashboard-zichtbaarheid + search-fix, 2026-09-01

## Samenvatting

Jolie Beauty zat in de juiste productiedatabase en was al zichtbaar op het dashboard; het gemelde "onzichtbaar"-probleem was niet reproduceerbaar. De werkelijke bug — zoeken op organisatienaam-only — is gerepareerd, met 16 regressietests gedekt, gedeployed naar API én frontend, en live geverifieerd op alle zoekvarianten met hetzelfde lead-ID.

## DoD-controle

| # | Vereiste | Status |
|---|---|---|
| 1 | Exact één Jolie-organisatie | ✅ 1 (dedupe-bewijs) |
| 2 | Exact één actieve Jolie-lead | ✅ 1, is_archived=f |
| 3 | Saul correct gekoppeld | ✅ primary_contact_id = Saul-contact |
| 4 | API vindt op organisatienaam | ✅ live `total=1`, ID 6fca56c9… |
| 5 | API vindt op domein | ✅ live `total=1`, zelfde ID |
| 6 | API vindt op contact-e-mail | ✅ live `total=1`, zelfde ID |
| 7 | Alle zoekvarianten zelfde lead-ID | ✅ 6 varianten, alle `6fca56c9-308a-42f0-88ad-3d67c3be15f1` |
| 8 | Geen dubbele rijen / foutieve total_count | ✅ (EXISTS-subquery; total=1/319) |
| 9 | Jolie zichtbaar in normale Leads-weergave | ✅ screenshots (rij 2) |
| 10 | Follow-up-taak aantoonbaar zichtbaar | ⚠️ taak aanwezig (DB-evidence); UI-screenshot geblokkeerd (Chrome gesloten) — 2-minuten-checklijst in FRONTEND-VISIBILITY-EVIDENCE.md |
| 11 | Screenshot-/browserbewijs | ✅ zichtbaarheid-screenshots (pre-fix); bundle-string-bewijs placeholder (post-fix); API-live-evidence |
| 12 | Geen andere productiegegevens gewijzigd | ✅ geen DB-writes; commit bevat exact 3 bestanden |
| 13 | Release rollbackbaar | ✅ revert-target `c6bc837`, images `data-api:pre-jolie-search` + `leads-leads-web:pre-jolie-search`, bestandscopy `leads.py.pre-jolie-search` |
| 14 | Alle tien rapporten bestaan | ✅ (deze map) |
| 15 | Geen ongefundeerde claim | ✅ alles boven is live/DB/log-gedragen; openstaande punten expliciet gemarkeerd |

## Openstaand (eerlijk)

- Follow-ups-tab screenshot: geblokkeerd doordat Jos' Chrome weg was; de taak zelf is DB-bewezen. Een 2-minuten visuele check staat klaar.
- 4 pre-existente frontend-vitest-failures in `LeadDetail.test.tsx` (`TypeError: states.find is not a function`, mock-shape mismatch) — bestonden al vóór deze fix en raken LeadDetailPage, niet mijn wijziging. LeadsListPage-tests (mijn wijzigingsgebied): allemaal PASS.

## Gewijzigde bestanden

- `app/leads/routers/leads.py` — search: naam + domein + contact-e-mail (EXISTS), trim/case-insensitive/wildcard-escape.
- `app/leads/tests/test_leads_search.py` — nieuw, 16 regressietests.
- `apps/leads-web/src/pages/LeadsListPage.tsx` — placeholder "Zoek op organisatie, domein of e-mailadres…".

## Eindblok

EXACT ROOT CAUSE: zoek-API filterde alleen op organisatienaam; Jolie was al correct geregistreerd en zichtbaar — de probleemomschrijving was onjuist; de staging-SQLite (leads:0) is een niet-productie-artefact.

EXISTING JOLIE LEAD ID: 6fca56c9-308a-42f0-88ad-3d67c3be15f1
EXISTING ORGANISATION ID: c3636ba0-dcc4-48d9-a150-0d8c03866def
EXISTING SAUL CONTACT ID: ef244200-b15a-4a83-a540-56562f8d40da
DUPLICATES FOUND: 0 (naam/domein/e-mail elk exact 1)
NON-PRODUCTION SQLITE CLASSIFICATION: NON_PRODUCTION_UNUSED_ARTIFACT (niet verwijderd)
DATABASE WRITES: 0 (alleen scratch-DB aos_test voor tests; productie-`aos` onaangeraakt)
API SEARCH BY NAME: PASS (live, total=1, 6fca56c9…)
API SEARCH BY DOMAIN: PASS (live, total=1, 6fca56c9…)
API SEARCH BY EMAIL: PASS (live, total=1, 6fca56c9…)
FRONTEND SEARCH BY NAME/DOMAIN/EMAIL: PASS op API-niveau met exact de endpoint-params van de SPA + placeholder live in bundle; interactieve UI-invoer niet uitgevoerd (Chrome gesloten)
FOLLOW-UP TASK VISIBLE: taak aanwezig (DB); UI-screenshot openstaand
REGRESSION TESTS: 61/61 PASS (16 nieuwe + 45 bestaande leads-suite), EXIT=0
EXACT COMMIT: cafc521 "feat(leads): extend search to org name, domain and contact email + regression tests" (branch phase2c-quality)
EXACT DEPLOYMENT: API rebuild+restart (compose/data, aos-api, 0 tracebacks); frontend rebuild (compose/leads, aos-leads-web healthy, bundle index-DkDZbj6w.js live)
ROLLBACK TARGET: c6bc837 (git revert cafc521 of checkout 3 bestanden) + docker images data-api:pre-jolie-search / leads-leads-web:pre-jolie-search
JOLIE END-TO-END STATUS: PASS (record uniek en actief, correct gekoppeld, via productie-API vindbaar op naam/domein/e-mail met één en hetzelfde lead-ID, zichtbaar in de Leads-weergave; UI-follow-up-screenshot als enige openstaande visuele bevestiging)
