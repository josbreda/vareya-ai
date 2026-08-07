# Vareya.ai — Compleet Strategisch Pakket
**Datum:** 7 augustus 2026
**Bron:** Hermes Agent Team (hoofdagent + 3 research agents)
**Voor:** ChatGPT / Presentatie / Implementatie

---

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


---

## 8. AGENT IMPLEMENTATIEPLAN (588 regels, goedgekeurd)

# Vareya — implementatieplan eerste 6 maanden

## 1. Hoofddoel en uitgangspunten

**Doel in kwartaal 1:** de eerste 10 passende leden werven, waarvan minimaal 7 operationeel live zijn met hun eerste verzonden orders.

**Doel in kwartaal 2:** doorgroeien naar 20–25 actieve leden, een herhaalbaar acquisitieproces opbouwen en de ledenervaring grotendeels automatiseren.

### Beslispunt vóór publicatie

De briefing bevat zowel “geen leden maar klanten” als een doel voor ledenwerving. Dit plan gaat ervan uit dat webshops daadwerkelijk **lid van de Coöperatie U.A.** worden en niet alleen klant zijn. Leg dit in week 1 definitief vast met statuten/notaris:

- Wie kan lid worden?
- Welke stem- en informatierechten heeft een lid?
- Welke ledenbijdrage, operationele kosten en uitstapregels gelden?
- Is ieder lid ook afnemer, of kunnen niet-leden klant zijn?
- Wat betekent U.A. concreet voor aansprakelijkheid?
- Hoe wordt een overschot behandeld?

Zolang dit niet juridisch is bevestigd, niet claimen dat ieder gebruiker mede-eigenaar is, één stem heeft of een overschot ontvangt. Als gebruikers alleen klant zijn, moeten alle ledenclaims uit site en campagnes.

## 2. Scherpe marktpositie

### Kern-ICP

Webshops in Nederland en België met:

- 50–500 orders per maand;
- Shopify, WooCommerce en/of verkoop via bol.com;
- standaard pakketproducten en een beheersbaar SKU-profiel;
- een eigenaar of e-commerce manager die nu zelf fulfilment doet of te klein is voor een traditionele 3PL;
- een concrete pijn: tijdverlies, ruimtegebrek, vervoerders vergelijken, retouren verwerken, foutgevoeligheid of een minimumvolume bij een 3PL;
- bereidheid om binnen 30–60 dagen over te stappen en operationele data te delen.

**Eerste cohort uitsluiten of handmatig beoordelen:** koel/vries, gevaarlijke stoffen, extreem grote of zware artikelen, sterk gereguleerde producten en complexe assemblage. Eerst bewijzen dat de standaardflow werkt.

### Positioneringszin

> **Vareya is de fulfilmentcoöperatie voor webshops met 50–500 orders per maand. Door volume te bundelen krijgen leden toegang tot professionele fulfilment en meerdere vervoerders, zonder individueel minimumvolume — met transparante kosten en één aanspreekpunt.**

### Hero-copy voor de homepage

**Kop:** Fulfilment voor kleine webshops, samen slim georganiseerd.

**Subkop:** Bundel je verzendvolume met andere webshops. Krijg professionele opslag, pick & pack, retourverwerking en multi-carrier verzending — zonder individueel minimumvolume.

**Primaire CTA:** Doe de coöperatieve Verzendscan

**Secundaire CTA:** Word lid van het eerste uur

### Het coöperatieve verhaal in drie stappen

1. **We bundelen volume.** Eén kleine webshop heeft weinig onderhandelingsmacht; samen ontstaat een voorspelbare stroom.
2. **We verdelen werkelijke kosten transparant.** Geen onzichtbare opslag. Wel duidelijk gescheiden fulfilment-, verzend-, beheer- en ledenkosten.
3. **Leden hebben invloed.** Leg alleen de zeggenschap vast die daadwerkelijk in statuten en ledenreglement staat.

### Wat Vareya niet moet zeggen

