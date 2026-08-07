# Sprint 2 — Vision, Knowledge & Revenue System
**Date:** 7 August 2026, 21:45 CEST
**Branch:** `sprint-2-vision-knowledge-hubspot`
**Build:** 22/22 pages, 0 errors

---

## STATUS: IN PROGRESS

---

## COMPLETED

| # | Deliverable | Status | Evidence |
|---|---|---|---|
| 1 | Sprint branch | ✅ | `sprint-2-vision-knowledge-hubspot` |
| 2 | `/why-vareya-ai/` | ✅ | Cooperative vision page built |
| 3 | `/about/` | ✅ | Company page with KVK, address, capabilities |
| 4 | `/knowledge/` | ✅ | Knowledge index with 3 articles listed |
| 5 | `/knowledge/[slug]` | ✅ | Article template + first article |
| 6 | Color system upgrade | ✅ | New tokens in globals.css |
| 7 | NetworkHero component | ✅ | Canvas 2D particle animation |
| 8 | RotatingHeadline component | ✅ | "European fulfilment for..." rotation |
| 9 | Goodie prompt file | ✅ | 36 prompts in 6 categories (docs/aeo/) |
| 10 | HubSpot API research | ✅ | API architecture documented |

## IN PROGRESS

| # | Item | Owner |
|---|---|---|
| 1 | HubSpot CRM integration | Agent 3 + Jos (needs API key) |
| 2 | Goodie account connection | Agent 4 + Jos (needs account) |
| 3 | Sprint 2 test report | Agent 1 |
| 4 | Claims audit (new pages) | Agent 4 |

## NEW PAGES

| Route | H1 | Indexable |
|---|---|---|
| `/why-vareya-ai/` | A different kind of fulfilment company | Yes |
| `/about/` | Fulfilment from Breda, the Netherlands | Yes |
| `/knowledge/` | Practical fulfilment knowledge | Yes |
| `/knowledge/[slug]` | Dynamic article | Yes |

## GOODIE PROMPT FILE

- **File:** `docs/aeo/goodie-prompts.csv`
- **Prompts:** 36 prompts in 6 categories
- **Categories:** Entity accuracy (P0), Provider discovery, Shopify/Amazon, EU market entry, Product fit, Returns & operations
- **Compliant:** All prompts use approved claims register language. No false claims, no superlatives.

## HUBSPOT INTEGRATION PLAN

Based on HubSpot API research:
- **Auth:** Private app token (simpler than OAuth for server-to-server)
- **Endpoints:** Contacts API v3, Companies API v3, Associations API v4
- **Flow:** Lead submission → Supabase insert → HubSpot contact upsert → company upsert → association → task create → HubSpot IDs back to Supabase
- **Failure safety:** Supabase always receives the lead first. HubSpot sync is non-blocking. Failed syncs get retry_pending status.

## NEXT STEPS

1. Jos creates HubSpot private app → provides token
2. Agent 3 builds HubSpot sync module
3. Agent 4 connects Goodie account
4. Run full test suite
5. Merge sprint branch → main
6. Deploy to production
