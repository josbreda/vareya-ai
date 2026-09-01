# P0-CLAIMS-FIXES — de 14 P0-onderzoekspunten en wat eraan gedaan is

**Controledatum:** 2026-09-01 · Alle wijzigingen op branch `hermes/vareya-current-state-2026-09-01` (werkboom `HOS\projects\vareya-ai-hermes-20260901`) + live fixes op jmconcepts.cloud (FTP, backup + rollback aanwezig).

## 1. Publieke claim "1.000+ merken" op jmconcepts.cloud — STATUS: NIET BEWEZEN → LIVE GEFIXT ✅

- **Live URL's (was):** https://jmconcepts.cloud/ (projectkaart "Samen Verzonden") en https://jmconcepts.cloud/samenwerking.html (hero) — beide: "Vareya, e-fulfilment specialist met 1.000+ merken".
- **Interne evidence:** claimsregister v1.5 (content/claims-register.md, regels 92): brand-count claims staan op de EXCLUSION-lijst; register v1.5 regel 34: "multiple years of experience fulfilling for large international brands. No client names, logos or figures are used to support this." → een publiek klantenaantal (1.000+) is per register verboden en heeft geen goedgekeurde bron.
- **Externe evidence:** geen enkele primaire of secundaire bron toont 1.000+ klanten van Vareya. Sterker: FulfilmentShortlist kreeg op 21-08 al een correctieverzoek om exact "1.000+ merken" en "42.000 m²" te verwijderen (bewijs: `reports/EXTERNAL-ENTITY-CORRECTIONS.md`, Resend message-id af5034d0-07d8-4fab-bed2-37a1f9d119b9). Het getal is legacy-marketingmateriaal zonder bewijs.
- **Classificatie:** UNSUPPORTED / PROHIBITED (register).
- **Veilige wording (toegepast):** "Vareya, een e-fulfilment specialist, liep tegen een grens aan: ..." — claim vervangen door feitelijke formulering zonder klantenaantal.
- **Patch:** `HOS\projects\jmconcepts\index.html` + `samenwerking.html` (deploy via FTP met hash-verificatie; backup `backups/ftp-live-20260901-105213/`; rollback = re-upload backup).
- **Live-verificatie:** curl https://jmconcepts.cloud/ → 0 hits op "1.000+ merken" ✅; https://jmconcepts.cloud/samenwerking.html → 0 hits ✅.
- **Extra (zelfde run):** twee publiek bereikbare interne .md-bestanden die de claim óók bevatten (`/concept-samen-verzonden.md`, `/concurrentie-analyse.md`) zijn met backup verwijderd → nu HTTP 404.

## 2. Juridische status "Coöperatie U.A." — STATUS: NIET OPGERICHT → LIVE-WORDING GEFIXT ✅

- **Live claim (was):** https://vareya.ai/about/ — "Vareya is being built as a cooperative (Coöperatie U.A.)."
- **Interne evidence:** `concept-samen-verzonden.md` (juni 2026): "Status: conceptvoorstel, versie 2 (coöperatief model)"; rechtsvorm "coöperatie U.A." is daar expliciet een VOORSTEL ("voorstel, te bespreken") en "jmconcepts richt de coöperatie [op]" is toekomstig. `docs/STRATEGISCH-PAKKET.md` (Raymond): "Leg dit in week 1 definitief vast met statuten/notaris" → oprichting nog niet gedaan.
- **Externe evidence:** geen KvK-registratie van enige Vareya/Samen Verzonden-coöperatie gevonden (websearch 01-09, 0 relevante hits). Vareya BV (KVK 65877535) is de enige geregistreerde entiteit in het register.
- **Classificatie:** UNSUPPORTED als huidige rechtsvorm.
- **Veilige wording (toegepast, werkboom-branch):** "Vareya is developing a cooperative model in which the brands it serves can become members, sharing ownership and a voice in the strategic decisions reserved for them. The cooperative's legal form and membership terms will be set out in its formal documents." — consistent met de al veilige `/why-vareya-ai/`-pagina en het knowledge-artikel.
- **Status:** gepatcht in branch; deploy via QA-gate (zie QA-RELEASE-EVIDENCE.md).

## 3. Formulering "Vareya is being built as a cooperative" — ZIE PUNT 2 (zelfde regel, samen gefixt)

## 4. Customs-clearanceclaims — STATUS: APPROVED-FEIT, correct gebruikt ✅

- Register v1.5 regel 35: "Customs clearance support is available for shipments into and out of Europe. Contact Vareya to discuss specific requirements." (approved door Raymond 09-08). Live pagina's gebruiken deze formulering; geen "import support"/"IOSS"/"DDP"-claims aangetroffen (die blijven correct ongeclaimd).

