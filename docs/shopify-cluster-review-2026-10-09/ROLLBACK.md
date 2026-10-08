# Rollback — Shopify cluster review branch

Nothing is merged: `main` is untouched. The review lives on branch `hermes/vareya-shopify-cluster-2026-10-08`.

## Discard everything (if not proceeding)

    git worktree remove vareya-ai-shopify-20261008
    git branch -D hermes/vareya-shopify-cluster-2026-10-08
    git push origin --delete hermes/vareya-shopify-cluster-2026-10-08   # only if the branch was pushed

## After a merge, to revert

Everything sits in **one commit** on this branch. `git revert <commit>` restores the previous `knowledge.ts` and pillar page; the two guides disappear from hub and sitemap automatically.

## Softer option (no revert needed)

The guides are already `indexable: false` + `publishedAt: null` — noindex and not in the sitemap. If in doubt, keep them that way; publication is a deliberate flip (`indexable: true` + dates).
