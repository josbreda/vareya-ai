# Content Sprint 01 — Human Input Worksheet
**Article:** What information does a 3PL need to prepare a fulfilment quotation?
**Author:** Agent 3 (Operational & Commercial Input)
**Date:** 17 August 2026
**Status:** READY TO COLLECT — no answers filled in (inventing is forbidden)

---

## How to use this worksheet

- Three respondents: **Jos**, **Raymond**, **Operations** (warehouse ops / quotation owner).
- Voice-first for Jos and Raymond: speak the answers, Hermes transcribes, answers are pasted into the `ANSWER:` lines.
- Short factual answers are better than polished sentences. The copywriter (Claude) rewrites.
- "Not known" / "does not apply" is a valid answer — record it, don't invent.
- Every answer maps to an article section (see `HUMAN-INPUT-REQUIREMENTS.md`).

---

## PART A — JOS

### A1. Five questions real leads regularly ask
*Why: feeds the FAQ section (article part 12) and the "what leads don't know" angle. Real questions beat invented ones.*

1. ANSWER (Jos, collected 17-08-2026): Wat zijn Vareya's verzendtarieven naar de meest voorkomende landen? → *What are Vareya's shipping rates to the most common countries?*
2. ANSWER (Jos, collected 17-08-2026): Met welke carriers verzenden jullie? → *Which carriers do you ship with?*
3. ANSWER (Jos, collected 17-08-2026): Wat zijn de operationele kosten voor opslag en pick & pack? → *What are the operational costs for storage and pick & pack?*
4. ANSWER (Jos, collected 17-08-2026): Welke WMS (warehouse management system/software) gebruikt Vareya? → *Which WMS does Vareya use?*
5. ANSWER (Jos, collected 17-08-2026): Hoe groot is jullie warehouse / opslagcapaciteit? → *How big is your warehouse / storage capacity?*

### A2. Five pieces of information leads often do not know
*Why: becomes "here is what to prepare before you ask" — a candidate human insight. Minimum coverage per processing order: which information is missing most frequently.*

ANSWER (Jos, collected 17-08-2026 — source `JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5`):
1. Exact monthly order volume per destination country is frequently missing.
2. Historical shipment data is preferable to memory-based numbers.
3. A carrier invoice or shipping report may support the actual distribution.
4. A realistic forecast is acceptable for an initial assessment.
5. Forecasts must be labelled as forecasts — unsupported projections must not be presented as historic volume.

*Rule: invoice upload is NOT mandatory in the public scan. Proposed field `destination_data_basis`: historical_report / carrier_invoice / current_sales_forecast / launch_forecast / unknown. Any future document upload requires a separate secure, privacy-reviewed implementation.*

### A3. Three reasons a quotation cannot yet be finalised
*Why: feeds "What happens when important information is missing" (article part 7) — the practical warning. Minimum coverage: when a price indication cannot yet be prepared.*

ANSWER (Jos, collected 17-08-2026):
1. Lack of monthly order data — often indicates a start-up or pre-launch operation. This does NOT automatically mean no quotation route exists: a scenario-based or start-up assessment may use an explicit forecast.
2. Every quotation based on forecast volume must show its assumptions.
3. A price indication is not yet reliable when the destination distribution or packed-parcel data is missing/unknown — follow-up is required first.

*Blocked: do not publicly claim that Vareya always has a suitable quotation for every start-up unless the current Claims Register explicitly permits that claim.*

### A4. What makes a lead commercially interesting
*Why: sharpens the scan CTA framing and the follow-up priority; also informs lead scoring context. Used sparingly in public copy — mostly internal. Minimum coverage: when a lead appears to be a strong operational fit.*

ANSWER (Jos, collected 17-08-2026): Implemented as the internal, explainable AI Fulfilment Profile — 13 factors (volume maturity; evidence quality; destination concentration; parcel weight; packed parcel dimensions; SKU complexity; average items per order; average order lines; storage density; product value and handling risk; Shopify or other platform fit; returns and specialist requirements; implementation readiness) with 5 internal outcomes (STRONG_PROFILE_FIT / POSSIBLE_FIT_MORE_INFO_REQUIRED / STARTUP_FORECAST_PROFILE / MANUAL_OPERATIONAL_REVIEW / UNLIKELY_STANDARD_PROFILE_FIT). See `docs/AI-FULFILMENT-PROFILE-SPEC.md`. No automatic accept/reject — Jos remains the human qualification owner. High-value products default to manual review until an approved policy exists (no blanket prohibition).

### A5. What first response is useful after a completed scan
*Why: must match the approved one-working-day commitment; confirms what the article promises near the CTA. Minimum coverage: what the most useful first response after a scan should contain.*

ANSWER (Jos, collected 17-08-2026): First-response workflow must contain: 1 profile summary; 2 profile-fit status; 3 data-confidence assessment; 4 missing information; 5 quotation-readiness status; 6 indicative quotation where sufficiently supported; 7 assumptions; 8 exclusions; 9 next step. Where appropriate, structure a quotation by destination and explain the Pick, Pack & Ship basis. Prohibited: automatic quotation, guaranteed final quotation, guaranteed acceptance, "up to 30% savings" (validation hypothesis only), AI cost savings. Exact all-in wording and scope come from the approved Claims Register.

