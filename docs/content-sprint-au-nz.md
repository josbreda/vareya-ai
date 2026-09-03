# Content Sprint AU/NZ — European Fulfilment for Australian & New Zealand Brands

**Date:** 3 September 2026
**Repo:** josbreda/vareya-ai, branch `content/au-nz-fulfilment-pages` (base: origin/main @ 166e2c7)
**Claims basis:** `content/claims-register.md` v1.6 (01-09-2026) — sole source of service claims
**Owner mandate:** MASTEROPDRACHT Vareya contentsprint AU/NZ (Jos, 03-09-2026) — autonomous publication + live verification

## 1. Goal

Grow organic + AI-search visibility for AU/NZ corridor queries:
fulfilment from Europe to Australia / New Zealand, European fulfilment for Australian / NZ brands, EU fulfilment centre for AU/NZ brands, European 3PL for AU/NZ brands, shipping ecommerce orders from Europe to AU/NZ.

## 2. Page architecture — three distinct intents, no page farm

| # | Slug | Primary intent | Angle |
|---|---|---|---|
| 1 | `/european-fulfilment-for-australian-brands/` | Commercial | AU brand selling to EU customers: hold stock in Breda vs ship every order from Australia. Inbound corridor AU→EU. |
| 2 | `/european-fulfilment-for-new-zealand-brands/` | Commercial | Same decision for NZ brands. Inbound corridor NZ→EU. |
| 3 | `/shipping-from-europe-to-australia-new-zealand/` | Informational→commercial | The reverse stream: fulfilling orders FROM Europe TO AU/NZ consumers (EU brands and Vareya clients shipping down under). Customs/GST/biosecurity per destination. |

Pages 1 and 2 share the decision framework but each carries its own corridor facts, customs/GST specifics (ABF/ATO vs NZ Customs/IRD), biosecurity rules (DAFF vs MPI) and FAQ set. Page 3 covers the outbound stream that neither 1 nor 2 does. No existing page covers this corridor (verified: only destination-list mentions of Australia/New Zealand exist).

## 3. Mandatory content elements (per masteropdracht)

- Answer the search intent immediately (Quick answer block)
- Fulfilment happens from Breda, NL — explicit on every page
- Explain: holding stock in Europe vs shipping individual products from AU/NZ to EU consumers (decision table on pages 1+2)
- Honest benefits AND limitations ("What we will not promise" register wording; no timing/price/superlative claims)
- Order flow: receiving → storage → picking → packing → carrier hand-off → tracking → returns (corridor table)
- Customs, import and taxes with official sources only; Vareya is NOT a tax/customs adviser
- Distinguish: selling to European customers vs shipping from Europe to AU/NZ
- Brand/parcel fit: 500+ orders/month, cosmetics/supplements/phone cases/accessories/smaller parcels, <900mm combined / <600mm length
- "Good fit / may not be a fit" section (fit thresholds only — never claim specialist capabilities unavailable)
- Concrete FAQs; FAQPage schema only where visible FAQ matches exactly (FAQ component does this)
- Scan-first CTA: primary button "Check your EU fulfilment fit" → `/free-rate-scan/`
- Low-threshold CTA line (masteropdracht): "Share your current order profile and destination mix for an initial fulfilment fit assessment." — placed as supporting copy under the scan CTA, never as a mandatory-call step.

## 4. Claims discipline (register v1.6)

- All capability sentences via `CAPABILITIES` constants from `src/content/facts.ts` (verbatim).
- Carriers: register wording incl. Royal Mail. NO "DHL Express" as sole framing unless listing carriers (register: "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail."). Masteropdracht's carrier list is a subset — register wins (skill rule 1).
- NO "operational since 2016" on pages: register v1.6 requires historical evidence before any public claim (INTERNAL_OWNER_CONFIRMED only). Masteropdracht lists it as allowed fact, but register is canonical → leave it out, note in report.
- NO delivery-time guarantees, NO rates, NO superlatives, NO AU/NZ warehouses, NO single-warehouse-count marketing, NO own-WMS, NO GST amounts without dated official source, NO tax/legal advice, NO Thuiswinkel, NO existing cooperative.
- Variable topics: "may", "typically", "depending on destination, product and carrier", "subject to qualification".
- `SPECIALIST_REQUIREMENTS_FALLBACK` for customs/tax/specialist handling questions (register public-facing fallback).
- CI guard: `scripts/prohibited-claims-scan.sh` must PASS.

## 5. SEO / AEO integration

- `PAGE_META` entries in `src/content/pages.ts` (title, description, canonical, updatedAt 2026-09-03) → auto-sitemap inclusion.
- Per-page `metadata` export: title, description, alternates.canonical, openGraph (title, description, url, type, locale en_GB).
- Breadcrumb nav in hero (site pattern).
- `public/llms.txt`: add 3 service links; fix stale `/fulfilment-scan/` → `/free-rate-scan/` (route rule v1.3).
- `docs/aeo/goodie-prompts.json`: add AU/NZ corridor topics (AEO visibility prompts).
- Internal links IN: Footer "Australian Brands" + "New Zealand Brands"; related-pages blocks on new pages link out to home, /eu-fulfilment/, /eu-fulfilment-us-brands/, /eu-fulfilment-uk-brands/, /eu-fulfilment-south-korean-brands/, shopify, cosmetics-supplements. Link FROM the new pages to each other (shipping page ↔ brand pages).
- Footer: add the two brand pages (site pattern from South Korean Brands).

## 6. Research & sources

- Parallel subagents: AU corridor (ABF/ATO/DAFF/carriers), NZ corridor (NZ Customs/IRD/MPI/carriers), search-intent audit.
- Every source URL verified before inclusion (curl + web_extract fallback).
- Official sources block on each page: title/organisation/URL; direct links; no fabricated dates.
- Intent-audit may adjust the page split — decision logged in this doc before implementation if changed.

## 7. Verification gates (before merge)

1. `npm run lint` clean
2. `npm run typecheck` (tsc -b --noEmit) clean
3. `npm run build` succeeds
4. `npm run test:unit` (14 tests) pass
5. `bash scripts/prohibited-claims-scan.sh` → PASS
6. Claims audit against register v1.6 (rendered copy, not just source)
7. Broken internal links check (all hrefs on new pages)
8. Duplicate titles/descriptions/canonicals check
9. Schema validation (FAQPage JSON-LD)
10. Desktop + mobile visual check (screenshots)
11. Post-deploy per URL: HTTP 200, canonical, metadata, FAQ schema match, CTA links, sitemap, no staging/placeholder content

## 8. Delivery

Final report `docs/hermes-au-nz-content-sprint-2026-09-03.md` with: executive summary, URLs, intent per page, internal links added, sources used, claims decisions, test results, production verification, commit hash, blockers, next steps, status (PUBLISHED_AND_VERIFIED / READY_BUT_NOT_PUBLISHED / BLOCKED).