- Niet: “altijd de goedkoopste”, “gegarandeerd goedkoper” of een exact besparingspercentage zonder bewijs.
- Niet: “geen kosten” of “tegen inkoopprijs” als beheer, software, onboarding of uitzonderingen apart worden berekend.
- Niet: “mede-eigenaar” of “één lid, één stem” voordat dit juridisch en operationeel klopt.
- Niet alleen: “wij zijn een coöperatie”. Vertaal het altijd naar het concrete voordeel voor de webshop.

### Bewijsblokken op de site

- een voorbeeld van een transparante kostenspecificatie;
- uitleg van individueel volume versus gebundeld volume;
- deelnemende carriers en het selectieprincipe, zonder onbewezen optimalisatieclaims;
- echte magazijn-, proces- en teambeelden;
- vanaf de eerste live leden: geanonimiseerde nulmeting en resultaat na 30 dagen;
- een sectie **“Eerlijk is eerlijk”** met wat Vareya wel en niet ondersteunt.

---

## 3. Aanbod voor de eerste 10 leden

### “Lid van het eerste uur” — founding cohort

Beperk de eerste ronde zichtbaar tot 10 passende webshops. Bied geen structurele bodemprijs, maar voordelen die de coöperatie sterker maken:

- persoonlijke fulfilment- en overstapscan;
- een begeleide pilot van 90 dagen;
- prioriteit bij onboarding;
- inspraak in rapportage, vervoerderskeuze en ledenservice;
- maandelijkse founding-member-sessie;
- transparante nulmeting vóór livegang;
- een helder uitstapmoment na de pilot volgens leden- en dienstverleningsovereenkomst.

Eventuele introductiecredit alleen geven als de unit economics dit toelaten; geen gratis fulfilment beloven.

### Verdeling waarmee de eerste 10 worden gevonden

Stuur op deze mix, niet op één kanaal:

- **3 leden uit warme kring:** eerdere aanvragen, ondernemersnetwerk, bestaande contacten en referrals;
- **3 leden via founder-led LinkedIn-outreach;**
- **2 leden via Shopify/WooCommerce-bureaus en e-commerce freelancers;**
- **1 lid via bol.com-verkopersnetwerken of een openbare seller-case;**
- **1 lid via een rondetafel, webinar of lid-referral.**

### Wervingsfunnel voor cohort 1

Werkhypothese om 10 getekende leden te halen:

- 250 zorgvuldig geselecteerde bedrijven;
- 180 persoonlijke eerste contacten;
- 45 inhoudelijke reacties;
- 25 ingevulde scans;
- 18 lidmaatschapsgesprekken;
- 12 concrete lidmaatschapsvoorstellen;
- 10 getekende leden;
- minimaal 7 live vóór het einde van kwartaal 1.

Dit zijn stuurgetallen, geen garantie. Analyseer iedere vrijdag de werkelijke conversie per kanaal en pas aantallen aan.

---

## 4. Leadgeneratie: kanalen en aanpak

### Prioriteit 1 — founder-led LinkedIn

**Selectie:** eigenaren/founders/e-commerce managers van webshops met zichtbare groei, een actief assortiment en indicaties van 50–500 orders per maand. Zoek op Shopify/WooCommerce, bol.com seller, D2C, webshop-eigenaar en relevante branchegroepen. Geen bulkspam en geen onbevestigde volumecijfers in berichten.

**Ritme vanaf week 1:**

- vier werkdagen per week 10–15 nieuwe persoonlijke berichten;
- iedere prospect één concreet signaal geven: platform, assortiment, groei, retourvraagstuk of vacature;
- follow-up op dag 3 en dag 8;
- bij interesse direct naar Verzendscan, niet eerst naar een algemene demo.

### Prioriteit 2 — Shopify/WooCommerce-partners

Doelpartners: webbouwers, e-commerce freelancers, Shopify Experts, CRO-bureaus, accountants en coaches die webshops in de groeifase begeleiden.

**Partneraanbod:**

- co-branded Verzendscan;
- een lunchwebinar “Wanneer is een webshop klaar om fulfilment uit te besteden?”;
- warme overdracht met statusupdates;
- geen verborgen kickback; een eventuele referralvergoeding is transparant en contractueel vastgelegd.

