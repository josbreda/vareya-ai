# Content Sprint 01 — Final Editorial Changelog

> **Documentation correction (17 August 2026, post-publication):** an earlier revision of this file
> (commit `ab3b5af`) described a review state that the code and production no longer had. This
> revision aligns the changelog with reality: the article is **published and indexable** since
> 17 August 2026 (owner GO "publiceer"). No code was changed by this correction.

## Purpose

This changelog records (a) the editorial consolidation of the Claude review draft with the
Raymond/Jos human inputs and claims-governance decisions, and (b) the implementation and
publication timeline that followed.

## Editorial changes applied before implementation

### 1. Frontmatter and release state

- Review phase: `status: review`, `indexable: false`, `robots: noindex,nofollow`, no live
  `publishedAt`, no visible reviewer placeholder.
- Publication phase (owner GO, 17 August 2026): `status: published`, `indexable: true`,
  `publishedAt: 2026-08-17`, `reviewer: Jos`, `reviewedAt: 2026-08-17`. Noindex removed.

### 2. CTA migration

- Primary CTA label `Start your Free Rate Scan`, route `/free-rate-scan/`.
- Secondary CTA `Request a fulfilment quote` → `/request-fulfilment-quote/`.
- Legacy `/fulfilment-scan/` kept only as a permanent 308 redirect that preserves all query and
  UTM parameters. No redirect loop (verified with the sprint test).

### 3. Direct answer

- exact values are ideal; estimates are useful; unknown values are valid but may require
  follow-up before a final quotation.

### 4. General 3PL language

- No absolute statement that a provider quoting without all information is inefficient or
  guessing; conditional, evidence-based wording about visible assumptions.
- "Most providers request much of this information; requirements vary" — no universal exact-list
  claim.

### 5. Legal and tax wording

- Contracting, invoicing, inbound, tax and customs implications are setup-dependent
  ("may affect", "depending on the proposed setup"); explicit non-advisory boundary; no
  universal jurisdiction statements.

### 6. Destination-data evidence basis

Jos A2 hierarchy: historic shipping report → carrier invoice/report → current-sales forecast →
launch forecast → unknown. Forecasts are labelled forecasts, never historic data.

### 7. Start-up and forecast profiles

- No implication that absent historic volume means no quotation route.
- Scenario-based assessment with clearly stated assumptions; approved preferred-volume wording
  retained verbatim (register).

### 8. SKU and order-composition accuracy

Explicit separation: total SKUs / items per order / order lines / pick actions / batch-picking
suitability. The prohibited inference "more SKUs = automatically more items per order" remains
excluded.

### 9. Cases and privacy

- Two composite anonymised examples (CASE-INCOMPLETE-001, CASE-STRONG-PROFILE-001); no country,
  company identifier, domain, name or exact distinctive figure; only operational lessons kept.

### 10. Quotation readiness

Data-confidence labels, quotation assumptions, missing-information logic, start-up/forecast
handling, manual review for complex/specialist/high-value profiles. No internal score, weighting
or acceptance threshold is exposed.

### 11. First response after the scan

First response may cover: profile summary, apparent fit, confidence of submitted information,
missing information, quotation readiness, important assumptions, next step. No automatic or
guaranteed final quotation.

### 12. Scan-first and email-first

No meeting-first or direct-conversation default. Brands below the preferred volume may submit
actual figures or a labelled forecast; Vareya confirms the appropriate route by email.

### 13. Blocked claims (excluded)

Sharpest/lowest rates below 2 kg · automatic destination discounts · AI-generated cost savings ·
"up to 30% savings" · everyone paying the same parcel price · automatic or guaranteed quotation ·
guaranteed acceptance · always-a-match language · guaranteed suitable quotation for every
start-up.

### 14. All-in wording

Exact all-in statement from the Claims Register (verbatim), plus scope clarity: included items,
assumptions and exclusions must be visible in the quotation/agreement.

### 15. Sources and human review

Six external sources (Shopify, WooCommerce/Automattic, European Commission VAT OSS, UKWA, FedEx,
UPS), retrieved 17 August 2026; human-contribution statement reflects both Raymond and Jos input.

## Implementation and publication timeline

| Step | State | Evidence |
|---|---|---|
| Final article delivered + handoff + changelog | done | `content/review/what-information-does-a-3pl-need-for-a-fulfilment-quotation.md` |
| Implementation on preview branch | done | `content-sprint-01-preview`, commits `10ffe22` → `1b45a96` |
| Noindex preview + rendered Agent 4 audit | done | `AGENT-4-RENDERED-AUDIT.md` — all areas PASS |
| Tests (sprint1 10/10; suite 102 pass / 4 pre-existing sprint2) | done | `PREVIEW-TEST-REPORT.md` |
| Human gate (reviewer Jos, reviewedAt 2026-08-17) | done | commit `1b45a96` |
| Merge to main + production deploy | done | PR #1, merge `a8a8837`; Vercel Production deployment |
| Publication (owner GO "publiceer") | done | PR #2, merge `c2ffaee`; indexable + sitemap live |
| Live verification | done | noindex gone, sitemap contains URL, 308 redirect + UTM preserved |

## Marketing assets

- `marketing/content-sprint-01-linkedin-pack.md` and `content-sprint-01-outreach-angles.md`
  route-updated to `/free-rate-scan/`.
- Assets remain **blocked**: not published, not sent. (Owner release required before any use.)

## Publication status

```text
HUMAN INPUT:               PASS
EDITORIAL CONSOLIDATION:   COMPLETE
CLAIMS AUDIT (RENDERED):   PASS
HERMES PREVIEW:            DONE
AGENT 4 RENDERED AUDIT:    PASS
JOS FINAL REVIEW:          DONE (reviewer: Jos, 2026-08-17)
READY FOR PUBLICATION:     YES
PUBLISHED:                 2026-08-17 (owner GO "publiceer")
```