**Drafting rule:** A2–A5 are CLOSED — no placeholders remain in the Jos column.

---

## PART B — RAYMOND

**Status 17-08-2026:** Raymond operational answers EXTRACTED and classified → `docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md`. Per processing rule: do NOT force every statement into B1–B5 when the original question was not answered directly. Status per question below.

### B1. Why quotation transparency matters
*Why: candidate human insight #1; supports section 3 and 10.*

ANSWER: OPEN — not answered directly in the source. Supporting methodology (estimates vs exact, packed dims, destination %) recorded in the source file §7–§8.

### B2. What a fair quotation should explain
*Why: becomes the quotation-comparison checklist (article part 10–11) — the Vareya decision framework.*

ANSWER: PARTIALLY SUPPORTED — quotation methodology recorded (source file §3, §7, §8): destination percentages, packed parcel dims, exact/estimate/unknown per figure, all nine inputs. Full B2 answer remains open for Raymond.

### B3. Which hidden or misunderstood cost factors create frustration
*Why: feeds section 10 and the FAQ; the "surprise costs" education angle.*

ANSWER: OPEN — not answered directly in the source.

### B4. What Vareya wants to do differently
*Why: candidate human insight #2; positions Vareya without breaking the claims boundary. Must be phrased within register-approved facts (e.g. fixed all-in rates, transparency philosophy).*

ANSWER: OPEN — not answered directly in the source.

### B5. The consumer impact of a poor fulfilment or shipping decision
*Why: unique angle most competitor pages omit — ties fulfilment data quality to end-customer experience. Candidate insight #2/#3.*

ANSWER: OPEN — not answered directly in the source.

---

## PART C — OPERATIONS

*Populated only where the Raymond source directly supports the answer; unsupported questions stay open (no inference).*

### C1. Most common data mistakes in quotation requests
*Why: the "common mistake" column of the nine-input table (article part 5).*

ANSWER (partially supported, 17-08-2026): CASE-INCOMPLETE-001 documents the classic incomplete profile — platform + monthly order range, without product type, destination distribution, packed dims/weights, SKUs, items per order, storage, returns, start date or priorities. Full ops list of recurring mistakes remains OPEN.

### C2. Practical impact of incorrect dimensions or weights
*Why: table column + practical warning material. What actually breaks in the warehouse and on the invoice?*

ANSWER: OPEN — source states the quotation must use packed (not product) dimensions (methodology), but the practical warehouse/invoice impact is not described.

### C3. Impact of destination distribution
*Why: why the percentage split matters for carrier choice and cost. Table + section 7.*

ANSWER (supported, 17-08-2026): destination-country volume affects the carrier rates available for a shipping profile. Public-safe line: "Two webshops with the same total monthly order volume can have different shipping profiles when their orders are distributed differently across destination countries." (source file §3)

### C4. Impact of SKU count and items per order
*Why: pick/pack planning. Table columns.*

ANSWER (supported, 17-08-2026): more SKUs → more storage-location, inventory, search/pick and replenishment complexity. Every additional item must be located, picked, checked, packed; items/order + order lines drive pick-and-pack time. (source file §4–§5; five-concept separation is binding)

### C5. Impact of storage pallets
*Why: space planning, racking, stock-turn. Table columns.*

ANSWER (supported, 17-08-2026): storage density varies strongly by product type (office chairs: few units per pallet; nasal strips: potentially thousands per pallet). Quotation inputs should support pallet, bin/shelf, estimated total units and unknown → manual review. (source file §6)

### C6. One anonymised example
*Why: article parts 8 and 9 — a complete profile and the same profile with wrong/missing data, showing what changes in the quote. No customer names, no identifiable details, labelled illustrative.*

ANSWER (supported, 17-08-2026): CASE-STRONG-PROFILE-001 (anonymised Australian fashion ecommerce — full data set + 13 missing items) and CASE-INCOMPLETE-001 (platform + volume only). Details in source file §9–§10 and QUOTATION-WORKFLOW.md §6.

### C7. Situations in which Vareya should say "not a fit"
*Why: honesty guardrails; feeds FAQ and fit-boundary copy (e.g. below 500 orders, oversized parcels, prohibited products). Must stay inside register wording.*

ANSWER: OPEN — not answered directly in the source. Manual-review triggers (G2) recorded in QUOTATION-WORKFLOW.md as process, not as Raymond's not-a-fit list.

---

## Collection log

| Respondent | Method | Date | Received? |
|---|---|---|---|
| Jos | Chat (Hermes) | 17-08-2026 | ✅ COMPLETE — A1–A5 closed (source JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5) |
| Raymond | Source document (ChatGPT project) | 17-08-2026 | ✅ EXTRACTED — docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md; B1–B5 mostly open (source not direct answers) |
| Operations | Via Raymond source | 17-08-2026 | ◐ PARTIAL — C3–C6 supported; C1 partial; C2, C7 open |

**Drafting gate:** Claude may produce a REVIEW DRAFT now (17-08-2026): Jos A1–A5 CLOSED, Raymond source extracted, ops C3–C6 supported. Remaining placeholders in the draft: `[OPEN — ops]` for C1 (full list), C2, C7, and `[REVIEWER NAME]`/`[REVIEW DATE]` — resolved before publication.
