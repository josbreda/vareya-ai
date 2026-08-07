# HubSpot CRM Integration — Vareya.ai
**Date:** 7 August 2026, 20:45 CEST
**Status:** OPERATIONAL

---

## PHASE 1 — ACCOUNT AUDIT

| Field | Value |
|---|---|
| Portal ID | 149057596 |
| Account type | STANDARD |
| Data hosting | eu1 (Frankfurt) |
| UI domain | app-eu1.hubspot.com |
| Timezone | US/Eastern |
| Currency | USD |

CRM objects available: Contacts, Companies, Deals, Tasks — all API accessible.

## PHASE 2 — AUTHENTICATION

- **Method:** Private app (Legacy)
- **App name:** Vareya.ai Sync
- **Scopes:** crm.objects.contacts.read/write, crm.objects.companies.read/write, crm.objects.deals.read/write
- **Token stored:** Vercel environment variable `HUBSPOT_ACCESS_TOKEN` (server-side only)

## PHASE 3 — SUPABASE SYNC FIELDS

Planned (not yet migrated):
- `hubspot_sync_status`: not_required | pending | syncing | synced | retry_pending | failed_manual_review
- `hubspot_contact_id`, `hubspot_company_id`, `hubspot_task_id`, `hubspot_deal_id`
- `hubspot_last_attempt_at`, `hubspot_synced_at`, `hubspot_retry_count`
- `hubspot_error_code`, `hubspot_error_summary`

## PHASE 5 — UPSERT RULES (IMPLEMENTED)

**Contact:** Search by email → create if new, update if found.
**Company:** Search by name → create if new, update if found.
**Association:** Created between contact and company.
**Task:** Created with high priority for scans, normal for quotes. Subject: `[SCAN] Company — Name`
**Deal:** NOT auto-created. Manual qualification only.

## PHASE 6 — MARKETING CONTACT SAFETY

No automatic marketing contact status. No newsletter subscription. Lead stored for direct enquiry follow-up only.

## PHASE 7 — IDEMPOTENCY

Submission ID is the deduplication key. Retries update existing records, do not create duplicates.

## TEST RESULTS

| Test | Type | HubSpot Contact ID | Result |
|---|---|---|---|
| VAREYA-HUBSPOT-SCAN-01 | Scan | 840367868148 | ✅ PASS |
| VAREYA-HUBSPOT-QUOTE-01 | Quote | ✅ Synced | ✅ PASS |
| VAREYA-HUBSPOT-DUPLICATE-01 | Duplicate | 1 contact (no dup) | ✅ PASS |
| VAREYA-HUBSPOT-FAILURE-01 | Outage recovery | Lead saved | ✅ PASS |

**Failure proof:** Submission succeeded despite HubSpot unavailability. Supabase received lead. No data loss.
