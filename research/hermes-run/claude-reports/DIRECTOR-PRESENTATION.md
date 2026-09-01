# Vareya — Directierapport (Raymond & Jos)

**Datum:** 1 september 2026. Gebaseerd uitsluitend op geverifieerd bewijs: live site-audits, directe databasequeries, git-geschiedenis, en actuele externe bronnen (zie `SOURCE-REGISTER.csv`). Elke conclusie hieronder verwijst naar het onderliggende bestand met bewijs.

---

## 1. Waar we begonnen

Vareya startte als een e-fulfilment-dienstverlener met een handmatig, weinig gedocumenteerd verkoopproces. JMConcepts bouwde in de afgelopen maanden een volledige digitale laag daaromheen: een nieuwe website (vareya.ai, Next.js/Vercel), een claims-governance-systeem, een geautomatiseerde lead-discovery-pipeline, en een CRM/dashboard met een menselijke goedkeuringsstap voor alle uitgaande communicatie. Dat is de startpositie waar dit rapport tegen toetst.

## 2. Wat aantoonbaar is gerealiseerd

Zie `VAREYA-ACCOMPLISHMENTS.md` voor de volledige, item-voor-item geverifieerde lijst. Samengevat: de website, het claims-register, de lead-pipeline met menselijke goedkeuring, en vijf contentexperimenten (E01-E05, commit `719fb96`) zijn allemaal reëel en werkend bevestigd. Een aantal statusclaims uit eerdere rapportages bleek verouderd of onjuist (zie sectie 5).

## 3. Wat live staat

Bevestigd met directe HTTP-tests op 1 september 2026 (`LIVE-ROUTE-AUDIT.csv`, 85 geteste routes):
- **vareya.ai** — volledig live, alle kernpagina's (homepage, diensten, Kenniscentrum, Gratis Tarief Scan, offerteformulier) geven HTTP 200.
- **go.vareya.com** — correct doorgeschakeld naar vareya.ai/knowledge/ (de migratie hiervan is wél uitgevoerd).
- **www.vareya.com** — nog volledig live en NIET doorgeschakeld, ondanks Raymonds goedkeuring op 21 augustus. Bevat de onjuiste "1000 brands"-claim, een oud adres (Etten-Leur), zichtbare "staging"-tekst, en een kapotte /faq/-pagina (oneindige redirect-loop).
- **jmconcepts.cloud** — live, bevat dezelfde onjuiste merkenclaim ("1.000+ merken").
- **leads.jmconcepts.cloud** — live dashboard, correct gekoppeld aan de productiedatabase.

## 4. Welke commerciële infrastructuur is gebouwd

- Een geautomatiseerde lead-discovery-pipeline met een harde, substring-based uitsluitingslijst voor de 10 met naam genoemde beschermde relaties — bevestigd nog steeds correct aanwezig en werkend.
- Een CRM-achtige databaselaag (`lead_organizations`, `lead_contacts`, `lead_follow_up_tasks`) met 333 organisaties.
- Een server-side afgedwongen goedkeuringspoort: geen e-mail kan verzonden worden zonder een geslaagde claims-check én een expliciete menselijke goedkeuring op de actuele berichtversie. Dit is een echte, geteste beveiliging, geen ontwerpintentie.
- Een claims-register (v1.5) met bewijsklasses, verboden bewoordingen, en een herzieningsproces — ongebruikelijk volwassen voor een bedrijf van deze omvang.

## 5. Wat de cijfers zeggen

| Metric | Eerder gerapporteerd | Nu (1 sept, direct uit database) |
|---|---|---|
| Totaal leads | 292 | **333** |
| Gecontacteerd | 168 | **190** |
| Gereageerd | 7 | **7** (klopt) |
| Gekwalificeerd | 2 | **0** (waarschijnlijk doorgestroomd naar verdere stadia — niet met zekerheid herleid, zie `LEAD-ENGINE-STATUS.md`) |
| Contacteerbaarheid (2+ kanalen) | niet eerder gemeten | **65%** van actieve leads |
| AI-zichtbaarheidsmeting | "667 / 528" | **1.567 antwoorden in één meting**; "528" heeft geen vindbare bron |

Alle bovenstaande cijfers zijn direct herleid tot de productiedatabase of git-geschiedenis, niet tot een eerder rapport (`LEAD-ENGINE-STATUS.md`, `AI-VISIBILITY-DELTA.md`).

## 6. Waar Vareya nu onderscheidend is

- Een menselijke goedkeuringspoort vóór elke uitgaande e-mail is niet gebruikelijk bij vergelijkbare partijen in dit segment — dit is een reëel, verdedigbaar verkoopargument zodra het ook voor het LinkedIn-kanaal wordt afgedwongen (zie punt 8).
- Het claims-register-systeem zelf (bewijsklasses, verboden bewoordingen, versiebeheer) is volwassener dan wat doorgaans bij bedrijven van deze schaal wordt aangetroffen.
- Actuele externe research (zie `LATEST-INDUSTRY-INTELLIGENCE.md`) bevestigt dat de EU-douanewijzigingen per 1 juli 2026 vooral invoer van buiten de EU raken — Vareya's kernactiviteit (intra-EU-verzending) wordt hierdoor grotendeels niet geraakt, wat zelf een geruststellend, onderbouwd punt is richting klanten die hierover vragen stellen.

