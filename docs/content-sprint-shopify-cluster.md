# Shopify cluster — sprint plan & status (2026-10-08/09)

Purpose: make `/shopify-fulfilment-europe/` the central entry point for Shopify brands, supported by a consistent cluster of guides (comparison, integration, onboarding, costs, returns, switching, product data) — per Raymond's brief for vareya.ai.

## Cluster map

| Topic | URL | Status |
|---|---|---|
| Pillar: Shopify fulfilment in Europe | /shopify-fulfilment-europe/ | Live (rewritten in PR #35); **this branch** adds a guide link block + heading rename |
| Comparison: how to compare 3PLs | /knowledge/shopify-3pl-europe-how-to-compare/ | Live |
| Comparison: choose a fulfilment partner | /knowledge/compare-fulfilment-partners/ | Live |
| Integration: what to look for | /knowledge/shopify-fulfilment-europe-what-to-look-for/ | Live |
| Integration: 3PL evaluation checklist | /knowledge/shopify-fulfilment-europe-3pl-checklist/ | **NEW — review draft (B2, this branch)** |
| Onboarding | /knowledge/how-onboarding-works-at-vareya/ | Live |
| Costs | /knowledge/fulfilment-cost-drivers/ | Live |
| Returns | /knowledge/ecommerce-returns-centre-europe/ | Live |
| Switching providers | /knowledge/switching-fulfilment-providers-europe/ | Live |
| US & UK brands guide | /knowledge/eu-fulfilment-netherlands-us-uk-brands/ | **NEW — review draft (B1, this branch)** |
| Product data (barcodes, SKU data) | — | GAP — write only after evidence (data handling not yet confirmed) |
| Direct entry UK (operator deep-dive) | — | Claim already live & approved; full article pending 14 operational questions |
| GEO service pages (15 markets) | /shopify-fulfilment-europe-for-*-stores/, /european-fulfilment-for-*-brands/ | Live; link to new guides at publication |

## What this sprint implements

1. **Two new knowledge guides** (review drafts, `indexable: false`, `publishedAt: null`):
   - **B1 `eu-fulfilment-netherlands-us-uk-brands`** — two-movements model (bulk inbound vs per-order outbound), customs questions first, Breda operating base, PostNL main NL carrier, UK route into the Royal Mail domestic network (conditional wording), carrier selection, US/UK fit checklist, FAQ.
   - **B2 `shopify-fulfilment-europe-3pl-checklist`** — five-check comparison framework (WMS & Shopify connection, carrier model, all-in scope, cut-off/weekend, support & SLAs) with per-check questions, a working checklist, and Vareya's position per check.
2. **Pillar page** — heading renamed to "Related fulfilment pages and guides"; 7 guide links added (3PL comparison, what to look for, checklist, onboarding, switching, cost drivers, US/UK guide).

## Publication gate (publish together)

The pillar links to **both** new guides. Do not merge the pillar link block before the guides are approved.

To publish:
1. Approve the two articles (review package: `docs/shopify-cluster-review-2026-10-09/`).
2. In `src/content/knowledge.ts`: set `indexable: true` and fill `publishedAt` / `publishedLabel` for both.
3. Merge → sitemap picks them up automatically. Verify sitemap + robots after deploy.

## Measurement

- Both guides CTA to `/free-rate-scan/`; secondary links to the pillar.
- Verify knowledge-page view events post-launch in the existing analytics setup.
- Search performance in GSC after indexation (allow ~2 weeks before judging).

## Follow-ups (not in this branch)

- Product data guide — after barcode/SKU-data evidence is confirmed with Operations.
- Direct entry UK article — after operational answers; the public claim is already approved and live.
- Optional improvement: per-article "related guides" selection (the related section currently auto-lists all articles).
- Add links from relevant US/UK GEO pages to the two new guides at publication.

All public wording in the new content comes from `src/content/claims.ts` (Claims Register v1.7).
