# Claims Risks — Vareya

Companion to `CLAIMS-RECONCILIATION.csv` (17 machine-readable rows, C-001 through C-017). This document explains the highest-severity risks in prose. Every claim below is cross-referenced to its row ID.

---

## Governance finding that precedes all individual claims

Vareya's claims governance is not currently a single source of truth. Three documents all use the name "claims register" or similar:

1. **`content/claims-register.md`** — the actual authoritative one, currently **v1.5** (last substantive update 24 August 2026).
2. **`docs/CLAIMS.md`** — a "quick reference" that explicitly says it defers to #1, but is **stale at v1.3** (last synced 21 August 2026) — it still contains the superseded "PostNL is Vareya's strategic partner and main carrier" wording that v1.5 explicitly prohibits.
3. **`docs/claims-register.md`** — a completely different, older audit document (dated 6 August 2026, authored by "Hermes Agent 1"), referencing a `claims.ts`/`facts.ts` content architecture that predates the current markdown-based content system. It is orphaned, not superseded-and-marked as such.

**Risk:** anyone (human or AI agent) who opens `docs/CLAIMS.md` for a quick check will see the prohibited "strategic partner" wording presented as approved. This is a live governance hazard, not a hypothetical one — see C-002, where exactly this wording was found freshly designed into an unlaunched experiment dated *after* the register had already downgraded it once.

**Recommendation:** delete or clearly stamp `docs/claims-register.md` as SUPERSEDED, and re-sync `docs/CLAIMS.md` to v1.5 immediately, or remove it and point everyone directly at `content/claims-register.md`.

---

## Risk 1 (highest severity): unsupported "1,000+ brands" claim, live on two properties (C-001)

Confirmed live, verbatim, on 2026-09-01:
- **jmconcepts.cloud** (homepage): *"Vareya, een e-fulfilment specialist met 1.000+ merken..."*
- **www.vareya.com** (homepage): *"empowering over 1000 brands worldwide"*

