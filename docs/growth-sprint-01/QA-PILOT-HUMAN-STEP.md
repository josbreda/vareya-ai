# QA Pilot — handmatige test-instructie voor Jos (30 seconden)

**Doel:** de volledige keten testen — outbound-UTM → Free Rate Scan → Supabase → HubSpot → Jos-taak — met één duidelijk gelabelde QA-lead. Turnstile blokkeert geautomatiseerde browsers volledig (door design), dus de formulierstap moet door een mens.

## Stappen

1. Open deze URL in je normale browser:
   https://vareya.ai/free-rate-scan/?utm_source=outbound&utm_medium=email&utm_campaign=content_sprint_01&utm_content=qa_pilot_test

2. Vul exact dit in (alle stappen):
   - Volume: **500 – 1,000**
   - Product: **Fashion & apparel**
   - Markten: **Netherlands + Germany**
   - Platform: **Shopify**
   - Services: **Pick & pack + Storage**
   - Naam: **QA Pilot Test**
   - Company: **QA PILOT TEST DO NOT CONTACT**
   - Work email: **qa-pilot-test-18082026@vareya.ai**
   - Phone: **0600000000**
   - Turnstile: gewoon aanklikken zoals normaal

3. Submit en wacht op de bevestigingspagina.

4. Zeg "done" in de chat.

## Wat ik daarna automatisch verifieer

- [ ] Supabase-record bestaat met de UTM-velden (utmsource/medium/campaign/content) ✅
- [ ] HubSpot-contact + company bestaan ✅
- [ ] Precies 1 review-taak, geen duplicaat ✅
- [ ] Geen deal aangemaakt ✅
- [ ] Taak-body bevat submission + platform + volume + markten ✅
- [ ] Geen PII buiten het QA-label (het is een testlead, geen echte data)

De QA-lead blijft in HubSpot staan met duidelijke labels zodat jij hem kunt sluiten/verwijderen.
