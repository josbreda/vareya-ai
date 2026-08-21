# Content Sprint 01 — Article Brief
**Topic:** "What information does a 3PL need to prepare a fulfilment quotation?"
**Status:** READY FOR DRAFTING — BLOCKED ON HUMAN INPUT (per workflow step 2–3)
**Author:** Agent 2 (Content Architecture)
**Date:** 17 August 2026

---

## 1. Article identity

| Field | Value |
|---|---|
| Slug (unchanged, SEO continuity) | `fulfilment-quotation-requirements` |
| URL | `https://vareya.ai/knowledge/fulfilment-quotation-requirements/` |
| H1 | What information does a 3PL need to prepare a fulfilment quotation? |
| Topic label (renderer) | Quotation |
| Language | English (British spelling: fulfilment) |
| Type | Knowledgebank article — upgrade of the existing 5-data-group version (published 10 August 2026) to the nine-input structure |
| Primary CTA | `Check your EU fulfilment fit` → `/fulfilment-scan/` (Claims Register conversion rule) |
| Secondary CTA | `Request a fulfilment quote` → `/request-fulfilment-quote/` |

The existing article at this slug already ranks and is already in the sitemap. This sprint is a **content upgrade on the same URL**, not a new page. `publishedAt` stays `2026-08-10`; a new `reviewedAt` field (and visible "Reviewer and last-reviewed date" section) marks the AI + Human v2 release.

## 2. Objective

One genuinely useful, internationally relevant Knowledgebank article that helps ecommerce brands understand **which operational information a 3PL needs before it can prepare a meaningful quotation** — and routes suitable visitors to the fulfilment scan.

The article must not be a summary an AI could reproduce from existing internet pages. It must contain Vareya operational insight, verified external sources, a practical example, a decision framework and a quotation checklist.

## 3. Search intent (target)

Informational, decision-support intent with strong commercial adjacency. Searchers are brand founders and operations people who are (a) about to request quotations and want to be prepared, or (b) frustrated by vague quotations and want to understand what data drives them. Full SERP evidence in `SERP-AND-SOURCE-RESEARCH.md`.

The article's job: make the reader **quotation-ready**, then hand them the scan as the practical next step.

## 4. Draft direct answer (50–70 words, refine during drafting)

> To prepare a meaningful fulfilment quotation, a 3PL needs your product type, the country where your webshop is established, monthly order volume, destination countries with percentage split, parcel dimensions and weights, SKU count, average items per order, storage need in pallets, and your ecommerce platform plus selection priorities. Exact figures are ideal, honest estimates are usable, and unknown values remain valid — they simply require follow-up before a quotation can be finalised. Together these nine inputs describe the operation a provider must price.

(Word count target 55–70. Final wording by Claude at drafting; must not contain any prohibited term and must not promise a price or an instant quote.)

## 5. Required article structure (15 parts)

| # | Section | Purpose | Depends on |
|---|---|---|---|
| 1 | H1 + intro | Frame the problem: quotation quality = input quality | — |
| 2 | Direct answer | 50–70 words, answer-first for GEO/snippets | — |
| 3 | Why a useful quotation requires an operational profile | Make the business case: quoting without data = estimating | External sources (Agent 1) |
| 4 | The nine required inputs | One short block per input: what it is, why it matters | Raymond's nine inputs |
| 5 | Table: information / why the 3PL needs it / exact, estimate or unknown / common mistake / possible quotation impact | The scannable core; the single most GEO-friendly asset | Agent 3 operational insight for "common mistake" + "impact" columns |
| 6 | Exact versus estimated information | Teach the exact/estimate/unknown convention | Agent 3 |
| 7 | What happens when important information is missing | Consequences: delayed quotes, requotes, wrong carrier mix | Agent 3 (practical warning lives here) |
| 8 | Example of a complete quotation profile | Anonymised realistic profile (named as illustrative) | Agent 3 operational example |
| 9 | Example of an incomplete or misleading profile | Same brand, wrong data — show what breaks | Agent 3 |
| 10 | Questions to ask when comparing 3PL quotations | Decision framework: align assumptions before comparing numbers | External sources + Vareya all-in fact |
| 11 | Practical quotation checklist | Copyable checklist; fires `quotation_checklist_view` | — |
| 12 | FAQ (5–6 questions) | Minimum volume, estimate vs exact, timing, storage, platform | Claims Register + human input |
| 13 | Free Rate Scan CTA | Approved CTA copy; fires `free_rate_scan_cta_click` | Claims Register conversion rule |
| 14 | Sources | Cited external sources with links | SOURCE-REGISTER.md |
| 15 | Reviewer and last-reviewed date | Named human reviewer + date | Human review step |

