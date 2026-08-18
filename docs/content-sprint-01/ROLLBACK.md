# Content Sprint 01 — Rollback Procedure
**Owner:** Hermes (implementation) / Jos (production authority)
**Scope:** article publication + production route change (both LIVE since 17 August 2026)
**Date:** 17 August 2026 (updated post-publication)

> **Current state:** the article is PUBLISHED and indexable on production
> (https://vareya.ai/knowledge/fulfilment-quotation-requirements/) and the scan route is
> `/free-rate-scan/` with the legacy 308 redirect. Rollback below applies from this state —
> **it was not executed** (owner decision 17-08-2026: "niets terugdraaien").

---

## 1. Article un-publish (indexability revert)

1. Set `indexable: false` in `src/content/knowledge.ts` (article `fulfilment-quotation-requirements`).
2. Optionally clear `publishedAt`/`publishedLabel` and restore `reviewer`/`reviewedAt` to null.
3. Deploy (Vercel auto-deploy or manual "Create Deployment" in the dashboard).
4. Verify live: `noindex` present again, URL removed from `sitemap.xml`.
5. No Supabase/HubSpot data is touched by content rollback.

## 2. Route-change rollback (if /fulfilment-scan/ → /free-rate-scan/ goes live and must be reverted)

1. Restore the app route: move `src/app/free-rate-scan/` back to `src/app/fulfilment-scan/` (or recreate the route from the last release commit).
2. Remove or invert the redirect in `next.config.ts` (legacy redirect must point the other way, or be removed).
3. Revert page-copy frontmatter routes (`content/fulfilment-scan.md`), `content-manifest.json`, and `src/content/pages.ts` scan-route references.
4. Restore internal links across content files to `/fulfilment-scan/`.
5. Deploy, verify HTTP 200 on `/fulfilment-scan/` and the scan end-to-end (test submission on a QA lead).
6. Register governance: document the reversal in the Claims Register changelog (new version entry).

## 3. Article rollback (after publication)

1. If the article renders broken: redeploy the previous commit (Vercel instant rollback), or set the article's noIndex flag back to true until fixed.
2. If a claims violation is found post-publish: immediately set noindex + remove the article from the sitemap, then correct the copy against the register before re-publishing.
3. Supabase/HubSpot data is never affected by content rollback — no lead data is touched.

## 4. Safety invariants

- Never delete `content/claims-register.md` history; register changes are versioned entries.
- Never force-push main.
- All destructive or production steps require Jos's explicit approval (project rule).
- Backups: the repo is in git; take a full backup (zip) of changed directories before the route change goes live.