Both of Vareya's own governance documents (`content/claims-register.md` v1.5 and `docs/ENTITY-SUBMISSION-PACK.md`) explicitly list brand-count claims as forbidden, and `docs/VAREYA-DOMAIN-ENTITY-AUDIT.md` flagged the www.vareya.com instance as a **P0 finding on 10 August 2026** — three weeks ago. No internal or external evidence of any kind supports a brand-count figure. The apparent origin is JMConcepts' own descriptive language about its client (it also appears in JMConcepts' internal "Samen Verzonden" concept proposal, dated June 2026), not anything Vareya itself ever measured or approved.

**A corrected patch for the jmconcepts.cloud instance is prepared** (see `CHANGE-PROPOSALS.md`) but not deployed — no hosting credentials for jmconcepts.cloud exist in the accessible secrets vault (see `BLOCKERS.md`). The www.vareya.com instance requires the same domain-consolidation work already approved by Raymond on 21 August but not yet executed (see Risk 2).

## Risk 2: an approved fix has sat unexecuted for 11+ days while known-unsupported claims stay live (C-013)

Raymond approved consolidating vareya.nl / vareya.com / go.vareya.com into vareya.ai on **21 August 2026**. As of this audit (**1 September 2026**), `go.vareya.com` has been migrated correctly, but **www.vareya.com has not** — it remains fully live, unredirected, and still contains every issue the original 10 August audit flagged: the "1000 brands" claim, the old "Etten-Leur" address (a second warehouse location that contradicts the single-address canonical entity data), "staging" text (10 occurrences), and an old phone number. This is not a new finding — it is the same P0 finding, unresolved for three weeks past discovery and 11 days past approval. Execution requires Hostinger-FTP/GoDaddy access that this audit does not have (see `BLOCKERS.md`).

## Risk 3: PostNL "strategic partner" wording found freshly designed into an unlaunched experiment (C-002)

The live site currently uses the correct, downgraded wording ("main carrier"). However, `marketing/experiments.csv` — an A/B test (FS-TRUST-001) with status "Designed — instrumentation and baseline required before launch" — has its **variant copy** specify a trust-signal strip reading *"PostNL strategic partner"*. This experiment was designed 10 August 2026, the same day the register's PostNL wording was under active review; the experiment file was never updated when the register was. If this experiment launches as currently designed, it reintroduces a claim the register explicitly prohibits, on a portion of live traffic, via an A/B test that might not get the same manual claims-review scrutiny as ordinary page content. **This must be corrected in the experiment design before FS-TRUST-001 ever launches.**

## Risk 4: three different country counts in circulation for the same list (C-003, C-004)

`content/claims-register.md` v1.5's approved destinations list, counted directly and precisely by machine, contains **41 countries**. `docs/ENTITY-SUBMISSION-PACK.md` cites **42 countries** (attributed to "v1.4"). `vareya.ai/llms.txt` — a live, public, machine-readable file — also states **"42 approved destinations."** The task brief that initiated this audit referenced **"42 landen"** as well, suggesting this number has propagated informally beyond the documents. None of the three sources agree with a direct count of the current authoritative list. This is very likely simple documentation drift (the number "42" copied forward without recounting after a list edit) rather than any deliberate overstatement, but it means a **public-facing, machine-readable file (llms.txt) currently states an incorrect fact** that any AI system reading it would ingest as ground truth.

Separately: the four most recent destinations (Saudi Arabia, South Korea, Turkey, UAE) were added by Raymond's decision on 9 August 2026 explicitly **without** the normal per-country shipping-capability confirmation step that every other destination went through — the register documents this as a deliberate exception, not an oversight. This doesn't make the claim false, but it is a lower evidence class than the rest of the list and worth a operational recheck.

## Risk 5: "being built as a cooperative" has no basis in anything Vareya has agreed to (C-010, C-011)

No page on vareya.ai, vareya.com, or jmconcepts.cloud currently makes this claim (confirmed by this audit's live technical pass). The only source anywhere is `concept-samen-verzonden.md` — a proposal document, explicitly labeled "conceptvoorstel" (concept proposal), version 2, dated **June 2026**, written **by JMConcepts** (the consultancy, not Vareya), naming Vareya only as a "beoogd partner" (prospective/intended partner). The document's own §9 "next steps" states the actual conversation with Vareya about this idea had not yet taken place when it was written. If this framing were ever published as if it were a Vareya-side commitment, it would be a fabrication of Vareya's own strategic direction by a third party. **This is currently a non-issue in practice (nothing live claims it) but is flagged because the underlying proposal document itself contains claims that would themselves violate the register if ever surfaced** — including an explicit delivery guarantee ("geen verliezen, geen fouten — of de kosten worden vergoed") that directly contradicts the register's prohibition on guaranteed-outcome language, and an unsourced "13% cost reduction" figure. Recommend Jos/Raymond explicitly decide and record whether this proposal has any current status at all.

## Risk 6: two-domain entity fragmentation is now independently corroborated by a third party (C-011, LIVE-TECHNICAL-AUDIT.md)

This was previously an internally-identified risk (see prior project memory on Vareya entity fragmentation). This audit adds independent, external corroboration: **Vareya's own LinkedIn company page** (fetched live) lists vareya.ai as its primary link while also referencing vareya.com in its description — meaning a neutral third-party platform is already surfacing the same two-domain confusion that internal audits flagged. Combined with the finding that vareya.ai and vareya.com are not canonically cross-linked and carry materially different value propositions (boutique 500+/month specialist vs. "Europe's proven leader... any size business"), an AI system or human researcher synthesizing "who is Vareya" today would reasonably encounter contradictory signals.

## Lower-severity findings worth tracking

- **C-014**: Google discontinued FAQ rich results in Search as of May 2026. Vareya's FAQPage schema (an "accomplishment") is harmless but has zero remaining Google-specific benefit — worth correcting in internal reporting, not on the site itself.
- **C-015**: llms.txt is confirmed, from primary sources, not to be an official ranking/citation factor for any major search or AI provider as of this audit. It should continue to be described as a low-cost convenience file, not a proven visibility lever.
- **www.vareya.com/faq/** has a genuine infinite redirect loop (Rank Math misconfiguration) — not a claims issue, but a real, broken, live user-facing defect discovered during this audit (see `LIVE-TECHNICAL-AUDIT.md`).
