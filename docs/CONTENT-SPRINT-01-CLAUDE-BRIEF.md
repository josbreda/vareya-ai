# Content Sprint 01 — Claude Review-Draft Hand-off
**Date:** 17 August 2026
**To:** Claude (ChatGPT project) — drafting agent per the AI + Human workflow
**Task:** Produce the FIRST DRAFT of the Knowledgebank article "What information does a 3PL need to prepare a fulfilment quotation?"
**Status:** READY FOR CLAUDE REVIEW DRAFT — publication remains BLOCKED (Jos review + QA pending)

---

## 1. Read this pack first (in order)

1. `docs/content-sprint-01/CONTENT-BRIEF.md` — full brief: identity, structure (15 parts), nine-input architecture, CTA rules, acceptance criteria.
2. `docs/content-sprint-01/CLAIMS-BOUNDARY.md` — the ONLY allowed Vareya wording; 4 blocked claims (RB-1…RB-4); technical correction (§6); estimate-vs-exact rules.
3. `docs/content-sprint-01/OPERATIONAL-FACT-PACK.md` — approved facts, scan coverage, input status, §5 public-safe insights.
4. `docs/sources/RAYMOND-2026-08-17-QUOTATION-OPERATIONS.md` — classified Raymond source incl. CASE-INCOMPLETE-001 and CASE-STRONG-PROFILE-001.
5. `docs/QUOTATION-WORKFLOW.md` — G1/G2 gates + the two anonymised cases.
6. `docs/content-sprint-01/SOURCE-REGISTER.md` — the 6 citable external sources (Shopify, WooCommerce, EU Commission, UKWA, FedEx, UPS). Competitor sources are gap-analysis only, never cited.
7. `docs/content-sprint-01/HUMAN-INPUT-WORKSHEET.md` — what is collected vs open (Jos A1–A5 CLOSED).
8. `docs/content-sprint-01/CLAUDE-DRAFT-CLAIMS-REPORT.md` — the full blocked-claims list (CB-1…CB-15) + mandatory wording + the 7 article corrections.
9. `docs/AI-FULFILMENT-PROFILE-SPEC.md` — internal only; the article must never describe the profile as a public feature.

## 2. Drafting rules (binding)

- **Language:** simple English, British spelling (fulfilment), short sentences.
- **Direct answer:** 50–70 words, answer-first (see brief §4 draft).
- **Nine inputs:** exactly Raymond's nine — do NOT add required inputs.
- **Table:** 5 columns (information / why the 3PL needs it / exact, estimate or unknown / common mistake / possible quotation impact).
- **Five-concept separation (mandatory):** total SKUs ≠ average items per order ≠ average order lines ≠ pick actions ≠ batch-picking suitability. The sentence "a high SKU count automatically means more items in each order" is BANNED.
- **Examples:** use only CASE-INCOMPLETE-001 and CASE-STRONG-PROFILE-001, anonymised, labelled illustrative. No names, emails, domains.
- **Vareya claims:** only Claims Register v1.2 wording, verbatim where required (CLAIM_VOLUME, CLAIM_RETURNS, CLAIM_ALL_IN, CLAIM_CUTOFF, specialist fallback, post-submission commitment). No prices, no instant-quote language, no savings, no superlatives.
- **Blocked claims RB-1…RB-4:** must not appear anywhere. The 2 kg profile sentence may be used ONLY in its approved public-safe interpretation (fact pack §6.5.1) and is flagged for register update.
- **Scan honesty:** do NOT claim the scan collects all nine inputs or that the scan alone always produces a final quotation. Estimates support an initial assessment; exact data may be required before a final quotation.
- **Placeholders:** where input is open, write `[OPEN — OPS]` (C1 full list, C2, C7 topics) or `[REVIEWER NAME]` / `[REVIEW DATE]`. Do not invent content for placeholders.
- **CTA:** label `Check your EU fulfilment fit` → `/free-rate-scan/` (primary route per Jos 17-08-2026; `/fulfilment-scan/` becomes a redirect at implementation). Secondary: `Request a fulfilment quote` → `/request-fulfilment-quote/`.
- **Direct Answer (corrected):** unknown values remain VALID inputs — they require follow-up before a quotation can be finalised. Do not write "unknown values are not usable".
- **Generic 3PL statements:** conditional and attributed, never absolute. Tax/legal effects conditional ("can depend on", "may affect") — no tax or legal advice.
- **Scan-first, email-first:** scan is the first action; first follow-up is the one-working-day email fit response. No meeting-first.
- **noindex:** article stays noindex until final approval (implementation flag, not a draft concern — but the draft must carry the "reviewer + review date" block as placeholders).
- **FAQ:** build from Jos's real lead questions (worksheet A1: shipping rates per country, carriers, storage & pick-pack costs, WMS, warehouse size) — answered within register-safe boundaries; plus volume fit (CLAIM_VOLUME), estimate-vs-exact, timing, storage, platform.
- **Sources section:** cite organisation + linked title + retrieval date 17 August 2026 (register).
- **Reviewer block:** leave `[REVIEWER NAME]` and `[REVIEW DATE]` placeholders.

## 3. Output

Draft the article as structured markdown following the 15-part structure in the brief, saved to `content/content/content-sprint-01-draft-01.md` (repo root convention for ChatGPT outputs in `docs/`). Jos reviews next; Hermes implements after approval.
