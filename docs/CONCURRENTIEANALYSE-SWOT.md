# Vareya.ai — Concurrentieanalyse, SWOT & Strategisch Plan
**Datum:** 7 augustus 2026
**Auteur:** Hermes Agent Team (hoofdagent + 3 research agents)
**Status:** Strategisch document — ter goedkeuring

---

## EXECUTIVE SUMMARY

Vareya heeft een **first-mover voordeel** in de Nederlandse fulfilment markt: het eerste coöperatieve fulfilment model zonder minimum volumes. De markt is groot (€36B online besteding, 615M pakketten), groeiend (+5% YoY), en kent een structureel gat: webshops met 50–500 orders/maand kunnen nergens terecht. Traditionele 3PL's eisen minima van 250–1.000 orders. Verzendplatforms (SendCloud, MyParcel) bieden geen warehousing. 

**Kernkans:** Vareya vult dit gat met een coöperatief model — leden bundelen volumes, delen kosten, en hebben democratische zeggenschap. Geen winstoogmerk, geen marge op verzending. Dit is uniek in Nederland en Europa.

---

## 1. CONCURRENTIEANALYSE

### 1.1 Overzicht

| Concurrent | Type | Minimum | Prijsmodel | Kracht | Zwakte |
|---|---|---|---|---|---|
| **Monta** | 3PL | 250-500 | Per order/artikel | Integraties, performance garantie | Duur voor kleintjes, onpersoonlijk |
| **Active Ants** | 3PL | 500+ | Per order | Automatisering (AMR), duurzaam | Hoge drempel, techie |
| **byrd** | 3PL | 100+ | Per order | Europees netwerk, platform | Wisselende kwaliteit, geen NL-focus |
| **Huboo** | 3PL | 50-100 | Per order | Micro-hubs, laagdrempelig | Beperkte schaalbaarheid |
| **Salesupply** | 3PL | 100+ | Per order | Cross-border, customer service | Generiek, geen coöperatief |
| **SendCloud** | Platform | 0 | Per label (€4+) | Geen minimum, veel integraties | Alleen labels, geen warehousing |
| **MyParcel** | Platform | 0 | Per label (€4-6) | PostNL ecosysteem | Alleen labels, geen opslag |

### 1.2 Het gat in de markt

```
Orders/maand
  0-50     → Zelf doen of SendCloud/MyParcel (alleen labels)
  50-250   → 🎯 HET GAT — te klein voor 3PL, te groot voor zelf doen
  250-500  → Huboo, byrd (minimum grens)
  500+     → Monta, Active Ants, Salesupply
  1000+    → Alle grote 3PL's vechten om deze klanten
```

**Vareya's sweet spot: 50–500 orders/maand** — precies het gat dat niemand bedient.

### 1.3 Coöperatief model vs. Traditioneel

| Aspect | Traditionele 3PL | Vareya Coöperatie |
|---|---|---|
| Winstmodel | Marge op verzending, opslag, handling | Kosten delen, overschot retour |
| Drempel | 250-1000 orders minimum | Geen minimum (bundeling leden) |
| Zeggenschap | Klant-leverancier | Één lid, één stem |
| Transparantie | Black-box pricing | Open kostenstructuur |
| Schaalbaarheid | Groei = meer marge | Groei = lagere kosten per lid |
| Exit | Contract + opzegtermijn | Lidmaatschap opzegbaar |

---

## 2. SWOT ANALYSE

### 2.1 Strengths (Interne sterktes)

| # | Sterkte | Impact |
|---|---|---|
| S1 | **First-mover coöperatief fulfilment** — uniek in NL/EU | 🔴 Hoog |
| S2 | **Geen minimum volume** — bedient vergeten groep | 🔴 Hoog |
| S3 | **42.000m² warehouse** — serieuze capaciteit | 🟡 Middel |
| S4 | **Multi-carrier zonder eigen contract** — algoritme kiest beste optie | 🟡 Middel |
| S5 | **Eén aanspreekpunt** — geen 3PL-helpdesk | 🟡 Middel |
| S6 | **Live website + lead funnel** — scan → Supabase → email | 🟡 Middel |
| S7 | **Coöperatief = vertrouwen** — geen verborgen marges | 🔴 Hoog |

### 2.2 Weaknesses (Interne zwaktes)

