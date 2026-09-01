# EXECUTIVE-SUMMARY — Vareya P0-vervolgopdracht 2026-09-01

## Samenvatting

De gemelde "productiedrift" blijkt een **stale crawl** te zijn: productie stond al op de veilige coöperatietekst (fix 8a46ac3, gedeployed 18:15 en opnieuw 20:56). De tekst is deze run nog expliciet versterkt ("No cooperative legal entity is currently part of Vareya's existing company structure.") en gedeployed. Het zesde Decision-4A-bericht (B1 = Edge of Ember) is geïdentificeerd, geverifieerd, verbatim-gecorrigeerd en verzonden. Jolie Beauty is als warme inbound lead geregistreerd (qualified). FulfilmentShortlist staat op AWAITING CONFIRMATION (geen derde mail).

## Resultaten

1. **P0-A coöperatie:** geen productiedrift; expliciete ontkenning live; 0 hits op alle verboden zinnen (live + origin/main). Root cause: stale crawl + stale branches (kr/m2/main-WIP) die de oude tekst nog bevatten — gemarkeerd als merge-blokker.
2. **P0-B B1:** = Edge of Ember, hello@edgeofember.com (officieel geverifieerd op de contactpagina), volumezin verbatim gemaakt, alle 10 preflight-checks groen, verzonden 20:14:57 UTC, message-ID vastgelegd, DB + CSV gelogd. Zes-bericht-reconciliatie compleet (5 Hermes + Bon Maxie extern).
3. **P1 Jolie Beauty:** read-only check = afwezig → idempotent geregistreerd (org + lead qualified/inbound + contact Saul + primary-link + follow-up-taak). Uitsluitend zelfgerapporteerde cijfers. Commercial brief met open vragen, benodigde kostprijsinput en risico's — geen tarieven verzonnen.
4. **P1 FulfilmentShortlist:** CORRECTION_REQUESTED — AWAITING CONFIRMATION; geen derde mail.

## Eerlijke kanttekeningen

- De webcrawl-bewering was in tegenspraak met de eigen crawl-output (die al de nieuwe tekst toonde) én met alle directe live-metingen. Gerapporteerd als stale-crawl, niet als "onverklaarbaar".
- De stale branches zijn niet door mij gewijzigd (andere sessies/worktrees); ze zijn als blokker geregistreerd zodat ze niet ongecontroleerd gemerged worden.
- B3 (Bon Maxie) is buiten Hermes om verzonden; in de reconciliatie als SENT_EXTERNALLY opgenomen — niet door mij herverzonden.
- Jolie-status `qualified` = canoniek equivalent van QUALIFIED_INBOUND (enum heeft die waarde niet).

## Exacte gegevens

| Item | Waarde |
|---|---|
| Productiecommit ná deze run | zie git (branch hermes/vareya-raymond-decisions-2026-09-01, na ff-merge op origin/main) |
| Deployment-ID ná deze run | Vercel auto-deploy (ID in Vercel-dashboard; rollback-target = `dpl_8m49anBuAoc3B9cGoKkhxGphsA4G`) |
| B1 provider message-ID | AAMkADcwY2FlNmJmLTY2MjItNGU4OC05YmM5LTA0OWQ1MjY0ZGE0MQBGAAAAAABMxXA7TzHOTbEz7C7vvYkqBwCjMBWdZ5bES7-2Xknsy7uDAAAAAAEPAACjMBWdZ5bES7-2Xknsy7uDAAAPU-zqAAA= |
| B1 body-sha256 | d44f32697b80e2741f95de6fbf147964f1af166076a38c22bd9cfe458c5b7191 |
| B1 verzendtijd | 2026-09-01T20:14:57Z |
| DB-writes deze run | +1 Jolie-org, +1 lead (qualified), +1 contact (Saul), +1 follow-up-taak, 1 primary-link, +1 channel-message (B1), 1 lead-update (Edge of Ember → contacted/PASS/sent) |
| Pre-write backup | /opt/aos/backups/vareya-p0-followthrough-2026-09-01/leads-pre-jolie-b1-20260901-221533.sql (sha256 3f604e08…) |
| Totalen DB ná run | leads 332 · orgs 332 · contacts 20 |
