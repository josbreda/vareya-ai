# FRONTEND-VISIBILITY-EVIDENCE

## 1. Jolie zichtbaar in de normale Leads-weergave — SCREENSHOT-BEWIJS (pre-fix, zelfde dag)

Twee computer_use-screenshots (2026-09-01, Chrome, `leads.jmconcepts.cloud/leads`, rol **Administrator** `vareya@jmconcepts.cloud`):
- Screenshot 1 (`computer_use_d382c7eb18a34980bf40b8220bf31113.png`): Leads-tabel, **rij 2 = Jolie Beauty**, Oorsprong Inkomend, Status **Gekwalificeerd**, prioriteit medium, score 0, bron `inbound_email`. Rijen: goodmom co ltd (HOT LEAD/FREE RATE SCAN), Jolie Beauty, Edge of Ember, KOMANA, Fergus James.
- Screenshot 2 (`computer_use_754bec74014b404f8fdc0b08f88751dd.png`): zelfde weergave zonder overlay-dialog.

Conclusie: de lead staat in de standaard Leads-tab, zonder filtertruc, op de eerste pagina (sortering is_hot_lead desc → -updated_at; Jolie is de nieuwste lead).

## 2. Zoekbox-placeholder — LIVE-string-bewijs (post-fix)

- Geserveerde bundle `https://leads.jmconcepts.cloud/assets/index-DkDZbj6w.js` (nieuwe build na commit `cafc521`):
  - `"Zoek op organisatie, domein of e-mailadres"` → **1× aanwezig**
  - `"Zoek op organisatienaam…"` → **0× aanwezig**
- De placeholder-wijziging is dus gedeployed in de frontend.

## 3. Interactieve zoek-tests in de browser

- **STATUS: UI-invoer NIET uitgevoerd** — Jos' Chrome-sessie was gesloten toen de frontend-hertest aan de beurt was (geen venster meer aanwezig; de eerder door mij geannuleerde debug-dialogs zijn daarmee ook weg).
- Ter compensatie geldt de productie-API-evidence (PRODUCTION-API-EVIDENCE.md): naam-, domein- en e-mailzoeken leveren via het exacte endpoint en de exacte parameters die de React-SPA gebruikt, alledrie lead `6fca56c9…` op. De frontend stuurt de zoekterm 1-op-1 door als `search`-param (LeadsListPage → api.leads) — het API-resultaat is wat de UI toont.
- **Follow-ups-tab / follow-up-taak zichtbaarheid: NIET gescreenshot** (zelfde reden). DB- en API-evidence van de taak staan in DATABASE-EVIDENCE.md (taak `76e9e04d…`, open, due 04-09, gekoppeld aan lead 6fca56c9…; het Follow-ups-paneel toont open taken van leads — endpoint `GET /api/leads/followups`-familie onaangetast door deze fix).

## 4. Wat bij de eerstvolgende Jos-sessie nog visueel bevestigd kan worden (optioneel, 2 minuten)

1. `leads.jmconcepts.cloud/leads` → typ `joliebeauty.co.uk` in het zoekveld → alleen Jolie-rij.
2. Typ `saul@joliebeauty.co.uk` → alleen Jolie-rij.
3. Follow-ups-tab → taak "Jolie Beauty: verzamel operationele prijsdata" (due 04-09).
