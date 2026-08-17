# AI Fulfilment Profile — Internal Specification
**Status:** READY FOR INTERNAL PROTOTYPE — internal tooling, never published as marketing copy
**Source:** JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5 (A4)
**Owner:** Jos remains the human qualification owner. The profile supports Jos; it does not decide for him.
**Last updated:** 17 August 2026

---

## 1. Purpose

An internal, explainable profile that turns scan + follow-up data into a structured commercial/operational fit assessment. Every output must be explainable: which factors contributed, which data was missing, and which outcome was derived. No automatic acceptance or rejection of a lead.

## 2. Input factors (13)

| # | Factor | Data source | Notes |
|---|---|---|---|
| F1 | Volume maturity | Monthly order volume + growth trend | Distinguishes established vs start-up/pre-launch |
| F2 | Evidence quality | destination_data_basis (A2 enum) + confidence labels | historical_report > carrier_invoice > current_sales_forecast > launch_forecast > unknown |
| F3 | Destination concentration | Country distribution + percentages | Concentration drives carrier/routing fit |
| F4 | Parcel weight | Packed parcel weight range | 2 kg profile relevance (register-candidate wording only) |
| F5 | Packed parcel dimensions | Combined dims + max length | Register limits: <900 mm combined, ≤600 mm length |
| F6 | SKU complexity | Total SKUs (+ variants discipline) | Never conflated with items per order |
| F7 | Average items per order | Items/order | Pick-pack workload |
| F8 | Average order lines | Order lines/order | Distinct from items/order (binding rule) |
| F9 | Storage density | Units per pallet / bin vs pallet storage | Raymond density example applies |
| F10 | Product value and handling risk | Category, fragility, compliance, value | High-value products default to MANUAL_OPERATIONAL_REVIEW until an approved policy exists |
| F11 | Platform fit | Shopify / Amazon FBM / other | Register: Shopify + Amazon FBM available |
| F12 | Returns and specialist requirements | Returns needed; specialist handling | Register: returns available; specialist → approved fallback |
| F13 | Implementation readiness | Start date, inbound plan, integration readiness | G1/G2 gates (QUOTATION-WORKFLOW.md) |

## 3. Internal outcomes (5)

| Outcome | Meaning | Next step |
|---|---|---|
| STRONG_PROFILE_FIT | Factors largely positive, data quality good | Route to quotation preparation (all-in per agreement) |
| POSSIBLE_FIT_MORE_INFO_REQUIRED | Fit plausible but G1 unknowns remain | Follow-up question set (missing-information checklist) |
| STARTUP_FORECAST_PROFILE | Pre-launch/forecast-based profile | Scenario-based assessment with explicit labelled assumptions |
| MANUAL_OPERATIONAL_REVIEW | Specialist, high-value, boundary or unusual profile | Jos (or designated ops reviewer) reviews before any next step |
| UNLIKELY_STANDARD_PROFILE_FIT | Clear mismatch with standard setup | Honest response; no fake-quote pressure; explain fit boundary |

## 4. Hard rules

- Do NOT auto-accept or auto-reject. Jos is the human qualification owner.
- Every output lists: contributing factors, data-confidence labels, missing information, assumptions.
- Forecast-based profiles must label forecasts as forecasts; unsupported projections are never presented as historic volume.
- Every quotation based on forecast volume must show its assumptions.
- High-value products default to manual review until an approved policy exists. No blanket prohibition on high-value products.
- Blocked language (never in output or marketing): "there is always a match"; "sharpest rates below 2 kg"; absolute claims about every destination; blanket high-value prohibition; AI cost-saving claims; "up to 30% savings" (validation hypothesis only).

## 5. Prototype scope (when approved)

- Scoring per factor with explicit weights owned by Jos; outcome derivation traceable.
- No auto-emailing of outcomes to leads beyond the approved one-working-day initial fit response.
- PII-free logging; lead data stays in Supabase/HubSpot.
- Prototype runs internal-only on QA/test leads first (no production lead decisions until Jos signs off).
