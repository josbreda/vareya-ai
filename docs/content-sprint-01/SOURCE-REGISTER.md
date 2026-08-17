# Content Sprint 01 — Source Register
**Topic:** What information does a 3PL need to prepare a fulfilment quotation?
**Author:** Agent 1 (Search & Source Research)
**Retrieval date:** 17 August 2026
**Verification:** every URL below was extracted via web_extract on 17 August 2026 and re-verified by the orchestrator (HTTP 200 or successful re-extraction). Excluded sources are listed at the bottom.

---

## Verified sources

### 1. Setting up shipping and order fulfillment
- **Organisation:** Shopify
- **URL:** https://help.shopify.com/en/manual/fulfillment/setup
- **Retrieval date:** 17 August 2026
- **Factual point supported:** Merchants should configure package dimensions and weights for accurate carrier costs, may set different rates for products such as oversized items, and can connect fulfilment services to handle storage and shipping.
- **Authority level:** Platform documentation
- **Possible bias:** Shopify-specific guidance promoting effective use of the Shopify ecosystem; not neutral 3PL research.
- **Permitted use:** Supporting citation
- **Supports Vareya inputs:** product type; parcel dimensions/weights; ecommerce software + priorities

### 2. Setting up Shipping Zones
- **Organisation:** WooCommerce / Automattic
- **URL:** https://woocommerce.com/document/setting-up-shipping-zones/
- **Retrieval date:** 17 August 2026
- **Factual point supported:** WooCommerce defines shipping zones as geographical areas — countries, continents, regions or postcodes — that determine which shipping methods and rates customers see.
- **Authority level:** Platform documentation
- **Possible bias:** Product-specific documentation; not independent quotation research.
- **Permitted use:** Supporting citation
- **Supports Vareya inputs:** destination mix; ecommerce software + priorities

### 3. VAT One Stop Shop
- **Organisation:** European Commission
- **URL:** https://vat-one-stop-shop.ec.europa.eu/index_en
- **Retrieval date:** 17 August 2026
- **Factual point supported:** Cross-border B2C ecommerce VAT affects sellers, platforms, postal operators and couriers, with rules depending on where the seller is established, where goods are consumed and whether goods are imported into the EU.
- **Authority level:** Government/regulator
- **Possible bias:** Official EU framing emphasises simplification benefits; underlying VAT/territorial rules are authoritative.
- **Permitted use:** Supporting citation
- **Supports Vareya inputs:** webshop country; destination mix

### 4. The Voice of Warehousing
- **Organisation:** UK Warehousing Association (UKWA)
- **URL:** https://www.ukwa.org.uk/
- **Retrieval date:** 17 August 2026
- **Factual point supported:** UKWA is Britain's warehousing trade organisation and maintains a member directory for finding warehouse, logistics and specialist supplier partners.
- **Authority level:** Association
- **Possible bias:** Member advocacy; professional warehousing sector framing.
- **Permitted use:** Background
- **Supports Vareya inputs:** comparing quotations (partner selection); storage pallets (conceptual only)

### 5. What is Dimensional Weight?
- **Organisation:** FedEx
- **URL:** https://www.fedex.com/en-us/shipping/packaging/what-is-dimensional-weight.html
- **Retrieval date:** 17 August 2026
- **Factual point supported:** Shipping charges may be based on actual weight or dimensional weight — whichever is greater — so accurate package dimensions and weight are material to a quotation.
- **Authority level:** Industry
- **Possible bias:** Commercial carrier guidance; US-specific divisor and units — do not present as a universal European formula.
- **Permitted use:** Supporting citation
- **Supports Vareya inputs:** parcel dimensions/weights; product type (packaging effects)

