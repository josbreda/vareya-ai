# Content Sprint 01 — Human Input Requirements
**Article:** What information does a 3PL need to prepare a fulfilment quotation?
**Author:** Agent 2 (Content Architecture)
**Date:** 17 August 2026
**Status:** HUMAN INPUT COMPLETE — Jos A1–A5 closed, Raymond source extracted, ops C3–C6 supported. Final drafting and revision were completed externally (ChatGPT project). Publication remains blocked on review/QA gates.

---

## 1. Why human input was mandatory

The sprint's core rule: **do not publish an article an AI could summarise from existing internet pages.** The AI + Human publication standard sets minimums that only Vareya people can supply:

- at least two meaningful human insights;
- one operational example;
- one practical warning;
- one Vareya-specific decision framework or checklist;
- a named human reviewer and review date.

## 2. Mapping: which article section consumed which human input

| Article section | Human input required | Who | Status |
|---|---|---|---|
| 2 Direct answer | — | — | ✅ drafted |
| 3 Why an operational profile matters | External sources | — | ✅ drafted |
| 4 The nine required inputs | Definition check | Raymond (fixed) | ✅ |
| 5 Table (common mistake / impact columns) | Ops: data mistakes; impacts | Operations | ✅ C3–C6 sourced (C1 full list, C2 still open — non-blocking) |
| 6 Exact versus estimated information | Jos A2 | Jos | ✅ CLOSED (destination_data_basis) |
| 7 What happens when information is missing | Jos A3 | Jos | ✅ CLOSED (forecast-based route with assumptions) |
| 8 Example of a complete profile | Ops C6 | Operations | ✅ CASE-STRONG-PROFILE-001 |
| 9 Example of an incomplete profile | Ops C6 | Operations | ✅ CASE-INCOMPLETE-001 |
| 10 Questions to ask when comparing quotations | Raymond methodology | Raymond | ✅ partial (source §3, §7, §8) |
| 11 Practical checklist | Raymond + Jos | Raymond + Jos | ✅ built from nine inputs + A5 workflow |
| 12 FAQ | Jos A1 + register | Jos | ✅ real lead questions |
| 13 Free Rate Scan CTA | Register conversion rule | — | ✅ (route /free-rate-scan/ per register v1.3) |
| 14 Sources | Agent 1 source register | — | ✅ |
| 15 Reviewer and date | Named reviewer | Human reviewer | ⏳ publication gate |

## 3. Publication standard — status per requirement

| Requirement | Status |
|---|---|
| ≥2 meaningful human insights | ✅ COLLECTED (Raymond §3–§5 insights; Jos A2/A3 insights) |
| 1 operational example | ✅ COLLECTED (CASE-STRONG-PROFILE-001, anonymised) |
| 1 practical warning | ✅ COLLECTED (CASE-INCOMPLETE-001 lesson; G1 gate) |
| 1 Vareya-specific decision framework/checklist | ✅ nine-input checklist + first-response workflow |
| ≥3 authoritative external sources | ✅ Shopify, WooCommerce, EU Commission, UKWA, FedEx, UPS |
| Named human reviewer | ⏳ publication gate |
| Review date | ⏳ set at review |
| Successful Claims Register audit | ⏳ runs at Phase 3 (Agent 4) |
| Working Free Rate Scan CTA | ⏳ Phase 1 implementation |
| Measurement events | ⏳ Phase 1/5 implementation |
| No unsupported claims | ⏳ verified at Phase 3 |

## 4. Collection record

- **Jos:** A1 real lead questions (voice), A2–A5 commercial qualification input (source `JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5`) — all closed.
- **Raymond:** operational answers (source `RAYMOND-2026-08-17-QUOTATION-OPERATIONS`) — extracted and classified; B1/B3/B4/B5 not answered directly, non-blocking.
- **Operations:** C3–C6 supported via Raymond source; C1 (full list), C2, C7 open, non-blocking.
- Final editorial revision: completed in the ChatGPT project (final text delivered separately — see HERMES-IMPLEMENTATION-HANDOFF.md).

## 5. Failure modes (explicit)

1. If only one human insight were available → re-plan sections; do not pad. (Not the case — insights collected.)
2. No anonymised ops example → escalate; weaken to labelled constructed example. (Not the case — cases extracted.)
3. Reviewer unnamed at publication → publication BLOCKED (standard requires a named human reviewer).
