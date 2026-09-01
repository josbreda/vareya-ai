# LIVE-DOMAIN-AUDIT — 2026-09-01 (read-only)

**Methode:** curl/HEAD-requests, geen -k bij SSL-validatie, openssl via curl-returncode. Live checks om ~11:05 Europe/Amsterdam.

## Kernresultaten
| Domein | Status | Redirect | SSL | Server | Bijzonderheden |
|---|---|---|---|---|---|
| vareya.ai | 200 | geen | OK | Vercel | alle 8 geteste routes 200; robots+sitemap+llms.txt 200 |
| vareya.com | 301 → www.vareya.com | 1 hop | OK | Apache/2 | **Niet geconsolideerd — oude site met verboden claims live** |
| vareya.nl | 301 → www.vareya.com | 1 hop | OK | Apache/2 | redirect naar .com i.p.v. vareya.ai |
| www.vareya.nl | 301 → www.vareya.com | 1 hop | OK | Apache/2 | idem |
| go.vareya.com | 301 → vareya.ai/knowledge/ | 1 hop | OK | LiteSpeed | blanket + regex-rules (zie redirect-resultaten) |
| leads.jmconcepts.cloud | 200 | geen | OK | nginx/1.27.5 | login-pagina; dashboard live |
| jmconcepts.cloud | 200 | geen | OK | LiteSpeed | P0-fix live geverifieerd (zie P0-CLAIMS-FIXES.md) |

## Security headers
- **vareya.ai (Vercel):** HSTS ✓ · nosniff ✓ · X-Frame-Options DENY ✓ · Referrer-Policy ✓ · Permissions-Policy ✓ · **CSP: MISSING** (bekend verbeterpunt uit A5-hardening — CSP was live op staging; op Vercel-productie niet aanwezig).
- **vareya.com:** alle 6 headers MISSING (behalve een Google private-state-token Permissions-Policy).
- **jmconcepts.cloud (LiteSpeed):** alleen `upgrade-insecure-requests`; HSTS/nosniff/frame/referrer MISSING.
- **leads.jmconcepts.cloud (nginx):** alle 6 MISSING.

## Robots/sitemaps
- vareya.ai/robots.txt: 200, verwijst naar sitemap.xml, 2 disallows (beperkt).
- jmconcepts.cloud/robots.txt: 200, sitemap aanwezig, 0 disallows.

## IndexNow-status
`indexnow-state.json` + `indexnow-submissions.csv` (31-08, 19:41): 6u-cron actief, laatste run 31-08 — zie ook REDIRECT-RESULTS.csv en IndexNow-submissions (onderdeel CHANGES-MADE-overzicht).

## Redirect-ketens & oude routes
- Geen ketens (allemaal single-hop 301). Geen loops. Geen 404 op kernroutes.
- vareya.com → www.vareya.com → (eindpunt, oude content): **de door Raymond goedgekeurde consolidatie naar vareya.ai is nog niet uitgevoerd** (Itcoms-toegang ontbreekt — BLOCKERS.md B-02).

## Bevindingen met actie
1. **vareya.com/vareya.nl**: consolidatie uitvoeren zodra hostingtoegang er is (hoogste prioriteit, zie BLOCKERS).
2. **CSP op vareya.ai-productie**: ontbreekt terwijl staging hem had — opnemen bij eerstvolgende release.
3. **Security headers jmconcepts.cloud/leads**: ontbreken — P2-hardening (LiteSpeed/nginx-config).
4. **Redirect-fidelity go.vareya.com**: specifieke targets deels catch-all → /knowledge/ (zie REDIRECT-RESULTS.csv).