| # | Zwakte | Mitigatie |
|---|---|---|
| W1 | **Nog geen leden** — coöperatie is lege huls | Start met 5 founding members (pilot) |
| W2 | **Bekendheid = 0** — niemand kent Vareya.ai | Gerichte LinkedIn + Shopify outreach |
| W3 | **Geen track record** — geen cases, reviews, testimonials | Bouw cases uit pilot-leden |
| W4 | **Preview URL** — nog niet op vareya.ai | A-record naar Vercel zetten |
| W5 | **Geen marketing automation** — alles handmatig | Week 3-4: CRM + email automation |
| W6 | **Kleine organisatie** — capaciteit onbekend | Eerst 5, dan 10, dan schalen |

### 2.3 Opportunities (Externe kansen)

| # | Kans | Grootte | Urgentie |
|---|---|---|---|
| O1 | **De-minimis veranderingen** — US $800 drempel weg, EU €150 IOSS complexer → brands zoeken EU warehousing | 🔴 Groot | 🔴 NU |
| O2 | **Cross-border groei** — EU cross-border €4,4B (+12%) | 🔴 Groot | 🟡 Q3-Q4 |
| O3 | **Shopify boom** — >1M EU Shopify stores, velen zoeken fulfilment | 🔴 Groot | 🔴 NU |
| O4 | **Bol.com LVB alternatief** — verkopers zoeken onafhankelijke fulfilment | 🟡 Middel | 🟡 Q3 |
| O5 | **Duurzaamheidseisen** — EU wetgeving dwingt groenere logistiek | 🟡 Middel | 🔵 Q4+ |
| O6 | **Micro-fulfilment trend** — kortere levertijden, kleinere hubs | 🟢 Klein | 🔵 2027 |
| O7 | **UK/EU splitsing** — UK brands hebben EU warehouse nodig post-Brexit | 🔴 Groot | 🔴 NU |
| O8 | **Geen coöperatieve concurrent** — volledig open veld | 🔴 Groot | 🔴 NU |

### 2.4 Threats (Externe bedreigingen)

| # | Bedreiging | Kans | Mitigatie |
|---|---|---|---|
| T1 | **Huboo verlaagt minimum** — grootste dreiging voor kleine webshops | Middel | Coöperatief model als differentiator |
| T2 | **Prijsdruk** — grote 3PL's kunnen prijzen verlagen | Laag | Zij willen volume, niet marge |
| T3 | **Amazon FBA** — steeds meer kleine verkopers op Amazon | Middel | Multi-channel aanbod (bol.com, Shopify, etc.) |
| T4 | **Economische recessie** — consumentenbestedingen dalen | Laag | Online blijft groeien |
| T5 | **Regelgeving** — strengere eisen voor warehousing | Middel | Vareya voldoet al (42.000m², professioneel) |

---

## 3. KANSEN — TOP 5 MET IMPLEMENTATIE

### Kans 1 🔴 NU: De-minimis / cross-border friction

**Wat:** Amerikaanse en Britse D2C brands verliezen omzet door EU douane-complexiteit. Ze hebben een EU warehouse nodig.

**Implementatie:**
- Landing page: `/eu-fulfilment-us-brands/` ✅ (bestaat al)
- Landing page: `/eu-fulfilment-uk-brands/` ✅ (bestaat al)
- LinkedIn outreach naar US/UK D2C founders
- Google Ads op "EU fulfilment for US brands"
- Partner met Shopify agencies in US/UK

### Kans 2 🔴 NU: Shopify fulfilment partners

**Wat:** Shopify merchants zonder fulfilment partner. Shopify's eigen fulfilment netwerk is beperkt in EU.

**Implementatie:**
- Landing page: `/shopify-fulfilment-europe/` ✅ (bestaat al)
- Shopify App Store listing (Vareya fulfilment app)
- Content: "Shopify Fulfilment in Europe — The Complete Guide"
- Integratie: Shopify → Vareya API voor automatische order sync

### Kans 3 🔴 NU: Eerste 10 coöperatie-leden werven

**Wat:** De coöperatie heeft founding members nodig. Dit zijn de ambassadeurs.

