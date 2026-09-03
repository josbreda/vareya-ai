# Hermes AU/NZ Content Sprint — Final Report

**Date:** 3 September 2026
**Agent:** Hermes (AI+Human method, claims-governed)
**Repo:** josbreda/vareya-ai
**Branch:** content/au-nz-fulfilment-pages → PR #22 → squash-merged to main
**Claims basis:** `content/claims-register.md` v1.6 (01-09-2026)

---

## 1. Executive summary

Three new English-language commercial pages covering the Australia/New Zealand corridor are live on vareya.ai. Each page targets a distinct search intent, uses only claims-register-approved service claims (v1.6), and links to verified official sources (ABF, ATO, DAFF, IRD, NZ Customs, MPI, European Commission, Business.gov.nl). All technical gates passed: lint, typecheck (via build), 14/14 unit tests, prohibited-claims guard, broken-link checks, schema validation, desktop + mobile visual QA, and post-deploy production verification per URL.

## 2. Published URLs

| # | URL | Status |
|---|---|---|
| 1 | https://vareya.ai/european-fulfilment-for-australian-brands/ | Live, HTTP 200 |
| 2 | https://vareya.ai/european-fulfilment-for-new-zealand-brands/ | Live, HTTP 200 |
| 3 | https://vareya.ai/shipping-from-europe-to-australia-new-zealand/ | Live, HTTP 200 |

## 3. Primary search intent per page

| Page | Intent | Answer |
|---|---|---|
| European Fulfilment for Australian Ecommerce Brands | Commercial investigation | AU brands selling to EU customers: hold stock in Breda vs ship every order from Australia. Decision table + AU-EU corridor + ABF/ATO/DAFF facts. |
| European Fulfilment for New Zealand Ecommerce Brands | Commercial investigation | Same framework for NZ brands, with NZ-specific facts (IRD 15% GST, NZ$1,000 border line, NZ$60,000 registration threshold, MPI rules). |
| Shipping Ecommerce Orders from Europe to Australia and New Zealand | Informational → commercial | The reverse stream: orders fulfilled in Breda and shipped to AU/NZ consumers. Two-directions table, order flow, per-destination GST/customs/biosecurity. |

**Split decision (logged per masteropdracht):** the search-intent audit recommended merging pages 1+2 into one AU+NZ page. That advice was NOT followed, because the two pages carry substantially different, country-specific regulatory content (ABF/ATO/DAFF vs NZ Customs/IRD/MPI; different thresholds, rates and biosecurity regimes) and the masteropdracht's target queries include distinct "Australian brands" and "New Zealand brands" phrases. The pages are not near-duplicates: each has its own corridor facts, decision table, checklist, customs/GST specifics and FAQ set. The audit's core finding — that "from Europe to AU/NZ" queries mean the physical outbound stream — was already implemented as page 3.

## 4. Internal links added

Outbound from new pages (related-pages blocks): home, /eu-fulfilment/, /shopify-fulfilment-europe/, /eu-fulfilment-us-brands/, /eu-fulfilment-uk-brands/, /eu-fulfilment-south-korean-brands/, /cosmetics-supplements-fulfilment-europe/, /returns-fulfilment-europe/ (page 3), and cross-links between the three new pages.

Inbound to new pages: footer Services column ("Australian Brands", "New Zealand Brands"), plus related-pages links from the two brand pages to the shipping page and vice versa.

Also fixed in the same PR: llms.txt stale scan link `/fulfilment-scan/` → `/free-rate-scan/` (route rule v1.3).

## 5. Official sources used (verified 03-09-2026)

| Source | Used on |
|---|---|
| Australian Border Force — Import declarations | AU page, shipping page |
| ATO — GST on low value imported goods (last updated 11-09-2025) | AU page, shipping page |
| DAFF — Bringing or mailing goods to Australia | AU page, shipping page (link) |
| DAFF — Biosecurity Import Conditions system (BICON) | AU page, shipping page (link) |
| Inland Revenue NZ — Supplying low value imported goods | NZ page, shipping page |
| NZ Customs Service — Duty and GST | NZ page, shipping page |
| MPI — Importing supplemented foods | NZ page, shipping page |
| MPI — Import health standards | NZ page, shipping page |
| European Commission — Customs formalities for low value consignments | AU page, NZ page |
| European Commission — Temporary flat fee on low-value imports (until 01-07-2028) | AU page, NZ page |
| Business.gov.nl — Importing non-EU products checklist | AU page, NZ page |

URL verification: ABF 200, ATO 403-on-curl but full content verified via extraction, DAFF pages unscrapeable (links included; no DAFF figures asserted in body copy), IRD/NZ Customs/MPI/EC/Business.gov.nl all 200. A Business.gov.nl "export checklist" URL could not be verified (404) and was dropped from the shipping page.

## 6. Claims control — allowed, adjusted, rejected

**Allowed (register v1.6, verbatim via CAPABILITIES constants):** Shopify integration, Amazon FBM, returns handling, carriers incl. Royal Mail, PostNL main-carrier wording (not used on these pages; carrier list wording used), cut-off, volume sentence, product specialisations, parcel dimensions, product fit during qualification, ShipHero WMS, carrier auto-selection, customs clearance support, weekend fulfilment (not used).

