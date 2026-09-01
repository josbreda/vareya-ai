# Lead Engine Status

**Source:** direct query against the production database (`aos-postgres`), 2026-09-01. This is the system of record — `leads.jmconcepts.cloud` reads from the same database.

## Headline numbers vs. the cited snapshot

| Metric | Cited snapshot | Current (2026-09-01) | Note |
|---|---|---|---|
| Total leads | 292 | **333** | Grown by 41 since the snapshot |
| Contacted | 168 | **190** (status=`contacted`) | |
| Replied | 7 | **7** | Matches exactly |
| Qualified | 2 | **0** (status=`qualified`) | See below — INFERENCE, not confirmed |

The "qualified" drop from 2 to 0 is not necessarily a regression: 1 lead currently sits in `proposal_requested`, 1 in `nurture`, and 1 in `lost` — statuses further along or off the qualification pipeline than "qualified" itself. It is plausible the two previously-qualified leads progressed forward (a good outcome) rather than being lost or miscounted, but this audit did not trace individual lead activity histories to confirm it — flagged as **INFERENCE**, not a verified fact.

## Full status breakdown (333 total)

| Status | Count |
|---|---|
| contacted | 190 |
| new | 79 |
| not_a_fit | 29 |
| do_not_contact | 25 |
| replied | 7 |
| proposal_requested | 1 |
| nurture | 1 |
| lost | 1 |

13 leads are currently archived (soft-deleted, excluded from the counts above where noted); 0 are flagged `is_test`.

## Data quality

- **Duplicates:** 0 duplicate organization domains found (the database enforces a unique constraint on `domain`; direct query confirms zero violations).
- **Contactability (2+ verified channels):** **209 of 320 active leads (65%)** now have 2 or more of {email, phone, WhatsApp, LinkedIn, Instagram, contact form} on file — a substantial improvement, most of it traceable to a dedicated contact-enrichment pass on 44 previously weak-contactability leads (see `HOS/projects/vareya-ai-lead-engine/reports/HIGH-QUALITY-LEAD-DISCOVERY.md`, 2026-08-27). 111 leads remain below the 2-channel bar.
- **Named decision-maker on file:** only **1 lead** has `primary_contact_id` actually set at the lead-record level. Separately, only **2 rows exist in the `lead_contacts` table in total** across the entire 333-lead database. This is a real, concrete gap: the 26 named decision-makers identified during the 27 August contact-enrichment research pass were captured in that report's CSVs but were **never imported back into the production database** as contact records. The research exists; it has not been operationalized.
- **500+ order potential (proxy: `qualification_score` ≥ 70):** 115 organizations.
- **Product category / fit:** not independently re-verified in this pass; see the 27 August report for the most recent detailed per-lead fit assessment (17 leads reached "outreach ready," 26 of the 44 reviewed were rejected for category/scale mismatch).

## Follow-ups

| Status | Count |
|---|---|
| open | 126 |
| completed | 2 |

**116 of the 126 open follow-ups (92%) are currently overdue.** Only 2 follow-ups have ever been marked completed in the system's history. This is the single most concrete operational-health signal in the lead engine: follow-up tasks are being created (by the system, automatically, on contact-outcome events) faster than they are being worked.

## Human-approval gate — actual usage, not just capability

The approval/claims-gate feature (built in a prior engineering pass, this same environment) exists and is enforced server-side for the email-send path. Actual usage to date:
- `claims_status = 'PASS'`: **1 lead**
- `human_approved_at IS NOT NULL`: **0 leads**
- `sent_at IS NOT NULL` (an outreach actually marked sent): **2 leads**

**Finding:** the 2 sends recorded did not go through the human-approval gate (`human_approved_at` is null for both). Tracing the code path: the email `send_email` endpoint *does* enforce the full claims-PASS + human-approval requirement, but the LinkedIn `mark-sent` endpoint — used to log a manually-copy-pasted LinkedIn message as sent — only checks that the lead isn't archived and isn't already marked sent on that channel. It does **not** verify that a prior approval exists. This means the 2 recorded sends are consistent with the LinkedIn path being used without going through Approve first, which is a real, currently-unenforced gap in the human-approval gate as actually implemented, not merely as designed. **This is a genuine finding, not a hypothetical risk** — flagged for the action plan.

## Exclusion list (protected relationships)

The ten explicitly-named companies (Vacier, VUE Swiss, Tipaw, OpenBorder, Lumin, Meridian, Primal FX, SanaDigest, PureBloom, GetYourFil) were checked directly against the `lead_organizations` table by name match: **none appear in the database.** They have never been imported as leads, so no outreach risk exists today through this system.

Separately, this exact list matches — verbatim — a hardcoded `PROTECTED_NAMES` substring-match set already present in `leads-pipeline/daily_pipeline.py`, which suppresses any of these companies from ever being created as a lead during the automated discovery pipeline. This protection mechanism is real, already in place, and confirmed to still contain the correct names.

The database also has an `is_protected_customer` flag on organizations (built in a prior engineering pass) for marking a *known, already-existing* customer to gate outbound actions — **this flag is currently set to true for 0 organizations.** Since none of the 10 named companies are in the database at all, this flag isn't yet load-bearing for them, but if any of them (or any other real customer) were ever imported by a future discovery run, there is no automatic mechanism connecting the pipeline-level name-suppression list to this database-level flag — they are two separate, unlinked protections.

## Do not send

Per the task's explicit instruction, no outreach was sent, drafted-and-sent, or dispatched during this audit. This section is a status report only.
