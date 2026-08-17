# Content Sprint 01 — Publication Checklist
**Article:** What information does a 3PL need to prepare a fulfilment quotation?
**Author:** Agent 4 (SEO, GEO, CRO & Measurement)
**Date:** 17 August 2026
**Rule:** Publish only after PASS on every item. BLOCKED states are expected until human input arrives.

---

## Phase 0 — Preparation (status: DONE)

| # | Item | Status |
|---|---|---|
| P0.1 | Governing sources read (Claims Register v1.2, scan spec, BRAND, VISION, knowledgebank, HubSpot mapping) | ✅ PASS |
| P0.2 | Claims boundary defined (`CLAIMS-BOUNDARY.md`) | ✅ PASS |
| P0.3 | Content brief + structure defined (`CONTENT-BRIEF.md`) | ✅ PASS |
| P0.4 | Human-input worksheet ready (`HUMAN-INPUT-WORKSHEET.md`) | ✅ PASS |
| P0.5 | Operational fact pack assembled (`OPERATIONAL-FACT-PACK.md`) | ✅ PASS |
| P0.6 | Measurement plan (`SEO-GEO-MEASUREMENT.md`) + experiments + prompts CSVs | ✅ PASS |
| P0.7 | SERP research + source register | ✅ PASS — SERP-AND-SOURCE-RESEARCH.md + SOURCE-REGISTER.md (verified 17-08-2026) |

## Phase 1 — Human input (status: COMPLETE — 17 August 2026)

| # | Item | Status |
|---|---|---|
| P1.1 | Jos answers (worksheet Part A) | ✅ COMPLETE — A1–A5 closed (JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5) |
| P1.2 | Raymond answers (worksheet Part B) | ✅ EXTRACTED — docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md (B1/B3/B4/B5 not answered directly; non-blocking) |
| P1.3 | Operations answers (worksheet Part C) | ◐ PARTIAL — C3–C6 sourced; C1 (full list), C2, C7 open; non-blocking |
| P1.4 | Named human reviewer identified | ⏳ OPEN — publication gate |
| P1.5 | Escalations (if any register deviation is needed) raised to Raymond | ✅ ROUTE CHANGE — register v1.3 conversion-rule update applied 17-08-2026 (owner-directed) |

## Phase 2 — Drafting & review

| # | Item | Status |
|---|---|---|
| P2.1 | Evidence pack (fact pack + worksheet + source register) handed to Claude | ✅ COMPLETE — docs/CONTENT-SPRINT-01-CLAUDE-BRIEF.md |
| P2.2 | Claude first draft delivered into this repo | ⛔ BLOCKED — draft + final revision reported COMPLETE externally (ChatGPT project), but the final article text has NOT been delivered to this workspace (no HERMES-IMPLEMENTATION-HANDOFF.md, no FINAL-EDITORIAL-CHANGELOG.md, no article file) |
| P2.3 | Human reviewer corrects + adds practical detail; named in article | ⏳ PENDING — follows article-text delivery |
| P2.4 | Claude final editorial pass | ⏳ PENDING — reported complete externally; text awaiting delivery |
| P2.5 | Review date set and visible in article | ⏳ PENDING |

## Phase 3 — AI + Human publication standard (hard gate)

| # | Requirement | Status |
|---|---|---|
| P3.1 | ≥2 meaningful human insights present | ⛔ BLOCKED |
| P3.2 | 1 operational example present (anonymised, labelled illustrative) | ⛔ BLOCKED |
| P3.3 | 1 practical warning present | ⛔ BLOCKED |
| P3.4 | 1 Vareya-specific decision framework/checklist present | ⛔ BLOCKED |
| P3.5 | ≥3 authoritative external sources, linked, retrieval-dated | ⏳ source register in progress |
| P3.6 | Named human reviewer + review date in article | ⛔ BLOCKED |
| P3.7 | Claims Register audit PASS | ⏳ run at Phase 4 |
| P3.8 | Working Free Rate Scan CTA (approved label, correct route) | ⏳ verified at Phase 4 |
| P3.9 | Measurement events firing (view/checklist/CTA + scan funnel) | ⏳ verified at Phase 4 |
| P3.10 | No unsupported claims anywhere in the article | ⏳ verified at Phase 4 |

## Phase 4 — Implementation & QA (Hermes + Agent 4)

| # | Item | Status |
|---|---|---|
| P4.1 | Content model extension for table/FAQ/sources/reviewer/checklist (or approved alternative) | ⛔ BLOCKED |
| P4.2 | Article implemented at `/knowledge/fulfilment-quotation-requirements/` | ⛔ BLOCKED |
| P4.3 | Analytics helpers added (`src/lib/knowledge-analytics.ts`) + wired into page/CTA | ⛔ BLOCKED |
| P4.4 | FAQPage + Article schema valid (dateModified = reviewDate) | ⛔ BLOCKED |
| P4.5 | Internal links updated (to/from this article) | ⛔ BLOCKED |
| P4.6 | Build + `npm run test` green | ⛔ BLOCKED |
| P4.7 | Rendered SEO QA: title/meta/canonical/h1/sitemap/robots | ⛔ BLOCKED |
| P4.8 | Rendered GEO QA: direct answer extractable, table present as `<table>` | ⛔ BLOCKED |
| P4.9 | Rendered claims audit (claims-audit skill) PASS | ⛔ BLOCKED |
| P4.10 | Rendered conversion QA: CTA click → scan loads; event fires verified in GTM preview | ⛔ BLOCKED |
| P4.11 | Owner approves publish | ⛔ BLOCKED |

## Phase 5 — Post-publish

| # | Item | Status |
|---|---|---|
| P5.1 | Deploy to production (explicit owner approval required) | ⛔ BLOCKED |
| P5.2 | 7/14/30-day funnel report from GA4 + Supabase + HubSpot | ⛔ BLOCKED |
| P5.3 | Goodie prompts activated (P0/P1) | ⛔ BLOCKED |
| P5.4 | Knowledge update: lessons into project context / skills | ⛔ BLOCKED |

**Current gate:** Phase 1 — human input collection. Final drafting is NOT STARTED by design (workflow step 2).
