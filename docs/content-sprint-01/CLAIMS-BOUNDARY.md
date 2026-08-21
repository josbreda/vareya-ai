# Content Sprint 01 — Claims Boundary
**Article:** What information does a 3PL need to prepare a fulfilment quotation?
**Governing source:** `content/claims-register.md` v1.2 (approved 9 August 2026) — the ONLY source for Vareya service claims.
**Author:** Agent 2 (Content Architecture) with Agent 4 (SEO/GEO/CRO)
**Date:** 17 August 2026

---

## 1. Source-of-truth rule

- Every Vareya-specific statement in the article must trace to Claims Register v1.2 or to the post-submission commitment / conversion rules in it.
- The nine quotation inputs are **generic industry knowledge**, not Vareya claims — they are presented as what *a* 3PL needs. The moment the article says what *Vareya* does, offers or requires, register wording applies verbatim.
- No old WordPress copy, no `APPROVED_OPERATIONAL_FACTS.md` (2026-07-27) where it conflicts with the register; the register is newer and approved. Conflicting legacy facts (e.g. older email addresses, carrier shorthand) are NOT used.
- `BRAND.md` and `VISION_AND_STRATEGY.md` set voice and strategic framing; they grant no claims.

## 2. Allowed Vareya statements for this article

| If the article discusses… | Mandatory wording / allowed claim |
|---|---|
| Monthly order volume | `Vareya is generally best suited to brands shipping 500 or more orders per month.` (CLAIM_VOLUME — verbatim) |
| Returns | `Returns handling is available. Contact Vareya to discuss the required returns process.` (CLAIM_RETURNS — verbatim) |
| Rates / pricing model | `Vareya's fulfilment rates are fixed and all-in per agreement — no hidden costs beyond what the agreement sets out.` (CLAIM_ALL_IN) |
| Cut-off times | `Cut-off times of up to 23:00 may be available by agreement.` (CLAIM_CUTOFF) |
| Specialist/customs requirements | `Have customs, tax or specialist handling requirements? Include them in the fulfilment scan so Vareya can confirm which parts of the proposed setup can be supported.` (public-facing fallback) |
| Post-scan follow-up | `Vareya will review your answers and send an initial fit response by email within one working day.` (post-submission commitment — verbatim) |
| Product fit | `Product fit is confirmed during qualification.` |
| Parcel size | `Suitable smaller parcels have combined dimensions below 900 mm and a maximum length of 600 mm.` |
| Specialisation | `Vareya specialises in cosmetics, supplements, phone cases, accessories and other smaller parcel products.` |
| Integration | `Vareya uses ShipHero as its warehouse management system, fully integrated with Shopify.` / `Shopify integration is available.` |
| Carriers | `Carriers include DHL, PostNL, Asendia, FedEx and Royal Mail.` + approved PostNL main-carrier sentence |
| Price display | The scan does not display a price; rates are agreed per client. Say this, do not show numbers. |

## 3. Prohibited in this article

- Prohibited terms list (`src/content/claims.ts` PROHIBITED_TERMS): fastest, cheapest, leading, number one, "Rest of the World", the retired no-capability line, guaranteed same-day dispatch, guaranteed delivery, instant quote/instant quotation, AutoStore, robots, automation, multi-warehousing, inventory accuracy, error rate.
- "best" as a standalone superlative (only inside CLAIM_VOLUME verbatim).
- Customer names, logos, testimonials, cases, results, brand counts, warehouse capacity figures, employee numbers.
- Any price, rate figure, savings claim or discount promise.
- Claiming the article's checklist equals "everything a 3PL needs from you" as a Vareya promise — frame it as the practical minimum for a *useful* quotation review.
- Unconfirmed capabilities (import, VAT-related, IOSS, DDP, temperature-controlled storage, certifications, batch/expiry management, FEFO/FIFO, regulated-product handling): never claim available OR unavailable; use the approved fallback only.

## 4. Specific risks for THIS article (highest attention first)

1. **Scan coverage ≠ nine inputs.** The live scan (`content/fulfilment-scan.md`) collects: company, website, country, monthly volume, SKU count, product category, parcel dimensions, optional weight, platform, Amazon FBM, ship-from, returns, target markets (multi-select), start date, comments. It does **not** collect destination percentage distribution, average items per order, storage pallets, or structured priorities. The article MUST NOT claim the scan collects all nine inputs. Approved framing: the scan collects the practical starting inputs for an initial fit review; remaining details are clarified in follow-up before a quotation is finalised.
2. **"Quotation" vs "instant quote".** The article title legitimately uses "quotation". Any suggestion of speed must use the one-working-day commitment, never "instant".
3. **Nine inputs are Raymond's list — do not extend.** The article may explain related concepts (e.g. seasonal peaks as part of volume, returns as a service requirement) but must not present additional items as required quotation inputs.
4. **Anonymised examples.** The operational example must carry no customer names, no implied client count, and must be labelled illustrative/representative, not a case study.
5. **"Free Rate Scan" naming.** Internal working name. Public CTA label stays `Check your EU fulfilment fit` (conversion rule). The article may describe the scan as taking a few minutes and committing to nothing (existing scan copy) — do not call it "free quote".

