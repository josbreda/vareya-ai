# Vareya.ai — Marketing Decisions Register
**Date:** 10 August 2026
**Version:** 1.1

## ACTIVE DECISIONS

### D-001: Warm Lead Model
**Decision:** Use dual scoring: fit_score (0-50) + intent_score (0-50) = total_warmth (0-100)
**Thresholds:** WARM ≥ 40, HOT ≥ 70
**Rationale:** Separates operational fit from commercial intent. Prevents fit-only or intent-only misclassification.
**Implemented:** 10 Aug 2026 — `src/lib/hubspot/index.ts`
**Status:** ACTIVE

### D-002: Scan-First Funnel
**Decision:** Primary CTA is "Check your EU fulfilment fit" → /fulfilment-scan/. No meeting-first CTA.
**Rationale:** Raymond approved. Respects visitor autonomy. Scan completion = qualified intent signal.
**Status:** ACTIVE

### D-003: Supabase-First Architecture
**Decision:** Supabase is technical source of truth. HubSpot downstream. No lead loss on HubSpot failure.
**Rationale:** Data integrity over CRM convenience.
**Status:** ACTIVE

### D-004: Content Cluster Strategy
**Decision:** 10 clusters, prioritized by fit × intent potential. Clusters 1-3 this sprint.
**Rationale:** Focus beats volume. Each cluster must contain genuine operational insight.
**Status:** ACTIVE

### D-005: Goodie as Measurement Layer
**Decision:** Goodie measures AI visibility. Does not publish, does not bypass claims approval, does not receive PII.
**Rationale:** Safe measurement without giving AI models unapproved content access.
**Status:** PENDING CONNECTION

## EXPERIMENT DECISIONS

### 2026-08-10 — FS-TRUST-001: Trust signals on fulfilment scan step 1

### Decision

Design a 50/50 A/B test on the first step of the fulfilment scan. The control keeps the current step unchanged. The variant adds a compact, text-only trust strip using three approved operational facts:

- **PostNL main carrier (NL)**
- **ShipHero WMS, fully integrated with Shopify**
- **5-carrier network:** PostNL, DHL, Asendia, FedEx and Royal Mail

Do not use carrier, partner or platform logos. The claims and wording must remain aligned with `content/claims-register.md` and `src/content/facts.ts`.

### Hypothesis

Showing approved operational trust signals at the first scan step will reduce uncertainty and increase the proportion of eligible scan sessions that complete the scan.

### Population and assignment

- Eligible source pages: `/`, `/eu-fulfilment-us-brands/`, `/shopify-fulfilment-europe/`, `/eu-fulfilment/`, `/cosmetics-supplements-fulfilment-europe/`, and `/eu-fulfilment-uk-brands/`.
- Assign eligible browsers 50/50 when the scan first renders; keep the assignment stable in a first-party experiment cookie.
- Direct and other-source visits may receive the experiment but must be reported separately from the primary six-page cohort.
- Persist `experiment_id=FS-TRUST-001`, `variant=control|trust_signals`, and `funnel_version` through the funnel and with the lead record.
- Respect analytics consent. Report consent coverage rather than assuming unobserved sessions behave like observed sessions.

### Primary success metric

**Scan completion rate**

`unique eligible sessions with scan_complete / unique eligible sessions with scan_start`

- `scan_start` fires once when step 1 is rendered for a valid experiment assignment.
- `scan_complete` fires once only after `/api/leads` returns a successful production response.
- The analysis unit is the assigned browser session, not raw event count.
- Overall performance across the six eligible source pages is the primary analysis. Page, device and channel cuts are diagnostic unless separately powered.

### Secondary metrics and guardrails

| Type | Measure |
|---|---|
| Secondary | Step 1-to-2 progression and progression between each later step |
| Secondary | Submit-attempt-to-success rate |
| Diagnostic | Completion rate by source page, device, channel, and new/returning status |
| Diagnostic | Qualified-lead rate after CRM review; do not optimise the test on this until volume is adequate |
| Guardrail | API/network error rate must not increase |
| Guardrail | Valid-lead rate must not materially deteriorate |
| Guardrail | Allocation must remain close to 50/50; investigate sample-ratio mismatch before reading lift |
| Guardrail | Variant must pass mobile, keyboard, screen-reader and layout-shift QA |

### Tracking plan

