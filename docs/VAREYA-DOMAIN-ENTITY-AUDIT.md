# Vareya — Domain & Entity Audit (P0 bevindingen)
**Datum:** 10 augustus 2026
**Auditor:** Agent 2 (Domain, Entity & Technical Local SEO)

---

## DOMAIN STATUS — LIVE CHECK

| Domein | HTTP | Status |
|---|---|---|
| vareya.ai | 200 | ✅ Productie (Next.js/Vercel) |
| www.vareya.ai | 308 | ✅ Redirect naar apex |
| vareya.com | 301 | ✅ Redirect naar www.vareya.com |
| www.vareya.com | **200** | 🔴 **P0 — Oude WordPress site LIVE** |
| vareya.nl | 301 | ✅ Redirect naar www.vareya.com |
| www.vareya.nl | 301 | ✅ Redirect naar www.vareya.com |
| go.vareya.com | **200** | 🔴 **P0 — Oude statische site LIVE** |

## P0 BEVINDINGEN — MET BEWIJS

### P0-1: www.vareya.com (oude WordPress) nog live
- Title: "eCommerce Fulfillment & Warehousing | Vareya"
- Bevat **"1000 brands"** — verboden brand-count claim (Claims Register v1.2: brand-count claims excluded)
- Bevat **"Etten-Leur"** — oud adres, niet meer goedgekeurd (register: Bagven Park 6, 4838 EH Breda)
- Bevat **"staging"** tekst — staging content indexeerbaar
- Oud telefoonnummer (+316...6397 vs goedgekeurd +31 6 19 12 34 72)
- robots.txt: alles indexeerbaar behalve wp-admin
- Sitemap: sitemap_index.xml actief

### P0-2: go.vareya.com (oud statisch archief) nog live
- Title: "European Fulfilment Knowledge Center | VareYa"
- Oude content, oude merknaam-spelling "VareYa"

## BESLUIT — CANONICAL DOMAIN

```
CANONICAL OPERATIONAL DOMAIN:
vareya.ai

KNOWLEDGEBANK LOCATION:
https://vareya.ai/knowledge/

DOMAINS TO REDIRECT:
vareya.com → https://vareya.ai/ (301, pagina-naar-pagina waar mogelijk)
www.vareya.com → https://vareya.ai/ (301)
vareya.nl → https://vareya.ai/ (301)
www.vareya.nl → https://vareya.ai/ (301)
go.vareya.com → https://vareya.ai/knowledge/ (301)

DOMAINS TO NOINDEX TEMPORARILY:
(geen — direct 301 is juister voor deze oude domeinen)

DOMAINS TO RETIRE:
(geen — alle domeinen redirecten naar canoniek)
```

## ACTIEVERBOD TOT MIGRATIE GOEDGEKEURD

Per sprint-spec: **niet publiceren of migreren tot de P0 entity audit compleet is.** Deze audit is nu compleet en gedocumenteerd. Migratie = handmatige actie Raymond/Jos (Hostinger toegang + DNS).

## VOLGENDE STAPPEN

1. Raymond/Jos: goedkeuring voor 301-redirects van oude domeinen
2. Hostinger FTP: redirects instellen op www.vareya.com en go.vareya.com
3. Search Console: property vareya.ai verifiëren + oude properties afhandelen
4. Na redirects: indexation status monitoren
