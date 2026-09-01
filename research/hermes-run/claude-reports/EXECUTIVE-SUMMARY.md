# Vareya — Current State Executive Summary

**Audit date:** 2026-09-01. **Scope:** full-stack evidence audit of Vareya's live properties, codebases, claims governance, lead engine, and AI-visibility position, cross-checked against the newest available external information on EU customs, the fulfilment market, and platform/carrier terminology. Full detail across 15 companion files in this folder; this is the entry point.

## The one-paragraph version

Vareya has real, live, working infrastructure — a modern Next.js/Vercel site, a working lead-generation and CRM pipeline with a genuine human-approval safety gate, and a claims-governance document that is more rigorous than most companies this size ever build. But three things are true at the same time: (1) a known-unsupported "1,000+ brands" claim has been live for at least three weeks with a prepared fix sitting undeployed for lack of hosting access; (2) an approved domain-consolidation fix has sat unexecuted for 11 days while the old site keeps serving that claim plus a wrong address and stale "staging" text; (3) internal status reporting (accomplishments list, AI-visibility numbers, lead counts) has drifted noticeably from what a direct database and repository check shows today. None of this is deliberate misrepresentation — it traces to fragmented documentation and unresolved access blockers, not intent. All three are fixable within days once hosting access exists.

## What's demonstrably true (verified this audit, 2026-09-01)

- vareya.ai is live, modern, and fast (Next.js 16/Vercel), with working Free Rate Scan, quote form, and Knowledge Centre — all HTTP 200, confirmed in `LIVE-ROUTE-AUDIT.csv`.
- The lead engine is real and operating: 333 leads in production, 190 contacted, 7 replied, 65% of active leads now have 2+ verified contact channels (up substantially after a dedicated 27 August enrichment pass).
- A genuine, server-enforced human-approval gate exists for email outreach — no message can be sent without passing a claims check and an explicit human approval on the current message version. This is a real safety control, not a design intention.
- `content/claims-register.md` v1.5 is a substantive, versioned, evidence-graded governance document — most companies Vareya's size have nothing like it.
- The 10 explicitly protected companies (Vacier, VUE Swiss, Tipaw, OpenBorder, Lumin, Meridian, Primal FX, SanaDigest, PureBloom, GetYourFil) are confirmed absent from the lead database and are also hard-coded into the discovery pipeline's suppression list — double-protected, verified directly.

## What's not true, or no longer true

- **"1,000+ brands"** — live on both jmconcepts.cloud and www.vareya.com, forbidden by Vareya's own claims register, unsupported by any evidence found anywhere. See `CLAIMS-RISKS.md` Risk 1.
- **"667 baseline / 528 V2" AI-visibility measurement** — the real number is 1,567 answers in one measurement (667+900); "528" has no trace in any accessible file. See `AI-VISIBILITY-DELTA.md`.
- **"335-route redirect map" on go.vareya.com** — live testing of 35 distinct paths found one blanket catch-all rule, not a per-route map of that scale. See `LIVE-TECHNICAL-AUDIT.md`.
- **"292 leads / 168 contacted / 2 qualified"** — current figures are 333 / 190 / 0 (with 0 "qualified" plausibly explained by leads progressing further down the pipeline — flagged as INFERENCE, not confirmed). See `LEAD-ENGINE-STATUS.md`.
- **"42 approved destination countries"** — direct machine count of the authoritative register lists 41. This number is also wrong in the public, AI-facing `llms.txt` file. See `CLAIMS-RISKS.md` Risk 4.

## Top 3 commercial opportunities

1. **The 27 August contact-enrichment research (26 named decision-makers) is sitting unused.** It was never imported into the `lead_contacts` table — a one-time import script would let the sales pipeline actually benefit from research that's already paid for and done (`BLOCKERS.md` B-09, `CHANGE-PROPOSALS.md` CP-07).
2. **111 of 320 active leads still lack 2+ verified contact channels.** The enrichment methodology used for the first 44 leads is proven and repeatable — extending it is the highest-leverage next research pass.
3. **A ready-to-use, frozen 36-prompt AI-visibility query set exists but has never been run with a real, credentialed tool.** Connecting Goodie (or an equivalent) would convert Vareya's AEO investment from "content shipped" to "measured effect" for the first time (`BLOCKERS.md` B-08).

## Top 3 reputation/claims risks

1. **Unsupported "1,000+ brands" claim, live on two properties for 3+ weeks**, with a fix prepared but undeployed for lack of access (`CLAIMS-RISKS.md` Risk 1).
2. **A prohibited "PostNL strategic partner" claim is freshly designed into an unlaunched A/B test** (FS-TRUST-001) — it will go live on a slice of real traffic unless corrected before launch (`CLAIMS-RISKS.md` Risk 3).
3. **Three conflicting documents all called "claims register" exist simultaneously**, one of them (`docs/CLAIMS.md`) actively showing the prohibited PostNL wording as if it were still approved — this is very likely the direct cause of risk #2 (`CLAIMS-RISKS.md`, governance finding).

## What needs a human decision, not more research

- Executing the already-approved www.vareya.com domain consolidation (blocked purely on hosting/FTP access — `BLOCKERS.md` B-02).
- Deciding Samen Verzonden's actual status — it is currently a JMConcepts-authored proposal Vareya has not yet formally discussed, containing claims (a guaranteed-outcome promise, an unsourced "13% cost reduction") that would violate the register if ever surfaced as Vareya's own position (`CLAIMS-RISKS.md` Risk 5).
- Whether the raw AI-visibility research artifacts (the actual query list and per-provider breakdown behind the "1,567 answers" figure) exist anywhere outside the repositories checked — they could not be located and may be permanently lost (`BLOCKERS.md` B-07).

## One-line verdict

Vareya's underlying engineering and governance work is genuinely good and ahead of typical peer-stage companies; its public-facing claims and internal status reporting have drifted behind that work and need a access-unblocked cleanup pass, not a rebuild — full detail and a dated action plan are in `P0-P1-P2-ACTION-PLAN.md`.

*Full source list for every claim above: `SOURCE-REGISTER.csv`. Every finding here is cross-referenced to a companion file with the underlying evidence.*
