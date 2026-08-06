# Vareya.ai — Status Rapport
**Datum:** 6 augustus 2026
**Voor:** Raymond (via Jos)

---

## Situatie

Vareya.ai is technisch volledig gebouwd en getest. De site draait op Vercel, de database (Supabase) slaat leads op, en Resend staat klaar voor email notificaties. 

**Alleen de DNS-verificatie ontbreekt nog** — dat kan alleen Raymond doen (domein-eigenaar).

---

## Wat werkt ✅

| Onderdeel | Status | Details |
|---|---|---|
| **Website** | ✅ Live | Next.js 16, 13 pagina's, Vercel |
| **Build** | ✅ | 0 errors, 0 warnings |
| **Tests** | ✅ | 41/41 Playwright tests passing |
| **Database** | ✅ | Supabase (Frankfurt), `leads` + `lead_events` tabellen |
| **Lead opslag** | ✅ | 8 test leads succesvol opgeslagen met attributie |
| **Beveiliging** | ✅ | RLS actief, publieke read geblokkeerd, duplicate protectie |
| **SEO** | ✅ | Sitemap, robots.txt, canonicals, JSON-LD, noindex |
| **Privacy/Cookies** | ✅ | Stack-specifiek (Supabase, Vercel, Resend, Google) |
| **Claims audit** | ✅ | 13 pagina's, 0 violations (bron: claims-register v1.1) |
| **Resend account** | ✅ | API key actief (jmconceptsbreda@gmail.com) |
| **Resend domein** | ✅ | vareya.ai toegevoegd, DKIM + SPF DNS resolven |

---

## Wat Raymond moet doen 🔴

Dit zijn de enige 2 resterende acties. **Duur: 2 minuten.**

### Actie 1 — MX-record toevoegen op GoDaddy (1 minuut)

1. Login op [GoDaddy](https://dcc.godaddy.com) met `Raymond@vareya.nl`
2. Ga naar **vareya.ai → DNS**
3. Klik **"Nieuwe record toevoegen"**
4. Vul in:

| Veld | Waarde |
|---|---|
| Type | **MX** |
| Naam | `send` |
| Prioriteit | `10` |
| Waarde | `feedback-smtp.eu-west-1.amazonses.com` |
| TTL | 1 uur |

5. **Opslaan** (Enter op laatste veld)

### Actie 2 — Resend domein verifiëren (30 seconden)

1. Ga naar [Resend Domains](https://resend.com/domains)
2. Login met Google: `jmconceptsbreda@gmail.com`
3. Klik op **vareya.ai**
4. Klik op **"restart verification"**

---

## Technische details

| Item | Waarde |
|---|---|
| **Preview URL** | `https://vareya-website-1o6vu328g-vareya.vercel.app` |
| **GitHub** | `github.com/josbreda/vareya-ai` |
| **Supabase project** | `uumtytlxfzimzixhewwt.supabase.co` |
| **Regio** | EU Central (Frankfurt) |
| **Lead eigenaar** | `vareya@jmconcepts.cloud` |
| **Resend API key** | Aangemaakt (Full access, `re_2mHyzo...`) |
| **Domein registrar** | GoDaddy (`ns53.domaincontrol.com`) |
| **DKIM record** | `resend._domainkey.vareya.ai` TXT — ✅ resolvt |
| **SPF record** | `send.vareya.ai` TXT — ✅ resolvt |
| **MX record** | `send.vareya.ai` MX — 🔴 **moet nog** |

---

## Huidige DNS records op GoDaddy (23 totaal)

Bestaande relevante records:
```
A       @        15.197.225.128
A       @        3.33.251.168
TXT     resend._domainkey    p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBi...
TXT     send     feedback-smtp.eu-west-1.amazonses.com
TXT     send     v=spf1 include:amazonses.com ~all
```

Te missen: **MX send priority 10 → feedback-smtp.eu-west-1.amazonses.com**

---

## Volledige funnel flow (werkt nu al, behalve email)

```
Bezoeker vult scan in
       ↓
POST /api/leads → server-side validatie
       ↓
Supabase insert (permanent record + attributie)
       ↓
Resend notificatie → vareya@jmconcepts.cloud  ← 🔴 DNS verificatie nodig
       ↓
Resend confirmatie → klant                     ← 🔴 DNS verificatie nodig
```

---

## Eindoordeel

**Technisch: GO ✅** — site is live, database werkt, beveiliging actief.
**Email: NO-GO 🔴** — wacht op Raymond's MX record + Resend verificatie.
