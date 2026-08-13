# Vareya — SEO & GEO Meetplan
**Datum:** 10 augustus 2026
**Vraag:** Hoe meet Vareya dat ze daadwerkelijk gevonden worden via SEO en AI-search?

---

## 1. SEO (Google organisch) — meetpunten

| Meetpunt | Tool | Wat het bewijst |
|---|---|---|
| Vertoningen + clicks per query | Google Search Console | Hoe vaak Vareya getoond/geklikt wordt voor "fulfilmentcentrum Brabant" etc. |
| Gemiddelde positie per query | Search Console | Of de NL-pagina stijgt richting top 5 |
| Organische sessies + landingspagina's | GA4 | Welke pagina's organisch verkeer ontvangen |
| Lead-attributie (landing_page + UTM) | Supabase + HubSpot | Van welke pagina een scan of offerte komt |
| Indexatie-status | Search Console URL-inspectie | Of de NL-pagina's gecrawld en geïndexeerd zijn |

**Nu nog open:** Search Console property verifiëren (stap 2 in `docs/MANUAL-ACTIONS-RAYMOND-JOS.md`).

## 2. GEO (AI-search) — meetpunten

| Meetpunt | Tool | Wat het bewijst |
|---|---|---|
| AI Overviews vertoningen | Search Console → AI Overviews rapport | Of Vareya geciteerd wordt in Google's AI-antwoorden |
| Referral verkeer van AI-platforms | GA4 → Acquisitie → Referrer | Sessies van chatgpt.com, perplexity.ai, goodie.com |
| Goodie metrics | Goodie dashboard (na koppelen) | Citations, prompts waar Vareya verschijnt |
| Merk-mentions in AI-antwoorden | Handmatige prompt-checks (wekelijks) | Vareya genoemd als antwoord op kernvragen |

**Uit te voeren checks (wekelijks, 10 minuten):**
1. ChatGPT: "Welke fulfilmentcentra zijn er in Brabant?" → staat Vareya erbij?
2. Perplexity: "beste fulfilment voor webshops Noord-Brabant" → idem
3. Google.nl: primaire queries met locatie Breda → top 10 noteren

## 3. Lead-niveau bewijs (het belangrijkste)

Elke scan/offerte slaat nu al op in Supabase:
- `landing_page` — van welke pagina de lead kwam
- `utm_source/medium/campaign/content` — via welk kanaal
- `referrer` — verwijzende site (bijv. chatgpt.com bij AI-verkeer)

Dit stroomt door naar HubSpot. **Vindbaarheid is pas waarde als het leads oplevert** — deze velden bewijzen per lead de bron.

## 4. Google Maps

| Meetpunt | Tool |
|---|---|
| Profielweergaven + zoekopdrachten | Google Business Profile Insights |
| Routebeschrijving-kliks + telefoontjes | GBP Insights |
| Positie in local pack per query | Handmatige checks met Breda-coördinaten |

## 5. Dashboard (eerste versie)

| Metric | Bron | Target 30 dagen |
|---|---|---|
| NL-pagina vertoningen | Search Console | 1.000+ |
| NL-pagina clicks | Search Console | 50+ |
| Scan starts (alle bronnen) | GA4 rate_scan_start | 30+ |
| Scan completions | GA4 rate_scan_complete | 10+ |
| Leads met NL/U-turn bron | Supabase | 5+ |
| AI-referral sessies | GA4 | 5+ |
| GBP weergaven | GBP Insights | 100+ |

**Regel:** geen ranking-claim zonder Search Console-bewijs; geen succes-claim zonder lead-uitkomst.
