# AI Visibility — Baseline, "V2", and Current State

## Headline finding

**The "667 baseline / 528 V2" framing does not match what actually exists.** A dedicated reproducibility investigation (full methodology in this document) found:

- **667 is real but mischaracterized.** The actual documented figure, from `docs/RAYMOND-AI-DECISIONS.md` in the `vareya-ai` repo, is **667 buying-intent questions + 900 "journey-turns" = 1,567 total AI answers measured**, with **Vareya mentioned 0 times** and **ShipBob the #1 recommendation in 53% of answers**, including purely European queries. 667 is a sub-count within that 1,567 total, not a standalone "667-answer baseline."
- **528 has zero evidentiary trace.** A full-repository search — every file, every branch, complete git history via `git log --all -S"528"` — found no document, script, dataset, or commit referencing a "528" AI-visibility measurement or a "V2" benchmark of any kind. The only "528" hits found anywhere on this machine were unrelated (minified JS error codes, lead-scoring CSV values in a different project entirely).
- **The underlying raw research was never committed.** `RAYMOND-AI-DECISIONS.md` cites three source reports (`research/reports/MASTER-SYNTHESIS.md`, `VAREYA-ENTITY-AUTHORITY.md`, `COMPETITOR-AI-SELECTION.md`) and a `research/` directory. None of these exist anywhere accessible — not in the current repo, not in any branch, not in git history. The 1,567-answer measurement appears to have been produced in an external or ephemeral session and only its summary conclusion was ever saved. The literal query list, the per-provider breakdown, and the methodology detail are **unrecoverable.**

This is reported as CONTRADICTED in `CLAIMS-RECONCILIATION.csv` (C-016) — not because the underlying finding (Vareya absent, ShipBob dominant) is doubted, but because the specific "667 / 528" framing given as a starting assumption does not survive contact with the evidence, and a second measurement to compare against a first one does not appear to have happened at all.

## What real (if small) benchmarking infrastructure does exist

Two genuinely real, but much smaller and explicitly-caveated, efforts exist:

**1. Goodie (third-party AI-visibility SaaS) — built, never connected**
- A 36-prompt, 6-category, frozen query set exists: `docs/aeo/goodie-prompts.csv` / `.json` (English, GB/US markets: entity accuracy, provider discovery, Shopify/Amazon FBM, market entry, product fit, returns/operations).
- `docs/growth-sprint-01/GOODIE-BASELINE.md` (18 August 2026) states explicitly: *"Status: NOT CONNECTED — geen Goodie-credential, API-key, MCP-server of CLI in deze omgeving... Zonder toegang is elke 'citation baseline' een verzinsel — wordt niet gefabriceerd"* ("without access, every citation baseline is a fabrication — it will not be fabricated"). This is a genuinely good governance instinct, correctly refusing to invent numbers.
- The results template (`marketing/growth-sprint-01-ai-citations.csv`) has a well-designed schema (prompt_id, model, market, vareya_mentioned, vareya_cited, cited_url, mention_position, competing_brands, sentiment, factually_accurate, missing_information) but **zero data rows** — it has never actually run.

**2. Internal WebSearch-tool proxy benchmark (a different, adjacent project)**
- `/opt/aos/HOS/projects/vareya-ai-lead-engine/baselines/BASELINE-V1.md` (frozen 21 August 2026) — explicitly states *"No programmatic access to ChatGPT/Perplexity/Gemini/Copilot existed at measurement time. All 'AI Query Benchmark' rows are WebSearch-tool results, used as a proxy... not a reproduction of any specific consumer AI product."*
- Covers roughly **6 WebSearch queries** plus one user-reported single ChatGPT session. This is real and honestly labeled, but is not remotely the same scale or methodology as the 1,567-answer figure, and belongs to a parallel research project (AEO/entity work), not the same effort that produced the 667/900 numbers.

## Reproducibility verdict: BLOCKED (for the original methodology specifically)

Reproducing "the 667 baseline vs. the 528 V2" as originally framed is not possible:
- The literal 667+900 query set was never committed and cannot be recovered.
- There is no "528" artifact to reproduce or compare against.
- The one frozen, reusable query set that does exist (Goodie's 36 prompts) is a different, smaller set built for a different tool, and that tool has never been connected to any real AI provider — using it would start a new benchmark, not reproduce the old one.
- No provider API integration code exists anywhere in the `vareya-ai` repo's `scripts/` directory or `package.json`. Every actual AI-provider query performed to date across both projects has been manual (WebSearch-tool proxying or a single reported ChatGPT session) — never automated, never at scale.

## What it would take to do this properly going forward

1. **Correct the internal record first.** Update whatever document currently repeats "667 baseline / 528 V2" to describe the 667+900=1,567 structure accurately, and either find or formally write off the "528" reference.
2. **Freeze a new query set and commit it to version control before running it** — the Goodie 36-prompt set is a reasonable starting point, or author a new set matching the original "buying-intent + journey-turn" structure since the original is unrecoverable. Keep it explicitly separate from any exploratory/ad-hoc query set, per the standing instruction not to conflate the two.
3. **Decide which providers actually count** (ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot are all named as targets across various documents) and get real, credentialed access to at least one of them — as of the last commit checked, none had programmatic access; Goodie needs a paid account from Jos.
4. **Build the actual execution/logging harness.** None exists today. The Goodie integration is the most-scaffolded option (results schema already defined) and the most likely path to finishing this with the least new work.
5. **Only then** run a real V1, and treat any later run as a genuinely comparable V2 — mirroring the discipline `BASELINE-V1.md` itself models correctly ("Frozen... do not edit... any re-measurement is a new, separately-dated baseline that references this one").

## Current visibility signal (separate from the benchmark question)

Direct search-engine/AI-answer-box testing was attempted (Phase 3D research) but was **not achievable in this session** — WebSearch quota was exhausted, and direct WebFetch of Google/Bing/DuckDuckGo results pages returned unreliable, unrelated content (bot-challenge pages mis-summarized as real results) across six independent attempts. This sub-question is **unanswered, not negative** — absence of evidence is not evidence of absence here.

What could be verified directly: Vareya's own LinkedIn company page independently corroborates the vareya.ai/vareya.com entity-fragmentation issue (it references both), and separately corroborates the Bagven Park 6, Breda address (a third independent confirmation, alongside vareya.ai and vareya.com's own pages). See `LIVE-TECHNICAL-AUDIT.md` and `CLAIMS-RISKS.md` Risk 6.

## Recheck cadence

Recommend re-running whatever benchmark is eventually built on a fixed calendar cadence (e.g. quarterly) rather than ad hoc, and always diffing against the immediately-prior frozen run, not against the unrecoverable original 1,567-answer figure once a new methodology is in place.