Stuur vanaf week 3 elke week vijf nieuwe partnerbenaderingen en plan minimaal twee partnergesprekken per maand.

### Prioriteit 3 — bol.com-verkopers

- benader alleen publiek vindbare bedrijven en relevante ondernemers, niet willekeurig consumentenprofielen;
- maak een specifieke vergelijking: zelf versturen/LVB/uitbesteden, zonder te claimen dat Vareya altijd beter is;
- organiseer een korte sessie: “Van 100 naar 500 orders zonder een tweede baan in je magazijn”;
- maak een landingspagina `/voor-bol-verkopers` met retouren, voorraad, pieken en multi-carrier als hoofdthema’s.

### Prioriteit 4 — high-intent Google Ads

Pas starten nadat conversiemeting, landingspagina en opvolging werken. Eerste zoekgroepen:

- fulfilment kleine webshop;
- fulfilment zonder minimum;
- fulfilment 100 orders per maand;
- webshop logistiek uitbesteden;
- Shopify fulfilment Nederland;
- alternatief voor zelf verzenden;
- bol.com fulfilment uitbesteden.

Start met exact en phrase match, negatieve keywords zoals vacatures, salaris, opleiding, betekenis en gratis. Gebruik een gecontroleerd testbudget; schaal pas als scans daadwerkelijk tot gekwalificeerde gesprekken leiden.

### Prioriteit 5 — content en e-mailnurture

Publiceer één praktisch stuk per week, steeds met de Verzendscan als CTA:

1. Wanneer is fulfilment uitbesteden rendabel voor een kleine webshop?
2. Wat kost zelf picken, inpakken en verzenden werkelijk?
3. Fulfilment zonder minimumvolume: hoe bundeling werkt.
4. LVB, zelf verzenden of een fulfilmentpartner?
5. Shopify-fulfilment: overstappen zonder orderchaos.
6. Retourkosten inzichtelijk maken.
7. Hoe een coöperatieve fulfilmentorganisatie kosten verdeelt.
8. Checklist voor een veilige fulfilmentmigratie.

---

## 5. Direct inzetbare scripts

### LinkedIn-connectieverzoek

> Hi [naam], ik zag dat je [webshop] runt. Vareya vormt een eerste groep webshops met 50–500 orders p/m die verzendvolume bundelen voor professionele fulfilment zonder individueel minimum. Mag ik je onze 3-minuten Verzendscan sturen?

### LinkedIn-bericht na acceptatie

> Dank voor het verbinden, [naam]. Veel webshops in jullie fase zitten tussen zelf inpakken en de minimumvolumes van een traditionele fulfilmentpartij in. Vareya bundelt het volume van leden en verdeelt de kosten transparant. Als je volume, platform en grootste logistieke knelpunt invult, krijg je binnen 48 uur een persoonlijke fit- en overstapscan. Zal ik de link sturen?

### Follow-up op dag 3

> Korte check, [naam]: waar zit bij [webshop] nu de meeste frictie — A) tijd kwijt aan inpakken, B) verzendtarieven, C) retouren, D) minimumvolume van fulfilmentpartijen? Ik stuur op basis daarvan liever één relevant inzicht dan een algemene pitch.

### Laatste follow-up op dag 8

> Ik sluit het hierna af. We selecteren nu 10 webshops voor de eerste ledenpilot. Als fulfilment dit kwartaal speelt, kan ik [webshop] vrijblijvend meenemen in de Verzendscan. Geen timing? Dan laat ik je met rust.

### E-mail aan een webshop

**Onderwerp:** Past [webshop] in de eerste Vareya-ledenpilot?

> Hi [naam],
>
> Ik zag [concreet signaal over assortiment/platform/groei]. Voor webshops met 50–500 orders per maand is de keuze vaak ongunstig: zelf blijven inpakken of niet passen bij het minimum van een traditionele 3PL.
>
> Vareya bundelt het volume van kleine webshops. Daardoor krijgen leden toegang tot professionele fulfilment, meerdere vervoerders en één aanspreekpunt, met transparante kostenverdeling.
>
> We selecteren nu 10 webshops voor de eerste 90-dagenpilot. De coöperatieve Verzendscan laat binnen 48 uur zien of jullie profiel past en welke informatie nodig is voor een realistische overstap.
>
> Zal ik de scan sturen?
>
> Groet,
> [naam]