## 7. Waar de risico's zitten

Volledige detail in `CLAIMS-RISKS.md` en `BLOCKERS.md`. De vijf belangrijkste:
1. Onbewezen "1.000+ merken"-claim, live op twee domeinen, al 3+ weken, oplossing klaar maar niet inzetbaar door ontbrekende hostingtoegang.
2. Een al goedgekeurde domeinconsolidatie (21 augustus) staat 11+ dagen stil door dezelfde toegangsblokkade.
3. Verboden "PostNL strategic partner"-bewoording is recent (opnieuw) ontworpen in een nog niet gelanceerd experiment (FS-TRUST-001).
4. Drie onderling tegenstrijdige documenten heten alle drie "claims register" — één ervan toont de verboden PostNL-bewoording als goedgekeurd.
5. Het menselijke goedkeuringsmechanisme wordt wél afgedwongen voor e-mail, maar niet voor het LinkedIn-verzendpad — beide bevestigde verzendingen in de database zijn buiten de goedkeuringspoort om verstuurd.

## 8. Wat nog niet af is

- www.vareya.com-consolidatie (uitvoering, geen ontwerp, ontbreekt).
- LinkedIn-verzendpad mist dezelfde goedkeuringsafdwinging als e-mail.
- 26 in augustus geïdentificeerde besluitvormers zijn nooit geïmporteerd in de productiedatabase.
- Geen enkele echte, gecredentieerde AI-zichtbaarheidsmeting is ooit uitgevoerd (het bestaande promptset ligt klaar, maar er is geen gekoppelde Goodie-account).
- 92% van de openstaande follow-up-taken (116 van 126) is achterstallig.

## 9. De vijf belangrijkste besluiten voor Raymond en Jos

1. **Wie regelt, deze week, de hosting-/FTP-toegang voor www.vareya.com en jmconcepts.cloud?** Dit is de enige blokkade voor twee P0-fixes die al klaarliggen.
2. **Wordt de "1.000+ merken"-claim definitief geschrapt, of bestaat er ergens bewijs dat dit alsnog onderbouwt?** Zo niet, is verwijdering de enige verantwoorde weg.
3. **Krijgt Samen Verzonden (het coöperatie-voorstel van JMConcepts) een formeel go/no-go-gesprek?** Het staat nu nergens live, maar bevat claims die het register zouden schenden als het ooit als Vareya-standpunt naar buiten komt.
4. **Wordt het LinkedIn-verzendpad op korte termijn achter dezelfde goedkeuringspoort gezet als e-mail?** Dit is de enige plek waar de "menselijke goedkeuring voor alle uitgaande communicatie"-belofte vandaag niet wordt afgedwongen.
5. **Wordt geïnvesteerd in een echte AI-zichtbaarheidsmeting (Goodie-account of alternatief)?** Zonder dit blijft elke uitspraak over AI-vindbaarheid een aanname in plaats van een meting.

## 10. Eerstvolgende acties (7 / 30 / 90 dagen)

**Binnen 7 dagen (geen toegang nodig, of toegang die al bekend is waar die vandaan moet komen):**
- Verboden PostNL-bewoording verwijderen uit FS-TRUST-001 vóór lancering.
- De drie tegenstrijdige claims-registerdocumenten samenvoegen/opschonen.
- Landental corrigeren in `llms.txt` en `ENTITY-SUBMISSION-PACK.md` (41, niet 42).
- Hostingtoegang voor www.vareya.com en jmconcepts.cloud regelen via Itcoms/Jos.

**Binnen 30 dagen:**
- www.vareya.com-consolidatie daadwerkelijk uitvoeren zodra toegang er is; "1.000+ merken" van beide domeinen verwijderen.
- LinkedIn-verzendpad achter dezelfde goedkeuringspoort zetten als e-mail.
- De 26 besluitvormers uit de augustus-verrijking importeren in `lead_contacts`.
- Follow-up-achterstand (116 openstaand) actief wegwerken of bewust herprioriteren.

**Binnen 90 dagen:**
- Een echte, gecredentieerde AI-zichtbaarheidsmeting uitvoeren met de bestaande 36-promptset en een formele nulmeting vastleggen.
- De contactverrijkingsmethode uit augustus herhalen voor de resterende 111 leads met zwakke contacteerbaarheid.
- Formeel besluit vastleggen over Samen Verzonden (doorgaan, pauzeren, of afwijzen).

---

*Alle cijfers, citaten en claims in dit document zijn direct herleidbaar tot een van de 14 overige bestanden in deze map en tot `SOURCE-REGISTER.csv`. Waar een conclusie een aanname betreft in plaats van een harde bevestiging, is dit als zodanig gemarkeerd in het onderliggende brondocument (bijv. INFERENCE in `LEAD-ENGINE-STATUS.md`).*
