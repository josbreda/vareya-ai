# Content Sprint 01 — Preview Test Report
**Date:** 17 August 2026 (updated post-publication: documentation corrected to executed reality)
**Status:** ✅ **EXECUTED — 102 pass / 4 pre-existing failures (identical on clean main before the sprint)**

---

## What was tested

| Item | Result |
|---|---|
| Preview URL | ✅ Vercel preview built (`vareya-website-r471dyl8n-vareya.vercel.app`, SSO-protected); full rendered verification done on local production build |
| Branch / commit | ✅ `content-sprint-01-preview` (`10ffe22`, `1b45a96`) → merged to main via PR #1 (`a8a8837`) → publication PR #2 (`c2ffaee`) |
| Claims Register version | ✅ v1.3 (conversion-route rule updated 17-08-2026) |
| Old-route redirect | ✅ 308 Permanent Redirect `/fulfilment-scan/` → `/free-rate-scan/` |
| UTM preservation | ✅ `?utm_source=…&utm_medium=…&utm_campaign=…` fully preserved through the redirect (curl + Playwright evidence) |
| Rendered claims audit | ✅ PASS — `AGENT-4-RENDERED-AUDIT.md` (A–I all PASS) |
| Anonymisation check | ✅ PASS — no PII, no source IDs, composite cases |
| SEO checks | ✅ Preview: noindex,nofollow + canonical + 1 H1. Publication: noindex removed, sitemap contains URL |
| Goodie prompt pack | ✅ ACTIVE since publication (`GOODIE-PROMPT-PACK.md`); not imported into Goodie yet |
| Analytics events | ✅ `knowledge_article_view`, `quotation_checklist_view`, `free_rate_scan_cta_click` fire PII-free; scan-funnel events unchanged |
| Mobile/desktop QA + screenshots | ✅ 8 screenshots in `docs/screenshots/content-sprint-01/`; mobile 360px no overflow |
| Keyboard navigation | ✅ CTA reachable via Tab (7 tabs), Enter activates; no console errors |
| Broken internal links | ✅ 18 internal links checked, 0 broken |

## Test suite

- `tests/sprint1-article-preview.spec.ts` — **10/10 pass** (desktop + mobile): article rendering,
  redirect + UTM preservation, indexable-after-publication + sitemap, PII-free analytics events,
  prohibited-claims sweep, review block.
- Full suite — **102 pass / 4 failed**. The 4 failures are in
  `tests/sprint2-vision-knowledge.spec.ts` (vision page content + nav) and were **proven
  pre-existing**: the identical 4 fail on clean `main` checked out before this sprint.

## Findings

- **P0-1 (historical, resolved):** the final article text was missing from the workspace at the
  start of the sprint. Resolved: the final text + handoff + changelog were delivered and
  implemented (`content/review/what-information-does-a-3pl-need-for-a-fulfilment-quotation.md`).
- **P2-1 (resolved):** marketing assets `marketing/content-sprint-01-linkedin-pack.md` and
  `content-sprint-01-outreach-angles.md` route-updated to `/free-rate-scan/`. Assets remain
  **blocked** (not published, not sent).
- **P3-1 (open, out of scope):** 4 pre-existing sprint2-vision test failures — not introduced by
  this sprint; separate fix required.

## Next steps (remaining, owner-side)

1. Import the 20 Goodie prompts (`marketing/content-sprint-01-prompts.csv`, cs01-p-001 … cs01-p-020).
2. Release decision for the blocked marketing assets (LinkedIn pack, outreach angles).
3. Separate fix pass for the 4 pre-existing sprint2-vision test failures.
