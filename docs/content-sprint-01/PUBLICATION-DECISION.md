# PUBLICATION-DECISION — Content Sprint 01

**Article:** What information does a 3PL need to prepare a fulfilment quotation?
**Route:** https://vareya.ai/knowledge/fulfilment-quotation-requirements/
**Decision:** **AUTHORISED — PUBLISHED**
**Authorised by:** Jos (owner) — "publiceer", 17 August 2026
**Reviewer:** Jos, reviewedAt 2026-08-17

## Decision history

| Date | Status | Notes |
|---|---|---|
| 2026-08-17 (midday) | NOT AUTHORISED | Preview phase — implementation in progress on review branch |
| 2026-08-17 (late afternoon) | MERGED TO MAIN | GitHub PR #1 merged (a8a8837); manual Production deploy via Vercel dashboard (GitHub integration outage). Live at vareya.ai with noindex. |
| 2026-08-17 (evening) | **PUBLISHED** | Jos: "publiceer". Production commit: indexable=true, publishedAt 2026-08-17, sitemap inclusion, Goodie pack ACTIVE. |

## Publication gate — all conditions met

- [x] Jos final review (reviewer: Jos, reviewedAt: 2026-08-17)
- [x] Rendered Agent 4 audit — PASS (claims, anonymisation, CTA, SEO/GEO, analytics privacy)
- [x] Claims Register audit — PASS (all required claims verbatim; no prohibited claims)
- [x] Anonymisation control — PASS (composite cases, no PII, no source IDs)
- [x] Source verification — 6 external sources live, retrieved 17 August 2026
- [x] Free Rate Scan CTA working — /free-rate-scan/ 200, legacy 308 redirect preserves UTM
- [x] Measurement events live — knowledge_article_view, quotation_checklist_view, free_rate_scan_cta_click (PII-free)

## Production evidence (17 August 2026)

- Article live, indexable: https://vareya.ai/knowledge/fulfilment-quotation-requirements/
- robots: indexable (no noindex), canonical https://vareya.ai/knowledge/fulfilment-quotation-requirements/
- sitemap.xml contains the article URL
- FAQPage / Article / BreadcrumbList structured data valid
- /free-rate-scan/ live; /fulfilment-scan/ 308 → /free-rate-scan/ with UTM preserved
- Tests: 102 pass, 4 pre-existing sprint2 failures (identical on clean main before this sprint)

## Rollback

`docs/content-sprint-01/ROLLBACK.md` — revert path: set indexable=false again, keep route redirect. No destructive action required.
