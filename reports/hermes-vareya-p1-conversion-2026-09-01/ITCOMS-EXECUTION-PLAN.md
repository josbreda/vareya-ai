# ITCOMS-EXECUTION-PLAN — exact uitvoeringspakket (uitvoeren zodra toegang er is)

## Stap 1 — Backup (verplicht vóór alles)

```bash
# WP-CLI (indien beschikbaar) of phpMyAdmin:
wp db export vareya-com-preconsolidation-$(date +%Y%m%d).sql
tar czf wp-content-backup-$(date +%Y%m%d).tar.gz wp-content/
cp .htaccess .htaccess.bak-$(date +%Y%m%d)
sha256sum vareya-com-preconsolidation-*.sql wp-content-backup-*.tar.gz .htaccess.bak-* > MANIFEST.txt
```
Opslaan op VPS1 (`/opt/aos/backups/itcoms/`) én lokaal (`HOS/projects/vareya-ai-lead-engine/backups/`).

## Stap 2 — Redirect (domein-consolidatie, door Raymond goedgekeurd 21-08)

Bovenaan de WordPress-root `.htaccess`:
```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?vareya\.com$ [OR]
RewriteCond %{HTTP_HOST} ^(www\.)?vareya\.nl$
RewriteRule ^ https://vareya.ai%{REQUEST_URI} [L,R=301,QSA]
```
vareya.ai geeft nette 404's op onbekende paden — geen loops. De `/faq/`-redirectloop op de oude site verdwijnt automatisch.

## Stap 3 — Claims-remediation (voor het geval de redirect uitgesteld wordt)

Te verwijderen/wijzigen op www.vareya.com (uit CLAIMS-AUDIT 01-09):
- "empowering over 1000 brands worldwide" → verwijderen (register: geen klantenaantallen)
- "unparalleled supply chain solutions", "lightning-fast shipping", "near-perfect order accuracy" → register-veilige beschrijvingen
- Testimonials (Elliot Thomas, Lisa Harrison, Oscar Olsen, Laura Martinez) → verwijderen
- Klantlogo's (Samsung, Nestlé, MAC, AXE, Tree Hut e.a.) → verwijderen
- "shipped on the same day", "No losses. No errors. … Guaranteed." → verwijderen
- "Opgericht 2016" / 8 vervoerders / 99% nauwkeurigheid → alleen publiceren met historisch bewijs; anders weg
- Fout adres (Etten-Leur) → Bagven Park 6, 4838 EH Breda; telefoonnummer checken

## Stap 4 — Canonical + sitemap

- Rank Math: sitemap-duplicatie oplossen (129 URLs vs 57 uniek) of de plugin uitschakelen.
- Na live-301: oude sitemap mag geen nieuwe URLs meer aanmelden.

## Stap 5 — Live route-test (na elke stap)

```bash
curl -sI https://www.vareya.com/            # verwacht 301 + Location: https://vareya.ai/
curl -sI https://vareya.nl/                 # idem
curl -sI "https://www.vareya.com/faq/"      # geen redirectloop meer
curl -sI "https://www.vareya.com/?utm=x"    # query behouden (QSA)
```

## Stap 6 — Rollback

`.htaccess.bak-*` terugzetten; database/wp-content restore uit de backup; DNS nooit gewijzigd → altijd herstelbaar.

## Wat NIET gebeurt

Geen DNS-wijziging zonder eigenaar-goedkeuring; geen verwijdering van de oude WordPress-installatie zonder expliciete opdracht; geen workaround via een ander domein.
