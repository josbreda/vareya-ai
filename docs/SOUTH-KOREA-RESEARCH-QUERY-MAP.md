# South Korea content research — query map and evidence (28–30 Aug 2026)

Status: RESEARCH RECORD — internal. Not part of the public page.
Owner: Jos Meuleman · Operational review: Raymond Faber

## 1. Architecture decision

One bilingual commercial page (English primary, Korean summary + FAQ), route
`/eu-fulfilment-south-korean-brands/`. Rationale: competitor audit (subagent 3)
found the exact corridor is underserved — no reviewed page joins Korea-side
readiness, legal-role ownership and warehouse execution in one sequence. A
page farm was rejected.

## 2. Korean query map (live search + autocomplete evidence, 30 Aug 2026)

Query wording is directional; volumes were not fabricated.

### Commercial / high-intent (Korean)
- 유럽 풀필먼트 (Europe fulfilment)
- 유럽 이커머스 풀필먼트 (Europe ecommerce fulfilment)
- 네덜란드 풀필먼트 (Netherlands fulfilment)
- 유럽 현지 물류센터 이커머스 (Europe local logistics centre ecommerce)
- 유럽 반품 처리 이커머스 (Europe returns handling ecommerce)
- 쇼피파이 유럽 풀필먼트 (Shopify Europe fulfilment)
- "유럽 진출" "풀필먼트" 한국 (Europe entry, fulfilment, Korea)

### English
- eu fulfillment for korean brands
- korea to europe fulfillment
- europe fulfillment center
- netherlands 3pl for asian brands
- shopify fulfillment europe

### Autocomplete observations
- Naver/Google Korean autocomplete was sparse for provider-intent terms;
  strongest clusters were 유럽 배송(비/관세/대행), 유럽 물류, 유럽 진출.
- English autocomplete is dominated by "fulfillment center/network" phrasing.

### SERP signals
- Hanjin Amsterdam fulfilment-centre news dominates Korean-language results
  (Dec 2025 opening coverage; secondary sources only).
- KOTRA Amsterdam and DHL Korea rank for institutional queries.
- Provider pages (Simple Global, Tekpoint, Forceget, RedSky) cover fragments.

## 3. Competitor gap (subagent 3 summary)

- RedSky Europe: dedicated K-beauty page; broad compliance/end-to-end claims;
  no responsibility table, no pilot design.
- YouSend (Riga): strongest operational cosmetics detail; Korea-side freight
  and origin workflow missing.
- Forceget: exact informational SERP angle; thin, generic claims.
- Hanjin: market signal (Amsterdam hub) but no operator product page in English.
- Gap Vareya can fill credibly: a plain-English corridor page with a
  responsibility table, readiness checklist, official sources and clear
  service boundaries — without copying competitor claims.

## 4. Localisation rules applied (subagent 4 brief, saved as
   C:\Users\josme\vareya-korea-localisation-brief.json)

- 풀필먼트 for the operating model; 주문 처리 in Shopify status context.
- 제3자 물류(3PL) on first use; EU 내 물류센터 for the warehouse.
- 반품 처리 for returns handling; Shopify 연동 for integration.
- Free Rate Scan(무료 요금 점검) as the Korean CTA descriptor.
- Polite 합니다/인가요 register; no commands on buttons; no absolute claims.
- Final native Korean B2B review remains a publication gate.

## 5. Official sources used on the public page

1. EU trade relations with South Korea (policy.trade.ec.europa.eu) — FTA applied
   since July 2011, ratified December 2015.
2. EU–South Korea FTA (Access2Markets) — duties eliminated on nearly all
   products (98.7%); origin rules and documentation required.
3. Importing non-EU products checklist (Business.gov.nl) — import declaration,
   EORI, duties/VAT, product requirements.
4. EU VAT One Stop Shop (vat-one-stop-shop.ec.europa.eu) — OSS/IOSS frameworks.
5. EU cosmetics legislation (single-market-economy.ec.europa.eu) — responsible
   person + CPNP notification required.

## 6. Claims guardrails honoured

- No speed/savings guarantees, no competitor figures copied.
- Customs/VAT framed as informational; adviser referral included.
- Vareya's only customs claim is the register-approved sentence; the
  SPECIALIST_REQUIREMENTS_FALLBACK is used everywhere else.
- Volume, returns and carrier wording verbatim from the claims register.
- No customer names, no market-size claims, no "global" reach claims.
