# Vareya Quotation Workflow — reliability gates and manual review
**Status:** internal process document — feeds the article's "when a quotation is not yet reliable" and "when manual review is required" sections
**Sources:** Claims Register v1.2, `content/fulfilment-scan.md`, `docs/HUBSPOT-INTEGRATION.md`, Raymond operational source (17 August 2026)
**Last updated:** 17 August 2026

---

## 1. End-to-end flow

1. **Enquiry** — visitor lands on a commercial or knowledge page.
2. **Fulfilment scan** — collects the starting inputs (see FREE-RATE-SCAN-SPEC.md for coverage).
3. **Initial fit response** — Vareya reviews answers and sends an initial fit response by email within one working day (register commitment). Not an instant quote.
4. **Profile completion** — follow-up collects the remaining nine-input data: destination % distribution, packed parcel dimensions and weights, average items per order and order lines, storage capacity/pallets, selection priorities.
5. **Data completeness check** — the nine inputs scored exact / estimate / unknown (gate G1 below).
6. **Operational fit review** — product fit, volume fit, platform fit, market coverage; product fit is confirmed during qualification.
7. **Quotation preparation** — rates fixed and all-in per agreement; no hidden costs beyond the agreement.
8. **Quotation review + agreement** — client reviews, SLAs agreed within qualification boundaries.
9. **Onboarding** — channel connection, stock intake, controlled go-live.

## 2. Gate G1 — when a quotation is NOT yet reliable

A quotation may not be finalised (any provider, and Vareya) when:

- G1-1 Any of the nine inputs is **unknown** (not merely estimated) — especially destination mix, packed parcel dims/weights, or storage need.
- G1-2 Order volume is stated only as a peak or only as an average without a band.
- G1-3 Destination distribution is given as "worldwide" without country percentages.
- G1-4 Parcel data describes the product instead of the packed parcel.
- G1-5 Storage need is missing and stock volume is unknown.
- G1-6 Platform and integration path are unconfirmed.
- G1-7 Selection priorities are unstated, so service-level design would be a guess.
- G1-8 Product compliance or handling constraints remain unverified.

In these cases the honest output is an **indicative fit review with open items**, not a final quotation. Exact figures are ideal, honest estimates are usable, unknown values are not.

## 3. Gate G2 — when manual review is required

Trigger manual (human) review when:

- G2-1 Volume below the 500 orders/month fit band, or at a band boundary.
- G2-2 Product category outside core specialisations (cosmetics, supplements, phone cases, accessories, smaller parcels) or with specialist handling needs.
- G2-3 Parcels outside the smaller-parcel range (combined ≥900 mm or length ≥600 mm) or unusual weights.
- G2-4 Destinations or carrier needs outside the approved network/service mix.
- G2-5 Customs, tax or regulated-product requirements — use the approved fallback; a human confirms which parts can be supported.
- G2-6 Multi-warehouse or temperature-controlled/batch/expiry needs raised in the scan.
- G2-7 The lead is a "not a fit" candidate — a human decides and communicates honestly.

## 4. Missing-information checklist (feeds article part 11)

The nine inputs as a completion check — mark each: exact / estimate / unknown:

1. Product type (and any compliance constraints)
2. Country where the webshop is established
3. Monthly order volume (+ peak volume)
4. Destination countries with percentage distribution
5. Packed parcel dimensions and weights
6. Number of SKUs
7. Average items per order (+ average order lines)
8. Storage capacity or number of pallets (bin vs pallet storage)
9. Ecommerce software + selection priorities

## 5. Data concepts (Raymond correction — bindend)

Total SKUs, average items per order, average order lines, pick actions and batch-picking suitability are separate concepts. Never state that a high SKU count means more items per order.

## 6. First response after the scan (Jos A5, 17 August 2026)

The first response (email, within one working day — register commitment) follows this structure:

1. **Profile summary** — what the lead told us.
2. **Profile-fit status** — internal outcome from the AI Fulfilment Profile (see AI-FULFILMENT-PROFILE-SPEC.md); no auto accept/reject, Jos is qualification owner.
3. **Data-confidence assessment** — exact / estimate / unknown per figure, incl. `destination_data_basis`.
4. **Missing information** — the gaps that block a final quotation (missing-information checklist §4).
5. **Quotation-readiness status** — quotation-ready / not yet reliable (G1) / forecast-based.
6. **Indicative quotation** — only where sufficiently supported; by destination with Pick, Pack & Ship basis where appropriate.
7. **Assumptions** — every forecast-based quotation shows its assumptions; forecasts labelled as forecasts.
8. **Exclusions** — what the quotation does not cover; all-in scope per register wording.
9. **Next step** — follow-up question set or next-stage action.

**Prohibited in responses:** automatic quotation; guaranteed final quotation; guaranteed acceptance; "up to 30% savings" (validation hypothesis only — never in a customer response); AI cost-saving claims; any wording not traceable to the Claims Register.

## 7. Scenario-based assessment (Jos A3)

- No monthly order data often means start-up/pre-launch — NOT automatically no-quote.
- A scenario-based or start-up assessment may use an explicit, labelled forecast.
- Every quotation based on forecast volume must show its assumptions.
- Do not claim Vareya always has a suitable quotation for every start-up (register-permitted only).

## 8. Example slots (anonymised — extracted 17 August 2026)

### CASE-INCOMPLETE-001 — incomplete profile

Shopify webshop; approximately 201–400 monthly orders; basic contact and company information — and nothing else. Missing: product type, establishment country, destination distribution, packed parcel dimensions and weights, SKU count, items per order, storage requirement, returns, start date, selection priorities.

- Gate G1 triggers: G1-1 (multiple unknowns), G1-3 (no destination split), G1-5 (no storage), G1-7 (no priorities).
- Public lesson: "A platform and monthly order range may be enough to create a lead record, but they are not enough for a meaningful fulfilment quotation."
- Privacy: original name/email/domain never reproduced.

### CASE-STRONG-PROFILE-001 — strong but not yet fully quotation-ready

Anonymised Australian fashion ecommerce business: currently uses a UK warehouse; considering European fulfilment; apparel; ~150 SKUs; average product weight ~500 g; indicative product dimensions ~25 × 20 × 5 cm; ~900 EU and ~800 UK orders per month; ~1.3 items per order; Shopify; primarily B2C; important markets UK, France, Germany, Denmark; asks about WMS, account management, SLAs, returns, integrations, multi-warehouse operations, commercial structure.

Classification: **STRONG INITIAL OPERATIONAL PROFILE — NOT YET FULLY QUOTATION-READY.**

Missing or unclear: destination percentages; packed parcel dimensions (only product dims given); packed parcel weight range; return volume/percentage; storage volume; pallet or bin requirements; inbound frequency; seasonal peak volume; packaging requirements; current costs; precise multi-warehouse routing requirements; special handling; exact implementation dependencies.

- Public lesson: "A detailed operational profile enables a meaningful initial assessment, but a complete quotation may still require packed-parcel, storage, returns and destination-distribution data."
