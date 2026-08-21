---
title: "What information does a 3PL need to prepare a fulfilment quotation?"
slug: fulfilment-quotation-requirements
route: /knowledge/fulfilment-quotation-requirements/
status: published
indexable: true
publishedAt: 2026-08-17
reviewedAt: 2026-08-17
reviewer: Jos
primaryQuery: "what information does a 3PL need for a fulfilment quotation"
secondaryQueries:
  - "3PL quotation requirements"
  - "how to prepare for a fulfilment quote"
  - "fulfilment quote checklist"
  - "packed parcel dimensions quotation"
  - "SKU count vs items per order fulfilment"
  - "what determines fulfilment costs"
claimsRegisterVersion: "content/claims-register.md v1.3 (17 August 2026)"
sourceRegister:
  - docs/content-sprint-01/CONTENT-BRIEF.md
  - docs/content-sprint-01/CLAIMS-BOUNDARY.md
  - docs/content-sprint-01/OPERATIONAL-FACT-PACK.md
  - docs/content-sprint-01/HUMAN-CONTRIBUTION-REGISTER.md
  - docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md
  - docs/QUOTATION-WORKFLOW.md
  - docs/AI-FULFILMENT-PROFILE-SPEC.md
  - docs/content-sprint-01/SOURCE-REGISTER.md
primaryCta:
  label: "Start your Free Rate Scan"
  route: /free-rate-scan/
secondaryCta:
  label: "Request a fulfilment quote"
  route: /request-fulfilment-quote/
internalLinkRecommendations:
  - route: /free-rate-scan/
    context: "Primary CTA after the checklist and in the final CTA section"
  - route: /request-fulfilment-quote/
    context: "Secondary CTA for visitors who already have a sufficiently complete profile"
  - route: /eu-fulfilment/
    context: "Supporting page for readers evaluating European fulfilment generally"
  - route: /knowledge/
    context: "Knowledgebank index and related-content module"
editorialNote: "Final consolidated review draft. Human input from Raymond and Jos has been processed. Publication still requires rendered Agent 4 audit and named human approval."
---

# What information does a 3PL need to prepare a fulfilment quotation?

## Direct answer

To prepare a meaningful fulfilment quotation, a 3PL will normally need your product type, business location, monthly order volume, destination-country distribution, packed parcel dimensions and weights, SKU count, average items per order, storage requirement, ecommerce platform and selection priorities. Exact figures are ideal, honest estimates are useful, and unknown values should be marked clearly because they may require follow-up before a final quotation can be prepared.

## Why a quotation needs an operational profile

A fulfilment quotation is not simply a price list. It is an estimate of the work, storage and shipping profile your orders will create: how many parcels are processed, what they contain, how large and heavy they are, where they go, how stock is stored and how orders enter the warehouse system.

A quotation prepared without a sufficiently detailed operational profile will necessarily rely on assumptions. Those assumptions should be visible, so the webshop understands which parts of the quotation may still change.

A store platform and a broad order-volume range can be enough to create a lead record, but not enough to price the operation reliably. Two webshops with the same monthly order volume can require very different storage, picking, packaging and carrier arrangements.

## The nine core information categories

Most fulfilment providers will request much of the information below, although the exact requirements and pricing structure vary by provider.

1. **Product type** — what the webshop sells and whether specialist handling, storage or packaging may be relevant.
2. **Country where the webshop is established** — this may affect contracting, invoicing, inbound arrangements and tax or customs considerations, depending on the proposed setup. Specialist legal or tax requirements should be reviewed separately.
3. **Monthly order volume** — the baseline for capacity and commercial assumptions.
4. **Destination countries and percentage distribution** — where orders actually go, not only where the webshop is willing to ship.
5. **Packed parcel dimensions and weights** — the parcel as it leaves the warehouse, including packaging.
6. **Number of SKUs** — the number of distinct sellable products in the catalogue.
7. **Average items and order lines per order** — the typical number of physical units and distinct SKUs handled for one shipment.
8. **Storage requirement** — pallets, bins, shelving or another practical estimate of the space needed.
9. **Ecommerce platform and selection priorities** — how orders enter the operation and what matters most when choosing a 3PL.