### Partner-outreach

**Onderwerp:** Fulfilmentroute voor klanten die nog te klein zijn voor een 3PL

> Hi [naam],
>
> Jullie helpen webshops groeien, maar tussen zelf versturen en een traditionele fulfilmentpartij zit vaak een gat. Vareya richt zich op webshops met 50–500 orders per maand en bundelt hun volume coöperatief.
>
> Ik stel voor dat we samen een korte, co-branded Verzendscan aanbieden. Jullie klant krijgt een eerlijke fit-check; wij nemen alleen passende webshops mee. Geen harde verkoop en geen verborgen vergoeding.
>
> Open voor een gesprek van 20 minuten of een korte lunchsessie voor jullie team/klanten?

### Script voor een lidmaatschapsgesprek van 30 minuten

1. **5 min — context:** volume, platform, SKU’s, pieken, huidige proces en startdatum.
2. **10 min — pijn kwantificeren:** uren per week, ruimte, fouten, retouren, carrierproblemen, huidige kostenstructuur.
3. **5 min — fit:** wat Vareya nu wel/niet ondersteunt.
4. **5 min — coöperatie:** rechten, plichten, kostenverdeling en besluitvorming; geen romantisch verhaal zonder concrete regels.
5. **5 min — volgende stap:** data-aanlevering, kostenspecificatie, pilotbesluit en geplande liveweek.

---

## 6. Lead magnets

### 1. Coöperatieve Verzendscan — primaire conversietool

**Input:** orders/maand, platform, SKU-aantal, gemiddeld pakket, bestemmingen, retourpercentage, huidige werkwijze, wekelijkse fulfilmenturen, gewenste startdatum en grootste knelpunt.

**Output binnen 48 uur:**

- fit voor cohort 1: groen/oranje/niet passend;
- belangrijkste kosten- en procesdrivers;
- ontbrekende data voor een betrouwbare berekening;
- overstaprisico’s;
- aanbevolen volgende stap.

Niet alleen gegevens verzamelen: de bezoeker moet direct een korte voorlopige uitslag zien en per e-mail een concreet vervolg krijgen.

### 2. Zelf-versturen-kostencalculator

Bereken met invoer van tijd, opslag, verpakkingsmateriaal, verzendkosten, retourtijd en foutcorrecties de huidige totale fulfilmentlast. Toon bandbreedtes en aannames; beloof geen besparing.

### 3. “Klaar om uit te besteden?”-checklist

Eén pagina/PDF met 12 signalen en een score. CTA: bespreek de uitkomst tijdens de open ledenrondetafel.

### 4. Maandelijkse open ledenrondetafel

30 minuten uitleg plus 30 minuten vragen. Laat een magazijnproces, voorbeeldkostenspecificatie en migratiechecklist zien. Noem het geen webinar-demo; het is een open kennismaking met het model.

---

## 7. Week-voor-week uitvoering

## Week 1–2 — quick wins

### Week 1 — fundament, boodschap en meetbaarheid

**Leadgeneratie**

- stel een eerste evidence-based lijst samen van 100 webshops; label bron, platform, zichtbaar signaal, vermoedelijke volumefase, contactpersoon en reden van fit;
- start bij 20 warme contacten en 30 zeer persoonlijke LinkedIn/e-mailberichten;
- plan follow-ups automatisch, maar schrijf het eerste bericht handmatig;
- maak een apart lijstje van 20 potentiële Shopify/WooCommerce-partners.

**Ledenwerving**

- definieer cohort-1 selectiecriteria en een 90-dagenpilot;
- bel alle warme leads met een concreet doel: scan of gesprek inplannen;
- plan de eerste open ledenrondetafel voor week 3 of 4.

**Positionering**

- leg juridisch vast of gebruikers leden, klanten of beide zijn;
- vervang de homepagehero en CTA’s;
- schrijf de pagina’s “Hoe de coöperatie werkt”, “Lid worden” en “Eerlijk is eerlijk”;
- maak één visuele uitleg: individueel volume → gebundeld volume → professionele fulfilment.