| Event | When it fires | Required non-PII parameters |
|---|---|---|
| `experiment_exposure` | Once when the assigned step 1 experience is visible | `experiment_id`, `variant`, `funnel_version`, `source_landing_page`, `device_category` |
| `scan_start` | Once when step 1 renders; this is the primary denominator | Same as exposure |
| `scan_step` | Once when each step becomes visible after successful validation of the prior step | Above fields plus `step_number`, `step_id` |
| `scan_submit_attempt` | On a valid final-step submission attempt | Above fields |
| `scan_complete` | Once after a successful production lead response | Above fields; never include submission ID, email, company or answers in analytics |
| `scan_error` | On validation, API or network failure | Above fields plus controlled `error_type`; never include free text or field values |

Implementation requirements:

1. Use the existing GTM/GA4 `dataLayer` path and configure the required custom dimensions.
2. Mark `scan_complete` as a GA4 key event.
3. Preserve the original source landing page and UTM attribution when the visitor navigates to `/fulfilment-scan/`; do not overwrite it with the scan route.
4. Persist experiment assignment server-side with the lead so GA4 completions can be reconciled against non-test submissions.
5. Deduplicate events across refreshes, back navigation and thank-you page reloads.
6. Filter staff, automated Playwright runs, honeypot/bot traffic and explicit QA submissions.
7. Publish a QA trace showing one clean control journey, one clean variant journey, and exactly one completion event for each successful test submission before starting the baseline window.

## Measurement baseline

### Snapshot at design time

| Item | Baseline on 2026-08-10 | Interpretation |
|---|---|---|
| Scan funnel | Live | The funnel can receive traffic. |
| GA4/GTM | Reported as configured via `GTM-W2N6D3CG` | Configuration alone does not prove the scan events are firing. |
| Production scan completions | 0, excluding QA tests | This is a count, not a conversion rate. |
| Production scan starts | Not available | The denominator required for completion rate is missing. |
| Scan completion rate | **N/A** | Do not publish `0%`; start tracking is not yet reliable. |
| Event helpers in source | `scan_start`, `scan_step`, and `scan_complete` helpers exist | The current scan page does not call them, so they do not establish a usable baseline. |
| Funnel definition | Brief says five steps; current scan component renders six (volume, category, markets, platform, needs, contact) | Resolve before baseline collection and attach a `funnel_version` to every event. |
| Attribution | Lead payload reads UTM values on the scan route and records the scan route as `landing_page` | Original landing-page/UTM attribution can be lost unless it is persisted across the CTA navigation. |

### Baseline collection protocol

The current numeric baseline is unknown. Collect a clean pre-test baseline before exposing the variant:

1. Resolve the five-versus-six-step discrepancy and freeze a named `funnel_version`.
2. Wire and QA the full event plan in GTM/GA4 and the lead record.
3. Run the unchanged control experience for **14 consecutive days**, spanning two full weekly cycles.
4. Avoid funnel UX, form-field, traffic-targeting or major landing-page changes during the window.
5. Report unique eligible starts, successful completions, completion rate and a 95% confidence interval overall and by source page/device.
6. Report each step's unique views and progression rate to identify the existing drop-off point.
7. Reconcile `scan_complete` against successful non-test lead records daily; investigate any mismatch before launch.
8. Record consent coverage, missing attribution, duplicate rate, bot/test exclusions and API failures alongside the rate.

The resulting baseline row must contain at least:

| Field | Definition |
|---|---|
| `baseline_start_date` / `baseline_end_date` | Fixed 14-day measurement window |
| `funnel_version` | Canonical step definition used in the window |
| `eligible_scan_starts` | Unique valid sessions with `scan_start` |
| `successful_scan_completions` | Unique valid sessions with `scan_complete`, reconciled to lead records |
| `scan_completion_rate` | Completions divided by starts |
| `step_progression_rates` | Unique next-step views divided by unique current-step views |
| `source_page_mix` / `device_mix` | Traffic composition used to detect mix shifts |
| `data_quality_notes` | Consent coverage, deduplication, exclusions, attribution gaps and event/lead mismatch |

### Test duration and decision rule

- Run for at least 14 full days and complete weekly cycles.
- After the baseline is measured, calculate a fixed sample size using a two-sided `α=0.05`, 80% power and a 20% relative minimum detectable effect. Do not peek and stop early.
- Stop at the fixed sample or after 42 days. A result that has not reached the fixed sample is **inconclusive**, not a loss.
- Ship the trust-signals variant only when the two-sided 95% confidence interval for absolute lift excludes zero, relative lift is at least 10%, and all guardrails pass.
- Otherwise retain the control. Record the result and the actual baseline in `marketing/experiments.csv` after the test.

### Rationale

The proposed variant addresses credibility at the earliest point of the form without changing the offer, form questions or CTA. The approved facts are specific enough to reduce uncertainty while avoiding prohibited customer logos, testimonials, performance guarantees or unsupported superlatives. Instrumentation and attribution are explicit launch gates because the current repository cannot produce a defensible scan completion baseline.