## Quotation-input table

| Information | Why it matters | Initial confidence | Common mistake | Possible quotation impact |
|---|---|---|---|---|
| Product type | Influences handling, storage, packaging and carrier suitability | Category should be exact; further detail may follow | Giving a category that hides fragile, high-value or specialist characteristics | Incorrect handling or risk assumptions |
| Business country | May influence contracting, invoicing and inbound arrangements | Exact | Naming the warehouse country instead of the legal entity's country | Incorrect setup assumptions |
| Monthly order volume | Supports capacity and commercial planning | Historic figure or clearly labelled forecast | Using a peak month as the normal average | Wrong capacity or pricing assumptions |
| Destination distribution | Influences carrier mix, routing and destination-specific pricing | Historic report, invoice, forecast or unknown | Saying “worldwide” without a country split | Quotation based on the wrong destination mix |
| Packed dimensions and weights | Carriers and warehouse processes use the packed parcel | Exact is ideal; estimate is useful; unknown requires follow-up | Providing product dimensions instead of packed-parcel dimensions | Understated shipping or handling assumptions |
| SKU count | Influences storage layout, inventory complexity and pick locations | Exact or well-founded estimate | Counting variants inconsistently | Incorrect storage and pick-density assumptions |
| Items and order lines | Influence pick actions, checks, packaging and processing time | Historic average or estimate | Reporting orders only and ignoring order composition | Pick-and-pack workload understated |
| Storage requirement | Determines the physical space and storage method required | Pallets, bins, stock units, estimate or unknown | Giving stock units without product dimensions or storage type | Too much or too little space reserved |
| Platform and priorities | Influences the integration path and the service design | Platform exact; priorities ranked or described | Leaving priorities unstated | Provider optimises for the wrong outcome |

## Monthly volume and destination distribution

Monthly order volume shows the scale of an operation, but not its full shipping profile. Two webshops can each ship 1,000 orders per month and still require different quotations when one sends most parcels to one or two countries and the other distributes them across many markets.

The most reliable country split comes from historic shipment data. A carrier invoice or shipping report can also provide useful evidence. A realistic current-sales or launch forecast can support an initial assessment, but it must be identified as a forecast rather than historic demand.

A useful quotation profile should therefore record the evidence basis for the destination split:

- historic shipping report;
- carrier invoice or carrier report;
- current-sales forecast;
- launch forecast;
- unknown.

Seasonal peaks should be shown alongside the normal monthly figure, not used as a substitute for it.

## Packed parcel dimensions and weights

A quotation should use the parcel as it actually leaves the warehouse: packed, protected, labelled and ready for the carrier. Packaging adds size and weight. Carriers may also use dimensional weight, so product dimensions alone can produce a misleading shipping assumption.

Exact packed-parcel data is best. A realistic estimate is still useful for an initial assessment. If the figure is unknown, it should be marked as unknown and followed up before a final quotation is prepared.

## SKU count, items, order lines and pick actions

These terms describe different aspects of the operation:

- **SKU count** is the total number of distinct sellable products.
- **Items per order** is the average number of physical units in one shipment.
- **Order lines** is the average number of distinct SKUs in one order.
- **Pick actions** is the number of physical picks required to complete an order.
- **Batch-picking suitability** depends on recurring order patterns, not on total SKU count alone.

A total SKU count mainly affects storage and pick-location complexity. Items and order lines per order more directly influence the work required for an individual shipment. A catalogue with many SKUs and mostly single-item orders is a different operation from a smaller catalogue with multi-item orders.

An order count alone therefore does not show the full workload.

## Storage requirements

Storage density varies significantly by product. A pallet of large products may hold only a few units, while a pallet of compact products may hold many thousands. The same stock count can therefore require a very different physical footprint.

A useful first assessment may use:

- estimated pallet positions;
- bin or shelf storage;
- estimated stock units;
- a clearly marked unknown value for manual review.

