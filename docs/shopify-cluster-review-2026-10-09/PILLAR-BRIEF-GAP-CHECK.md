# Pillar brief gap-check — /shopify-fulfilment-europe/

Verification of the Shopify pillar brief (Raymond, Oct 2026 — "Shopify SEO-pillar page voor Vareya")
against the implementation on this branch (origin/main @ #35 + this branch's changes).
Date: 2026-10-09. Branch: `hermes/vareya-shopify-cluster-2026-10-08`.

## Verdict

~95% of the brief was already implemented — PR #35 had applied its SEO settings and section
structure. This branch adds the cluster links (batch 1) and closes two remaining small gaps
(batch 2, below). The open items require human input or are future content.

## Implemented (evidence: `src/app/shopify-fulfilment-europe/page.tsx`)

| Brief section | Status |
|---|---|
| URL unchanged | ✓ |
| SEO title "Shopify Fulfilment Europe \| European 3PL \| Vareya" | ✓ (metadata, line 11) |
| Meta description (verbatim from brief) | ✓ (lines 12–13) |
| H1 "Shopify fulfilment in Europe for growing ecommerce brands" | ✓ |
| Hero + primary/secondary CTA | ✓ |
| Trust bar (Breda · Shopify · ShipHero · carriers · returns · weekend · cut-off · customs · all-in) | ✓ (right under hero, per the brief's hero instruction) |
| Quick answer | ✓ |
| Fit / may not be a fit + boundaries note | ✓ |
| 4 signals ("When should a brand consider…") | ✓ |
| Shopify integration (typical setup + pre-connection checks) | ✓ |
| 9-step order flow (table) | ✓ |
| Inventory & stock (+ multi-store: assessed in qualification) | ✓ |
| Shipping from the Netherlands | ✓ |
| Returns (refund = separate responsibility) | ✓ |
| International brands (two movements; EORI/VAT; specialist fallback) | ✓ |
| Country clusters (14 markets) | ✓ |
| Product categories / parcel limits | ✓ |
| Service & SLAs | ✓ |
| Costs (drivers + quotation inputs) | ✓ |
| Evaluation questions (§16) | ✓ |
| Migration stages (§17) | ✓ |
| Why the Netherlands (balanced wording) | ✓ |
| FAQ (15 items, incl. fulfilment/fulfillment spelling FAQ) | ✓ |
| Conversion block | ✓ |
| Related pages & guides (14 chips) | ✓ |
| FAQPage structured data | ✓ (via FAQ component) |
| Organization/Website structured data | ✓ (layout) |

## Closed in this branch (batch 2)

- FAQ: **"Which warehouse management system does Vareya use?"** → ShipHero claim, verbatim.
- Internal links: **+ /knowledge/fulfilment-quotation-requirements/** ("What a 3PL needs for a quotation").
- Verified after rebuild: build PASS · prohibited-claims scan PASS · rendered page shows 15 FAQ items,
  the new link, and FAQPage schema.

Earlier on this branch (batch 1): two new guides (EU/NL guide for US+UK brands, 3PL checklist) +
the pillar guide-links block ("Related fulfilment pages and guides", 14 chips).

## Open — requires humans (not invented)

- **Author/review block (§22)** — needs a real name, function, Operations/IT reviewer and review dates.
- **Client case (§19)** — needs a real, approved case; no fabricated numbers.
- **Photos & video (§25)** — needs original warehouse assets (stock photos are explicitly rejected).
- **Onboarding-duration FAQ (§20)** — publish only after Operations approves a realistic range.
- **§26 editorial approvals** — already largely tracked in `VRAGEN-RAYMOND-OPERATIONS-2026-10-08.md`
  (multi-store/bundles/subscriptions, ShipHero, cut-off/weekend/support, onboarding, returns, inbound,
  customs/UK, pricing) + `HUMAN-INPUT-ONBOARDING.md`. Minor additions for the same evidence round:
  sync data flow, tracking updates, refund workflow, pre-orders.
- **Structured data (§24)** — WebPage, Service, BreadcrumbList (JSON-LD), Person, ImageObject still open;
  Person/ImageObject depend on the author block and photo assets above.

## Brief §23 link targets — existence check (2026-10-09)

Already live (selection): Shopify 3PL how-to-compare · onboarding · switching · quotation requirements ·
cost drivers (as `fulfilment-cost-drivers`) · returns centre (`ecommerce-returns-centre-europe`) ·
US · UK · Canada · Australia · UAE pages · cosmetics+supplements · UK EORI article.

NOT yet existing (backlog for the cluster — do not link until published; several also need claim
evidence first, e.g. multi-store and subscriptions):
`shopify-fulfilment-costs` (dedicated) · `shopify-returns-fulfilment` · multi-store Shopify ·
subscription Shopify · inventory & SKU preparation · ShipHero integration · moving stock into the EU ·
generic EORI · customs classification · importer of record · EU VAT & fulfilment · accessories ·
small-parcel fulfilment.

## Notes

- The brief's trust bar ("direct na het antwoord") is implemented right after the hero — which matches
  the brief's own hero instruction ("korte trustregel onder de CTA's"). No change made; can be moved
  after "Quick answer" if preferred.
- US/UK brand FAQs exist as one combined FAQ item; the brief splits them. Equivalent coverage; can be
  split before publication if preferred.