**Adjusted:**
- Masteropdracht carrier list ("DHL Express, PostNL, Asendia, FedEx") was narrower than register wording; register wording "Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail" used (skill rule 1: register is the only source).
- "Operational since 2016" (listed as allowed in the masteropdracht) NOT published: register v1.6 (Decision 3) requires historical evidence before any public since-2016 claim (INTERNAL_OWNER_CONFIRMED). Left out; flagged for Raymond/Jos.
- CTA line "Share your current order profile and destination mix for an initial fulfilment fit assessment" implemented as supporting copy under the scan CTA (primary CTA remains the register-mandated "Check your EU fulfilment fit" → /free-rate-scan/). No meeting/call step.
- FAQ "How long does delivery take?" answered with the register-consistent clause "Exact delivery timing depends on the agreed shipping method and is confirmed during qualification" — no transit-time claims (carrier pages publish no verifiable EU→AU/NZ lane times; FedEx's generic 1-3 days is not a guarantee).

**Rejected/not used:** all superlatives, delivery guarantees, rates, AU/NZ warehouse claims, own-WMS claim, tax/legal advice, Thuiswinkel, existing-cooperative wording, Royal Mail 24-hour delivery, fabricated case studies.

## 7. Technical test results

| Gate | Result |
|---|---|
| `npx eslint` (all touched files) | clean |
| `npm run build` | success — 48/48 pages prerendered, new routes static |
| `npm run test:unit` | 14/14 pass |
| `scripts/prohibited-claims-scan.sh` | PASS (0 hits) |
| Prohibited-term grep (fastest/cheapest/leading/number one/guarantee/cooperative/since 2016/24-hour etc.) | 0 hits (only Tailwind `leading-*` CSS classes matched "leading" — styling, not copy) |
| Capability-denial grep | 0 hits |
| Broken internal links | none — every internal href maps to an existing route |
| Duplicate titles/descriptions/canonicals | none — each page has unique title/description/canonical |
| FAQPage JSON-LD | present, matches visible FAQ exactly (8 items) |
| Sitemap | 3 new URLs present |
| robots.ts | unaffected |
| Visual QA (Playwright, desktop 1280 + mobile 360, all 3 pages) | 6/6 PASS — 1 H1, 4 scan CTAs, 8 FAQ details, 2 tables, 0px horizontal overflow, 0 JS errors |

## 8. Production verification per URL (post-deploy)

| Check | AU page | NZ page | Shipping page |
|---|---|---|---|
| HTTP status | 200 | 200 | 200 |
| Title (unique) | ✓ | ✓ | ✓ |
| Canonical (correct) | ✓ | ✓ | ✓ |
| Single H1 | ✓ | ✓ | ✓ |
| Meta description | ✓ | ✓ | ✓ |
| OpenGraph title | ✓ | ✓ | ✓ |
| FAQ visible + schema consistent | ✓ (8) | ✓ (8) | ✓ (8) |
| Breadcrumb | ✓ | ✓ | ✓ |
| Scan CTA links | 8 refs | 8 refs | 8 refs |
| Placeholder/staging content | 0 | 0 | 0 |
| No JS errors | ✓ | ✓ | ✓ |

## 9. Commit hash and deployment identification

- Feature commit: `2454903` (branch content/au-nz-fulfilment-pages)
- Squash merge to main: `508f083` — PR #22 "feat(content): AU/NZ corridor pages (squash PR #22)"
- Deployment: Vercel automatic production deploy on main push; live verification performed on production domain vareya.ai.

## 10. Open blockers

- Vision backend unavailable in this session (404 — no image-input endpoint): screenshots were taken but not machine-inspected; visual QA was instead performed programmatically (DOM metrics + JS-error capture + overflow checks) plus the live preview pane opened for Jos.
- DAFF pages could not be scraped (curl 000 / extractor unsupported): DAFF URLs are linked as official references, but no DAFF figures (e.g. personal-use limits) were asserted in page copy.
- Research subagents 1+2 timed out after 600s; their completed research files were recovered from disk and used (docs/sources/au-nz-corridor-research/). No NZ-specific verbatim merchant questions were found in SERP data — none were fabricated.
- ATO page is bot-walled for plain curl (403) but fully extractable; link is fine for human visitors.

## 11. Recommended next steps

1. IndexNow ping for the 3 new URLs (see indexnow-site-integration skill) + Google Search Console URL inspection if access exists.
2. Activate the new Goodie topic "AU/NZ corridor visibility" (5 prompts) after review.
3. Raymond/Jos decision: since-2016 public claim — register v1.6 blocks it until historical evidence is gathered.
4. Monitor AI-visibility (ai-visibility-benchmark) for the AU/NZ corridor queries in ~2-4 weeks.
5. Optional later: hreflang or en-AU/en-NZ variants only if native-editor review is available (publication gate per geo-sprint rules).

## 12. Status

**PUBLISHED_AND_VERIFIED**

All three pages are live (HTTP 200), claims-safe (register v1.6), present in sitemap.xml, llms.txt and the internal link structure, with working scan-first CTAs and evidence recorded in this report.
