# Manual Actions — Raymond & Jos (Local SEO Brabant)
**Datum:** 10 augustus 2026
**Doel:** Precieze instructies voor handmatige acties die alleen jullie kunnen doen.

---

## ACTIE 1 — Google Business Profile (PRIORITEIT HOOG)

**Wat:** Vaststellen of Vareya een Google Business Profile heeft, en deze verifiëren.

**Stappen:**
1. Ga naar https://business.google.com/ en log in met het bedrijfsaccount.
2. Zoek op "Vareya" — controleer of er een profiel bestaat.
3. Mogelijke uitkomsten:
   - **Geen profiel** → maak er één aan (naam: "Vareya BV", adres: Bagven Park 6, 4838 EH Breda)
   - **Ongeverifieerd profiel** → verifieer via de getoonde methode (postkaart/video)
   - **Duplicaat** → claim de juiste, vraag verwijdering van het duplicaat aan
   - **Oud profiel (Etten-Leur)** → corrigeer het adres naar Breda
4. Vul exact in:
   - Naam: **Vareya BV** (geen keywords toevoegen)
   - Adres: **Bagven Park 6, 4838 EH Breda**
   - Telefoon: **+31 6 19 12 34 72**
   - Website: **https://vareya.ai/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile**
   - Primaire categorie: **Fulfillment service** (of het meest accurate beschikbare equivalent)
5. Rapporteer het resultaat terug — dan vul ik de GBP audit doc in.

## ACTIE 2 — Google Search Console

**Wat:** Property vareya.ai verifiëren.

**Stappen:**
1. Ga naar https://search.google.com/search-console/
2. "Property toevoegen" → "URL-prefix" → `https://vareya.ai/`
3. Kies DNS-verificatie (TXT-record in GoDaddy) of upload de HTML-verificatiefile (ik kan die in de repo zetten).
4. Na verificatie: geef mij toegang of exporteer de query-data maandelijks.

## ACTIE 3 — Oude domeinen redirecten (P0)

**Wat:** www.vareya.com en go.vareya.com 301-redirecten naar vareya.ai.

**Stappen:**
1. Goedkeuring: bevestig dat de oude WordPress/statische sites weg mogen.
2. Hostinger (FTP 46.202.172.194, user u236595646):
   - www.vareya.com → .htaccess regel: `Redirect 301 / https://vareya.ai/`
   - go.vareya.com → `Redirect 301 / https://vareya.ai/knowledge/`
3. Of laat mij het doen als jij de FTP-toegang bevestigt.

## ACTIE 4 — Echte warehouse foto's

**Wat:** 5-8 echte foto's voor GBP + NL-pagina.

**Gewenst:**
- Buitenzijde magazijn + entree/bewegwijzering
- Laad-/loszone
- Opslagruimte
- Packstations
- Pakketten
- Team aan het werk
- Software-scherm (zonder vertrouwelijke data)

**Regels:** geen stockfoto's, geen AI-beelden — alleen echte Vareya-foto's.

## ACTIE 5 — Reviews aanvragen (later)

Pas starten na GBP-verificatie. Proces staat in docs/GOOGLE-REVIEW-PROCESS.md (nog te schrijven) — geen incentives, geen selectieve aanvragen.

---

**Prioriteit:** Actie 1 en 3 zijn de hoogste — P0-domeinen en GBP zijn de grootste hefbomen voor lokale zichtbaarheid.
