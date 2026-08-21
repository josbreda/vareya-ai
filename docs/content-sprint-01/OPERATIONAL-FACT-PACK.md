# Content Sprint 01 — Operational Fact Pack
**Article:** What information does a 3PL need to prepare a fulfilment quotation?
**Author:** Agent 3 (Operational & Commercial Input)
**Date:** 17 August 2026
**Purpose:** The evidence pack handed to Claude at drafting time. Known facts are verified against Claims Register v1.2; everything else is marked NOT COLLECTED and must come from the worksheet.

---

## 1. KNOWN FACTS — approved for use (Claims Register v1.2, 9 August 2026)

| Fact | Exact approved wording |
|---|---|
| Company | Vareya BV |
| Location | Bagven Park 6, 4838 EH Breda, The Netherlands |
| Contact | +31 6 19 12 34 72, info@vareya.nl |
| Platform | Shopify integration is available. Amazon FBM fulfilment is available. |
| WMS | Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify. |
| Specialisation | Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products. |
| Parcel limits | Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm. |
| Volume fit | Vareya is generally best suited to brands shipping 500 or more orders per month. |
| Carriers | PostNL is Vareya's main carrier for shipments within the Netherlands. DHL, Asendia, FedEx and Royal Mail remain part of the carrier network for other routes. |
| Carrier selection | Vareya's shipping system can automatically select an appropriate carrier for each shipment, based on destination and parcel characteristics. |
| Rates | Vareya's fulfilment rates are fixed and all-in per agreement — no hidden costs beyond what the agreement sets out. |
| Cut-off | Cut-off times of up to 23:00 may be available by agreement. |
| Weekend | Weekend fulfilment (Saturday and Sunday order processing) is available on a structural basis. |
| Returns | Returns handling is available. Contact Vareya to discuss the required returns process. |
| Support | Customer support is included at no additional charge. |
| SLAs | Clients can agree customised SLAs with Vareya, within boundaries confirmed during qualification. |
| Customs | Customs clearance support is available for shipments into and out of Europe. Contact Vareya to discuss specific requirements. |
| UK route | Shipments to the United Kingdom may be entered directly into the Royal Mail domestic network. Exact delivery timing depends on the agreed shipping method and is confirmed during qualification. |
| Experience | Vareya has multiple years of experience fulfilling for large international brands. No client names, logos or figures are used to support this. |
| Product fit | Product fit is confirmed during qualification. |
| Specialist fallback | Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported. |
| Post-submission | Vareya will review your answers and send an initial fit response by email within one working day. |
| Destinations | 41 approved countries (see register) + "Other destination" as form catch-all. "Rest of the World" prohibited. |

## 2. SCAN COVERAGE — what the live form collects (verified `content/fulfilment-scan.md`)

Step 1: company name, website, company country, monthly order volume, number of SKUs.
Step 2: product category, typical parcel dimensions (combined L+W+H), optional parcel weight, optional special handling.
Step 3: ecommerce platform, Amazon FBM yes/no, current ship-from, returns required yes/no.
Step 4: target markets (multi-select countries), optional desired start date, optional comments.
Step 5: full name, work email, optional phone, privacy acknowledgement.

**Not collected by the scan:** destination percentage distribution, average items per order, storage capacity/pallets, structured selection priorities. These are follow-up items — the article must not claim otherwise (see CLAIMS-BOUNDARY.md §4.1).

## 3. CRM / LEAD FACTS (verified `src/lib/hubspot/index.ts`, `docs/HUBSPOT-INTEGRATION.md`)

- Supabase-first: lead always stored (`leads` table, `scan_answers` JSONB), HubSpot downstream.
- HubSpot: contact upsert by email, company upsert by name, association, follow-up task created (HIGH priority for scans).
- Automated warmth score: FIT (0–50, platform/volume/markets) + INTENT (0–50, form type/UTM/landing page) → HOT/WARM/COOL/COLD; task subject carries `[WARM]` etc.
- Deal: NOT auto-created — manual qualification only. "Qualified lead" = human decision in HubSpot.
- PII never sent to GA4 (enforced in `src/lib/scan-analytics.ts`).

## 4. INPUT STATUS — collected vs open (17 August 2026)

| Item | Owner | Status |
|---|---|---|
| 5 questions real leads ask | Jos | ✅ COLLECTED (A1) |
| 5 things leads don't know | Jos | ✅ COLLECTED (A2) — destination_data_basis enum proposed |
| 3 reasons a quote can't be finalised | Jos | ✅ COLLECTED (A3) — start-up/forecast route with assumptions |
| What makes a lead commercially interesting | Jos | ✅ COLLECTED (A4) → AI-FULFILMENT-PROFILE-SPEC.md (internal) |
| Useful first response after scan | Jos | ✅ COLLECTED (A5) → QUOTATION-WORKFLOW §7 |
| Why transparency matters | Raymond | ⏳ OPEN (not answered directly; methodology in source §7–§8) |
| What a fair quotation should explain | Raymond | ◐ PARTIAL (source §3, §7, §8) |
| Hidden/misunderstood cost factors | Raymond | ⏳ OPEN |
| What Vareya wants to do differently | Raymond | ⏳ OPEN |
| Consumer impact of poor fulfilment decision | Raymond | ⏳ OPEN |
| Most common data mistakes | Ops | ◐ PARTIAL (CASE-INCOMPLETE-001) |
| Impact of wrong dimensions/weights | Ops | ⏳ OPEN (methodology rule recorded) |
| Impact of destination distribution | Ops | ✅ SOURCED (source §3) |
| Impact of SKU count / items per order | Ops | ✅ SOURCED (source §4–§5) |
| Impact of storage pallets | Ops | ✅ SOURCED (source §6) |
| One anonymised example (complete vs incomplete) | Ops | ✅ SOURCED (CASE-INCOMPLETE-001 + CASE-STRONG-PROFILE-001) |
| "Not a fit" situations | Ops | ⏳ OPEN (manual-review triggers G2 as process) |
| Named reviewer + review date | Human reviewer | ⏳ OPEN — publication gate |