## 6. The nine inputs — content architecture per input

This is the substance Agent 2 provides; Claude turns it into copy. The "common mistake" and "impact" columns are **drafts to be validated against Agent 3's operational fact pack** — no operational claim is final until the worksheet returns.

| # | Input | Why the 3PL needs it | Exact / estimate / unknown | Common mistake (draft — validate with ops) | Quotation impact |
|---|---|---|---|---|---|
| 1 | Product type | Determines handling rules, storage class, packaging, carrier eligibility and any compliance constraints | Exact category expected; detail can follow | Giving a broad category that hides a regulated or fragile subcategory | Wrong handling/storage quote; requote or refusal later |
| 2 | Country where the webshop is established | Determines invoicing/VAT setup, inbound stock flow and contract jurisdiction | Exact | Naming the warehouse country instead of the legal entity country | VAT and customs assumptions built into the wrong quote |
| 3 | Monthly order volume | Baseline for staffing, capacity and commercial terms | Estimate acceptable (band) | Stating peak-month volume as the average | Capacity mis-planning; quote tuned to the wrong tier |
| 4 | Destination countries + % distribution | Carrier routing and rates differ per country; drives network and service mix | Split by percentage, honest estimate | "We ship worldwide" with no split | Quote built on the wrong carrier mix |
| 5 | Parcel dimensions and weights | Carrier fees (incl. volumetric weight), packaging, sortability | Exact ideal; estimate usable | Giving product dimensions instead of the packed parcel; forgetting packaging weight | Understated shipping cost; wrong handling assumptions |
| 6 | Number of SKUs | Slotting, pick paths, catalogue complexity, replenishment | Estimate acceptable | Counting variants as separate SKUs (or the reverse) | Mis-planned storage layout and pick density |
| 7 | Average items per order | Pick-and-pack time, packaging mix, multi-line handling | Estimate acceptable | Describing only the single-item order | Underpriced pick-pack; wrong packaging assumptions |
| 8 | Storage capacity / number of pallets | Space reservation and stock-turn assumptions | Estimate acceptable | Stating current pallets while planning growth | Space shortage mid-contract, or paying for unused space |
| 9 | Ecommerce software + selection priorities | Integration path; priorities shape the service-level design | Exact platform; priorities free-text | "Any platform works"; priorities unstated | Integration cost surprises; provider optimises the wrong thing |

**Hard rule:** the article presents these as the inputs *a* 3PL needs (generic, educational). Vareya-specific capability claims may only use Claims Register v1.2 wording. See `CLAIMS-BOUNDARY.md`.

## 7. Unique Vareya contribution (target — needs human input to be true)

The publication standard demands: ≥2 meaningful human insights, 1 operational example, 1 practical warning, 1 Vareya-specific decision framework or checklist. Candidates (to be confirmed via the worksheet):

1. **Insight (Raymond):** why quotation transparency matters and what a fair quotation should explain — Vareya's all-in rate philosophy as a reader question ("does the quote explain what is included?").
2. **Insight (Jos):** the five things leads usually do not know — turned into "here is what to prepare before you ask".
3. **Operational example (ops):** one anonymised complete-vs-incomplete profile showing what changes in the quote.
4. **Warning (ops):** the practical impact of wrong dimensions/weights or missing destination split.
5. **Framework:** the nine-input quotation checklist (section 11) as the Vareya-authored decision artefact.

If any candidate fails to collect, Agent 2 must re-plan sections rather than invent content.

## 8. Content model impact (implementation note for Hermes)

The current `KnowledgeArticle` type (`src/content/knowledge.ts`) supports only `heading`, `paragraphs`, `bullets`. This article needs:

- a **5-column table** (section 5 of the structure);
- an **FAQ block** (schema-marked);
- a **sources list** with links;
- a **reviewer + review date** block;
- a **checklist** (list, but with its own event hook);
- analytics events on view / checklist / CTA (currently none exist on knowledge pages).