**Techniek**

- voeg UTM-, referer- en landing-page-attributie toe aan Supabase;
- voeg leadvelden toe: volume, platform, categorie, huidige oplossing, pijn, startdatum, fit-score, fase, volgende actie en toestemming;
- definieer pipelinefasen: nieuw → benaderd → reactie → scan → gesprek → voorstel → lid getekend → onboarding → live → verloren;
- meet events: `scan_started`, `scan_completed`, `call_booked`, `membership_proposal_sent`, `membership_signed`, `first_order_live`;
- bouw een eenvoudige interne pipelineweergave met filters en reminders;
- voeg op de bedankpagina een kalenderoptie toe voor passende leads.

**Week-1 doel:** 100 leads in CRM, 50 benaderd, 5 scan-aanvragen en 3 gesprekken gepland.

### Week 2 — campagne live en snelle feedback

**Leadgeneratie**

- stuur 40–50 nieuwe persoonlijke berichten en volg week-1 leads op;
- publiceer artikel 1: “Wanneer is fulfilment uitbesteden rendabel?”;
- plaats drie LinkedIn-posts: probleemherkenning, uitleg bundeling, oproep voor founding cohort;
- nodig 15 passende prospects persoonlijk uit voor de rondetafel.

**Ledenwerving**

- lever iedere scan binnen 48 uur;
- voer minimaal vier lidmaatschapsgesprekken;
- vraag bij ieder gesprek om één introductie naar een vergelijkbare webshop;
- registreer bezwaren letterlijk en update FAQ en scripts.

**Positionering**

- test twee hero-varianten: “zonder individueel minimum” versus “samen toegang tot professionele fulfilment”;
- laat vijf doelgroepbedrijven de propositie in eigen woorden navertellen; als zij het model niet in één zin begrijpen, herschrijven.

**Techniek**

- bouw automatische Resend-mails: ontvangst, voorlopige uitslag, afspraakuitnodiging, dag-3 reminder en dag-8 afsluiting;
- zorg dat elke mail bron, lead owner en volgende actie in Supabase bijwerkt;
- bouw foutmonitoring voor mislukte formulieren en mails;
- test mobiel, formulieren, analytics en mailflow end-to-end boven op de bestaande 41 Playwright-tests.

**Week-2 doel:** cumulatief 100–120 benaderde bedrijven, 8–10 scans, 6 gesprekken en 1–2 serieuze pilotkandidaten.

## Maand 1 — week 3–4

### Week 3 — partnerkanaal en eerste rondetafel

- benader 10 Shopify/WooCommerce-bureaus en vijf e-commerce freelancers;
- bied een co-branded scan en lunchsessie aan;
- houd de eerste rondetafel met minimaal acht passende deelnemers;
- publiceer de zelf-versturen-kostencalculator;
- bouw `/partners`, `/voor-shopify` en `/voor-bol-verkopers`;
- geef partners een referralcode of unieke URL en sla deze op bij iedere lead;
- verstuur maximaal vijf persoonlijke lidmaatschapsvoorstellen na een scan en gesprek.

**Week-3 doel:** 3 partnergesprekken, 8 rondetafeldeelnemers, 5 voorstellen en minimaal 1 mondelinge toezegging.

### Week 4 — eerste closes en conversieanalyse

- volg alle scans en voorstellen persoonlijk op;
- publiceer content over kostenverdeling en een geanonimiseerd scanvoorbeeld;
- start alleen met een kleine Google Ads-test als conversie-events aantoonbaar werken;
- maak bezwaarcategorieën: prijs, vertrouwen, timing, integratie, coöperatiemodel en operationele fit;
- rond ledenovereenkomst, dienstverleningsovereenkomst, privacyverwerking en onboardingchecklist af;
- onboard de eerste 2–3 leden of leg een concrete liveweek vast;
- houd een maandreview per kanaal: contacten, reacties, scans, gesprekken, voorstellen en closes.

**Einde-maand-1 doel:** 200–250 prospects in CRM, 150–180 persoonlijke contacten, 15–20 scans, 10–12 gesprekken, 6–8 voorstellen en 2–3 getekende leden.

