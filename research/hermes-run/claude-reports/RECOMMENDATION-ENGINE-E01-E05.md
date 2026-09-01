# Recommendation Engine — E01 through E05

## Governance finding, stated first

**"E01"–"E05" exist only as labels in a single git commit message** (`719fb96`, 23 August 2026, `vareya-ai` repo: *"feat(recommendation-engine): E01-E05 — ShipBob-alternative + FBM pages, switching guide, cosmetics FAQ expansion, NL hreflang + PostNL wording fix"*). A repo-wide search (`grep -rli "E0[1-5]"` across every `.md`/`.ts`/`.tsx` file) found **no dedicated experiment-tracking document** for any of the five — no hypothesis, no defined success metric, no baseline, no measurement plan exists for E01–E05 as a set, unlike the separate, properly-documented `FS-TRUST-001` experiment in `marketing/experiments.csv` (which has all of those fields, see `CLAIMS-RISKS.md` Risk 3 for why that one carries its own problem).

This means: **E01–E05 are five bundled content/SEO deliverables shipped in one commit and retroactively labeled as "experiments," not five separately measured tests.** The distinction matters because the task explicitly asked for "vind expliciet de ontbrekende volledige omschrijvingen van E04 en E05" (find the explicitly missing full descriptions of E04 and E05) — there is nothing missing to find beyond what the diff itself shows; no fuller description was ever written for any of the five, including E01–E03. What follows is a factual reconstruction from the commit diff itself (labeled as such), not a recovered original specification.

**Commit:** `719fb962fafab28560b69a6001971793ee1d85f4`, 23 August 2026, 728 insertions / 10 files. Files changed: `src/app/amazon-fbm-fulfilment/page.tsx` (new, 250 lines), `src/app/shipbob-alternative-europe/page.tsx` (new, 295 lines), `src/app/cosmetics-supplements-fulfilment-europe/page.tsx` (+23), `src/app/eu-fulfilment/page.tsx` (+8/-1), `src/app/nl/fulfilment-noord-brabant/page.tsx`, `src/app/nl/fulfilment-uitbesteden-breda/page.tsx`, `src/app/nl/fulfilmentcentrum-kiezen/page.tsx`, `src/app/nl/wat-kost-fulfilment-brabant/page.tsx` (all four ~+10 each), `src/content/knowledge.ts` (+108), `src/content/pages.ts` (+12).

---

## E01 — ShipBob-alternative page

- **URL:** `/shipbob-alternative-europe/` (new page, `src/app/shipbob-alternative-europe/page.tsx`, 295 lines).
- **Title/description (from `pages.ts`):** "ShipBob Alternatives for European Fulfilment | Vareya" — "What DTC brands should compare when evaluating European alternatives to ShipBob: EU warehouse footprint, support structure, carrier setup and volume fit. Includes Vareya's fit for 500+ orders per month."
- **Live verification (2026-09-01):** not in the 13-URL spot-check performed in `LIVE-TECHNICAL-AUDIT.md`; not confirmed live or dead in this pass — recommend a direct check of `https://vareya.ai/shipbob-alternative-europe/`.
- **Canonical/schema:** defined via `pages.ts`'s `PAGE_META` pattern, consistent with other pages (each entry sets an explicit canonical).
- **Target queries (INFERENCE from title/description):** "ShipBob alternative Europe", "ShipBob alternative EU", comparison-intent queries from US-founded brands evaluating EU fulfilment.
- **Baseline / current measurement:** none exists. No analytics event, ranking check, or traffic figure for this page was found anywhere in the repo.
- **Conclusion:** shipped, undocumented as an "experiment" beyond the commit message, not measured.

## E02 — Amazon FBM fulfilment page

- **URL:** `/amazon-fbm-fulfilment/` (new page, 250 lines).
- **Title/description:** "Amazon FBM Fulfilment from the Netherlands | Vareya" — "What Amazon FBM means for European sellers, when a 3PL adds value, FBM vs FBA trade-offs, and how Vareya supports Amazon FBM alongside Shopify from a warehouse in Breda, the Netherlands."
- **Live verification:** not confirmed in this pass — recommend checking `https://vareya.ai/amazon-fbm-fulfilment/` directly.
- **Target queries (INFERENCE):** "Amazon FBM Europe", "FBM vs FBA fulfilment", sellers deciding between Amazon-fulfilled and merchant-fulfilled models.
- **Cross-check against Phase 3C findings:** the platform/carrier research agent found that Amazon's current customer-facing terminology is exactly "FBM" (Fulfilled by Merchant) — matching this page's naming — while "MFN" (Merchant Fulfilled Network) is now internal/API jargon only, not Amazon's public term. If this page or any other Vareya content uses "MFN" as if it were current customer-facing language, that should be corrected to "FBM."
- **Baseline / current measurement:** none exists.

## E03 — Switching-providers guide