## 5. RAYMOND OPERATIONAL SOURCE — 17 August 2026

**Source ID:** `RAYMOND-2026-08-17-QUOTATION-OPERATIONS`
**Status:** AVAILABLE — extracted and classified → `docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md`
**Treatment:** human operational input — NOT automatically approved public claims.

### 6.1 Classification framework (apply to every source statement)

operational explanation / quotation requirement / current Vareya claim / comparative claim / future ambition / public-safe insight / evidence required / claims-register amendment required / private lead information / anonymised example.

### 6.2 Blocked claims (do not publish without separate approval + evidence)

- RB-1 "Vareya has the sharpest rates below 2 kg" — comparative + superlative; register amendment required.
- RB-2 "Vareya can always provide customised discounted destination rates" — unqualified current claim; conflicts with fixed all-in wording.
- RB-3 "Vareya AI fulfilment tools reduce operational costs" — unproven; automation claims excluded by register.
- RB-4 "Every consumer will pay the same parcel price" — unproven; conflicts with per-destination carrier reality.

### 6.3 Technical data separation (mandatory for article copy)

Total SKUs / average items per order / average order lines / number of pick actions / batch-picking suitability are five separate concepts. Prohibited: "high total SKU count automatically means more items in each order."

### 6.4 Example slots (anonymised — extracted)

| Slot | Source | Content | Status |
|---|---|---|---|
| Example 1 — `CASE-INCOMPLETE-001` | Raymond source §9 | Shopify webshop; ~201–400 monthly orders; basic contact only. Missing: product type, establishment country, destination distribution, packed dims/weights, SKUs, items/order, storage, returns, start date, priorities. Lesson: "A platform and monthly order range may be enough to create a lead record, but they are not enough for a meaningful fulfilment quotation." | EXTRACTED, anonymised |
| Example 2 — `CASE-STRONG-PROFILE-001` | Raymond source §10 | Anonymised Australian fashion ecommerce: UK warehouse → considering EU; apparel; ~150 SKUs; ~500 g avg product weight; ~25×20×5 cm product dims; ~900 EU + ~800 UK orders/month; ~1.3 items/order; Shopify; B2C; key markets UK/FR/DE/DK; asks about WMS, account management, SLAs, returns, integrations, multi-warehouse, commercial structure. Classified STRONG INITIAL PROFILE BUT NOT YET FULLY QUOTATION-READY; 13 missing items listed. | EXTRACTED, anonymised |

### 6.5 Public-safe insights extracted (usable in the article)

1. "Parcel weight is an important quotation input. Parcels up to approximately 2 kg form an important part of Vareya's current shipping profile, while heavier parcels can be reviewed separately." — register-candidate sentence (needs register update before publication).
2. "Two webshops with the same total monthly order volume can have different shipping profiles when their orders are distributed differently across destination countries."
3. "A total SKU count mainly affects storage and pick-location complexity. Items and order lines per order more directly affect the number of pick actions required for an individual shipment."
4. "An order count alone does not show the full workload. A quotation also needs to reflect how many items and order lines are typically handled per order."
5. Storage-density contrast (office chairs vs nasal strips) — generic, anonymised.
6. Case lessons (CASE-INCOMPLETE-001 / CASE-STRONG-PROFILE-001).

## 7. JOS COMMERCIAL INPUT — A2–A5 (source `JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5`)

### 7.1 A2 — evidence basis for destination data
- Exact monthly order volume per destination country is frequently missing.
- Historical shipment data preferable; carrier invoice or shipping report may support the actual distribution.
- A realistic forecast is acceptable for an initial assessment; forecasts must be labelled as forecasts; unsupported projections must never be presented as historic volume.
- Invoice upload NOT mandatory in the public scan. Proposed field `destination_data_basis`: historical_report / carrier_invoice / current_sales_forecast / launch_forecast / unknown. Future document upload = separate secure, privacy-reviewed implementation.

### 7.2 A3 — forecast-based quotations
- No monthly order data often indicates start-up/pre-launch — not automatically no-quote. A scenario-based assessment may use an explicit forecast; every forecast-based quotation must show its assumptions.
- Blocked: claiming Vareya always has a suitable quotation for every start-up (unless register permits).

### 7.3 A4 — internal AI Fulfilment Profile
- 13 factors + 5 internal outcomes; explainable; Jos = human qualification owner; no auto accept/reject. Spec: `docs/AI-FULFILMENT-PROFILE-SPEC.md`. High-value products → manual review by default (no blanket prohibition).

### 7.4 A5 — first-response workflow (9 components)
Profile summary → fit status → data-confidence → missing info → quotation-readiness → indicative quotation where supported → assumptions → exclusions → next step. Destination-structured quotation + Pick, Pack & Ship basis where appropriate. Prohibited: automatic/guaranteed quotation, guaranteed acceptance, "up to 30% savings" (validation hypothesis only), AI cost savings.

## 8. What AI must NOT do with this pack

- Must not turn a KNOWN fact into a stronger statement (e.g. "all-in rates" must stay exactly the register sentence).
- Must not fill NOT COLLECTED items from general logistics knowledge presented as Vareya insight.
- Must not cite `APPROVED_OPERATIONAL_FACTS.md` (2026-07-27) facts that the register does not also contain (e.g. older email addresses, "Rest of the World", onboarding-duration claims, branding/packaging claims — unless separately approved).
- Must not use customer names, counts, capacities, error rates or automation claims (register exclusions).