## Kwartaal 1 — week 5–13

### Week 5 — onboarding bewijzen

- maak per eerste lid een nulmeting van tijd, fouten, retouren, verzendmix en totale kostenstructuur;
- doorloop één volledige testorder, retour en supportvraag;
- bouw een onboardingstatuspagina met verantwoordelijke, blokkades en live-datum;
- werf 40 lookalike prospects op basis van de beste eerste leden.

### Week 6 — platformpartner-sprint

- organiseer een sessie voor Shopify/WooCommerce-partners;
- lever een partnerkit: ICP, uitsluitingen, scanlink, e-mailcopy en FAQ;
- bouw import/export of een betrouwbare bestaande connector voor Shopify/WooCommerce; bouw geen eigen WMS als een bestaand systeem voldoet;
- doel: twee actieve referralpartners en twee nieuwe gekwalificeerde scans.

### Week 7 — high-intent search testen

- lanceer Google Ads naar afzonderlijke landingspagina’s;
- meet kosten per voltooide scan en per gekwalificeerd gesprek, niet alleen klikken;
- pauzeer brede termen zonder intentie;
- publiceer “LVB, zelf verzenden of uitbesteden?”;
- doel: minimaal drie advertentiegedreven scans met aantoonbare ICP-fit voordat budget omhooggaat.

### Week 8 — eerste bewijs publiceren

- publiceer een eerlijke mini-case van een live lid: uitgangssituatie, proces en eerste waarneming;
- laat het lid de tekst goedkeuren;
- voeg magazijnbeelden, processtappen en voorbeeldrapportage toe aan de site;
- vraag ieder tevreden lid om één introductie;
- doel: lid 4 en 5 tekenen of een vaste liveweek hebben.

### Week 9 — outbound naar beste segment

- kies op basis van data één best converterende niche of platformcombinatie;
- voeg 75 vergelijkbare prospects toe en stuur 50 persoonlijke contacten;
- maak één specifieke nichepagina, maar alleen met aantoonbare operationele competenties;
- optimaliseer scanvragen op basis van afvallers en ontbrekende data.

### Week 10 — tweede open rondetafel

- laat een founding member vertellen waarom deze meedoet;
- bespreek kostenopbouw, migratie en beperkingen openlijk;
- stuur de opname en checklist aan alle aanwezigen;
- doel: 10 deelnemers, vier gesprekken en twee voorstellen.

### Week 11 — ledenreferral en nurture

- introduceer een transparant referralvoordeel dat door bestuur/ledenregels wordt toegestaan;
- activeer een e-mailnurture voor leads die “later” zeggen: case, checklist, rondetafel en scan;
- bouw reminderlogica op `next_action_at` en waarschuw als een lead langer dan drie werkdagen stilvalt;
- doel: drie warme introducties en lid 6–8 getekend.

### Week 12 — cohort 1 sluiten

- organiseer een close-sprint voor alle open voorstellen;
- gebruik geen kunstmatige korting; wel een heldere laatste onboardingweek voor het eerste cohort;
- documenteer bezwaren en verliesredenen;
- rond leden 9 en 10 af of vul de pipeline aan met minimaal vijf reservekandidaten.

### Week 13 — kwartaalreview

- rapporteer kanaal voor kanaal: leadvolume, replyratio, scanratio, gesprekratio, close-ratio, tijd tot live en activatie;
- vergelijk leden op operationele fit en bijdrage aan gebundeld volume;
- stop kanalen met veel volume maar weinig fit;
- stel Q2-doel en budget vast op basis van werkelijke economics;
- publiceer alleen bewezen resultaten.

**Einde-Q1 doel:** 10 getekende leden, minimaal 7 live, 3 werkende referralpartners, 2 goedgekeurde cases, scan→gesprek en gesprek→lid conversies betrouwbaar gemeten.

## Kwartaal 2 — week 14–26

### Week 14 — focussegment kiezen

