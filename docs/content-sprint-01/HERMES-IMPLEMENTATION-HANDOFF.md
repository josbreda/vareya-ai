# Content Sprint 01 — Hermes Implementation Handoff

## Status

- **Content:** final consolidated review draft supplied
- **Publication:** not authorised
- **Implementation target:** noindex Vercel preview only
- **Claims Register:** `content/claims-register.md` v1.3
- **Primary CTA route:** `/free-rate-scan/`
- **Legacy route:** `/fulfilment-scan/` must permanently redirect to `/free-rate-scan/` while preserving query and UTM parameters

## Governing source file

`content/review/what-information-does-a-3pl-need-for-a-fulfilment-quotation.md`

Hermes must implement this file without creative rewriting. Small technical edits are allowed only for rendering, accessibility or framework compatibility and must be recorded.

## Intended route

`/knowledge/fulfilment-quotation-requirements/`

## Preview metadata

- `status: review`
- `indexable: false`
- robots: `noindex,nofollow`
- no live `publishedAt`
- canonical prepared for the final route but preview host must remain noindex
- reviewer and reviewed date remain null until the human publication gate

## Page requirements

Render:

1. H1 and direct answer
2. nine information categories
3. quotation-input table
4. destination-data evidence basis
5. packed-parcel explanation
6. SKU/items/order-lines explanation
7. storage explanation
8. exact/estimate/unknown framework
9. two composite anonymised examples
10. quotation-readiness checklist
11. Vareya profile review section
12. visible FAQs
13. Free Rate Scan CTA
14. source list
15. human-review status

Do not render internal source IDs, editorial notes or technical paths to ordinary visitors.

## CTA and redirect requirements

Primary CTA:

- label: `Start your Free Rate Scan`
- route: `/free-rate-scan/`

Secondary CTA:

- label: `Request a fulfilment quote`
- route: `/request-fulfilment-quote/`

Legacy redirect:

- `/fulfilment-scan/` → `/free-rate-scan/`
- permanent redirect, preferably 308 unless the framework requires another correct permanent status
- preserve all query parameters and UTM parameters
- no redirect loop
- update sitemap, internal links, navigation and canonical references

Also update the old route in:

- `marketing/content-sprint-01-linkedin-pack.md`
- `marketing/content-sprint-01-outreach-angles.md`

These marketing assets remain blocked until the article is live.

## Claims constraints

Do not add or expose:

- sharpest or lowest rates below 2 kg
- automatic destination discounts
- AI-generated cost savings
- “up to 30% savings”
- identical parcel pricing for everyone
- automatic quotation
- guaranteed quotation
- guaranteed acceptance
- “there is always a match”
- guaranteed quotation route for every start-up
- internal AI Fulfilment Profile scores, weights or thresholds

Use exact current Claims Register wording for:

- preferred volume
- returns
- all-in rate scope
- Shopify integration
- Amazon FBM fulfilment
- post-submission response commitment

## Rendering and privacy

- no identifiable lead information
- examples must remain composite and generalised
- no raw emails, domains, names or exact original profiles
- no PII in source HTML comments, analytics, JSON-LD or client-side payloads
- no visible placeholders such as `[REVIEWER NAME]`
- show `Human review pending` on preview or hide the review block

## Accessibility

- one H1
- semantic H2/H3 hierarchy
- accessible responsive tables
- keyboard-accessible links and CTAs
- visible focus state
- sufficient contrast
- descriptive link text
- checklist rendered as accessible list items
- mobile layout usable at 360 px

## Structured data

Prepare only accurate visible structured data:

- `Article`
- `BreadcrumbList`
- `FAQPage` only when the visible FAQ and current eligibility requirements support it

Do not add Review or AggregateRating schema.

## Analytics

Required non-PII events:

- `knowledge_article_view`
- `quotation_checklist_view`
- `free_rate_scan_cta_click`
- `free_rate_scan_start`
- `free_rate_scan_complete`

Do not send:

- name
- email
- phone
- company
- website
- destination split
- dimensions or weights
- SKU count
- scan answers
- comments
- submission ID

to GA4 or Goodie.

## Images

Optional, but any image must:

- add genuine operational or educational value
- not falsely imply unverified Vareya facilities or technology
- use descriptive alt text
- be optimised for performance
- avoid identifiable people unless permission exists

Suggested visual:

- a neutral diagram showing the nine quotation inputs flowing into an initial assessment
- a simple SKU versus items/order-lines diagram
- a packed-parcel measurement diagram

## Tests

Run and record:

1. production build
2. TypeScript check
3. all existing Playwright regression tests
4. article route HTTP 200
5. preview noindex
6. one H1
7. title and meta description
8. canonical
9. all internal links
10. primary CTA
11. secondary CTA
12. legacy redirect status
13. UTM preservation through redirect
14. mobile 360 px
15. desktop Chrome
16. keyboard navigation
17. table responsiveness
18. source-link status
19. no placeholder leakage
20. no source-ID leakage
21. no identifiable case data
22. no prohibited claims
23. no PII in analytics
24. all required events
25. no console errors

## Agent 4 audit

Agent 4 must audit the rendered preview, not only the Markdown.

Required documents:

- `docs/content-sprint-01/AGENT-4-RENDERED-AUDIT.md`
- `docs/content-sprint-01/PREVIEW-TEST-REPORT.md`
- `docs/content-sprint-01/PUBLICATION-DECISION.md`

A PASS requires:

- claims PASS
- anonymisation PASS
- CTA and redirect PASS
- SEO/GEO foundation PASS
- analytics privacy PASS
- mobile and accessibility PASS

## Human publication gate

After Agent 4 PASS:

1. Jos reviews operational accuracy and tone.
2. Add `reviewer: Jos`.
3. Add `reviewedAt: YYYY-MM-DD`.
4. Change `status` only after explicit approval.
5. Change `indexable` to true only in the approved production commit.
6. Submit sitemap and activate the prepared Goodie prompt pack only after the page is live.

## Rollback

Rollback must restore:

- the previous deployment
- the previous sitemap
- previous internal links if necessary

The legacy redirect may be rolled back independently if it creates a loop or breaks UTM preservation.

## Final required report

Return:

- preview URL
- branch
- commit hash
- files changed
- Claims Register version
- build and test results
- redirect and UTM evidence
- rendered screenshots
- Agent 4 audit result
- P0/P1/P2/P3 findings
- rollback reference

End with:

```text
CONTENT IMPLEMENTATION:
PASS or FAIL

RENDERED CLAIMS AUDIT:
PASS or FAIL

ANONYMISATION:
PASS or FAIL

FREE RATE SCAN CTA:
PASS or FAIL

SEO/GEO FOUNDATION:
PASS or FAIL

READY FOR JOS FINAL REVIEW:
YES or NO

READY FOR PUBLICATION:
NO
```
