# REMAINING-BLOCKERS — 2026-09-01

| ID | Blokkade | Status na deze run | Eigenaar | Volgende stap |
|---|---|---|---|---|
| B-01 | **vareya.com / vareya.nl hostingtoegang (Itcoms)** — redirect-consolidatie + verwijdering verboden claims ("over 1000 brands", testimonials, logo's, superlatieven, garanties) | **BLOCKED — NIET opgelost** | Raymond/Jos + Itcoms | Toegangschecklist afwerken (onder); daarna VAREYA-DOMAIN-ENTITY-AUDIT-map uitvoeren |
| B-02 | FulfilmentShortlist-profiel ongecorrigeerd | BLOCKED — follow-up-draft klaar, menselijke verzending | Redactie/mens | Follow-up versturen |
| B-03 | OpenAI-API credits op | BLOCKED | Jos | Credits opwaarderen |
| B-04 | Goodie-account ontbreekt | BLOCKED | Jos | Account/API-key |
| B-05 | Resend-key in andere sessie | OPGEHEVEN voor deze batch: verzending gelopen via MS Graph (info@vareya.ai) — zie EMAIL-SEND-LOG.csv | — | Blijft als losse tooling-blocker staan |
| B-06 | LinkedIn legacy-pagina verweesd | BLOCKED | Raymond/Jos | LinkedIn-support |
| B-07 | 3PL Hub WAF 403 | BLOCKED | Mens | Handmatige correctie |
| B-08 | Thuiswinkel betaald programma | Beslissing genomen (B): géén lid — claim PROHIBITED_UNTIL_NEW_VERIFIED_MEMBERSHIP | Raymond | n.v.t. tenzij lidmaatschap later bewezen |
| B-09 | Enrichment nooit geïmporteerd (26 DM's) | **OPGELOST (deze run)** — 17 contacten gecreëerd, 19 primary-links, 7 bedrijven niet in DB (overgeslagen, gelogd) | Hermes | n.v.t. |
| B-10 | Duplicaatparen (carriercompany, komana) | **OPGELOST (deze run)** — gemerged met rollbackrecord | Hermes | n.v.t. |

## Toegangschecklist vareya.com / vareya.nl (Itcoms) — exacte stappen

1. **Identificeer hostingeigenaar:** reverse-DNS `www.vareya.com` → `websrv.itcoms.nl` (84.247.9.137). Vraag bij Itcoms: accountnaam/eigenaar van dit WordPress-pakket (Raymond of opdrachtgever van destijds).
2. **Hostingpaneel / FTP / SFTP:** accountcredentials opvragen bij Itcoms (documenteer wie ze verstrekt en wanneer).
3. **WordPress wp-admin:** login-URL `www.vareya.com/wp-admin/`; noteer geïnstalleerde plugins, thema en Rank Math-instellingen (sitemap-duplicatie: 129 URL's vs 57 uniek).
4. **Databasebackup:** vóór elke wijziging een export maken (phpMyAdmin/hostingpaneel of `wp db export` indien WP-CLI beschikbaar) en lokaal opslaan.
5. **DNS:** registrar = NameBright (ns1/ns2.namebrightdns.com); A-records blijven naar ITComs zolang de 301 actief is (of later direct naar Vercel).
6. **MU-plugins / drop-ins:** controleer `wp-content/mu-plugins/` op redirect- of beveiligingsplugins die de .htaccess-301 kunnen storen.
7. **.htaccess:** voeg bovenaan toe (per docs/MANUAL-ACTIONS-RAYMOND-JOS.md):
   ```apache
   RewriteEngine On
   RewriteCond %{HTTP_HOST} ^(www\.)?vareya\.com$ [OR]
   RewriteCond %{HTTP_HOST} ^(www\.)?vareya\.nl$
   RewriteRule ^ https://vareya.ai%{REQUEST_URI} [L,R=301,QSA]
   ```
8. **Live-verificatie:** `curl -sI https://www.vareya.com/` → 301 + `Location: https://vareya.ai/`; idem vareya.nl.
9. **Geen destructieve workaround** zolang toegang ontbreekt (opdrachtregel).

## Overige losstaande blockers (ongewijzigd)

FulfilmentShortlist · LinkedIn legacy-pagina · Goodie · OpenAI-credits · Resend (tooling) — blijven afzonderlijk gelabeld tot evidence aantoont dat ze zijn opgelost.