- kies één primaire sub-ICP op basis van close-rate, operationele eenvoud en retentie;
- scherp homepage en outreach aan op dat segment zonder de bredere markt af te sluiten;
- leg maandelijkse kanaalbudgetten en eigenaar per kanaal vast.

### Week 15 — ledenportaal MVP

- geef leden een veilige login voor onboardingstatus, documenten, contact, facturen/kostenspecificatie en operationele KPI’s;
- implementeer rollen en Supabase Row Level Security;
- log toegang en fouten; voer autorisatietests uit.

### Week 16 — partnerkanaal productiseren

- maak co-branded landingspagina’s voor de beste twee partners;
- automatiseer bronattributie en maandrapportage;
- houd partneroffice-hours;
- doel: iedere actieve partner levert minimaal één gekwalificeerde scan per maand.

### Week 17 — SEO-cluster 1

- publiceer de hoofdpagina “Fulfilment voor kleine webshops” plus drie ondersteunende artikelen;
- voeg interne links, FAQ-schema en duidelijke CTA’s toe;
- laat alle coöperatieve en kostenclaims langs een claimsregister gaan.

### Week 18 — paid search opschalen of stoppen

- schaal alleen zoekgroepen die tot gekwalificeerde gesprekken of leden leiden;
- test retargeting uitsluitend met correcte toestemming;
- stop campagnes die alleen calculatorgebruik zonder koopintentie opleveren.

### Week 19 — operationele transparantie

- toon leden een uitsplitsing van fulfilment-, verzending-, verpakking-, software-/beheer- en uitzonderingskosten;
- bouw maandelijkse KPI-rapportage: orders, cut-off performance, fouten, retouren, carrierverdeling en support;
- laat leden afwijkingen en vragen vanuit het portaal melden.

### Week 20 — ledenbijeenkomst en referrals

- organiseer een formele of informele ledenbijeenkomst conform governance-afspraken;
- laat leden stemmen/prioriteren waar zij werkelijk zeggenschap hebben;
- vraag gerichte introducties naar webshops met hetzelfde profiel;
- doel: vijf warme introducties.

### Week 21 — tweede segmentpagina

- kies pas een tweede niche na bewijs uit de pipeline;
- publiceer een case-gedreven landingspagina en specifieke outreach;
- train partnernetwerk op de nieuwe fitcriteria.

### Week 22 — integraties en orderflow

- prioriteer integraties op werkelijk ledengebruik: Shopify, WooCommerce en bol.com;
- gebruik waar mogelijk bestaande WMS/carrier-connectors;
- voeg webhookmonitoring, retrylogica en een handmatige herstelroute toe;
- test order, wijziging, annulering, verzending, tracking en retour end-to-end.

### Week 23 — sterke case study

- publiceer een case met voor/na-proces, echte cijfers of expliciete bandbreedtes en toestemming;
- maak hiervan LinkedIn-post, partner-one-pager, e-mail en advertentievariant;
- vermijd causaliteitsclaims die de data niet ondersteunt.

### Week 24 — dormant-lead sprint

- segmenteer “later”, “geen timing”, “integratievraag” en “prijsbezwaar”;
- stuur per segment één relevante update;
- nodig alleen opnieuw uit als er een aantoonbaar nieuw argument is: case, integratie, nieuwe rondetafel of gewijzigde fit.

### Week 25 — cohort 2 sluiten

- plan vaste onboardingcapaciteit;
- close passende kandidaten en houd een wachtlijst voor profielen die operationeel niet tegelijk live kunnen;
- doel: 20–25 actieve leden benaderen zonder servicekwaliteit te laten dalen.

### Week 26 — Q2-review en schaalbesluit

- beoordeel acquisitiekosten, tijd tot live, retentie, supportlast, operationele marge/kostendekking en ledenwaarde;
- beslis welk kanaal wordt opgeschaald, welk kanaal wordt geautomatiseerd en welk kanaal stopt;
- maak een roadmap voor Q3: geografische uitbreiding, verticalisatie of meer integraties — slechts één als primaire groeihypothese.

**Einde-Q2 doel:** 20–25 actieve leden, minimaal 5 structurele referralpartners, twee bewezen acquisitiekanalen, een bruikbaar ledenportaal en aantoonbaar betrouwbare order- en rapportageflows.

