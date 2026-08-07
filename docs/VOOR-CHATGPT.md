# Vareya.ai — Complete Status & Evidence Package
**Voor:** ChatGPT / Presentatie
**Datum:** 7 augustus 2026
**Status:** PRODUCTION GO ✅ | OUTREACH GO ✅ (5-lead pilot)

---

## 1. WAT IS VAREYA.AI

Europese fulfilment & warehousing dienst. Nieuwe Next.js website met lead funnel.

---

## 2. PRODUCTIE DETAILS

| Item | Waarde |
|---|---|
| **Productie URL** | https://vareya-website-1o6vu328g-vareya.vercel.app |
| **GitHub** | github.com/josbreda/vareya-ai (main branch) |
| **Stack** | Next.js 16, TypeScript, Tailwind, Supabase, Resend |
| **Build** | 16 routes, 0 errors, 0 warnings |
| **Tests** | 41/41 Playwright passed (15.8s) |
| **Supabase** | Project uumtytlxfzimzixhewwt (Frankfurt, eu-central-1) |
| **Resend** | Domein vareya.ai verified, ready to send |
| **DNS** | DKIM + SPF + MX all live op GoDaddy |

---

## 3. THREE PRODUCTION TESTS

| Test ID | Form | Submission ID | Supabase | Status |
|---|---|---|---|---|
| VAREYA-PROD-SCAN-DESKTOP-01 | scan | vareya_msiree43_ofcifxzw | ✅ | PASS |
| VAREYA-PROD-SCAN-MOBILE-01 | scan | vareya_msireevj_mw9cv41k | ✅ | PASS |
| VAREYA-PROD-QUOTE-01 | quote | vareya_msisltq0_88e1106a | ✅ | PASS |

Alle leads met volledige attributie (UTM, landing page, device, referrer).

---

## 4. SECURITY

- Row Level Security actief
- Publieke SELECT: geblokkeerd (HTTP 401)
- Publieke INSERT: geblokkeerd (HTTP 400)
- Service-role key uitsluitend server-side
- Geen secrets in frontend bundle of GitHub
- Honeypot spam protectie aanwezig

---

## 5. RESEND (EMAIL)

| Event | Tijd |
|---|---|
| Domain added | Aug 06, 2:31 PM |
| DNS verified | Aug 07, 9:54 AM |
| Domain verified | Aug 07, 10:01 AM |

Status: **Verified** — "Your domain is ready to send emails."

Notificaties gaan naar: vareya@jmconcepts.cloud
Bevestiging naar: prospect werkemail
Verzenddomein: vareya.ai
Regio: Ireland (eu-west-1)

---

## 6. DNS STATUS

```
DKIM: resend._domainkey.vareya.ai TXT ✅
SPF:  send.vareya.ai TXT → feedback-smtp.eu-west-1.amazonses.com ✅
SPF:  send.vareya.ai TXT → v=spf1 include:amazonses.com ~all ✅
MX:   send.vareya.ai MX 10 → feedback-smtp.eu-west-1.amazonses.com ✅
```

---

## 7. ALLE PAGINA'S (ROUTE MATRIX)

| Route | HTTP | SEO |
|---|---|---|
| / | 200 | indexable |
| /eu-fulfilment/ | 200 | indexable |
| /shopify-fulfilment-europe/ | 200 | indexable |
| /eu-fulfilment-us-brands/ | 200 | indexable |
| /eu-fulfilment-uk-brands/ | 200 | indexable |
| /cosmetics-supplements-fulfilment-europe/ | 200 | indexable |
| /fulfilment-scan/ | 200 | indexable |
| /request-fulfilment-quote/ | 200 | indexable |
| /contact/ | 200 | indexable |
| /privacy/ | 200 | indexable |
| /cookies/ | 200 | indexable |
| /thank-you/scan/ | 200 | noindex |
| /thank-you/quote/ | 200 | noindex |
| /sitemap.xml | 200 | XML |
| /robots.txt | 200 | Text |

---

## 8. CLAIMS AUDIT

Bron: content/claims-register.md v1.1
Resultaat: 13 pagina's, 0 violations, 0 unsupported claims

- Geen WordPress/Elementor content
- Geen competitor assets
- Geen testimonials
- Geen fake statistieken
- British English copy
- Juiste bedrijfsnaam en contactgegevens

---

## 9. SUPABASE LEADS — LAATSTE 5

| Tijd | Form | Naam | Status |
|---|---|---|---|
| 10:47 | scan | Email Live Test | new |
| 10:19 | quote | QA Quote Test #2 | new |
| 10:10 | scan | Email Test Post-MX | new |
| 09:45 | scan | QA Test Scan Desktop | new |
| 09:45 | scan | QA Test Scan Mobile | new |

Totaal: 13 leads in database.

---

## 10. NOG TE DOEN (P1)

| Item | Prioriteit | Impact |
|---|---|---|
| Custom domain (vareya.ai → Vercel A-record) | P1 | Eigen domein ipv preview URL |
| Turnstile productie keys | P1 | Bot protectie live |
| GTM/GA4 configuratie | P1 | Analytics |
| Tracking subdomain Resend | P2 | Click/open tracking |

---

## 11. BESLUIT

**PRODUCTION: GO** ✅ — site, database, email infrastructuur gereed.
**OUTREACH: GO** ✅ — start met 5-lead pilot.
