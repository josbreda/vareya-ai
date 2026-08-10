# Vareya.ai — Marketing Decisions Register
**Date:** 10 August 2026
**Version:** 1.0

## ACTIVE DECISIONS

### D-001: Warm Lead Model
**Decision:** Use dual scoring: fit_score (0-50) + intent_score (0-50) = total_warmth (0-100)
**Thresholds:** WARM ≥ 40, HOT ≥ 70
**Rationale:** Separates operational fit from commercial intent. Prevents fit-only or intent-only misclassification.
**Implemented:** 10 Aug 2026 — `src/lib/hubspot/index.ts`
**Status:** ACTIVE

### D-002: Scan-First Funnel
**Decision:** Primary CTA is "Check your EU fulfilment fit" → /fulfilment-scan/. No meeting-first CTA.
**Rationale:** Raymond approved. Respects visitor autonomy. Scan completion = qualified intent signal.
**Status:** ACTIVE

### D-003: Supabase-First Architecture
**Decision:** Supabase is technical source of truth. HubSpot downstream. No lead loss on HubSpot failure.
**Rationale:** Data integrity over CRM convenience.
**Status:** ACTIVE

### D-004: Content Cluster Strategy
**Decision:** 10 clusters, prioritized by fit × intent potential. Clusters 1-3 this sprint.
**Rationale:** Focus beats volume. Each cluster must contain genuine operational insight.
**Status:** ACTIVE

### D-005: Goodie as Measurement Layer
**Decision:** Goodie measures AI visibility. Does not publish, does not bypass claims approval, does not receive PII.
**Rationale:** Safe measurement without giving AI models unapproved content access.
**Status:** PENDING CONNECTION

## RETIRED DECISIONS
(None yet)
