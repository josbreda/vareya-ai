# Preview test report — Shopify cluster (review drafts)

- Date: 2026-10-09 (early AM, CEST) · Worktree: `vareya-ai-shopify-20261008`
- Branch: `hermes/vareya-shopify-cluster-2026-10-08` · Base: origin/main @ `87bce6f`
- Environment: Node v26.7.0 · Next.js 16.3.0 · Windows 11

## Automated checks (all run on this branch)

| Check | Command | Result |
|---|---|---|
| Production build | `npm run build` | **PASS** — rc 0; 26 knowledge routes generated (24 existing + 2 new) |
| Typecheck | `tsc --noEmit` | 2 pre-existing `PageProps` notices (typed-routes global; identical on main; resolved under `next build` typegen). **No new errors.** |
| Lint (touched files) | `eslint src/content/knowledge.ts src/app/shopify-fulfilment-europe/page.tsx` | **PASS** — rc 0 |
| Prohibited-claims scan | `bash scripts/prohibited-claims-scan.sh` | **PASS** — 0 hits |
| Preview server | `npx next start -p 3300` | Both guides + pillar return **HTTP 200** |

## Content checks (rendered pages, preview server)

- **Claims render verbatim:** B1 12/12 checked constants (incl. volume, customs, Royal Mail, PostNL, carrier selection, cut-off, weekend, SLA, support, all-in, post-submission); B2 9/9.
- **Word counts (prose, title → "Related reading"):** B1 ≈ 1660 · B2 ≈ 1602 (queue targets: 1600–2000 / 1400–1800).
- **Draft governance:** both guides serve `<meta name="robots" content="noindex, nofollow, nocache">`.
- **Sitemap:** neither draft is listed. ✔
- **Knowledge hub:** both drafts are listed for review (visible, excluded from sitemap).
- **Pillar page:** new heading + all 7 guide links render; spot-checked URLs resolve 200 (incl. the two new guides on this branch).

## Method

Ad-hoc QA scripts (scratch, not committed): `qa_claims.py` (claim presence vs `claims.ts`), `final_qa.py` (prose word count + noindex), `count_words.py`. They expect a preview server on port 3300. Re-run after any content change.

## Not tested / notes

- No Vercel preview deployment from this branch (branch push only; deploy is a publication step).
- No pixel-level visual review yet — text/HTTP checks only. Do a visual pass on the preview URLs before publication.
- The two earlier `PageProps` typecheck notices are an environment artifact (Next typed routes), present on main too; the production build passes.