## Ecommerce platform and operational priorities

The ecommerce platform shapes the integration path between the webshop and the fulfilment operation. The quotation also benefits from knowing what the webshop values most, such as transparent pricing, carrier choice, delivery speed, returns, customer support, flexibility, integrations or international reach.

Shopify integration is available. Amazon FBM fulfilment is available. Specific integration, onboarding and operational requirements are confirmed during qualification.

## What may initially be estimated

An initial assessment can often begin with estimates for:

- monthly order volume;
- destination-country distribution;
- parcel dimensions and weights;
- SKU count;
- average items and order lines;
- storage requirement;
- current fulfilment costs;
- current shipping costs by destination.

Every value should be labelled **exact**, **estimate** or **unknown**. A forecast-based assessment should show the assumptions used.

## What ultimately needs to become accurate

Before a final quotation can be relied upon, the provider may need more accurate information about:

- product type;
- legal business location;
- monthly order volume;
- destination distribution;
- packed dimensions and weights;
- SKU count;
- items and order lines;
- platform and integration requirements;
- service priorities;
- storage and returns requirements where relevant.

This does not mean a pre-launch brand has no route forward. A start-up or new-market profile can be assessed using a realistic forecast, provided the quotation or price indication clearly states its assumptions and explains how actual volumes may affect the final setup.

## Illustrative incomplete profile

*Composite anonymised example. It does not describe an identifiable current or former Vareya customer.*

A Shopify webshop supplied a broad monthly order range and basic contact information. Product type, business country, country split, packed dimensions and weights, SKU count, items per order, storage requirement, returns needs, timing and selection priorities were missing.

**Lesson:** a platform and order-volume range may be enough to register an enquiry, but not enough for a meaningful fulfilment quotation.

## Illustrative stronger profile

*Composite anonymised example. Details and figures have been generalised to reduce identifiability.*

An international apparel brand supplied a much fuller profile: approximately 100–200 SKUs, significant monthly UK and EU order volumes, a low average number of items per order, a recognised ecommerce platform and several important European markets. It also asked relevant questions about warehouse software, account structure, SLAs, returns, integrations and coordination with another warehouse.

Important details still required clarification, including destination percentages, packed-parcel data, return volumes, storage method, seasonal peaks, packaging requirements and the exact multi-location operating assumptions.

**Lesson:** a strong operational profile supports a meaningful first assessment, but a final quotation may still require specific shipping, storage, returns and implementation data.

## When a quotation is not yet reliable

A final quotation may not yet be reliable when:

- monthly volume is unknown and no realistic forecast has been provided;
- the destination mix is described only as “worldwide”;
- product dimensions are supplied instead of packed-parcel dimensions;
- storage needs are unknown and no stock estimate is available;
- items or order lines are not understood;
- the platform or integration route is unclear;
- product, returns or specialist requirements remain unresolved;
- the service priorities are not stated.

The appropriate first response is then an initial fit assessment with visible assumptions and a clear list of missing information—not a final quotation presented as complete.

## Questions to ask when comparing 3PL quotations

Before comparing prices, check whether the quotations were built on comparable information:

- What is included in the stated rate?
- Which costs sit outside that rate?
- Which inputs were treated as exact and which as estimates?
- Which destination mix was assumed?
- Were packed-parcel dimensions used?
- How are storage, packaging, returns, inbound work and specialist handling treated?
- What changes when the actual volume or country mix differs from the forecast?
- When and how is the quotation reviewed?

Vareya’s fulfilment rates are fixed and all-in per agreement—no hidden costs beyond what the agreement sets out. The agreement and quotation should make the included scope, assumptions and exclusions clear.

## Quotation-readiness checklist

Mark each item **exact**, **estimate** or **unknown**:

- [ ] Product type and relevant handling characteristics
- [ ] Country where the webshop is established
- [ ] Monthly order volume and seasonal peak
- [ ] Destination countries and percentage distribution
- [ ] Evidence basis for the destination split
- [ ] Packed parcel dimensions and weights
- [ ] Number of SKUs
- [ ] Average items and order lines per order
- [ ] Storage requirement or stock estimate
- [ ] Ecommerce platform and integration context
- [ ] Returns requirement
- [ ] Priorities when selecting a 3PL
- [ ] Desired start date

Unknown values are valid. They simply show which questions require follow-up before a final quotation can be prepared.

## How Vareya reviews a profile

Vareya is generally best suited to brands shipping 500 or more orders per month. Each submission is reviewed individually. The assessment considers data completeness, product and parcel fit, destination mix, operational complexity, platform, storage and service requirements. Product fit is confirmed during qualification.

Profiles based mainly on forecasts, products requiring specialist handling, high-value products or complex operating requirements may require manual review. The assessment does not automatically accept or reject a business.

Brands below the preferred volume may still submit the Free Rate Scan using their actual figures or a clearly labelled forecast. Vareya can then confirm by email whether an initial assessment or another quotation route is appropriate.

## Frequently asked questions

### Do I need exact figures to start?

No. Honest estimates can support an initial assessment. Unknown values should be marked clearly. More accurate data may be required before a final quotation is prepared.

### Can a pre-launch webshop request an assessment?

Yes. A pre-launch or start-up profile can use a realistic forecast. The first response should make clear which conclusions are based on assumptions and which information is still needed.

### Why is destination distribution so important?

Because the same total order volume can produce a different shipping profile when it is concentrated in a few countries or distributed across many markets.

### Why does storage matter when I know my stock count?

Because product size and storage method determine how much physical space the stock requires. The same number of units can occupy very different amounts of warehouse space.

### Does the ecommerce platform matter?

Yes. It affects how order and stock information connect to the fulfilment operation. Shopify integration is available, and Amazon FBM fulfilment is available.

### Can returns be included?

Returns handling is available. Contact Vareya to discuss the required returns process.

### What happens after I submit the Free Rate Scan?

Vareya reviews the profile and sends an initial fit response by email within one working day. The response can summarise what has been understood, the apparent fit, the confidence of the information, missing details, quotation readiness, important assumptions and the appropriate next step. This is not an automatic or guaranteed final quotation.

## Start your Free Rate Scan

The Free Rate Scan helps build the operational profile needed for an initial fulfilment and shipping assessment. It records the available information, including whether important figures are exact, estimated or unknown.

Completing the scan does not display an automatic price and does not guarantee acceptance or a final quotation. Vareya reviews the submission and explains by email what is sufficiently clear, what remains open and what the next step should be.

**[Start your Free Rate Scan](/free-rate-scan/)**

Already have a complete operational profile? **[Request a fulfilment quote](/request-fulfilment-quote/)**.

## Sources

1. Shopify — [Setting up shipping and order fulfilment](https://help.shopify.com/en/manual/fulfillment/setup), retrieved 17 August 2026.
2. WooCommerce / Automattic — [Setting up Shipping Zones](https://woocommerce.com/document/setting-up-shipping-zones/), retrieved 17 August 2026.
3. European Commission — [VAT One Stop Shop](https://vat-one-stop-shop.ec.europa.eu/index_en), retrieved 17 August 2026.
4. UK Warehousing Association — [The Voice of Warehousing](https://www.ukwa.org.uk/), retrieved 17 August 2026.
5. FedEx — [What is Dimensional Weight?](https://www.fedex.com/en-us/shipping/packaging/what-is-dimensional-weight.html), retrieved 17 August 2026.
6. UPS — [Package Dimensions, Size Limits and Weight Guide](https://www.ups.com/us/en/support/shipping-support/shipping-dimensions-weight), retrieved 17 August 2026.

## Human contribution and review

This review draft combines approved Vareya claims, source research and operational input supplied by Raymond and Jos on 17 August 2026. The examples are composite and anonymised. Identifiable lead information is not included.

**Human review pending.** Publication requires a named reviewer, review date, rendered Agent 4 audit and explicit release approval.