## 5. Blocked claims — Raymond operational source (17 August 2026)

Source ID `RAYMOND-2026-08-17-QUOTATION-OPERATIONS`. Treat as human operational input, NOT automatically as approved public claims. The following statements are **blocked from publication** until separately approved with evidence:

| # | Blocked statement | Classification | Required before publication |
|---|---|---|---|
| RB-1 | Vareya has the sharpest rates below 2 kg | Comparative claim + superlative | Verified carrier-rate benchmarking evidence + Raymond approval; register amendment (superlative policy forbids "sharpest"-class claims) |
| RB-2 | Vareya can always provide customised discounted destination rates | Current Vareya claim (unqualified "always") | Evidence per destination + register amendment; "always" conflicts with fixed all-in rate wording |
| RB-3 | Vareya AI fulfilment tools reduce operational costs | Current Vareya claim (unproven) | Measured cost evidence; AI/automation claims are in the register's excluded-content list |
| RB-4 | Every consumer will pay the same parcel price | Current Vareya claim (unproven, consumer-facing) | Pricing evidence; conflicts with per-destination carrier reality |

None of RB-1…RB-4 may appear in the article, the FAQ, the CTA copy or any GEO prompt answer component.

**RB-4 note:** "Every consumer will pay the same parcel price" belongs only to a future vision or cooperative model — never the current quotation article.

**Register-candidate sentence (source §1):** "Parcel weight is an important quotation input. Parcels up to approximately 2 kg form an important part of Vareya's current shipping profile, while heavier parcels can be reviewed separately." — public-safe per source processing, but NOT in Claims Register v1.2; publish only after a register update records it.

**Estimate vs exact (source §7–§8):** the article may state that estimates can support an initial assessment and exact data may be required before a final quotation. It may NOT promise that the scan alone always produces a final quotation, and may NOT present an estimate as verified operational data.

**Jos A2–A5 additions (17 August 2026, source `JOS-2026-08-17-COMMERCIAL-QUALIFICATION-A2-A5`):**

| # | Blocked statement | Rule |
|---|---|---|
| JB-1 | "There is always a match" | Never publish |
| JB-2 | Absolute claims concerning every destination | Never publish — destination claims stay per-country and register-bounded |
| JB-3 | Blanket prohibition on high-value products | Never publish — high-value products default to MANUAL_OPERATIONAL_REVIEW until an approved policy exists |
| JB-4 | AI cost-saving claims | Never publish |
| JB-5 | "Up to 30% savings" | Validation hypothesis ONLY — never published |
| JB-6 | Automatic quotation / guaranteed final quotation / guaranteed acceptance | Never publish |
| JB-7 | "Vareya always has a suitable quotation for every start-up" | Never publish unless the register explicitly permits it |

**Forecast rules:** forecasts must be labelled as forecasts; every forecast-based quotation must show its assumptions; unsupported projections are never presented as historic volume. Invoice upload is NOT mandatory in the public scan.

**Route change required (implementation Phase 4):** primary CTA route becomes `/free-rate-scan/`; `/fulfilment-scan/` preserved ONLY as a redirect. Claims Register conversion rule ("routing to /fulfilment-scan/") must be updated to match — register amendment required before the route change goes live.

## 6. Technical content correction (Raymond 17 August 2026)

Five separate data concepts — never conflate them:

1. **Total number of SKUs** — catalogue width (how many distinct sellable units).
2. **Average items per order** — how many physical units go into the average parcel.
3. **Average order lines** — how many distinct SKUs the average order contains.
4. **Number of pick actions** — how many physical picks an order needs (drives pick labour).
5. **Suitability for batch picking** — whether orders can be picked efficiently in batches (depends on order composition, not SKU count alone).

**Prohibited statement:** "a high total SKU count automatically means more items in each order." SKU count describes the catalogue; items per order describes order composition. The article's table and examples must keep them separate.

## 7. Audit gate

Before publication, Agent 4 runs the claims audit (claims-audit skill) against the rendered article page:

- EXACT CLAIM MISMATCHES — PASS/FAIL
- PROHIBITED TERMS — PASS/FAIL
- RETIRED LINES — PASS/FAIL
- "BEST" USAGE outside CLAIM_VOLUME — PASS/FAIL
- UNSUPPORTED CLAIMS / DENIALS — PASS/FAIL
- SCAN-COVERAGE OVERSTATEMENT (section 4.1) — PASS/FAIL
- FINAL VERDICT: PASS or FAIL

Publication is blocked on FAIL. Any deviation from register wording that the article genuinely needs is an escalation to Raymond BEFORE drafting, not a silent rewording.
