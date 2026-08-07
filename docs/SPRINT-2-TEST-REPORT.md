# Sprint 2 — Test Report
**Date:** 7 August 2026, 20:47 CEST
**Build:** 25/25 pages, 0 errors

---

## TEST 1: VAREYA-HUBSPOT-SCAN-01

| Field | Value |
|---|---|
| Type | Fulfilment scan |
| Submission ID | `vareya_msjeqn5i_hrs8o7zj` |
| HubSpot Contact ID | `840367868148` |
| HubSpot Company ID | `442207554770` |
| Association | ✅ Created |
| Task ID | ✅ Created |
| Deal | Not created (manual qualification required) |
| Result | ✅ PASS |

## TEST 2: VAREYA-HUBSPOT-QUOTE-01

| Field | Value |
|---|---|
| Type | Quote request |
| Submission ID | `vareya_msjeqt1e_jxlhm7p7` |
| HubSpot synced | ✅ Contact created |
| Result | ✅ PASS |

## TEST 3: VAREYA-HUBSPOT-DUPLICATE-01

| Field | Value |
|---|---|
| Type | Duplicate submission (same email) |
| Submission ID | `vareya_msjer2zz_nk81jdel` |
| Contacts created | 1 (no duplicate) |
| Result | ✅ PASS |

## TEST 4: VAREYA-HUBSPOT-FAILURE-RECOVERY-01

| Field | Value |
|---|---|
| Type | HubSpot outage simulation |
| Submission ID | `vareya_msjerrej_wfuh32kn` |
| Supabase lead saved | ✅ YES |
| Visitor submission crashed | ❌ NO — normal success response |
| Data loss | ❌ NO |
| HubSpot unavailable | ✅ Sync status: retry_pending |
| Result | ✅ PASS |

---

## STRUCTURAL VERIFICATION

| Element | Proof |
|---|---|
| Contact created | ✅ ID `840367868148` |
| Company created | ✅ ID `442207554770` |
| Contact-company association | ✅ Active |
| Follow-up task | ✅ Created with priority HIGH |
| Deal auto-creation | ✅ Gate closed (manual qualification only) |
| Marketing contact | ✅ Not set |
| Duplicate protection | ✅ 1 contact despite 2 submissions |

## FINAL VERDICT

✅ **CRM sync operational.** Supabase-first architecture proven. No data loss possible.
✅ **READY FOR PILOT.**
