# CLAIMS-REGISTER-CHANGES — v1.5 → v1.6 (2026-09-01)

Bestand: `content/claims-register.md` (branch hermes/vareya-raymond-decisions-2026-09-01).

## Wijzigingen

1. **Header:** Version 1.5 → **1.6**; Last updated → **1 September 2026**.
2. **Nieuwe sectie "Decisions approved 1 September 2026 (Raymond)":**
   - Besluit 1 (B): coöperatie-statusregels — toegestane NL/EN-strekking, verboden formuleringen, scope (website, metadata, schema, llms.txt, repo's, publieke md's, presentaties, contentdata).
   - Besluit 2 (B): Thuiswinkel-status `PROHIBITED_UNTIL_NEW_VERIFIED_MEMBERSHIP` + verwijder-/archiveer-regel + live-nul-hits-controle.
   - Besluit 3: 4 bestemmingen owner-confirmed (01-09-2026) — pakketverzendingen, carriers PostNL/Asendia/FedEx/DHL Express, douane via geselecteerde carrier, retouren per afspraak, geen extra volume-beperkingen, "sinds 2016" = INTERNAL_OWNER_CONFIRMED tot historisch bewijs. Rekenregel 37+4=41; ROW is geen land; geen per-carrier-per-land-claim zonder bewijs; publiceer landenlijst i.p.v. marketinggetal.
   - Besluit 4 (A): commerciële activatie exacte scope + één-voor-één verzending + geen automatische follow-ups zonder nieuwe menselijke controle.
3. **Destinations-sectie:** notitie bij de 4 landen herschreven (bevestigd i.p.v. "without a separate per-country shipping confirmation"); **verplichte exacte zinnen toegevoegd:**
   - Volume/restrictions: "No additional Vareya-specific volume restrictions have been confirmed. Shipments remain subject to product qualification, carrier acceptance and destination customs requirements."
   - Customs: "Customs processing is handled through the selected carrier, based on complete and accurate shipment documentation. Duties, taxes and importer obligations may apply."
   - Returns: "Returns handling is available by agreement."
   - "Operational since 2016" = INTERNAL_OWNER_CONFIRMED tot historische evidence.
4. **Implementation notes:** v1.6-noot toegevoegd (besluiten + copy-alignment).

## Gerelateerd code-commentaar

- `src/content/claims.ts`: kopcommentaar bij `APPROVED_DESTINATIONS` bijgewerkt naar v1.6 met bevestigingsnotitie en "publiceer de lijst, niet een getal".

## Landenlijst

Ongewijzigd qua leden (41 landen, incl. de 4 bevestigde); gewijzigd is de **evidence-status** van de 4 en de verplichte veilige formuleringen.