---

## 8. Technische backlog met prioriteit

### P0 — binnen twee weken

1. **Attributie en events** — UTM, referer, landing page en conversion events in Supabase.
2. **Leadpipeline** — fasen, fit-score, volgende actie, eigenaar en verliesreden.
3. **Verzendscan v2** — directe voorlopige uitslag plus persoonlijke 48-uursfollow-up.
4. **Resend-automatisering** — ontvangst, segmentfollow-up, reminders en foutmeldingen.
5. **Conversiepagina’s** — `/lid-worden`, `/hoe-werkt-de-cooperatie`, `/transparantie` en ronde-tafelregistratie.
6. **Kalenderkoppeling** — alleen na gekwalificeerde scan prominent tonen.
7. **Monitoring** — formulier-, e-mail- en databasefouten met alerts.
8. **Juridische consistentie** — privacy, algemene voorwaarden, ledenvoorwaarden, U.A.-uitleg en claimsregister.

### P1 — maand 1 en kwartaal 1

1. zelf-versturen-kostencalculator met zichtbare aannames;
2. partnerreferrals met unieke link/code en rapportage;
3. onboardingtracker per lid;
4. automatische scan-PDF of beveiligde resultaatpagina;
5. eerste platformconnectoren via bestaand WMS/integratieplatform;
6. cases/cms-flow zodat bewijs snel maar gecontroleerd gepubliceerd kan worden;
7. leadnurture en follow-up-SLA;
8. dashboard met funnelconversie per bron.

### P2 — kwartaal 2

1. ledenportaal met RLS en rollen;
2. kostenspecificatie en factuurhistorie;
3. order-, tracking-, retour- en carrier-KPI’s;
4. webhookmonitoring en retry/incidentflow;
5. governancebibliotheek: agenda, documenten en besluiten; alleen stemfunctionaliteit bouwen als daar een echte operationele behoefte en juridisch proces voor is;
6. schaalbare content- en partnerpagina’s;
7. exports voor boekhouding en maandrapportage.

### Niet nu bouwen

- geen eigen WMS als bestaande software de kernflow aankan;
- geen complex AI-carrieralgoritme vóór voldoende echte orderdata;
- geen mobiele app;
- geen uitgebreid communityplatform;
- geen tientallen SEO-landingspagina’s zonder bewijs en unieke inhoud.

---

## 9. Dashboard en wekelijkse KPI’s

Volg iedere vrijdag minimaal:

- nieuwe gekwalificeerde leads per bron;
- persoonlijke eerste contacten;
- positieve en negatieve reacties;
- voltooide scans;
- scan → gesprek;
- gesprek → voorstel;
- voorstel → getekend lid;
- getekend → live;
- gemiddelde dagen per fase;
- no-show en verliesredenen;
- partners met minstens één gekwalificeerde referral;
- foutpercentage van formulieren en e-mails;
- live leden, verzonden orders en open onboardingblokkades.

**North-star metric:** actieve leden die hun eerste orders succesvol via Vareya hebben verzonden. Een ondertekend lid dat niet live gaat is nog geen geslaagde acquisitie.

## 10. Eerstvolgende 48 uur

1. Beslis juridisch en commercieel: lid, klant of beide.
2. Zet de nieuwe positioneringszin, primaire CTA en founding-cohortpagina live.
3. Voeg pipelinefasen, bronattributie en `next_action_at` aan Supabase toe.
4. Selecteer 100 concrete ICP-bedrijven en start met de eerste 30 persoonlijke berichten.
5. Plan de eerste open ledenrondetafel en nodig de eerste 15 bedrijven persoonlijk uit.
6. Maak de eerste vijf Verzendscans handmatig van hoge kwaliteit; automatiseer pas nadat duidelijk is welke informatie het gesprek echt helpt.


---

## 9. EINDVERDICT

**Productie:** GO ✅ — site live, lead funnel werkt, Resend verified
**Outreach:** GO ✅ — start 5-lead pilot, daarna 10 founding members
**Strategie:** GO ✅ — coöperatief model is first-mover in NL fulfilment markt