Recommended approach (Agent 4 + Hermes at implementation): extend the type with optional fields (`table`, `faq`, `sources`, `reviewer`, `reviewedAt`, `checklist`) and render them in `src/app/knowledge/[slug]/page.tsx`. Fallback (no type change): encode table as markdown-style text in paragraphs — rejected: the table is the GEO centrepiece and must be a real `<table>`.

## 9. CTA design

- Global knowledge CTA section already exists ("Check the operation against your order profile"). Keep it.
- Add an **article-specific inline CTA** at the end of section 11 (checklist) with approved label `Check your EU fulfilment fit`, linking `/fulfilment-scan/`, firing `free_rate_scan_cta_click` with `cta_location` (e.g. `checklist`, `footer`).
- Copy around the CTA may describe the scan: collects the practical inputs for an initial fit review; no price displayed; product fit confirmed during qualification; initial fit response by email within one working day (Claims Register post-submission commitment — verbatim).
- Never: "instant quote", price promise, savings claim.

## 10. Sources

Minimum three authoritative external sources, taken from `SOURCE-REGISTER.md` (Agent 1). Citation style: named organisation + linked title + retrieval date, visible in the Sources section. Competitor pages are used for gap analysis only and are never cited in the published article.

## 11. Tone and voice

- Simple English, short sentences, British spelling (BRAND.md).
- No buzzwords, no superlatives, no promises beyond the Claims Register.
- Educational but concrete; the reader should be able to act after reading.

## 12. Raymond operational additions (17 August 2026 — source `RAYMOND-2026-08-17-QUOTATION-OPERATIONS`, extracted → `docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md`)

The article must additionally cover these ten elements, fed by Raymond's operational answers (all ten now SOURCED):

1. **Why packed parcel dimensions matter** — product vs packed vs outbound parcel (three measurement levels); packed dims are what the carrier prices.
2. **Why destination percentages matter** — carrier routing and rate mix per country; a broad split is not enough.
3. **SKU count versus items per order** — two different data points; catalogue width ≠ order composition (see CLAIMS-BOUNDARY §6; the prohibited statement is banned).
4. **Storage-density example** — how pallet/bin storage assumptions affect the space calculation.
5. **Exact versus estimate** — the exact/estimate/unknown convention per field.
6. **Incomplete-profile example** — anonymised (Example 1 source; identifiable lead data stays in CRM only).
7. **Strong-profile example** — anonymised, classified as strong but not yet fully quotation-ready, with missing information listed (Example 2 source).
8. **Missing-information checklist** — the nine inputs as a gap-check list.
9. **When a quotation is not yet reliable** — conditions under which any provider should not finalise a quotation (see QUOTATION-WORKFLOW.md).
10. **When manual review is required** — triggers for human review in the quotation process.

## 13. Article corrections (Jos, 17 August 2026 — applied to draft + final revision)

1. **Route:** primary CTA route `/free-rate-scan/`; `/fulfilment-scan/` only as redirect (register conversion-rule update required at implementation).
2. **Direct Answer:** corrected — unknown values remain valid and require follow-up (see §4).
3. **No absolute generic 3PL statements:** generic statements are conditional and attributed, not absolute.
4. **Tax/legal conditional:** VAT, customs and establishment-country effects phrased as "can depend on / may affect" — no tax or legal advice.
5. **Scan-first, email-first:** scan as first action; first follow-up = one-working-day email fit response. No meeting-first.
6. **CASE-STRONG-PROFILE-001 further generalised** — indicative ranges, reduced identifying emphasis.
7. **noindex until final approval:** article renders but is not indexed until owner approval (KnowledgeArticle type gets a noIndex flag or the article is excluded from the indexable list).

## 14. Acceptance criteria for the drafted article

1. All 15 structure parts present.
2. Direct answer 50–70 words.
3. Nine inputs covered exactly as Raymond defined them — nothing added as "required".
4. Table with all 5 columns, ops-validated.
5. ≥2 human insights, 1 operational example, 1 practical warning, 1 Vareya checklist/framework.
6. ≥3 authoritative external sources, linked.
7. Named reviewer + review date.
8. Claims Register audit PASS (see CLAIMS-BOUNDARY.md).
9. Working Free Rate Scan CTA with event hooks.
10. No unsupported claims; no prohibited terms; CLAIM_VOLUME verbatim if volume is discussed.
