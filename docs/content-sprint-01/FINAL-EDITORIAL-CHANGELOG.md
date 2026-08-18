# Content Sprint 01 — Final Editorial Changelog

## Purpose

This changelog records the consolidation of the original Claude first-pass review draft and the subsequent Raymond/Jos human-input and claims-governance decisions into one implementation-ready **review** article.

The page remains noindex and is not approved for publication.

## Governing updates

- Claims Register reference updated from v1.2 to v1.3.
- Primary route changed from `/fulfilment-scan/` to `/free-rate-scan/`.
- `/fulfilment-scan/` retained only as a permanent legacy redirect with query/UTM preservation.
- Human inputs A2–A5 marked processed.
- No unresolved `[JOS REVIEW REQUIRED]` markers remain.

## Article changes

### 1. Frontmatter and release state

- Replaced the old review-status sentence with machine-readable `status: review`.
- Added `indexable: false` and `robots: noindex,nofollow`.
- Removed the live `publishedAt` date for the unapproved revision.
- Removed visible reviewer placeholders.
- Added a controlled editorial note in frontmatter only.

### 2. CTA migration

- Primary CTA label changed to `Start your Free Rate Scan`.
- Primary CTA route changed to `/free-rate-scan/`.
- Old `/fulfilment-scan/` references removed from the article.
- Secondary quote route retained.

### 3. Direct answer

Old concept:

- unknown values described as unusable.

New concept:

- exact values are ideal;
- estimates are useful;
- unknown values are valid but may require follow-up before a final quotation.

### 4. General 3PL language

- Removed the absolute statement that a provider quoting without all information is inefficient or guessing.
- Replaced with conditional, evidence-based wording about visible assumptions.
- Replaced “any 3PL needs this exact list” with “most providers request much of this information; requirements vary”.

### 5. Legal and tax wording

- Removed universal claims that the business country always determines VAT setup or jurisdiction.
- Reframed contracting, invoicing, inbound, tax and customs implications as setup-dependent.
- Added a clear non-advisory boundary.

### 6. Destination-data evidence basis

Added the Jos A2 hierarchy:

- historic shipping report;
- carrier invoice/report;
- current-sales forecast;
- launch forecast;
- unknown.

Forecasts must be labelled as forecasts and must not be described as historic data.

### 7. Start-up and forecast profiles

- Removed the implication that absent historic volume means there is no quotation route.
- Added scenario-based assessment using clearly stated assumptions.
- Retained the approved preferred-volume wording for Vareya.

### 8. SKU and order-composition accuracy

Maintained explicit separation between:

- total SKUs;
- items per order;
- order lines;
- pick actions;
- batch-picking suitability.

The prohibited inference “more SKUs automatically means more items in every order” remains excluded.

### 9. Cases and privacy

- Replaced the two original profiles with composite anonymised examples.
- Removed country, exact company identifiers, domains, names and exact distinctive figures where these could increase re-identification risk.
- Preserved only the operational lessons.

### 10. Quotation readiness

Added:

- data-confidence labels;
- quotation assumptions;
- missing-information logic;
- start-up/forecast handling;
- manual review for complex, specialist or high-value profiles.

No internal score, weighting or acceptance threshold is exposed.

### 11. First response after the scan

The CTA and FAQ now explain that the first response may cover:

- profile summary;
- apparent fit;
- confidence of the submitted information;
- missing information;
- quotation readiness;
- important assumptions;
- next step.

No automatic or guaranteed final quotation is promised.

### 12. Scan-first and email-first

- Removed meeting-first and “direct conversation” defaults.
- Brands below the preferred volume may submit actual figures or a forecast.
- Vareya confirms the appropriate route by email.

### 13. Blocked claims

The following remain excluded:

- sharpest/lowest rates below 2 kg;
- automatic destination discounts;
- AI-generated cost savings;
- up to 30% savings;
- everyone paying the same parcel price;
- automatic or guaranteed quotation;
- guaranteed acceptance;
- always-a-match language;
- guaranteed suitable quotation for every start-up.

### 14. All-in wording

- Retained the exact all-in statement supplied by the governing claims process.
- Added scope clarity: included items, assumptions and exclusions must be visible in the quotation/agreement.

### 15. Sources and human review

- Retained the external source list.
- Updated the human-contribution statement to reflect both Raymond and Jos input.
- Removed obsolete text saying A2–A5 remain open.
- Kept publication dependent on rendered Agent 4 audit and named human approval.

## Marketing assets still requiring a route-only update

Before release, update:

- `marketing/content-sprint-01-linkedin-pack.md`
- `marketing/content-sprint-01-outreach-angles.md`

Replace article/scan links that still use `/fulfilment-scan/` with the approved `/free-rate-scan/` destination where appropriate.

Marketing assets remain blocked until the article itself is live.

## Publication status

```text
HUMAN INPUT:
PASS

CLAUDE/EDITORIAL CONSOLIDATION:
COMPLETE

CLAIMS SELF-AUDIT:
PASS AT SOURCE LEVEL

HERMES PREVIEW:
PENDING

AGENT 4 RENDERED AUDIT:
PENDING

JOS FINAL REVIEW:
PENDING

READY FOR PUBLICATION:
NO
```