## 5. Structurele zaterdag/zondagverwerking — STATUS: APPROVED ✅

- Register v1.5 regel 38: "Weekend fulfilment (Saturday and Sunday order processing) is available on a structural basis." — approved; live tekst komt overeen.

## 6. Fixed all-in rates — STATUS: APPROVED ✅

- Register regel 33: "...fixed and all-in per agreement — no hidden costs beyond what the agreement sets out." — live tekst komt overeen.

## 7. Gratis support — STATUS: APPROVED ✅

- Register regel 30: "Customer support is included at no additional charge." — live tekst komt overeen.

## 8. Customised SLA's — STATUS: APPROVED ✅

- Register regel 31: "Clients can agree customised SLAs with Vareya, within boundaries confirmed during qualification." — live tekst komt overeen.

## 9. Automatische carrierselectie — STATUS: APPROVED ✅

- Register regel 37: "Vareya's shipping system can automatically select an appropriate carrier for each shipment, based on destination and parcel characteristics." — live tekst komt overeen.

## 10. Exacte landenlijst — STATUS: GOEDGEKEURD 42 LANDEN ✅ (Agent 3 verifieert live-naleving)

- Register regels 70-72: 42 landen incl. Saudi-Arabië, Zuid-Korea, Turkije, UAE (toegevoegd 09-08). Live-check door Agent 3 (claims-audit CSV).

## 11. Landenlijst vs "ROW" vs aantallen — STATUS: REGEL HELDER; naleving gecheckt ✅

- Register regel 74: "Rest of the World" mag NIET als landnaam; forms mogen "Other destination". Nergens een "ROW"-teller of "we ship to N countries"-claim gepubliceerd (geen aantalsclaim in register → juist). Agent 3 verifieert de formulieren.

## 12. Alle PostNL-formuleringen — STATUS: "MAIN CARRIER" ✓ · "STRATEGIC PARTNER" VERBODEN ✅

- Register v1.5 regel 28: "PostNL is Vareya's main carrier for shipments within the Netherlands..." — live vareya.ai voldoet.
- "Strategic partner" is sinds v1.4 PROHIBITED en uit alle vareya.ai-bronnen verwijderd (E05-fix). Agent 3 herverifieert live; vareya.com/nl (WordPress, ITComs) is extern geblokkeerd — zie BLOCKERS.md.

## 13. Royal Mail-snelheidsbeloften — STATUS: GEEN SNELHEIDSBELOFTE ✅

- Register regel 36: "Shipments to the United Kingdom may be entered directly into the Royal Mail domestic network. Exact delivery timing depends on the agreed shipping method and is confirmed during qualification." — geen tijdbelofte gepubliceerd. vareya.com toont wél "shipped on the same day"-achtige claims (extern, geblokkeerd — BLOCKERS.md).

## 14. Superlatieven (beste/grootste/ultieme/onbetwiste autoriteit) — STATUS: vareya.ai SCHOON · jmconcepts GEFIXT · vareya.com VIOLATIE (geblokkeerd) ✅/⚠️

- **vareya.ai:** clean (enige toegestane "best" = volume-zin; "most consumer-focused" alleen als ambition-zin, register regel 66).
- **jmconcepts.cloud samenwerking.html (live gefixt 01-09):** "de beste en goedkoopste vervoerder" → "automatisch een passende vervoerder op basis van bestemming en pakketkenmerken" (register-wording); "Per order de beste vervoerder" → "Per order automatisch de passende vervoerder"; "toevallig de beste keuze" → "de juiste keuze"; "automatisch de beste deal" → "automatisch de gunstigste deal". Live geverifieerd (0 resterende hits).
- **vareya.com:** "unparalleled supply chain solutions", "lightning-fast shipping", "near-perfect order accuracy", "Your trusted global fulfillment partner, empowering over 1000 brands worldwide" → register-schendingen, maar het domein is in handen van ITComs (geen credentials) → BLOCKED, escalatie vereist (BLOCKERS.md).

## Deploy-bewijs
- jmconcepts.cloud: FTP-upload 01-09 10:53 (3 bestanden, remote SHA-256 == lokaal), live HTTPS geverifieerd. Backup: `HOS\projects\jmconcepts\backups\ftp-live-20260901-105213\` + MANIFEST.txt. Rollback: re-upload backupbestanden.
- vareya.ai: patch in branch (commit zie CHANGES-MADE.md); build/lint/test-gate en deploybesluit in QA-RELEASE-EVIDENCE.md.
