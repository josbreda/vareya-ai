# Content Sprint 01 — Claude Draft Claims Report
**Scope:** claims guardrails for the Claude first draft and final revision
**Author:** Agent 4 (SEO, GEO, CRO & Measurement) + Agent 2 (Content Architecture)
**Last updated:** 17 August 2026 (after JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5)
**Purpose:** the single claims checklist Claude must satisfy; Agent 4 audits against it.

---

## 1. Blocked claims (draft must not contain — full list)

| # | Blocked | Origin |
|---|---|---|
| CB-1 | Vareya has the sharpest rates below 2 kg | Raymond RB-1 |
| CB-2 | Vareya always offers customised discounted rates for high-volume destinations | Raymond RB-2 |
| CB-3 | Vareya's AI fulfilment tools reduce operational costs | Raymond RB-3 |
| CB-4 | Every consumer will pay the same parcel price | Raymond RB-4 (future vision only) |
| CB-5 | There is always a match | Jos A4 |
| CB-6 | Absolute claims concerning every destination | Jos A4 |
| CB-7 | Blanket prohibition on high-value products | Jos A4 (manual-review default instead) |
| CB-8 | AI cost-saving claims | Jos A4/A5 |
| CB-9 | Up to 30% savings | Jos A5 — validation hypothesis only, never published |
| CB-10 | Automatic quotation / guaranteed final quotation / guaranteed acceptance | Jos A5 + register |
| CB-11 | Vareya always has a suitable quotation for every start-up | Jos A3 (unless register permits) |
| CB-12 | High SKU count automatically means more items in each order | Raymond technical correction |
| CB-13 | The scan alone always produces a final quotation | Raymond §8 |
| CB-14 | Instant quote/instant quotation language; price display; savings calculations | Claims Register v1.2 |
| CB-15 | Prohibited superlatives (fastest, cheapest, best standalone, leading, number one); "Rest of the World"; retired no-capability line; automation/robots claims | Claims Register v1.2 |

## 2. Mandatory register wording (verbatim where used)

CLAIM_VOLUME, CLAIM_RETURNS, CLAIM_ALL_IN, CLAIM_CUTOFF, CLAIM_SPECIALIST_FALLBACK, CLAIM_POST_SUBMISSION ("…initial fit response by email within one working day."), APPROVED_FACTS (parcel limits, specialisations, ShipHero/Shopify, carriers incl. PostNL-main-carrier framing).

## 3. Jos A2–A5 — how each lands in the draft

- **A2 (missing information):** becomes "what leads often cannot provide" content; teaches the exact/estimate/unknown + evidence-basis convention (historical report / carrier invoice / forecast / launch forecast / unknown). Invoice upload is NOT required publicly; mention only that a carrier report may help — no upload feature promise.
- **A3 (when a price indication is not yet reliable):** feeds section 7 and G1 gate. Start-up/pre-launch does not mean no route: a scenario-based assessment with an explicit, labelled forecast is possible; assumptions must be shown.
- **A4 (fit):** internal only — the article never publishes the AI Fulfilment Profile factors/outcomes as a feature. The article may only describe qualification honestly ("product fit is confirmed during qualification").
- **A5 (first response):** the article's CTA section may describe what happens after the scan within register limits: profile summary → fit status → confidence → missing info → quotation-readiness → indicative quotation where supported → assumptions → exclusions → next step. No promises of automatic/guaranteed quotation or acceptance.

## 4. Article corrections (apply in draft AND final revision)

1. Primary route: `/free-rate-scan/` (CTA links); `/fulfilment-scan/` becomes a redirect (implementation note; register conversion-rule update required).
2. Direct Answer correction: unknown values remain **valid inputs** — they simply require follow-up before a quotation can be finalised. Do not write "unknown values are not usable".
3. Remove overly absolute generic 3PL statements (e.g. "a provider that quotes without them is estimating rather than pricing" → soften: "a provider cannot price the operation reliably without them").
4. Tax and legal effects (VAT, customs, establishment country) must be conditional ("can depend on", "may affect"), not absolute, and must not constitute tax/legal advice.
5. Scan-first, email-first follow-up preserved: no meeting request as first action (register conversion rule).
6. CASE-STRONG-PROFILE-001 generalised further: indicative ranges, no market-list emphasis that could aid identification.
7. Article stays **noindex** until final approval: add a noindex flag to the article entry (implementation: KnowledgeArticle type gets `noIndex` or the article is excluded from the indexable list until approved).

## 5. Audit checklist (Agent 4, Phase 4)

- [ ] CB-1…CB-15 absent from rendered page
- [ ] Verbatim claims present and unmodified
- [ ] Direct Answer corrected (unknown = valid + follow-up)
- [ ] No absolute generic 3PL or tax/legal statements
- [ ] Primary CTA label + route correct (free-rate-scan after route change)
- [ ] Scan-first, email-first flow preserved
- [ ] Anonymisation of both cases confirmed
- [ ] noindex active until approval; removed only on publication approval
- [ ] Sources section: ≥3 authoritative, linked, retrieval-dated
- [ ] Reviewer + date filled by human before publication
