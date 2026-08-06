# Claims Register — Vareya.ai

Last audited: 2026-08-06
Auditor: Hermes Agent 1
Status: CONTENT FREEZE — only factual errors, broken conversion, privacy issues, and P0/P1 defects may be changed.

---

## Audit Results

### / (Homepage)
- Status: **PASS**
- Forbidden claims found: 0
- Claims sourced from: `claims.ts`, `facts.ts`
- Notes: All headlines and value props are from APPROVED_HEADLINES and APPROVED_VALUE_PROPS.

### /eu-fulfilment/
- Status: **PASS**
- Forbidden claims found: 0
- Claims sourced from: `claims.ts`, `facts.ts` (COMPANY, CAPABILITIES, WAREHOUSE)
- Notes: Carrier list, parcel limits, and capabilities all match approved facts.

### /shopify-fulfilment-europe/
- Status: **CORRECTED**
- Issues found:
  1. "Real-time tracking" → changed to "Tracking updates" (not in approved claims)
  2. "twenty countries" → changed to "markets discussed during qualification" (implied universal EU coverage)
- Now: **PASS**

### /eu-fulfilment-us-brands/
- Status: **PASS** (false positive — "ISO" is inside "advisors")

### /eu-fulfilment-uk-brands/
- Status: **PASS**

### /cosmetics-supplements-fulfilment-europe/
- Status: **CORRECTED**
- Issues found:
  1. "We handle every order with the care your brand deserves" → changed to "We handle orders with the care your brand deserves" (removed "every")
- Now: **PASS**

---

## Audit Methodology
1. Scan each page for strings matching FORBIDDEN_CLAIMS
2. Verify all claims are sourced from `src/content/claims.ts` or `src/content/facts.ts`
3. Check for unqualified language: "guaranteed", "always", "all", "every"
4. Verify British English spelling: "fulfilment" not "fulfillment"

## Content Freeze Rules (effective after this audit)
- ✅ Factual errors may be corrected
- ✅ Broken conversion (forms, links, CTAs) may be fixed
- ✅ Privacy/legal issues may be addressed
- ✅ P0/P1 defects may be patched
- ❌ No new creative copy
- ❌ No new claims
- ❌ No new value propositions
- ❌ No testimonial-style language
- ❌ No statistics without source
