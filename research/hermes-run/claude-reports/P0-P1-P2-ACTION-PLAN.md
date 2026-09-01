# Action Plan — P0 / P1 / P2

P0 = live claims/legal/safety risk or broken production behavior. P1 = important, not on fire. P2 = worth doing, no urgency. Each item references its source finding.

## P0 — do first

1. **Execute the already-approved www.vareya.com → vareya.ai consolidation.** Approved by Raymond 21 August 2026; unexecuted 11+ days later; the old WordPress site is still live with the unsupported "1000 brands" claim, the wrong address (Etten-Leur), indexable "staging" text, and an old phone number. Blocked on hosting access (BLOCKERS.md B-02). *Owner: Jos/Raymond, via Itcoms or direct GoDaddy/Hostinger access.*
2. **Remove "1.000+ merken" / "1000 brands" from jmconcepts.cloud** (patch prepared, CP-01) and from www.vareya.com (covered by item 1). *Owner: whoever holds jmconcepts.cloud hosting (B-01).*
3. **Fix the infinite redirect loop on www.vareya.com/faq/** — a real, currently broken user-facing page (CP-05). Cheap to fix once WordPress access exists; can be bundled with item 1.
4. **Correct the "PostNL strategic partner" wording in the FS-TRUST-001 experiment** before it is ever allowed to launch (CP-02). Zero technical blocker — a spreadsheet/CSV edit.
5. **De-conflict the three "claims register" documents** (CP-04) — the stale `docs/CLAIMS.md` is the direct, demonstrated cause of finding #4 above. Zero technical blocker.
6. **Close the LinkedIn mark-as-sent approval-gate gap** (CP-06) — the only channel through which an outreach message can currently be sent without going through human approval, contradicting the explicit "human approval for all outbound" requirement. Zero access blocker, an engineering task.
7. **Correct the country-count error in the public, machine-readable `llms.txt`** (CP-03) — currently states a factually wrong number (42 vs. the actual 41) in a file explicitly designed for AI systems to ingest as ground truth.

## P1 — important, not urgent

8. **Confirm go.vareya.com's actual routing configuration directly** with whoever manages the Hostinger panel — external testing strongly suggests a single blanket catch-all, not the previously-reported 335-route map (B-03). Not broken (the redirect works), but the internal record of what was built should match reality.
9. **Correct the internal AI-visibility record** — replace the "667 baseline / 528 V2" framing with the accurate 667+900=1,567 structure, and formally retire the unsupported "528" reference (see AI-VISIBILITY-DELTA.md).
10. **Import the 27 August contact-enrichment research into the production `lead_contacts` table** (CP-07) — 26 named decision-makers were found through real research and are sitting unused in a CSV rather than in the CRM.
11. **Work down the follow-up backlog** — 116 of 126 open follow-ups (92%) are currently overdue. This is an operational-capacity question for Jos, not a technical one.
12. **Decide and record Samen Verzonden's actual status** — confirm with Raymond whether the JMConcepts cooperative proposal has had its "fase 1" conversation with Vareya at all; if not, this stays explicitly a JMConcepts-side idea, not a Vareya initiative, in any future communication.
13. **Connect Goodie (or an equivalent) and run a real, credentialed AI-visibility measurement** using the existing 36-prompt frozen query set — the one piece of AI-visibility infrastructure that's actually ready to use, currently blocked only on an account/API key (B-08).
14a. **Update competitive-positioning material to reflect that "Active Ants" is no longer a standalone competitor** — it has been absorbed into Paxon, a 9-country pan-European group formed by Bnode (see `LATEST-INDUSTRY-INTELLIGENCE.md` section 4). If any current sales/strategy material still names Active Ants as a mid-market Dutch peer, it understates the actual competitor's scale.
14b. **Use byrd and Monta, not generic "3PL competitors," as the benchmark set for positioning and pricing conversations** — both were found to be the closest published matches to Vareya's actual target segment (500+ orders/month, EU-based); see `LATEST-INDUSTRY-INTELLIGENCE.md` section 4 for their stated segmentation and differentiators.
14. **Fix the vareya.com sitemap duplication** (129 listed URLs, 57 unique in `page-sitemap.xml`) — a Rank Math/SEO-plugin hygiene issue, not urgent but easy once inside WordPress admin for other reasons anyway.

## P2 — worth doing, no urgency

15. Add `og:image` and `og:url` to vareya.ai's homepage meta tags (currently missing — link previews render without an image).
16. Add a canonical tag to jmconcepts.cloud (currently absent on every page checked).
17. Track vareya.com's TLS certificate renewal — it expires 2026-09-23, sooner than every other property (though likely auto-renewing via Let's Encrypt; worth a one-time confirmation it's on an automated renewal path).
18. Write the one tracking document that doesn't exist for "E01-E05" so future readers don't have to reconstruct scope from a git diff, as this audit did (RECOMMENDATION-ENGINE-E01-E05.md is a starting point).
19. Re-verify current official PostNL, FedEx, and Royal Mail business/partnership terminology once a session with full site access (no bot-blocking) is available — this audit's platform/carrier research was materially incomplete for these three specifically (B-06).
20. Check whether "MFN" (vs. the current customer-facing "FBM") appears anywhere in Vareya's Amazon-related content, per the platform-documentation finding that Amazon no longer uses "MFN" in customer-facing material.
