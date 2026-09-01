# NEXT-COMMERCIAL-ACTIONS — volgorde en eigenaar

## Nu / deze week

1. **Raymond:** kostprijsinput leveren (21 regels — JOLIE-PRICING-INPUT-MODEL.csv). Blokkeert de Jolie-vergelijking.
2. **Saul (via bestaande mailthread):** 7 datapunten afwachten; geen herinnering vóór 2026-09-04 (netjes, geen druk).
3. **FulfilmentShortlist:** hercontrole op 2026-09-04 (profiel + inbox) — geen derde mail eerder.
4. **Itcoms:** toegang aanvragen (hostingpanel + WordPress + SFTP/FTP + DNS) — hoogste reputatie-risico blijft de oude site.

## Zodra Sauls data + Raymonds prijzen binnen zijn

5. Prijzen valideren (bron, btw, valutadatum, geldigheid, volumevoorwaarden, carrier, toeslagen) → JOLIE-PRICING-INPUT-MODEL.csv invullen.
6. Indicatieve vergelijking bouwen (alleen rekenkundig verantwoorde scenario's) → JOLIE-REPLY-DRAFT.md invullen.
7. Claims-check → menselijke goedkeuring via canoniek **/approve**-endpoint → verzending via **/send-email** (nieuwe procesregel; geen directe DB+Graph meer).

## Zodra AOS-werktree opgeruimd is

8. Patch committen (protected-guard + import-fix + test-fake) → aos-api releasen → live smoke via interne testlead.

## Volgende commerciële batch (pas ná 4.5-4.6 op de endpoints)

9. Replies op de 6 leads classificeren in het dashboard (Bon Maxie = AUTO_ACK, rest NO_REPLY_YET/DELIVERED).
10. Geen automatische follow-ups — elke vervolgstap vraagt nieuwe menselijke controle.
