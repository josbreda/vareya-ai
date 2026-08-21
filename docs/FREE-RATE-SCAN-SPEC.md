# Free Rate Scan — Specification (with proposed field extensions)
**Status:** LIVE spec documented + 8 proposed fields — NOT IMPLEMENTED
**Sources:** `content/fulfilment-scan.md` (page copy), `docs/fulfilment-scan.md` (technical spec), Claims Register v1.2
**Last updated:** 17 August 2026 (Content Sprint 01 review)

---

## 1. Live scan — current state

- Route: `/fulfilment-scan/` — primary conversion action, 5-step wizard.
- Page copy spec: `content/fulfilment-scan.md` (approved-draft). Technical spec: `docs/fulfilment-scan.md` (notes a 6-step implementation with a results screen).
- **Known discrepancy to resolve at implementation:** the technical spec describes six steps (with a calculated fit result); the approved page copy describes five steps + confirmation page. The claims-relevant wording always comes from the page copy / register.
- Honeypot, UTM persistence, server-side submission ID, Supabase `leads` table with `scan_answers` JSONB, HubSpot sync downstream, PII-free analytics.

### Current fields

| Step | Field | Required | Notes |
|---|---|---|---|
| 1 Business & volume | Company name, website, company country, monthly order volume, number of SKUs | yes | Volume/SKUs: "approximate figure is fine" |
| 2 Products | Product category, typical parcel dimensions (combined L+W+H), parcel weight (optional), special handling (optional) | mostly | Weight optional |
| 3 Current operation | Ecommerce platform, Amazon FBM y/n, current ship-from, returns required y/n | yes | |
| 4 Target markets & timing | Target markets (multi-select, approved list + "Other destination"), desired start date (optional), comments (optional) | markets yes | No % distribution per market |
| 5 Contact | Full name, work email, phone (optional), privacy acknowledgement | name/email/checkbox yes | |

### Nine quotation inputs vs scan coverage (from CLAIMS-BOUNDARY §4.1)

| Raymond input | In scan today? |
|---|---|
| 1 Product type | ✅ (category + optional detail) |
| 2 Webshop country | ✅ |
| 3 Monthly order volume | ✅ (band, free text) |
| 4 Destination countries + % distribution | ⚠️ countries only, no percentages |
| 5 Parcel dimensions and weights | ⚠️ combined dims, weight optional |
| 6 Number of SKUs | ✅ |
| 7 Average items per order | ❌ |
| 8 Storage capacity / pallets | ❌ |
| 9 Ecommerce software + priorities | ⚠️ platform yes, priorities only via comments |

---

## 2. Proposed new fields (Raymond operational review, 17 August 2026)

**Rule: PROPOSED ONLY — no implementation until the content sprint reaches Phase 4 and the owner approves. No scan copy change, no HubSpot mapping change, no analytics change yet.**

| # | Proposed field | Placement (if approved) | Why | Claims/PII notes |
|---|---|---|---|---|
| PF-1 | B2C/B2B profile | Step 1 | Order composition and packaging differ fundamentally between B2C parcels and B2B shipments | No claim impact; pure segmentation |
| PF-2 | Packed parcel dimensions | Step 2 (replace/augment current dims field) | Carriers price the packed parcel, not the product; helps separate product vs packed vs outbound measurements | Educational only; no claims |
| PF-3 | Average order lines | Step 1 or 3 | Distinct from SKU count and items per order (Raymond technical correction); feeds pick-action estimation | No claims |
| PF-4 | Bin versus pallet storage | New storage question | Storage-density assumption drives space and cost | No capacity claims allowed |
| PF-5 | Current fulfilment costs | Optional, Step 3 | Helps Vareya understand the commercial baseline; sensitive commercial data — optional + internal use | Private lead information class |
| PF-6 | Current shipping costs by destination | Optional, Step 4 | Baseline for destination mix analysis; sensitive — optional + internal use | Private lead information class |
| PF-7 | Multi-warehouse requirement | Step 3 y/n | Register excludes multi-warehousing claims; the scan may ask, Vareya may not claim multi-warehouse capability | Ask ≠ claim; keep unclaimed |
| PF-8 | Peak volume | Step 1 (next to monthly volume) | Capacity planning; complements average volume | No claims |
| PF-9 | `destination_data_basis` (Jos A2) | Step 4 (destination data) | Enum: historical_report / carrier_invoice / current_sales_forecast / launch_forecast / unknown. Shows evidence quality behind the destination split | Invoice upload NOT mandatory; any future document upload needs a separate secure, privacy-reviewed implementation |

**Decision gate:** each field needs (a) owner approval, (b) page-copy update in `content/fulfilment-scan.md`, (c) Supabase `scan_answers` mapping, (d) HubSpot task-body inclusion where relevant, (e) analytics review (no PII). PF-5/PF-6 require an explicit privacy decision because they collect cost data.

**Raymond backing (source §7–§8):** Raymond explicitly lists as initially estimable: monthly order volume; destination-country distribution; parcel dimensions; parcel weights; SKU count; average items per order; storage capacity or pallets; current fulfilment costs; current shipping costs by destination (→ supports PF-5/PF-6 as optional fields). Ultimately required exactly for a reliable quotation: product type; establishment country; volume; destination distribution; packed parcel dims and weights; SKU count; items per order; ecommerce software; selection priorities (→ supports PF-2 packed dims, PF-3 order lines, PF-8 peak volume as completion aids). Unknown storage requirement → manual review (→ supports PF-4 bin-vs-pallet).

---

## 3. Estimate vs exact — scan data policy (Raymond, 17 August 2026)

- Confidence is recorded per figure as exact / estimate / unknown; an estimate is never treated as verified operational data.
- Estimates may support an initial assessment; exact data may be required before a final quotation; additional data may still be requested during qualification.
- The scan alone does NOT always produce a final quotation — the article and scan copy must not promise otherwise.

---

## 4. Invariant rules (any future version)

1. No price display, no instant-quote implication, no savings claim (register exclusions).
2. Confirmation copy: approved post-submission commitment, verbatim.
3. Target-market options: approved destination list + "Other destination" only.
4. PII-free analytics; privacy checkbox; honeypot.
5. Primary CTA label: `Check your EU fulfilment fit`.
6. Any claim the scan appears to make must trace to the Claims Register.

## 5. Route change (Jos, 17 August 2026 — implementation Phase 4)

- **Primary route:** `/free-rate-scan/` becomes the canonical scan URL used in all CTAs, articles and internal links.
- **`/fulfilment-scan/`** is preserved ONLY as a redirect to `/free-rate-scan/`.
- **Claims Register change required:** the conversion rule ("routing to /fulfilment-scan/") must be updated to `/free-rate-scan/` before the route change goes live. All page-copy files (`content/*.md`) and the manifest (`content-manifest.json`) get updated routes at implementation.
- No production route change without owner approval (deploy rule).