### 6. Package Dimensions, Size Limits and Weight Guide
- **Organisation:** UPS
- **URL:** https://www.ups.com/us/en/support/shipping-support/shipping-dimensions-weight
- **Retrieval date:** 17 August 2026
- **Factual point supported:** Checking dimensions and weight up front avoids additional charges; measurement-correction charges exist; dimensional weight can determine cost when a parcel is large relative to its weight.
- **Authority level:** Industry
- **Possible bias:** Carrier-authored and commercially motivated; limits and divisors vary by rate type and market.
- **Permitted use:** Supporting citation
- **Supports Vareya inputs:** parcel dimensions/weights; product type (heavy/large/irregular items)

### 7. Request a Fulfillment Quote from ShipBob
- **Organisation:** ShipBob
- **URL:** https://www.shipbob.com/quote/
- **Retrieval date:** 17 August 2026
- **Factual point supported:** The first step of ShipBob's quotation funnel asks prospects to distinguish outsourced D2C fulfilment from warehouse-management software — the operating model is an early scoping input.
- **Authority level:** Competitor
- **Possible bias:** Lead-gen funnel; not independent evidence of best practice.
- **Permitted use:** Competitor gap analysis only — do not copy wording
- **Supports Vareya inputs:** ecommerce software + priorities

### 8. 3PL Fulfillment Pricing for D2C Brands
- **Organisation:** ShipMonk
- **URL:** https://www.shipmonk.com/pricing
- **Retrieval date:** 17 August 2026
- **Factual point supported:** Storage is affected by product size, sales and quantity; SKUs are kept separately; fulfilment fees adjust to order volume; projected monthly volume and first-item pick fees inform the monthly minimum.
- **Authority level:** Competitor
- **Possible bias:** Promotional pricing/sales material; claims not independently validated.
- **Permitted use:** Competitor gap analysis only — do not copy wording
- **Supports Vareya inputs:** product type; order volume; parcel dims/weights; SKU count; items per order; estimation-vs-exact; comparing quotations

---

## Coverage map (nine inputs vs sources)

| Vareya input | Verified support |
|---|---|
| 1 Product type | Shopify; FedEx; UPS (ShipMonk competitor-only) |
| 2 Webshop country | European Commission |
| 3 Monthly order volume | ShipMonk (competitor-only) — article may need one more non-competitor source at drafting |
| 4 Destination mix | WooCommerce; European Commission |
| 5 Parcel dims + weights | Shopify; FedEx; UPS (ShipMonk competitor-only) |
| 6 SKU count | ShipMonk (competitor-only) |
| 7 Items per order | ShipMonk (competitor-only) |
| 8 Storage / pallets | UKWA + Shopify conceptual background only — flagged: article must treat pallet guidance as Vareya operational insight, not external fact |
| 9 Platform + priorities | Shopify; WooCommerce; ShipBob + ShipMonk (competitor-only) |
| Estimation vs exact | ShipMonk (competitor-only); FedEx/UPS support measurement accuracy angle |
| Comparing quotations | UKWA background; competitor pages gap-analysis only |

**Flag:** inputs 3, 6, 7 currently rely on competitor pages for external corroboration. The publication standard (≥3 authoritative external sources) is still met via Shopify, WooCommerce, European Commission, FedEx, UPS. Human input (ops) is the authoritative source for inputs 3/6/7/8 in Vareya's own framing.

## Excluded sources

| Candidate | URL | Reason |
|---|---|---|
| "What is volumetric weight" — DHL Global | https://www.dhl.com/discover/en-global/logistics-advice/essential-guides/what-is-volumetric-weight | Page not found / not retrievable on 17 August 2026 — not a valid source |

## Citation rules for the drafted article

- Cite by organisation + linked title + retrieval date (17 August 2026).
- Competitor sources (7, 8) may inform structure and gaps but must NOT be cited in the published article.
- Carrier sources support the parcel-measurement education angle, not Vareya service claims.
- The European Commission source supports only the neutral statement that cross-border ecommerce tax rules depend on where the seller is established and where goods go — it does NOT make Vareya a tax advisor.