**Implementatie:**
- "Founding Member" aanbod: eerste 10 leden krijgen 20% korting op opslag eerste jaar
- Gerichte outreach naar 100 NL webshops met 50-500 orders/maand
- Coöperatie kick-off meeting (fysiek in Breda)
- Member testimonials → website cases

### Kans 4 🟡 Q3: Bol.com LVB alternatief

**Wat:** Bol.com's Logistiek Via Bol.com (LVB) is duur en inflexibel. Verkopers zoeken alternatieven.

**Implementatie:**
- Landing page: "Bol.com Fulfilment — Onafhankelijk Alternatief voor LVB"
- Bol.com verkopers benaderen via LinkedIn
- Vergelijkingstool: LVB vs Vareya kosten

### Kans 5 🟡 Q3-Q4: Specialistische niches

**Wat:** Cosmetica, supplementen, pet food — producten met speciale eisen (batch tracking, expiry, FIFO, temperatuur).

**Implementatie:**
- Landing pages per niche ✅ (bestaan al)
- Content: whitepapers over fulfilment-eisen per niche
- Partnerschappen met niche-specifieke agencies

---

## 4. IMPLEMENTATIEPLAN

### Week 1-2: Quick Wins (NU)

| Dag | Actie | KPI |
|---|---|---|
| 1-2 | Custom domain (vareya.ai → Vercel A-record) | Live op eigen domein |
| 3-4 | Turnstile + GTM/GA4 configureren | Analytics live |
| 5-7 | LinkedIn outreach: 50 US/UK D2C brands | 10 replies |
| 8-10 | Shopify partner programma aanmelden | Aanmelding voltooid |
| 11-14 | Eerste 5 founding members prospecteren (NL) | 5 gesprekken gepland |

### Maand 1: Fundering

| Week | Focus | Target |
|---|---|---|
| 1 | Outreach US/UK brands (de-minimis angle) | 100 prospects, 10 gesprekken |
| 2 | NL webshops: bol.com + Shopify verkopers | 50 prospects, 5 gesprekken |
| 3 | Content: 3 blogposts + 2 case studies (founding members) | Live op site |
| 4 | Eerste coöperatie-ledenvergadering | Minimaal 5 leden |

### Kwartaal 1: Groei

- 20 coöperatie-leden
- 10 actieve fulfilment klanten
- 3 partner agencies (Shopify, marketing)
- Blog: 12 artikelen
- Google Ads: 5 campagnes live
- Eerste omzet: €5K-10K/maand

### Kwartaal 2: Schalen

- 50 coöperatie-leden
- Uitbreiding naar 2e warehouse locatie (EU)
- Shopify App Store launch
- Team: 1 operations manager + 1 community manager
- Omzet: €20K-30K/maand

---

## 5. POSITIONERINGSVERHAAL

### Huidig (te generiek)
> "Fulfilment & warehousing from the Netherlands"

### Nieuw (coöperatief, scherp)
> **"Vareya is de eerste coöperatieve fulfilment dienst van Nederland. Wij geloven dat kleine webshops samen sterker staan dan alleen. Geen minimum volumes, geen verborgen marges, geen aandeelhouders — alleen leden die samen betere fulfilment krijgen."**

### Elevator pitch
> "Traditionele fulfilment is gebouwd voor grote merken. Kleine webshops vallen buiten de boot — te klein voor 3PL, te groot voor zelf doen. Vareya lost dit op met een coöperatief model: leden bundelen volumes, delen de kosten, en bepalen samen de koers. Geen winstoogmerk. Geen verborgen marges. Één lid, één stem."

---

## 6. DIRECTE ACTIES (VANDAAG)

1. ✅ Website live (preview URL) — **zet A-record naar Vercel**
2. ✅ Lead funnel werkt — **vul zelf een scan in als demo**
3. 🔴 LinkedIn: stuur 10 connectieverzoeken naar D2C founders
4. 🔴 Stuur dit document naar ChatGPT voor verdere uitwerking
5. 🔴 Plan coöperatie kick-off meeting in augustus 2026

---

## 7. BRONNEN

- ACM/Thuiswinkel Markt Monitor 2024-2025
- CBS online consumentenbestedingen 2024
- UPS/Easyship de-minimis analyses 2025
- Concurrentie-websites (Monta, Active Ants, byrd, Huboo, Salesupply)
- Shopify merchant statistics 2026
- claims-register.md v1.1 (interne bron)
