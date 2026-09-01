# Vareya — Accomplishments, Verified Against Live Evidence

Each item from the known-status brief is restated here with its actual verification status as of 2026-09-01. "Verified" means directly confirmed live or in the repository during this audit; "Verified with caveats" means real but with a material qualification; "Outdated/Contradicted" means the claim as stated does not match current evidence (full detail in `CLAIMS-RECONCILIATION.csv`).

| Accomplishment | Status | Evidence |
|---|---|---|
| Next.js 16, TypeScript, Tailwind website on Vercel | **Verified** | Live at vareya.ai, HTTP 200, `server: Vercel` header confirmed |
| Supabase and Resend | **Verified with caveats** | Confirmed in `docs/STATUS-RAPPORT.md` (6 Aug) and repo config; that specific status doc is a launch-week snapshot, not current — worth a fresh operational check of both integrations rather than relying on this 3-week-old document |
| Homepage, services, About, Knowledge Centre, Free Rate Scan, quote form | **Verified** | All confirmed live and returning 200 in `LIVE-ROUTE-AUDIT.csv` |
| Five Recommendation Engine experiments (commit 719fb96) | **Verified with caveats** | Commit and all 5 content deliverables confirmed real; "experiments" is a mislabel — none has a defined hypothesis, baseline, or measurement (see `RECOMMENDATION-ENGINE-E01-E05.md`) |
| ShipBob-alternative page | **Verified** | `/shipbob-alternative-europe/` shipped in the E01-E05 commit; not independently re-fetched live in this pass |
| Amazon FBM page | **Verified** | `/amazon-fbm-fulfilment/` shipped in the same commit; not independently re-fetched live in this pass |
| Cosmetics/supplements content expansion | **Verified** | 5 new FAQ entries confirmed live and correctly sourced from shared approved-fact constants |
| FAQPage and Organization structured data | **Verified with caveats** | Both confirmed present in live homepage JSON-LD; Google discontinued FAQ rich results in Search as of May 2026 — the schema itself is harmless but no longer produces a ranking/rich-result benefit in Google specifically |
| Canonicals, llms.txt, "Published about Vareya" page | **Verified with caveats** | Canonicals and llms.txt both confirmed present and well-formed; llms.txt contains one factual error (states "42 approved destinations," actual current list is 41 — see C-003); llms.txt itself is not an official ranking factor for any provider checked (see C-015) |
| go.vareya.com redirect map, 335 routes (327 redirects + 8 exceptions) | **Contradicted** | The domain-consolidation redirect to vareya.ai/knowledge/ **is working**, but live testing of 35 distinct paths found a single blanket catch-all rule, not a per-route map of any size. See `LIVE-TECHNICAL-AUDIT.md` and C-012 |
| vareya.com redirect planning, 271 routes, not yet executed | **Verified, and still not executed** | Confirmed live: www.vareya.com remains fully live and unredirected, 11+ days past Raymond's approval to consolidate it. This is the top blocker in this report (B-02) |
| Claims register v1.5 | **Verified with a governance caveat** | `content/claims-register.md` v1.5 is real, detailed, and dated; however two other documents both also called a "claims register" exist and disagree with it — one is stale (v1.3), one is an orphaned older audit — see `CLAIMS-RISKS.md` |
| AI baseline of 667 answers, second measurement of 528 answers | **Contradicted** | The real figure is 667+900=1,567 answers in one measurement; no trace of a "528" or "V2" measurement exists anywhere accessible. See `AI-VISIBILITY-DELTA.md` |
| Lead dashboard: 292 leads, 168 contacted, 7 replies, 2 qualified | **Outdated** | Current live figures: 333 leads, 190 contacted, 7 replied (matches), 0 currently qualified. See `LEAD-ENGINE-STATUS.md` |
| Microsoft Graph for info@vareya.ai | **Not independently re-verified in this pass** | Not part of the live technical audit scope; recommend a direct operational check (send/receive test) if this hasn't been confirmed recently |
| Dashboard on leads.jmconcepts.cloud | **Verified** | Live, HTTP 200, correct SPA shell served; internal audit of its actual lead data performed separately (`LEAD-ENGINE-STATUS.md`) |
| Human approval for outgoing prospect outreach | **Verified with a real gap** | The approval/claims gate is built and server-side enforced for the email-send path; the LinkedIn mark-as-sent path does **not** enforce the same requirement (0 of 2 actual sends on record went through human approval — see `LEAD-ENGINE-STATUS.md`) |

## What this audit independently found beyond the known-status list (not previously on the accomplishments list, but real and worth crediting)

- A real, working, tested claims-invalidation mechanism: editing an approved outreach message server-side resets its approval and claims status, preventing a stale-approved message from being sent (built in a prior engineering pass; confirmed present in the codebase, not independently re-tested live in this audit).
- A real, correctly-implemented bidirectional hreflang pairing between the Dutch and English versions of the Noord-Brabant fulfilment content (E05).
- A real, substring-match protected-customer suppression list in the discovery pipeline, confirmed to still contain the exact 10 companies specified as off-limits for this audit.
- A prior contact-enrichment research pass (27 August 2026) that took 44 weak-contactability leads and verified real contact channels/decision-makers for a majority of them, plus discovered 6 new outreach-ready leads with strong contactability from the start — genuinely good, evidence-disciplined work, currently under-leveraged because its output was never imported into the production database (see B-09).
