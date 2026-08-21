# Raymond Operational Answers — 17 August 2026
**Source ID:** `RAYMOND-2026-08-17-QUOTATION-OPERATIONS`
**Source type:** Human operational and commercial input from Raymond
**Received:** 17 August 2026 (relayed via Jos; original in ChatGPT project conversation)
**Owner:** Raymond (commercial/operational) — recorded and classified by Agent 3 (Operational & Commercial Input)
**Status:** EXTRACTED AND CLASSIFIED — human operational input, NOT automatically approved public claims

## Source purpose
Quotation requirements; Free Rate Scan design; fulfilment cost drivers; parcel-profile fit; operational complexity; exact versus estimated data; examples of incomplete and strong quotation profiles.

## PRIVACY RULE (binding)
The original source contains identifiable lead information. Names, email addresses, personal details and identifiable company details may NOT appear in: Knowledgebank content, content briefs, public examples, analytics, Goodie, or public Git repositories. Identifiable lead information remains ONLY in approved Supabase/HubSpot records. Anonymised example IDs: `CASE-INCOMPLETE-001`, `CASE-STRONG-PROFILE-001`.

---

## 1. CORE PARCEL PROFILE

**Statement (Raymond):** Parcels below approximately 2 kg represent an important part of Vareya's current volume and preferred AI fulfilment profile. Vareya also has shipping contracts for parcels above 2 kg.

- **Classification:** operational explanation + current Vareya claim (volume profile); "shipping contracts for parcels above 2 kg" = current Vareya claim not yet in the Claims Register.
- **Blocked:** "Vareya has the sharpest rates below 2 kg." — comparative rate claim; requires separate evidence + Claims Register approval. DO NOT PUBLISH.
- **Public-safe operational interpretation (approved in source processing):** "Parcel weight is an important quotation input. Parcels up to approximately 2 kg form an important part of Vareya's current shipping profile, while heavier parcels can be reviewed separately."
- **Register note:** this sentence is not yet in Claims Register v1.2 — treat as candidate register addition; publish only after register update.

## 2. PARCEL DIMENSIONS

**Statement (Raymond):** Preferred smaller-parcel dimensions: combined length + width + height below 900 mm; maximum single length 600 mm; approximately shoebox size. The quotation must use packed parcel dimensions, not merely the dimensions of an unpacked product.

- **Classification:** operational explanation + quotation requirement.
- **Register alignment:** matches register v1.2 exactly ("Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm.").
- **Public-safe:** packed parcel dimensions are the quotation input; product dimensions alone are insufficient.

## 3. DESTINATION DISTRIBUTION

**Statement (Raymond):** Destination-country volume affects the carrier rates available for a shipping profile. The quotation therefore needs: total monthly order volume; destination countries; percentage distribution per destination; indication whether figures are exact, estimated or unknown.

- **Classification:** operational explanation + quotation requirement.
- **Public-safe explanation (approved):** "Two webshops with the same total monthly order volume can have different shipping profiles when their orders are distributed differently across destination countries."
- **Blocked:** no discount promise; no statement that Vareya always offers the lowest destination rate.

## 4. SKU COUNT

**Statement (Raymond):** A higher number of SKUs can increase: storage-location complexity; inventory-management complexity; search and pick complexity; replenishment requirements; operational processing time.

- **Classification:** operational explanation + quotation requirement.
- **TECHNICAL CORRECTION (binding):** do NOT state that more total SKUs automatically means more items in every order. Separate: total number of SKUs / average items per order / average order lines / number of pick actions / batch-picking suitability.
- **Public-safe explanation (approved):** "A total SKU count mainly affects storage and pick-location complexity. Items and order lines per order more directly affect the number of pick actions required for an individual shipment."

## 5. ITEMS PER ORDER

**Statement (Raymond):** Every additional item must be located, picked, checked and packed. Average items per order and average order lines are therefore relevant to pick-and-pack time and an all-in quotation.

