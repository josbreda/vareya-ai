# Vareya — NAP Register
**Datum:** 10 augustus 2026
**Bron:** Claims Register v1.2 (enige goedgekeurde bron)

---

## GOEDGEKEURDE NAP (MOET OVERAL IDENTIEK ZIJN)

| Veld | Waarde |
|---|---|
| Juridische naam | Vareya BV |
| Publieke naam | Vareya |
| Adres | Bagven Park 6, 4838 EH Breda, The Netherlands |
| Telefoon | +31 6 19 12 34 72 |
| Email | info@vareya.nl |
| Primaire website | https://vareya.ai |
| KVK | (Claims Register vermeldt geen KVK op site — zie privacy placeholder) |
| BTW | (idem) |

## AFWIJKINGEN GEVONDEN (MOETEN GECORRIGEERD)

| Bron | Afwijking | Ernst |
|---|---|---|
| www.vareya.com (oud WordPress) | Etten-Leur als adres, oud telefoonnummer, "1000 brands" claim | P0 |
| go.vareya.com | Oude merknaam "VareYa", oude content | P0 |
| LinkedIn | Nog te verifiëren | P1 |
| Google Business Profile | Nog te verifiëren | P1 |
| Directories | Nog te verifiëren | P1 |

## NAP IN HUIDIGE CODEBASE (vareya-ai)

✅ `src/content/facts.ts` — Bagven Park 6, 4838 EH Breda, +31 6 19 12 34 72, info@vareya.nl
✅ `src/content/claims.ts` (APPROVED_FACTS) — identiek
✅ Footer + contactpagina — te verifiëren in rendered output

## VERIFICATIE REGEL

Elke nieuwe vermelding (directory, partner, media) gebruikt uitsluitend de goedgekeurde NAP-regel hierboven. Geen variaties op adres, telefoon of naam.
