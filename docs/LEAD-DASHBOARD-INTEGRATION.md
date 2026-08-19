# Lead Dashboard integration — vareya.ai → leads.jmconcepts.cloud

**Status:** implemented, tested, QA-verified (dashboard delivery 201). Production activation
waits for the server-side Vercel env var (owner step below).

## Endpoint
`POST https://leads.jmconcepts.cloud/api/leads/webhooks/free-rate-scan`
Header: `X-API-Key` — from server-side env only.

## Environment variable (name only — never record the value)
`LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY` (Production scope in Vercel, server-side).
Never `NEXT_PUBLIC_*`. Value source: `/opt/aos/secrets/vareya-free-rate-scan-api-key.md` on the VPS.

## Service identity
`vareya-free-rate-scan-service@leads.jmconcepts.cloud` — dedicated service account,
platform role `user`, lead-team role `sales_user` (minimum that passes the endpoint's
`require_sales` gate). Scope `leads:free_rate_scan`. Documented ceiling: the dashboard
auth model has no per-endpoint allowlist; the key can reach other `require_sales` leads
endpoints but not manager/administrator endpoints. Key owned by the service identity,
not an administrator. No expiry.

## Implementation
- `src/lib/lead-dashboard.ts` — `buildLeadDashboardPayload` (pure mapping) +
  `notifyLeadDashboard` (POST, 4s timeout, never throws, safe logs).
- Call site: `src/app/api/leads/route.ts` step 6.5 — after the mandatory internal
  Resend delivery gate, before the success response. ADDITIVE, best-effort.
- Timeout/retry policy: 4s abort (module) inside a 6s outer race; **no automatic
  retries** — the endpoint is idempotent via `submission_id`, so a later
  reconciliation/retry is always safe.
- Failure semantics: dashboard outage/failure/timeout → safe log (status/reason +
  submission_id only), success response unchanged, no duplicate, no rollback.

## Mapping (scan → dashboard)
company, email(work_email), name, phone, website, country(company_country),
product_category, platform(ecommerce_platform), order_volume(monthly_order_volume),
sku_count, message(comments), form_type="scan", source_page(landing_page,
default /free-rate-scan/), utm_source/medium/campaign/content, referrer,
desired_start_date, timestamp (ISO), submission_id (idempotency).
Extra scan fields preserved: target_markets, services_needed, device.
Optional fields are omitted when absent.

## Tests
- `tests-unit/lead-dashboard.test.ts` — 12 node:test cases (success, mapping,
  optional-missing, extras-preserved, missing credential, timeout, HTTP 500,
  single-attempt idempotency, attribution, no-throw on failure, no client-bundle
  import, no secret in logs). Run: `npm run test:unit`.
- Full Playwright regression: 102 passed / 4 pre-existing sprint2 failures
  (identical to baseline).

## QA evidence (19-08-2026)
- Synthetic submission "VAREYA DASHBOARD INTEGRATION QA — DO NOT CONTACT"
  (qa-dashboard-integration@vareya.ai, UTM dashboard_integration_qa) through the
  real chain: Turnstile (dev path) → validation → Supabase best-effort →
  HubSpot synced → internal Resend gate passed → **dashboard webhook 201 delivered** → thank-you.
- Submission id: vareya_mt0adipw_76gq2bmj (201 from dashboard).
- HubSpot residue from this QA: one contact + company + task, clearly labelled
  DO NOT CONTACT (existing HubSpot behaviour unchanged).
- Dashboard-side behaviour (new→HOT, existing→promote HOT, dedup, attribution)
  was production-verified by the dashboard team: 141/141 tests.

## Production activation (owner step — requires Vercel access)
1. Read the key from `/opt/aos/secrets/vareya-free-rate-scan-api-key.md` (VPS).
2. Vercel → vareya-website → Settings → Environment Variables → Production:
   `LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY` = the key (never paste it into chat).
3. Redeploy the latest deployment.
Until then the deployed code no-ops safely (logs "not set — webhook skipped").

## Rollback
Remove the env var (or redeploy the previous commit) — the module is additive
and the existing funnel is unaffected either way.
