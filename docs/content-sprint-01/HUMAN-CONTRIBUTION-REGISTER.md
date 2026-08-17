# Content Sprint 01 — Human Contribution Register
**Register owner:** Agent 3 (Operational & Commercial Input)
**Last updated:** 17 August 2026
**Purpose:** traceability of every human contribution used in Content Sprint 01 — who provided what, when, how it is used, and what stays internal.

---

## Registered contributions

### JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A1
- **What:** five questions real leads regularly ask (shipping rates per country; carriers; storage & pick-pack costs; WMS; warehouse size).
- **Use:** FAQ section building blocks (article part 12); answers must stay within Claims Register boundaries.
- **Status:** PUBLISHABLE as FAQ topics; answer wording register-governed.

### JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5
- **Source ID:** `JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5`
- **Status:** Human commercial and sales input — CLOSES worksheet A2, A3, A4, A5.
- **Contents:** missing-information patterns (A2); when a price indication is not yet reliable (A3); commercial/operational fit criteria (A4); first-response workflow design (A5).

### RAYMOND-2026-08-17-QUOTATION-OPERATIONS
- **What:** operational quotation methodology, parcel profile, destination distribution, SKU/items separation, storage density, two anonymised example profiles.
- **Use:** article sections 4–10; classification and register in `docs/RAYMOND_SOURCE_REGISTER.md`.
- **Status:** extracted and classified; 4 claims blocked.

---

## Usage rules (binding)

1. Human input is evidence for content decisions, NOT automatically an approved public claim. The Claims Register v1.2 remains the only source of public Vareya claims.
2. Internal qualification criteria (A4 factors, outcomes, scoring) stay internal — in `docs/AI-FULFILMENT-PROFILE-SPEC.md` and lead-handling logic. They are never published as marketing copy.
3. Identifiable lead information stays in Supabase/HubSpot only (privacy rule).
4. Placeholders are resolved only by the named contributor; AI never fills them.

## Contribution status board (17 August 2026)

| Contributor | Input | Status |
|---|---|---|
| Jos | A1 real lead questions | ✅ CLOSED |
| Jos | A2 most commonly missing information | ✅ CLOSED |
| Jos | A3 when a price indication is not yet reliable | ✅ CLOSED |
| Jos | A4 commercial and operational fit | ✅ CLOSED → AI-FULFILMENT-PROFILE-SPEC.md |
| Jos | A5 first response after scan | ✅ CLOSED → QUOTATION-WORKFLOW.md §7 |
| Raymond | Operational answers (10 sections) | ✅ CLOSED (extracted) |
| Raymond | B1, B3, B4, B5 (not answered directly) | ⏳ OPEN — non-blocking for draft |
| Ops | C1 full list, C2, C7 | ⏳ OPEN — non-blocking for draft |
| Human reviewer | Named reviewer + review date | ⏳ OPEN — publication gate |
