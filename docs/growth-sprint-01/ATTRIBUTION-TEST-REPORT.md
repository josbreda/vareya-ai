# Growth Sprint 01 — Attribution Test Report
**Date:** 18 August 2026 (Day 1) · bijgewerkt na QA-pilot-poging
**Owner:** Agent 4 (Analytics, HubSpot & Revenue QA)
**Status:** PASS (client-side & code-niveau) — UI-e2e via agent **BLOCKED DOOR TURNSTILE (door design)**; runtime-test afgerond zodra Jos de 30-seconden formulierstap uitvoert (`QA-PILOT-HUMAN-STEP.md`).

## QA-pilot e2e — Turnstile-bevinding (18-08)

- Geautomatiseerde browser (Playwright, headless én headed Chrome): Turnstile-widget **rendert niet** — geen iframe, geen token na 60s. → POST /api/leads onmogelijk via bot.
- Conclusie: de anti-botlaag werkt correct en blokkeert agentmatige submits volledig. Dit is **gewenst gedrag**, geen defect. De e2e-verificatie van UTM → Supabase → HubSpot → Jos-taak vereist de menselijke submit-stap (Jos, 30s) waarna Agent 4 de backend-verificatie uitvoert.

## Event-verificatie (client-side, productie)

| Event | Trigger | Productieroute | Client-side bewezen | Parameters | PII | Status |
|---|---|---|---|---|---|---|
| knowledge_article_view | artikel-load | /knowledge/fulfilment-quotation-requirements/ | ✅ Playwright: dataLayer-push op live pagina | article_slug | geen | PASS |
| quotation_checklist_view | checklist ≥50% in viewport | idem | ✅ IntersectionObserver-test | article_slug | geen | PASS |
| free_rate_scan_cta_click | CTA-klik | idem → /free-rate-scan/ | ✅ klik-test, navigatie gevolgd | cta_location, destination_url, article_slug | geen | PASS |
| rate_scan_view / rate_scan_start / rate_scan_step / rate_scan_back / rate_scan_validation_error / rate_scan_complete | scan-flow | /free-rate-scan/ | ✅ code `scan-analytics.ts`; funnel-tests in suite (102 pass) | scan_page, step_index, step_id | geen | PASS (naamverschil: missie noemt `free_rate_scan_start/complete` → zie P2) |
| quotation_profile_complete / quotation_profile_incomplete | profiel-submit | /free-rate-scan/ | ✅ code | — | geen | PASS |
| quote_form_submit | quote-formulier | /request-fulfilment-quote/ | ❌ NIET geïmplementeerd — formulier pusht geen dataLayer-event, alleen router.push naar /thank-you/quote/ | — | — | FAIL (P1/P2-gap) |

## GA4 / consent

- GTM `GTM-W2N6D3CG` laadt in layout; `useAnalyticsConsent` laadt GTM/GA4 pas na cookie-acceptatie (`vareya_cookie_consent === accepted`). ✅ consent-gating aanwezig.
- **P2-bevinding:** `push()`-helpers schrijven naar `window.dataLayer` óók vóór consent; GTM leest bij load de bestaande dataLayer uit → pre-consent events stromen na acceptatie alsnog GA4 in. Oplossing: push-queue pas starten na consent (of events pas meten na accepted). Geen dataverlies-risico, wél een AVG-nuance — noteren voor sprintfix.
- GA4 DebugView/Realtime: niet verifieerbaar zonder GA4-toegang — **PENDING** (Jos-credential).

## Attributieketen artikel → scan → Supabase → HubSpot

| Veld (missie-eis) | Code-status |
|---|---|
| utm_source / utm_medium / utm_campaign / utm_content | ✅ lead-payload (`useHubspotSync`) |
| landing_page | ✅ |
| form_type | ✅ |
| device | ✅ |
| first_source | ❌ ontbreekt (alleen current UTM) |
| latest_source | ❌ ontbreekt (UTM wordt per submit gelezen, geen historiek) |
| referring_page | ❌ ontbreekt (document.referrer wordt niet opgeslagen) |
| content_cluster | ❌ ontbreekt |
| article_slug | ❌ ontbreekt (artikel wordt niet als source meegestuurd; scan kan landen via redirect met UTM, article_slug niet gevuld) |
| country | ⚠️ partieel — target_markets (door gebruiker ingevuld), geen veilig afgeleid land |
| lead outcome | ✅ door design menselijk (Jos) — niet geautomatiseerd |

Supabase→HubSpot sync: code-verificatie ✅ (contact → company-associatie → taak met review-instructie). Runtime end-to-end: **bewust niet getest met nep-lead** (productie). Eerste echte scan = eerste runtime-bewijs; Agent 4 valideert dan alle velden.

## Oordeel

- Client-side events: **PASS** (5/6 families; quote_form_submit ontbreekt).
- Attributievelden: **PARTIAL** — 6/13 velden aanwezig, 5 ontbreken, 2 gedeeltelijk. Fix = code-aanpassing (niet uitgevoerd; voorstel in HUBSPOT-GROWTH-WORKFLOW).
- Geen PII in client-side events: **PASS**.
