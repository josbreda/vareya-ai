# Content Sprint 01 — Rollback Procedure
**Owner:** Hermes (implementation) / Jos (production authority)
**Scope:** preview implementation + production route change + article publication
**Date:** 17 August 2026

---

## 1. Preview rollback (branch not deployed)

The preview is implemented on a feature branch; production is untouched.

1. Revert or drop the branch: `git checkout main && git branch -D content-sprint-01-preview` (or revert the PR).
2. Verify `git status` clean on main and that `src/content/knowledge.ts`, `src/app/knowledge/`, `src/app/fulfilment-scan/` match the last released commit.
3. Confirm noindex flag removed from the branch only — nothing to remove on main.

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
