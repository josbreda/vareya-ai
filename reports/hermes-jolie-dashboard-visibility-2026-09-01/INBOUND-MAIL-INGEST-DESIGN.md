# INBOUND-MAIL-INGEST-DESIGN — info@vareya.ai (ONTWERP, niet gebouwd)

Doel: echte inbound salesvragen veilig detecteren, zonder dat elke e-mail een lead wordt en zonder automatische commerciële reacties.

## Principes

1. Geen automatische commerciële reactie — ooit. Mensen keuren elke stap goed.
2. Registreer pas ná gecontroleerde classificatie (menselijke review-poort).
3. Nieuwsbrieven, auto-replies, spam en uitgaande eigen mails vallen buiten de pipeline.
4. Dedupliceer op afzender, domein en organisatie vóór er iets wordt aangemaakt.
5. Leg bronbericht-ID en ontvangsttijd vast voor traceerbaarheid.

## Ontwerp (5 lagen)

### Laag 1 — Verzamelen (read-only)
- MS Graph `info@vareya.ai` inbox (app-only, reeds operationeel: `Vareya-Lead-Outlook`-patroon, app `a903b009…`).
- Poll-interval: 15 min (cron op VPS1), `last_processed_at`-cursor, alleen nieuwe items.
- Per bericht vastleggen: `internetMessageId`, `from`, `reply_to`, `to`, `subject`, `body` (gesaneerd), `received_at`, reply-relatie (conversationId) — in een **ingest-inbox-tabel**, niet direct in leads.

### Laag 2 — Classificeren (deterministisch, geen LLM vereist)
- **Uitsluiten:** eigen uitgaande domein; auto-reply-detectie (Auto-Submitted: auto-replied, Precedence: bulk/junk, out-of-office-patronen); nieuwsbrief-detectie (List-Unsubscribe-header); spam/bounce (X-Failed-Recipients, MAILER-DAEMON); gekopieerde alias (cc op eigen domein).
- **Scoren:** bevat (a) fulfilment-/warehouse-/shipping-vraag-signaal, (b) volume- of SKU-signaal, (c) land/EU-signaal, (d) bedrijfsdomein niet-free-mailprovider. ≥2 van 4 + domein ≠ free-mail → `REVIEW_CANDIDATE`. Anders `NOISE` (bewaard, niet verwijderd).
- Uitkomst per bericht: `REVIEW_CANDIDATE` | `AUTO_REPLY` | `NEWSLETTER` | `SPAM` | `PERSONAL_MISC` | `EXISTING_THREAD`.

### Laag 3 — Dedupliceren en koppelen
- Normaliseer domein (lowercase, www.-strip). Zoek bestaande `lead_organizations.domain`, `lead_contacts.work_email` (lowercase) en eerdere ingest-items.
- Bestaande org/lead + nieuw bericht → **activiteit/toevoeging aan bestaande lead**, géén nieuw record (vgl. Jolie: inbound op bestaande lead = gespreksdraad).
- Reply op bestaand gesprek (conversationId/herkende thread) → aan bestaande lead hangen.

### Laag 4 — Review-item (menselijke poort)
- `REVIEW_CANDIDATE` → verschijnt in het dashboard als **inbound-leadvoorstel** (nieuw paneel of reuse van bestaande inbound-modal) met: bronbericht-ID, ontvangen tijd, afzender, domein, gesaneerde body-preview, dedupe-uitkomst, voorgestelde status `qualified`.
- Mens (Jos/Raymond) klikt goedkeuren → **dan pas** aanmaken via de canonieke app-service/ingestflow (org + lead + contact + primary-link), met bronbericht-ID in `source`/`submitted_data` en `origin=inbound_email` (zelfde velden als de huidige Jolie-registratie).
- Afwijzen → markeren `REJECTED` (geen lead aangemaakt; domein op de ingest-suppressielijst voor N dagen, handmatig verwijderbaar).

### Laag 5 — Bewaking
- Dagelijkse status: aantal nieuwe items, classificatieverdeling, openstaande review-items, ingest-vertraging. Alert bij openstaande `REVIEW_CANDIDATE` ouder dan 48u.

## Wat dit specifiek voorkomt

- De Jolie-verwarring (mail binnen, record wel/niet zichtbaar) wordt traceerbaar: elk ingest krijgt een onveranderlijk bronbericht-ID, en de review-poort toont exact wat er uit een mail is gemaakt.
- Automatische lead-creatie van nieuwsbrieven/auto-replies: onmogelijk (laag 2).
- Dubbele records: onmogelijk (laag 3 vóór laag 4).
- Ongeautoriseerde commerciële mails: onmogelijk (geen send-component in dit ontwerp).

## Status

**Alleen ontwerp.** Geen bouw, geen writes, geen cron aangemaakt in deze opdracht.
