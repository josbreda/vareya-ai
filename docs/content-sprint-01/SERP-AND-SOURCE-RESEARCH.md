# Content Sprint 01 — SERP & Source Research
**Topic:** What information does a 3PL need to prepare a fulfilment quotation?
**Author:** Agent 1 (Search & Source Research)
**Search snapshot:** 17 August 2026
**Method:** 6 prescribed web_search queries + 4 page extractions (subagent), plus orchestrator verification of every URL in the source register (HTTP status + extraction re-check).

---

## 1. Verified topic and search intent

**Verified topic:** the article answers a real, commercially-adjacent informational need: brands that are about to request fulfilment quotations and want to arrive prepared (or that have received vague quotations and want to understand why).

**Dominant intent per query cluster:**

| Query | Intent |
|---|---|
| what information does a 3PL need for a quote | Informational + commercial investigation: practical input checklist, avoid misleading estimates |
| 3PL quotation checklist | Informational/commercial: downloadable checklist / RFQ template |
| ecommerce fulfilment quotation | Transactional/commercial: request a quote or calculate cost. Semantically unstable — "quotation" also matches inspirational-quote pages |
| what affects fulfilment pricing | Informational/commercial investigation: cost drivers, challenge a rate card |
| information needed for a fulfilment quote | Informational with conversion potential: "what to prepare before contacting a provider". "fulfilment quote" strongly triggers biblical/motivational results — adding "3PL"/"ecommerce" improves relevance |
| how to compare 3PL quotes | Commercial investigation: all-in comparison method, hidden fees, normalisation |

## 2. Current competing content (observed, 17 August 2026)

Strongest observed pages:

- **3plwow.com** — "How to Get a Quotation for 3PL Services" — covers volumes, products, destinations, special services, software, quote line items. Strongest overall; UK.
- **blue30fulfilment.com** — "Clear, Transparent Fulfilment Pricing" — lists quotation inputs (monthly volume, items/order, SKUs, dims/weights, storage, channels, domestic/international split, returns, packaging, special handling) + pricing components + FAQ.
- **cybership.io** — "The Ultimate Guide to 3PL Quotes" — shipment frequency, product profile, distance, transport mode, storage, value-added services.
- **gbfulfillment.com** — "What a 3PL Needs to Provide an Accurate Quote" — detail gated behind a whitepaper form.
- **shiphype.com** — 3PL pricing models with real examples; quote normalisation.
- **slotted.com** — "How to Compare 3PL Quotes With Different Pricing Structures" — normalising pricing models to total cost.
- **gobolt.com** — "3PL Fees and Rates Guide" — fee structures, hidden costs, quote evaluation, negotiation.
- **warehousingandfulfillment.com** — enterprise RFP guide.
- **quickbox.com / dinarys.com / atomixlogistics.com / flightlg.com / elogic.co** — fulfilment cost/pricing explainers.
- **compare3pls.com** — marketplace matcher (competitor to the scan concept).

What competitors **cover**: monthly orders and peaks; SKU count; dims/weight/fragility; items per order; destinations; storage; kitting/returns/gift wrapping; integrations; receiving/storage/pick-pack/shipping charges; hidden fees; volume discounts; RFP governance.

## 3. Content gap (what competitors omit — Vareya's opportunity)

1. **Country where the webshop is established** — almost nobody asks for it explicitly, yet it drives VAT, customs and contract setup.
2. **Destination percentage split** — competitors ask "domestic or international"; nobody insists on a % distribution per country.
3. **Explicit pallet/storage capacity** as a quotation input with estimation guidance.
4. **Why each input changes the price** — an input→cost-consequence map (labour, storage, carrier tariff) rather than a fee list.
5. **Exact vs estimated vs unknown** convention for every field — what to do when a brand has no historical data.
6. **Product vs packed-parcel vs outbound dimensions** distinction.
7. **A completed example profile** and a deliberately wrong/incomplete one.
8. **Decision priorities beyond cost** — integration, support, speed, international reach.
9. **European cross-border context** (VAT/customs exposure, EU carriers) — most observed pages are US-centric.
10. **A ready-to-complete checklist** that maps 1:1 to an actual scan/form (Vareya's structural advantage: the article's checklist mirrors the scan inputs).

## 4. AI-answer patterns (measurability note)

The search interface did not expose AI Overviews or People-Also-Ask modules, so direct AI-answer measurement was **not possible**. Observable proxies:

- Snippets favour **concise lists of quotation variables** → the article's five-column table and answer-first 50–70 word paragraph are the right formats.
- List-based, directly extractable explanations dominate result snippets across the pricing-intent cluster.
- SERPs are fragmented (paid templates, enterprise RFP advice, provider blogs, irrelevant semantic matches) → a single authoritative, European, warehouse-grounded page has room to become the reference answer.

## 5. Common questions observed in the wild (feeds FAQ + GEO prompts)

- What information should I prepare before asking a 3PL for a quote?
- Can a fulfilment company quote me without historical order data?
- Why does a 3PL need my SKU count and average items per order?
- Should I provide product dimensions or final parcel dimensions?
- How detailed should my shipping destination split be?
- Does the country where my webshop is registered affect fulfilment pricing?
- How do I estimate the storage or pallet space my stock will need?
- What fees are usually missing from an initial 3PL quote?
- How can I compare two quotes with completely different pricing models?
- Will Shopify integration, returns and branded packaging cost extra?
- How accurate does my monthly order forecast need to be?
- What should I prioritise besides the lowest pick-and-pack price?

## 6. Unique Vareya insight opportunities (converted into the brief)

1. The complete nine-input checklist including establishment country and selection priorities (Raymond's list).
2. Input → operational consequence mapping per input.
3. Destination percentages, not a broad split.
4. The three-measurement distinction (product / packed parcel / outbound parcel).
5. Estimation guidance for new shops and established merchants.
6. Anonymised warehouse example turning a profile into quotation assumptions.
7. Indicative fit review vs final contractual quotation distinction (protects against "instant quote" claims).
8. Same-order-mix comparison method for quotations.
9. Priorities → provider-fit connection.
10. "Prepare this before the scan" worksheet.

## 7. Source register

Full verified register: `SOURCE-REGISTER.md`. Headline: 8 verified sources (2 platform docs, 1 government, 1 association, 2 carrier/industry, 2 competitor gap-analysis) + excluded sources documented. Minimum of 3 authoritative external sources for the article is met.
