# OUTREACH-ENDPOINT-FLOW-AUDIT — canonieke /approve + /send-email flow

**Codebasis:** `josbreda/aos` (draait op VPS1 als container `aos-api`). Bestanden: `app/leads/routers/approval.py`, `app/leads/routers/email_drafts.py`, `app/leads/service.py`, `app/leads/claims_gate.py`, `app/leads/email_provider.py`.

## Wat de flow wél vastlegt/handhaaft (gelezen uit de code)

| Vereiste | Status | Waar |
|---|---|---|
| Claims-gate: send vereist `claims_status = PASS` op de ACTUELE message_version | AFGEDWONGEN | email_drafts.py send_email (409) |
| Menselijke goedkeuring op exact dezelfde message_version (`approved_message_version == message_version`, `human_approved_at IS NOT NULL`) | AFGEDWONGEN | idem |
| Elke berichtwijziging invalideert goedkeuring (NEEDS_RECHECK) | AFGEDWONGEN | approval.py |
| Geblokkeerde statussen (won/lost/not_a_fit/do_not_contact) blokkeren verzenden | AFGEDWONGEN | BLOCKED_SEND_STATUSES (gedeeld, geen drift) |
| Lead-ID, channel, claims_status/claims_checked_at/hash, approved_by/at, sent_by, sent_at, provider_message_id, message_version | VASTGELEGD | lead_channel_messages + leads |
| Idempotent: dubbele send van een verzonden draft = no-op | AFGEDWONGEN | send_email_draft |
| Archived lead blokkeert | AFGEDWONGEN | send_email |
| **Protected relationship blokkeert verzenden** | **GEPATCHT deze run** | nieuw: org.is_protected_customer → 409 (email_drafts.py) |

## Gaten (eerlijk benoemd)

| Vereiste | Status | Toelichting |
|---|---|---|
| Send result (expliciet veld) | DEELS | draft.status kent de uitkomst; geen apart send-result kolom op lead_channel_messages |
| Bounce result | ONTBREEKT | geen bounce-tabel/webhook; bounces worden nu handmatig uit de mailbox gereconcilieerd (deze run: KOMANA .pro-bounce vs .com-delivered) |
| Claims version (registerversie) | DEELS | message_version + claims_check_hash = versietrail; registerversie (v1.6) wordt niet apart opgeslagen |
| Bounce/webhook-poll voor replies | ONTBREEKT | webhook-endpoint bestaat, poll-mechanisme niet gebouwd (bekend) |

## Patch (deze run, in de WIP-werktree op VPS1 — NIET gecommit, eigenaar moet committen)

1. `email_drafts.py`: ontbrekende import `resolve_sender_mailbox` hersteld (WIP-bug die 2 tests liet falen — NameError in de live send-path!).
2. `email_drafts.py`: protected-customer-guard toegevoegd (409 bij is_protected_customer).
3. `tests/test_email_drafts.py`: test-fake accepteert nu de `mailbox`-kwarg.

## Test met interne testlead (geen prospect aangeraakt)

Throwaway-container (aos-base:fbad669) tegen de geïsoleerde aos-test-stack (aos-test-postgres/redis/qdrant) met scratch-database `aos_test` — productie-DB onaangeraakt: **46/46 tests PASS** (test_email_drafts, test_approval, test_claims_gate, test_channel_approval). Vóór de patch: 2 failures (WIP NameError) — exact de bug die de patch repareerde. Zie OUTREACH-ENDPOINT-TEST-EVIDENCE.md.

## Deploy-status

Patches staan in de VPS-werktree; de draaiende aos-api-container is **niet** herstart (deploymentstap bij de volgende AOS-release). Tot die tijd is de protected-guard actief in code+test maar niet in de draaiende service — geregistreerd in REMAINING-BLOCKERS.
