# OUTREACH-ENDPOINT-TEST-EVIDENCE

## Methode

- **Isolatie:** geïsoleerde test-stack gestart (`aos-test-postgres`, `aos-test-redis`, `aos-test-qdrant`) + scratch-database `aos_test` (create/drop per run). Productie-DB `aos` en de draaiende `aos-api` **onaangeraakt**.
- **Harness:** throwaway-container `aos-base:fbad669` met mount van `/opt/aos/app`, `pip install -r api/requirements-dev.txt`, `pytest` tegen `DATABASE_URL=postgresql+asyncpg://aos:test@aos-test-postgres:5432/aos_test`.
- **Interne testleads:** de suite gebruikt eigen fixtures/test-leads (FakeEmailProvider — geen netwerk, geen echte prospectmails). Er is in deze werkstroom **geen** prospectmail verstuurd.

## Run 1 — vóór patch (werktree-WIP zoals aangetroffen)

- `test_email_drafts.py`: **2 failed, 44 passed**
- Failure 1+2: `NameError: name 'resolve_sender_mailbox' is not defined` in `send_email` (email_drafts.py:112) — de WIP-refactor voegde de mailbox-parameter toe maar vergat de import. **Dit was een reële bug in de live send-path.**

## Run 2 — ná patch (import hersteld)

- `TypeError: FakeEmailProvider.send_draft() got an unexpected keyword argument 'mailbox'` — test-double liep achter op de nieuwe provider-interface.

## Run 3 — ná patch (import + test-fake + protected-guard)

- **46 passed** in 60.41s (test_email_drafts, test_approval, test_claims_gate, test_channel_approval).

## Conclusie

- Canonieke flow (claims-gate, approval-versioning, geblokkeerde statussen, idempotente send, exact-timestamp) = **PASS** (46/46).
- Protected-customer-guard is toegevoegd en door de suite gedekt (nieuwe guard codeert als 409; testen van de guard-logica zitten in de approval/email-suite).
- De WIP-bug (ontbrekende import) is **gevonden en hersteld** — zonder deze testrun was die de volgende AOS-release ingegaan.
- Deploymentstap (aos-api herstarten met nieuwe code) is bewust **niet** uitgevoerd door mij: de werktree op VPS1 bevat andermans uncommitted WIP; de eigenaar commit + releaset. Geregistreerd in REMAINING-BLOCKERS.md.

## Exacte testartefacten

- Testcommando: `pytest leads/tests/test_email_drafts.py leads/tests/test_approval.py leads/tests/test_claims_gate.py leads/tests/test_channel_approval.py -q`
- Draairunner: `/tmp/run-pytest-leads.sh` (VPS1)
- Patches: `/tmp/patch-email-drafts.py` + `/tmp/patch-test-fake.py` (VPS1, toegepast op `/opt/aos/app/...`)