- **URL:** `/knowledge/switching-fulfilment-providers-europe` (a knowledge-article entry added to `src/content/knowledge.ts`, +108 lines in this commit — this is the most likely candidate for "switching guide" named in the commit message, since it is the only substantial new knowledge-article content in the diff besides the two new pages already counted as E01/E02).
- **Title:** "How to switch fulfilment providers without disrupting your ecommerce operation." **Published:** 21 August 2026 (per the article's own `publishedAt` field — two days *before* this commit landed, suggesting the content was drafted ahead of the code commit that shipped it).
- **Content, verified from the diff:** a practical migration checklist — when switching makes sense, a "migration pack" checklist (order history, parcel profile, SKU list, platform details, returns data, carrier usage, contract facts), inventory migration guidance, integration/carrier migration guidance, returns-during-a-switch guidance (includes the register's mandatory verbatim returns sentence, referenced via a `CLAIM_RETURNS` constant — a good compliance pattern, reusing a single source of truth rather than re-typing the sentence), and a parallel-run cutover strategy. Ends with "Questions to ask a new 3PL — including Vareya" — a notably even-handed framing (invites comparison rather than pure salesmanship).
- **Target queries (INFERENCE):** "how to switch 3PL provider", "changing fulfilment provider ecommerce", bottom-of-funnel content for brands already dissatisfied with an existing provider.
- **Baseline / current measurement:** none exists.

## E04 — Cosmetics FAQ expansion

- **URL:** `/cosmetics-supplements-fulfilment-europe/` (existing page, +23 lines — five new FAQ entries added).
- **Exact content added (from the diff):** five new Q&A pairs — "Does Vareya integrate with Shopify for cosmetics and supplements orders?" (answers with the `CAPABILITIES.shipHero` constant), "What order volume fits Vareya?" (`CAPABILITIES.volume`), "How are returns handled?" (`CAPABILITIES.returns`), "Can Vareya process orders in the weekend?" (`CAPABILITIES.weekendFulfilment`), and "Where does Vareya ship cosmetics and supplements?" (dynamically lists `APPROVED_DESTINATIONS`, joined — meaning this FAQ answer's country count is generated from the same list flagged in `CLAIMS-RECONCILIATION.csv` C-003; once that list is corrected, this FAQ answer updates automatically, which is a good architectural pattern).
- **Compliance pattern worth noting:** all five answers pull from shared `CAPABILITIES`/`APPROVED_DESTINATIONS` constants rather than restating claims inline — the same discipline used for the mandatory verbatim sentences (cut-off, volume, returns). This is a genuine strength: claims drift is structurally harder here than on pages that hand-type approved facts.
- **Target queries (INFERENCE):** FAQ-schema-eligible long-tail questions specific to the cosmetics/supplements niche page — though per `CLAIMS-RECONCILIATION.csv` C-014, FAQ rich results were discontinued by Google in May 2026, so any ranking benefit this specific FAQ expansion was designed for no longer applies in Google Search; the content itself remains useful for on-page depth and for other engines not confirmed to have the same restriction.
- **Baseline / current measurement:** none exists.

## E05 — NL hreflang + PostNL wording fix

- **Scope (from the diff):** two distinct changes bundled together across four `src/app/nl/*.tsx` pages (`fulfilment-noord-brabant`, `fulfilment-uitbesteden-breda`, `fulfilmentcentrum-kiezen`, `wat-kost-fulfilment-brabant`) plus a matching change to `src/app/eu-fulfilment/page.tsx`:
  1. **hreflang:** each NL page's `alternates.languages` was expanded to explicitly pair `nl-NL` (itself) with `en-GB` (pointing to `/eu-fulfilment/`), and `/eu-fulfilment/` was given the reverse pairing — a correct bidirectional hreflang implementation between the Dutch-language and English-language versions of the same content.
  2. **PostNL wording fix:** every one of the four NL pages' meta description and Open Graph description previously read *"met PostNL als strategische partner"* ("with PostNL as strategic partner") — the exact prohibited phrase — and was changed in this same commit to *"met PostNL als hoofdvervoerder binnen Nederland"* ("with PostNL as main carrier within the Netherlands"), matching the register's downgraded wording.
- **Significance:** this is the commit that actually fixed the "strategic partner" wording on these four Dutch-language pages specifically (a separate, later commit — `926aed1` — made the equivalent fix elsewhere, per the register's own changelog; E05 appears to be where the NL-specific instances were caught). This directly matters for `CLAIMS-RISKS.md` Risk 3: the fix clearly happened on the actual site pages, which makes it more notable that the same prohibited phrase survived, unfixed, in the separate `marketing/experiments.csv` file.
- **Baseline / current measurement:** none exists (this is a correctness fix and an SEO-hygiene change, not something with a defined success metric).

---

## Summary

| ID | What shipped | Live-verified this pass | Baseline/metric defined | Measured since |
|---|---|---|---|---|
| E01 | ShipBob-alternative page | Not checked in this pass | No | No |
| E02 | Amazon FBM page | Not checked in this pass | No | No |
| E03 | Switching-providers guide | Not checked in this pass | No | No |
| E04 | Cosmetics FAQ expansion (5 Q&As) | Yes — page confirmed live and healthy in `LIVE-ROUTE-AUDIT.csv` | No | No |
| E05 | NL hreflang + PostNL wording fix | Yes — hreflang and current wording confirmed via diff; not independently re-fetched live in this pass | N/A (correctness fix, not a growth experiment) | N/A |

**Recommendation:** if "E01–E05" is going to remain the internal shorthand for this body of work, create the single tracking document that doesn't currently exist — even retroactively — recording what "E04" and "E05" mean in one place, so the next person (or AI agent) doesn't have to reconstruct it from a git diff, as this report just did.
