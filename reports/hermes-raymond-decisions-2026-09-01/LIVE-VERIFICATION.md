# LIVE-VERIFICATION — Raymond-besluiten 2026-09-01

Methode: curl met browser-headers (Vercel bot-challenge geeft anders 403 — met browser-UA 200), controletijdstip 2026-09-01 ~18:10 CEST, na Vercel auto-deploy van commit `8a46ac3`.

| URL | Status | Check | Resultaat |
|---|---|---|---|
| https://vareya.ai/about/ | 200 | "possible future cooperative model" | 1 hit ✓ |
| | | "developing a cooperative" | 0 ✓ |
| | | "Coöperatie" | 0 ✓ |
| | | "Thuiswinkel" | 0 ✓ |
| https://vareya.ai/why-vareya-ai/ | 200 | "possible future cooperative model" | 1 ✓ |
| | | "developing a cooperative" | 0 ✓ |
| | | "are being explored" | 1 ✓ |
| https://vareya.ai/knowledge/what-is-cooperative-fulfilment/ | 200 | "possible future cooperative" | 1 ✓ |
| | | "developing the cooperative" | 0 ✓ |
| | | "Raymond's vision" | 0 ✓ |
| | | "Coöperatie" | 0 ✓ |
| | | "Thuiswinkel" | 0 ✓ |
| https://vareya.ai/knowledge/ | 200 | "possible future cooperative model" | 1 ✓ |
| | | "Thuiswinkel" | 0 ✓ |
| https://vareya.ai/eu-fulfilment/ | 200 | "South Korea" / "Saudi Arabia" / "Turkey" / "United Arab Emirates" | 1 hit elk ✓ |
| | | "Thuiswinkel" | 0 ✓ |
| https://vareya.ai/llms.txt | 200 | "41 approved destinations" | ✓ |

## Conclusie

- **Coöperatie (besluit 1 B):** LIVE — verboden formuleringen 0 hits, toegestane strekking live op alle coöperatie-pagina's.
- **Thuiswinkel (besluit 2 B):** LIVE — 0 hits op alle gecontroleerde pagina's.
- **Bestemmingen (besluit 3):** LIVE — 41-landenlijst met de 4 bevestigde landen op de servicepagina; llms.txt consistent op 41.
- jmconcepts.cloud: coöperatie-wording was 01-09 al gefixt ("coöperatief fulfilmentCONCEPT") — geen nieuwe wijzigingen nodig; geen Thuiswinkel-verwijzingen.

## Release-gate correctie (DB, 2026-09-01 ~21:00 CEST)

Approval-backfill (Claude-gate item 1) uitgevoerd en geverifieerd in productie-DB: 4 leads hebben nu de volledige human-approval velden; geen site-wijziging (geen nieuwe deploy nodig). Details: QA-RELEASE-EVIDENCE.md §Release-gate correctie.
