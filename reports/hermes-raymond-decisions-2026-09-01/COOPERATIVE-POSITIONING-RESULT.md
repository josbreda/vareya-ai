# COOPERATIVE-POSITIONING-RESULT — besluit 1 (B)

**Doel:** nergens een bestaande coöperatie presenteren; toegestane strekking = "Vareya is exploring a possible future cooperative model."

## Aangepaste bestanden (branch hermes/vareya-raymond-decisions-2026-09-01)

| Bestand | Was | Is |
|---|---|---|
| `src/app/about/page.tsx` | "Vareya is developing a cooperative model in which the brands it serves can become members … will be set out in its formal documents." | "Vareya is exploring a possible future cooperative model. If it moves forward, the brands Vareya serves could become members … would be set out in its formal documents." |
| `src/app/why-vareya-ai/page.tsx` (hero) | "Vareya is developing a cooperative model in which the brands using the operation can help own it …" | "Vareya is exploring a possible future cooperative model in which the brands using the operation could help own it …" |
| `src/app/why-vareya-ai/page.tsx` (metadata + OG) | "developing democratic member ownership …" / "A developing member-owned model …" | "a possible future cooperative model with democratic member ownership …" / "A possible future member-owned model …" |
| `src/app/why-vareya-ai/page.tsx` (status-blok) | "The cooperative structure and membership terms are being developed." | "… are being explored." |
| `src/app/why-vareya-ai/page.tsx` (principle 02) | "The cooperative can then organise shared warehouse …" | "The cooperative would then organise …" |
| `src/app/why-vareya-ai/page.tsx` (today-sectie) | "The cooperative layer is being designed alongside it …" | "A possible future cooperative model is being explored alongside it and would need its own formal decisions." |
| `src/app/why-vareya-ai/page.tsx` (2× CTA-kopie) | "the developing member model" | "the member model — if it moves forward —" / "the possible future member model" |
| `src/app/knowledge/page.tsx` | "Explore why Vareya is developing a cooperative model" / "Raymond's developing vision …" | "Explore Vareya's possible future cooperative model" / "the exploration of a possible future cooperative model — member ownership, democratic governance and allocation of any eligible surplus." |
| `src/content/knowledge.ts` (artikel-beschrijving) | "the questions a developing cooperative must answer." | "the questions a possible future cooperative must answer." |
| `src/content/knowledge.ts` (artikeltekst) | "In Raymond's vision for Vareya, participating brands would …" | "In Vareya's vision, participating brands would …" |
| `src/content/knowledge.ts` (artikeltekst) | "Vareya is developing the cooperative layer alongside its existing fulfilment operation …" | "Vareya is exploring a possible future cooperative model alongside its existing fulfilment operation in Breda. If it moves forward, the first participating brands would help test …" |
| `src/content/pages.ts` (why-vareya-ai meta) | "a developing cooperative model for member ownership." | "a possible future cooperative model for member ownership." |

## Verificatie (repo)

- Grep na patching over `src/`, `public/`, `content/*.md`: **0 hits** op `developing a cooperative`, `developing the cooperative`, `is a cooperative`, `Coöperatie U.A.`, `members of the cooperative`.
- `src/lib/seo/index.ts` (Organization-schema): geen coöperatie-verwijzing — ongewijzigd, correct ("Vareya BV").
- NL-pagina's (`src/app/nl/`): geen coöperatie-tekst — schoon.
- `llms.txt`: geen coöperatie-claim — schoon.

## Bewust NIET gewijzigd

- Interne strategiedocumenten (`docs/`, `reports/`): historische strategie-informatie blijft intern opgeslagen; niet publiek feitelijker gemaakt dan het besluit toestaat. Bestand: `content/content/review/purpose.md` was al ongepubliceerd en conform.
- Live-verificatie na deploy: zie LIVE-VERIFICATION.md.
