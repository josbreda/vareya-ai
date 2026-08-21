# Content Sprint 01 — Goodie Prompt Pack (article-mapped)
**Article:** What information does a 3PL need to prepare a fulfilment quotation? (`/knowledge/fulfilment-quotation-requirements/`)
**Status:** **ACTIVE since 2026-08-17 (publication date).** Import-ready: load the 20 prompts from `marketing/content-sprint-01-prompts.csv` into Goodie, in article order (cs01-p-001 … cs01-p-020).
**Source CSV:** `marketing/content-sprint-01-prompts.csv` (20 prompts; this pack maps them to the article's answer components)
**Rule:** no PII, no scan answers, no lead data is ever sent to Goodie.

---

## Prompt → article component map

| # | Topic (mission list) | Goodie prompt (CSV id) | Expected answer component from the article |
|---|---|---|---|
| 1 | what information does a 3PL need for a quote | cs01-p-001 | Direct Answer + nine-input list |
| 2 | what information does a 3PL need for a quote | cs01-p-002 | Nine inputs as the question list + table |
| 3 | 3PL quotation checklist | cs01-p-020 | Quotation checklist (article part 11) |
| 4 | 3PL quotation checklist | cs01-p-006 | Fair-quotation checklist (Raymond B2 basis) |
| 5 | fulfilment quotation requirements | cs01-p-007 | Exact / estimate / unknown convention |
| 6 | fulfilment quotation requirements | cs01-p-018 | Volume fit: approved volume sentence (verbatim) |
| 7 | what determines fulfilment costs | cs01-p-003 | Cost-driver ranking (volume / parcel / destination mix) |
| 8 | what determines fulfilment costs | cs01-p-008 | Volumetric weight + small-parcel thresholds |
| 9 | destination distribution shipping rates | cs01-p-004 | Destination-mix insight: "Two webshops with the same total monthly order volume can have different shipping profiles…" |
| 10 | destination distribution shipping rates | cs01-p-013 | Percentage-split method from order data |
| 11 | packed parcel dimensions quotation | cs01-p-007 | Product vs packed vs outbound parcel measurement levels |
| 12 | packed parcel dimensions quotation | cs01-p-017 | Small-parcel definition (900 mm / 600 mm) |
| 13 | SKU count versus items per order | cs01-p-011 | SKU → storage/pick-location complexity (five-concept separation) |
| 14 | SKU count versus items per order | cs01-p-012 | Items + order lines → pick actions per shipment |
| 15 | storage requirements for a 3PL | cs01-p-009 | Pallet estimation + bin vs pallet storage (Raymond density example) |
| 16 | storage requirements for a 3PL | cs01-p-010 | Storage pricing models — agreed per agreement (no fake price table) |
| 17 | Shopify fulfilment quotation | cs01-p-015 | ShipHero WMS fully integrated with Shopify (register wording) |
| 18 | Shopify fulfilment quotation | cs01-p-016 | WooCommerce handover — confirmed during qualification |
| 19 | how to compare 3PL quotations | cs01-p-005 | Align-assumptions-before-numbers framework |
| 20 | how to compare 3PL quotations | cs01-p-019 | Partner-selection decision framework |

## Activation gate

- Not imported into `docs/aeo/goodie-prompts.csv` until the article passes Agent 4 audit AND the owner approves publication.
- P0 prompts (1, 2, 3, 5, 6, 7, 9, 11, 13, 15, 17, 19, 20) activate first; P1/P2 afterwards.
- Every answer component must be re-verified against the RENDERED article at activation time (rendered claims audit result overrides this pack).
