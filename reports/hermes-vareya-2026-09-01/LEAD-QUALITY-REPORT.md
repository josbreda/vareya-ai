# LEAD-QUALITY-REPORT — live leadpool herbepaling (2026-09-01)

**Methode:** directe read-only query op de productiedatabase (VPS1, `aos-postgres`, db `aos`): `leads` + `lead_organizations` + `lead_contacts` + `lead_follow_up_tasks` + `lead_channel_messages` (333 rijen, JSON-export). Lokale kruising met `protected-customer-register.csv`, `international-outreach-batch1.csv`, `outreach-batch1-final.csv`, `outreach-log.csv`.

## Hoofdtellingen (live, 2026-09-01 11:00)
| Metriek | Waarde | Opmerking |
|---|---|---|
| Totaal leads | **333** | oude snapshot "292" is verjaard |
| Status: contacted | 190 | bulk-import voor juli-augustus batches |
| Status: new | 79 | nog geen eerste touch |
| Status: not_a_fit | 29 | uitgesloten |
| Status: do_not_contact | 25 | harde uitsluiting |
| Status: replied | 7 | **klopt met oud snapshot** |
| Status: overig | 3 | nurture 1, lost 1, proposal_requested 1 |
| Qualified | **0** | oude "2 qualified" niet meer als zodanig gemarkeerd |
| Verstuurd (sent_at) | **2** | Not Basics + Tom's Trunks, 27-08, email-kanaal via dashboard (menselijk goedgekeurd; niet door deze run) |
| Gearchiveerd | 13 | soft archive |
| is_hot_lead | 4 | |
| Claims-check | 332 NOT_RUN / 1 PASS | gate werkt, vrijwel nergens gebruikt |
| Follow-up-taken | 126 open / 2 completed | |

## Contactability (contactability-gate, Ronde 17-velden)
- verified_channel_count: 0 kanalen = 69 leads · 1 = 48 · 2 = 131 · 3 = 74 · 4 = 11.
- contact_enrichment_status: **217 NEEDS_CONTACT_ENRICHMENT**; 116 (oud, voor de gate).
- contactability_score: 100 (11) · 85 (59) · 70 (6) · 60 (127) · 35 (22) · 25 (26) · 0 (54).
- decision_maker_verified: **0 van 333** (alleen Tina Guillory heeft een geverifieerd LinkedIn-profiel met rol Founder; Shivraj Bassi idem — beiden via metadata, geen werk-email).
- **Gate-pass (>=2 kanalen + score>=55 + actief): 6 leads** — Carrier Company (73), Edge of Ember (71), KOMANA (71), Fergus James (69), Bon Maxie (67), Innermost (65). (Ronde 17 telde er 2; de pool is sindsdien verrijkt/herscoord.)

## Datakwaliteit
- Duplicaten: **2 paar** op organisatienaam — `carriercompany` (2) en `komana` (2). Geen dubbele e-mails of websites.
- E-mails: 84 organisaties hebben `general_email`; daarvan is een groot deel generiek (info@/hello@). `lead_contacts.work_email` is overal leeg — **de 26 geïdentificeerde besluitvormers zijn nooit geïmporteerd** (bekende openstaande schuld, ook door Claude gerapporteerd als B-09).
- Beschermde relaties: `is_protected_customer` = False op alle 333; géén van de 10 beschermde klanten (Vacier, VUE Swiss, Tipaw, OpenBorder, Lumin, Meridian, Primal FX, SanaDigest, PureBloom, GetYourFil) komt in de outreachpool voor. **Geen enkel risico op benaderen van beschermde relaties.**
- Brondata: africa 99 · international-batch-2026-07-27 96 · main 43 · research 47 · targeted_research 9 · brave_research 11 · free_rate_scan 4 (inbound) · outreach 3 · handmatig 1 · onbekend 20. Gecontroleerd op 2026-09-01 (deze query).

## Classificatie per opdracht-statussen
| Status | Aantal | Grond |
|---|---|---|
| QUALIFIED | 0 | geen lead met verified DM + fit-bewijs |
| POTENTIAL_FIT | 6 | gate-pass (zie boven); fit nog te bevestigen in kwalificatie |
| RESEARCH_REQUIRED | 217 | NEEDS_CONTACT_ENRICHMENT |
| NOT_A_FIT | 29 | status not_a_fit |
| PROTECTED_RELATIONSHIP | 0 (in pool) | 10 beschermde klanten buiten de pool |
| DUPLICATE | 4 (2 paren) | carriercompany ×2, komana ×2 |
| STALE | 54 | contactability_score 0, nooit aangeraakt |
| UNCONTACTABLE | 25 | do_not_contact + leads met 0 kanalen zonder enrichment |

## Volgende stappen (geen verzending — alleen voorbereiding)
1. Importeer de 26 besluitvormers + werk-e-mails uit de enrichment-CSV's in `lead_contacts` (voorbereid; uitvoering is een schrijfactie die ik NIET zonder expliciete opdracht doe).
2. Dedupliceer de 2 paren (merge op org-id; behoudt de rijkste rij).
3. Claims-check (PASS) vereist voor elke draft die het dashboard in gaat — nu op 1 lead uitgevoerd; proces toepassen op de 6 gate-pass-leads.
4. Follow-up-venster voor de 3 Raymond-verzonden prospects (Carrier Company, KOMANA, Fergus James) is 31-08 ingegaan — concepten in OUTREACH-DRAFTS.md.
