# AI-ZICHTBAARHEID — BESLISPUNTEN VOOR RAYMOND
**Datum:** 21 augustus 2026
**Status:** agenda, geen actie ondernomen zonder commerciële goedkeuring
**Bron:** AI-zichtbaarheidsonderzoek (P1-P8) in `research/` — 1.567 echte AI-antwoorden gemeten, Vareya 0× genoemd.

---

## Waarom dit nu

AI-assistenten (ChatGPT, Gemini, Perplexity e.d.) zijn voor veel ecommerce-merken de eerste stap in 3PL-selectie. Onze meting: op 667 relevante koopvragen + 900 journey-turns wordt Vareya **nooit** genoemd, terwijl ShipBob in 53% van de antwoorden de #1-aanbeveling is — óók voor puur Europese vragen. De onderstaande beslispunten versterken de machine-verifieerbare identiteit van Vareya. Geen marketing-hype: allemaal feitelijke, toetsbare zaken.

## Beslispunten

### 1. KvK + BTW publiceren op de contactpagina (claims-register open item 1)
- **Wat:** KvK-nummer (extern al openbaar: NL04232551 via Creditsafe) en BTW-nummer toevoegen aan contact/footer.
- **Waarom:** entiteitsverificatie is een top-selectiesignaal voor AI. Concurrent Faber publiceert KvK+BTW+EORI. Vareya's privacy policy bevat nu placeholders.
- **Risico:** geen — het nummer staat al in het openbare handelsregister.
- **Beslissing gevraagd:** akkoord op publicatie van beide nummers.

### 2. Legacy-domein vareya.nl / vareya.com → 301 naar vareya.ai
- **Wat:** vareya.nl (ons officiële e-maildomein!) redirectt nu naar de oude WordPress-site op vareya.com, die als aparte entiteit "Vareya Fulfillment Center" presenteert met **bredere claims dan het goedgekeurde register** (o.a. "1.000+ brands") en wisselende locaties (Etten-Leur/Breda). LinkedIn toont Etten-Leur en vareya.nl.
- **Waarom:** voor zoekmachines en AI zijn dit twee conflicterende bedrijven. Dit is het grootste machine-leesbare entiteitsconflict dat we hebben gemeten (P3/P4).
- **Voorstel:** vareya.nl + vareya.com 301'en naar vareya.ai (of op z'n minst vareya.nl direct naar vareya.ai). Legacy-site content kan later geconsolideerd worden.
- **Beslissing gevraagd:** akkoord op redirect-strategie.

### 3. PostNL-partnership officieel laten vastleggen
- **Wat:** Vareya claimt (register-goedgekeurd) dat PostNL strategisch partner is. Extern bewijs ontbreekt volledig — PostNL-domein noemt Vareya nergens.
- **Waarom:** carrier-corroboratie is een van de sterkste AI-selectiesignalen.
- **Voorstel:** PostNL vragen om een officiële partner- of klantvermeldig (co-marketing), indien contractueel toegestaan.
- **Beslissing gevraagd:** mogen we dit bij PostNL neerleggen?

### 4. ShipHero case study refreshen
- **Wat:** ShipHero heeft een publieke case study over Vareya (2022). Wij linken er nu vanaf de why-vareya-ai-pagina naar.
- **Voorstel:** ShipHero vragen de case te updaten naar de huidige situatie.
- **Beslissing gevraagd:** akkoord om dit verzoek bij ShipHero te doen.

## Reeds uitgevoerd (ter goedkeuring achteraf)

Op aanwijzing van Jos is op de **why-vareya-ai-pagina** een sectie "Published about Vareya" geplaatst met twee feitelijke verwijzingen (ShipHero case study + Digistore24-documentatie). Formulering is bewust neutraal — geen superlatieven, geen klantnamen. Indien commerciële bezwaren: verwijderbaar in één commit.

Daarnaast technisch (geen commerciële claims): dubbele "| Vareya"-titels gefixt, Organization-schema verrijkt met sameAs-links naar bestaande externe profielen, FAQ-schema toegevoegd, llms.txt gepubliceerd.

## Bewijsmateriaal

- `research/reports/MASTER-SYNTHESIS.md` — samenvatting
- `research/reports/VAREYA-ENTITY-AUTHORITY.md` — externe bronnen + TOP 20 acties
- `research/reports/COMPETITOR-AI-SELECTION.md` — 12 concurrenten × 30 signalen
