# ROOT-CAUSE — Jolie Beauty dashboard-zichtbaarheid, 2026-09-01

## Eerlijke conclusie

1. **Jolie was al zichtbaar.** Screenshot-bewijs (2026-09-01 ~22:40 CEST, Chrome, rol `vareya@jmconcepts.cloud` / Administrator): rij 2 op `leads.jmconcepts.cloud/leads` — "Jolie Beauty", Inkomend, Gekwalificeerd, medium, inbound_email.
2. **Er was geen record-afwezigheidsprobleem.** De productie-write van 2026-09-01 22:16 CEST is terug te vinden in de productiedatabase die de productie-API daadwerkelijk gebruikt (PostgreSQL `aos` in container `aos-postgres`; de `aos-api` container draait met `POSTGRES_USER=aos`, `POSTGRES_DB=aos`).
3. **De oorspronkelijke probleemomschrijving was onjuist** ("nooit aantoonbaar zichtbaar"). Het record was zichtbaar in de normale Leads-weergave. Mogelijke verklaring voor de melding: gezocht op e-mail/domein (gaf 0 resultaten door de beperkte search-scope) of gekeken op een moment/filter waar de rij buiten beeld viel. Niet reproduceerbaar als record-afwezigheid.
4. **De echte bug was de te beperkte search-scope.** `GET /api/leads?search=` filterde uitsluitend op `LeadOrganization.name`. Zoeken op `joliebeauty.co.uk` of `saul@joliebeauty.co.uk` gaf via de API 0 resultaten (bewezen vóór de fix, op basis van endpointcode + live-API-gedrag).
5. **De losse lege SQLite-database was niet de productiedatabase.** Container `lead-dashboard-api-staging` gebruikt `LEADS_DB_PATH=/data/leads.db` met `leads: 0` en géén organisatie-/contacttabellen. De live site `leads.jmconcepts.cloud` wordt echter door Traefik gerouteerd naar `aos-leads-web` (React-SPA, assets `index-*.js`) → `aos-api` → PostgreSQL `aos`. Classificatie: **NON_PRODUCTION_UNUSED_ARTIFACT** (niet verwijderd — aparte toestemming nodig).

## Classificatie (oorspronkelijk voorgestelde schaal A–H)

- **B (WRONG_DATABASE_ENVIRONMENT) op applicatieniveau:** de staging-SQLite met 0 leads is een niet-productie-artefact — NIET de bron van het dashboard.
- **Geen van A/C/D/E/F/G als oorzaak van "onzichtbaarheid":** het record stond in de juiste productiedatabase en de API leverde het uit (rij 2 op de eerste pagina, sorteer `is_hot_lead desc, -updated_at`).
- **Feitelijke tekortkoming = zoekfunctie-scope** (endpointdefect, nu gefixt): organisatienaam-only → uitgebreid naar naam + domein + contact-e-mail.

## Root cause (één zin)

Het Jolie-record zat in de juiste productiedatabase en was zichtbaar; de daadwerkelijke fout was dat de zoek-API alleen op organisatienaam filterde, waardoor zoeken op domein of contact-e-mail 0 resultaten gaf — dat defect is nu gerepareerd, getest en in productie geverifieerd.
