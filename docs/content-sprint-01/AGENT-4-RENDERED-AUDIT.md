# Content Sprint 01 — Agent 4 Rendered-Page Audit
**Auditor:** Agent 4 (SEO, GEO, CRO & Measurement) — independent of Claude's self-audit
**Article:** /knowledge/fulfilment-quotation-requirements/
**Audit status:** ⛔ BLOCKED — cannot start. The final article text is not present in this workspace (no HERMES-IMPLEMENTATION-HANDOFF.md, no FINAL-EDITORIAL-CHANGELOG.md, no article draft file). The audit framework below is final; execution begins the moment the text is delivered and implemented on the noindex preview.

---

## Audit framework (executed on the RENDERED page, never on source files alone)

### A. Claims register (register v1.3)
- [ ] Exact approved wording verbatim (CLAIM_VOLUME / CLAIM_RETURNS / CLAIM_ALL_IN / CLAIM_CUTOFF / fallback / post-submission)
- [ ] No unsupported positive claim
- [ ] No unsupported denial
- [ ] No comparative rate claim (RB-1/RB-2)
- [ ] No savings claim (JB-5 "up to 30%"; no AI cost savings)
- [ ] No automatic-quotation promise, no guaranteed acceptance (JB-6)
- [ ] No always-a-match claim (JB-1)
- [ ] No blanket start-up quotation promise (JB-7)
- [ ] No "high SKU count = more items per order" (RB-12 prohibition)

### B. Free Rate Scan
- [ ] Primary CTA → `/free-rate-scan/`, label `Check your EU fulfilment fit`
- [ ] CTA click works (rendered test)
- [ ] Legacy `/fulfilment-scan/` 301-redirects to `/free-rate-scan/` (permanent)
- [ ] UTM/query parameters survive the redirect
- [ ] No meeting-first CTA
- [ ] No automatic-result promise

### C. Case anonymisation
- [ ] No company, person, email, domain identifiable in either case
- [ ] Strong case is sufficiently generalised/composite
- [ ] No raw source IDs (`RAYMOND-2026-08-17-…`, `JOS-2026-08-17-…`) exposed to ordinary visitors

### D. Legal and tax language
- [ ] VAT, customs, tax and legal effects conditional ("can depend on", "may affect")
- [ ] No legal or tax advice framing
- [ ] No universal jurisdiction statement

### E. SKU and order terminology
- [ ] SKU count / items per order / order lines / pick actions / batch-picking suitability correctly separated

### F. All-in wording
- [ ] Matches register scope exactly; does not imply every charge, duty, tax, material or exceptional service is included

### G. SEO / GEO
- [ ] HTTP 200 on preview
- [ ] One H1; unique title; unique meta description; correct canonical
- [ ] noindex/nofollow during preview
- [ ] lang correct (en-GB)
- [ ] Crawlable internal links with descriptive link text
- [ ] Accessible tables; FAQ content visible
- [ ] No fake Review schema; no unsupported structured data

### H. Analytics (Phase 5)
- [ ] knowledge_article_view, quotation_checklist_view, free_rate_scan_cta_click, free_rate_scan_start, free_rate_scan_complete — wired, PII-free
- [ ] PII exclusion list enforced (name, company, email, phone, website, scan answers, destination split, dimensions, SKU count, comments, submission reference)

### I. Visual QA (Phase 6)
- [ ] Desktop Chrome + mobile viewport + keyboard + focus states + heading hierarchy + table responsiveness + checklist usability + CTA visibility + source links + footer/nav (+ dark mode if supported)
- [ ] Screenshots: hero, Direct Answer, nine-input table, SKU-vs-items section, anonymised case, checklist, CTA, mobile

## Verdict rules
- One FAIL in A–F blocks publication.
- G–I failures are fixable defects; publication blocked until fixed.
- Final verdict: PASS or FAIL — recorded in PUBLICATION-DECISION.md.

## Current audit state
| Area | State |
|---|---|
| A Claims | ⛔ not executed — no rendered page |
| B Scan CTA | ⛔ not executed |
| C Anonymisation | ⛔ not executed |
| D Legal/tax | ⛔ not executed |
| E SKU terminology | ⛔ not executed |
| F All-in wording | ⛔ not executed |
| G SEO/GEO | ⛔ not executed |
| H Analytics | ⛔ not executed |
| I Visual | ⛔ not executed |