- **Classification:** operational explanation + quotation requirement.
- **Public-safe human insight (approved):** "An order count alone does not show the full workload. A quotation also needs to reflect how many items and order lines are typically handled per order."

## 6. STORAGE REQUIREMENT

**Statement (Raymond):** Storage density varies significantly by product type. Example contrast: large products such as office chairs — few units per pallet; small products such as nasal strips — potentially thousands of units per pallet.

- **Classification:** operational explanation + anonymised example (generic comparison — do NOT imply these are current Vareya customers).
- **Quotation inputs should support:** pallet storage; bin or shelf storage; estimated total stock units; unknown storage requirement; manual review.

## 7. INFORMATION THAT MAY INITIALLY BE ESTIMATED

**Statement (Raymond):** May be supplied as estimates for an initial assessment: monthly order volume; destination-country distribution; parcel dimensions; parcel weights; number of SKUs; average items per order; required storage capacity or pallets; current fulfilment costs; current shipping costs by destination.

- **Classification:** quotation methodology.
- **Rule:** record confidence separately as exact / estimate / unknown. Do NOT treat an estimate as final verified operational data.

## 8. INFORMATION EVENTUALLY REQUIRED MORE EXACTLY

**Statement (Raymond):** Ultimately needs to be supplied accurately for a reliable quotation: product type; country where the webshop is established; monthly order volume; destination countries and distribution; packed parcel dimensions and weights; SKU count; average items per order; ecommerce software; priorities when selecting a 3PL.

- **Classification:** quotation requirement.
- **Article clarifications:** estimates may support an initial assessment; exact data may be required before a final quotation; additional data may still be requested during qualification.
- **Blocked:** do NOT promise that the scan alone always produces a final quotation.

## 9. CASE-INCOMPLETE-001 (anonymised example)

**Original source contained:** a Shopify webshop; approximately 201–400 monthly orders; basic contact and company information.
**Missing:** product type; establishment country; destination distribution; packed parcel dimensions; parcel weights; number of SKUs; items per order; storage requirement; returns; start date; selection priorities.

- **Classification:** anonymised example.
- **Public lesson (approved):** "A platform and monthly order range may be enough to create a lead record, but they are not enough for a meaningful fulfilment quotation."
- **Privacy:** original name, email and domain are NOT preserved in content files.

## 10. CASE-STRONG-PROFILE-001 (anonymised example)

**Original source described** an anonymised Australian fashion ecommerce business:
- currently uses a UK warehouse; considering European fulfilment;
- sells fashion apparel; approximately 150 SKUs;
- average product weight approximately 500 g; indicative product dimensions approximately 25 × 20 × 5 cm;
- approximately 900 EU orders per month; approximately 800 UK orders per month;
- averages approximately 1.3 items per order;
- uses Shopify; operates primarily B2C;
- identifies the UK, France, Germany and Denmark as important markets;
- asks about WMS, account management, SLAs, returns, integrations, multi-warehouse operations and commercial structure.

**Classification:** STRONG INITIAL OPERATIONAL PROFILE BUT NOT YET FULLY QUOTATION-READY.

**Missing or unclear:** destination percentages; packed parcel dimensions rather than product dimensions; packed parcel weight range; return volume or return percentage; storage volume; pallet or bin requirements; inbound frequency; seasonal peak volume; packaging requirements; current costs; precise multi-warehouse routing requirements; special handling; exact implementation dependencies.

- **Public lesson (approved):** "A detailed operational profile enables a meaningful initial assessment, but a complete quotation may still require packed-parcel, storage, returns and destination-distribution data."
- **Privacy:** do NOT reproduce the original message verbatim in public content.

---

## BLOCKED CLAIMS (remain blocked unless separately approved and evidenced)

1. Vareya has the sharpest rates for parcels below 2 kg.
2. Vareya always offers customised discounted rates for high-volume destination countries.
3. Vareya's AI fulfilment tools reduce operational costs.
4. Every consumer or webshop will pay the same parcel price. (Belongs only to a future vision or cooperative model, NOT the current quotation article.)
