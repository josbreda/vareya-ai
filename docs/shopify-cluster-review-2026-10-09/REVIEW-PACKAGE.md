# Shopify cluster — review package

**Status: REVIEW DRAFT — nothing merged, nothing published.** The two new articles render with `noindex, nofollow, nocache` and are excluded from the sitemap. The pillar page change must not go live before the guides are approved (it links to both).

- Branch: `hermes/vareya-shopify-cluster-2026-10-08` (based on origin/main @ `87bce6f`, includes PR #35)
- Cluster plan: `docs/content-sprint-shopify-cluster.md`
- Test results: `PREVIEW-TEST-REPORT.md` (same folder)
- Rollback: `ROLLBACK.md` (same folder)

## What to review

1. **Two new guides** at the end of `KNOWLEDGE_ARTICLES` in `src/content/knowledge.ts`:
   - B1: `eu-fulfilment-netherlands-us-uk-brands` — EU fulfilment guide for US/UK brands
   - B2: `shopify-fulfilment-europe-3pl-checklist` — 3PL evaluation checklist
2. **Pillar page** `src/app/shopify-fulfilment-europe/page.tsx`:
   - Heading: "Related fulfilment pages" → "Related fulfilment pages and guides"
   - 7 guide links added (comparison, what to look for, checklist, onboarding, switching, cost drivers, US/UK guide)

## How to preview

Local:

    cd <worktree> && npm run build && npx next start -p 3300

Then open:

- http://localhost:3300/knowledge/eu-fulfilment-netherlands-us-uk-brands/
- http://localhost:3300/knowledge/shopify-fulfilment-europe-3pl-checklist/
- http://localhost:3300/shopify-fulfilment-europe/

(Or `npm run dev`.) A running preview on Jos's machine is at the same paths on port 3300.

## Claims used (all verbatim from `src/content/claims.ts`, Register v1.7)

**B1:** CLAIM_VOLUME · APPROVED_FACTS.address · approved "operational since 2016" wording (facts.ts `since2016`, commit a07c27e) · CLAIM_CUSTOMS · CLAIM_SPECIALIST_FALLBACK · CLAIM_ROYAL_MAIL · CLAIM_POSTNL · CLAIM_CARRIER_SELECTION · CLAIM_CUTOFF · CLAIM_WEEKEND · CLAIM_SLAS · CLAIM_SUPPORT · CLAIM_POST_SUBMISSION · CLAIM_ALL_IN · "Shopify integration is available" + "Amazon FBM fulfilment is available" (approved wording).

**B2:** CLAIM_SHIPHERO · APPROVED_FACTS.shopify · CLAIM_POSTNL · CLAIM_CARRIER_SELECTION · CLAIM_ALL_IN · CLAIM_CUTOFF · CLAIM_WEEKEND · CLAIM_SLAS · CLAIM_SUPPORT · CLAIM_SPECIALIST_FALLBACK.

**Guardrails honoured:**
- No delivery-time promises; every timing statement routes to "agreed shipping method / confirmed during qualification".
- Royal Mail direct entry: conditional wording kept — not every UK order, no guaranteed timings, "eligible shipments", method agreed during qualification.
- No VAT / IOSS / EORI / tax-representation claims — those route to the reader's own advisers (B1 FAQ included).
- No client names, logos, case figures, savings percentages.
- Volume threshold (500+/month) stated verbatim where fit is discussed; not paraphrased.
- Claims Register rule: platform capability ≠ Vareya offering — statements only cover what is confirmed for Vareya.

## Notes for the reviewer

- B1 queue title was "EU Fulfilment from the Netherlands: A Practical Guide for US and UK Brands"; the guide uses a shorter knowledge-style title. Can be changed before publication.
- B2 queue title was "Shopify Fulfilment in Europe: What to Look for in a 3PL"; the guide uses a checklist framing. Change before publication if preferred.
- Both guides intentionally share the "What we will not promise" idea — it is the honesty device requested in the brief.

## Publication procedure (after approval)

1. `knowledge.ts`: set `indexable: true`, fill `publishedAt` (ISO) + `publishedLabel`.
2. Merge branch / PR → production deploy.
3. Verify: both URLs in sitemap, robots meta gone, hub + pillar links render.
4. Post-launch: LinkedIn drafts (`marketing/linkedin-drafts-2026-10.md`), measurement follow-up.

## Rollback

See `ROLLBACK.md`. Everything sits in one commit on the branch; `main` is untouched.
