# ITCOMS-READINESS-CHECKLIST — vareya.com / vareya.nl

**Niets wordt geschreven naar deze domeinen zonder toegang. Deze checklist is het draaiboek zodra toegang er is.**

## Credentials/toegang (aan te vragen bij Itcoms of eigenaar)

| # | Toegang | Status | Opmerking |
|---|---|---|---|
| 1 | Hostingpanel-login (Itcoms) | ONTBREEKT | websrv.itcoms.nl, 84.247.9.137, Apache/2 |
| 2 | WordPress wp-admin (www.vareya.com/wp-admin/) | ONTBREEKT | plugins/thema/Rank Math inspecteren |
| 3 | SFTP/FTP | ONTBREEKT | .htaccess + wp-content bereikbaarheid |
| 4 | Database-export (phpMyAdmin/WP-CLI `wp db export`) | ONTBREEKT | vóór elke wijziging |
| 5 | DNS-toegang (registrar = NameBright, ns0.nl/ns5.be/ns11.net voor vareya.nl) | ONTBREEKT | A-records mogen naar Itcoms blijven zolang 301 actief |
| 6 | Serverredirectconfiguratie (.htaccess) | ONTBREEKT | RewriteEngine blok bovenaan |
| 7 | Pluginlijst | ONTBREEKT | opnemen bij eerste wp-admin-sessie |
| 8 | MU-pluginlijst (`wp-content/mu-plugins/`) | ONTBREEKT | redirect/security-drop-ins kunnen de 301 storen |
| 9 | Backupmogelijkheid (hostingpaneel-backup of duplicator) | ONTBREEKT | backup vóór elke stap |

## Uitvoeringsplan (direct na toegang — zie ITCOMS-EXECUTION-PLAN.md)

1. Backup (db + wp-content + .htaccess) met hash-manifest.
2. `.htaccess`-301: `RewriteCond %{HTTP_HOST} ^(www\.)?vareya\.(com|nl)$ → RewriteRule ^ https://vareya.ai%{REQUEST_URI} [L,R=301,QSA]`.
3. Claims-remediation (voor het geval redirect tijdelijk niet kan): "over 1000 brands", testimonials, logo's, superlatieven, same-day/garanties verwijderen.
4. Canonical/sitemap: na 301 irrelevant, maar controleer dat oude sitemap.xml geen nieuwe URLs aanmeldt (Rank Math uitschakelen of verwijderen).
5. Live route-test: `/`, `/faq/` (bestaande redirectloop!), sitemap.xml, een diepe URL met query.
6. Rollback: .htaccess terugzetten uit backup.

## Verboden workarounds

Geen redirects via een ander domein, geen destructieve acties, geen DNS-wijziging zonder eigenaar-goedkeuring.
