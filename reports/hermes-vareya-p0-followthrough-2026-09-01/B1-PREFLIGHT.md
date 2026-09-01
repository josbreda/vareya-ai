# B1-PREFLIGHT — Edge of Ember (10 checks vóór verzending)

| # | Check | Resultaat | Bewijs |
|---|---|---|---|
| 1 | Release-gate-item | PASS | REQUIRED-CORRECTIONS.md item 3: "B1 (Edge of Ember) needs its volume sentence corrected to the register's exact verbatim wording before sending" |
| 2 | E-mailadres via ≥1 officiële bedrijfsbron | PASS | https://edgeofember.com/pages/contact-us: "email us at hello@edgeofember.com" (first-party, 2026-09-01) |
| 3 | Beslisser of functionele inbox | PASS | Geen publieke DM; functionele inbox hello@ is de officiële contactroute |
| 4 | Protected relationships | PASS | Edge of Ember niet in de 10 beschermde namen; DB is_protected_customer=false |
| 5 | Eerdere verzendhistorie | PASS | lead_channel_messages: 0 rijen voor lead f2c0e8f5; sent_at NULL vóór verzending |
| 6 | Geen duplicaat van reeds verzonden bericht | PASS | Onderwerp "Fulfilling EU orders from inside the EU" niet eerder verzonden |
| 7 | Claims-controle | PASS | Volumezin nu verbatim register v1.6; "a few minutes" ✓; "within one working day" ✓; "warehouse in Breda" ✓; geen superlatieven/garanties |
| 8 | Raymond als afzender | PASS | info@vareya.ai mailbox, afsluiting "Raymond Faber, Vareya — Breda" |
| 9 | Free Rate Scan-link | PASS | https://vareya.ai/free-rate-scan/ |
| 10 | Templatevariabelen ingevuld | PASS | Geen placeholders; alle velden tekstueel ingevuld |

## Verzonden tekst (gecorrigeerd)

Subject: **Fulfilling EU orders from inside the EU**

> Hello,
>
> I came across Edge of Ember's shipping page, which notes that orders go out from your London studio worldwide. For EU customers, a base inside the EU can simplify duties and delivery — that's what Vareya does from its warehouse in Breda, the Netherlands. Vareya is generally best suited to brands shipping 500 or more orders per month.
>
> If you'd like to see whether the setup could fit, the scan takes a few minutes and Vareya responds within one working day: https://vareya.ai/free-rate-scan/
>
> Worth a look only if EU delivery is a growing part of your orders.
>
> Best regards,
> Raymond Faber
> Vareya — Breda, the Netherlands
> info@vareya.ai

**Verdict: READY_TO_SEND → verzonden (zie B1-SEND-EVIDENCE.md).**
