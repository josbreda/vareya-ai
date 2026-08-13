# Vareya.ai — Project Context & Architecture Truth
**Laatst bijgewerkt:** 10 augustus 2026
**Doel:** Voorkom dat agents zoeken op de verkeerde machine of oude architectuur aannemen.

---

## WAAR HET PROJECT STAAT (NIET DE VPS!)

Het actieve Vareya.ai project staat op de **Windows machine van Jos**:

```
C:\Users\josme\HOS\projects\vareya-ai\
```

**NIET** op de VPS (`/opt/aos/...`). De VPS bevat andere projecten (aos, oude pptx-builder). Elke audit die alleen /opt/aos doorzoekt vindt niets en is dus ongeldig.

## HUIDIGE TECH STACK (BEWEZEN, LIVE)

| Laag | Technologie |
|---|---|
| Frontend | Next.js 16.3.0 (App Router, Turbopack) + React 19 + TypeScript + Tailwind |
| Hosting | Vercel (project `vareya-website`, team `vareya`) |
| Domein | vareya.ai (GoDaddy DNS → Vercel, A-record @→216.198.79.1) |
| Database | Supabase (project uumtytlxfzimzixhewwt, tabel `leads`, RLS actief) |
| CRM | HubSpot (portal 149057596, private app "Vareya.ai Sync") |
| Email | Resend (domein vareya.ai verified) |
| Bot protectie | Cloudflare Turnstile |
| Analytics | GTM-W2N6D3CG → GA4 |
| WMS (feit op site) | ShipHero (geïntegreerd met Shopify) |

## OUDE ARCHITECTUUR = VERLEDEN

Documenten die **WordPress / statische HTML / "geen frameworks"** beschrijven (ARCHITECTURE.md, VAREYA_CONTEXT.md en vergelijkbare) beschrijven het **oude** tijdperk (Hostinger, go.vareya.com, www.vareya.com). Die stack is **vervangen** door bovenstaande. Oude bestanden liggen alleen als archief in:

```
C:\Users\josme\HOS\projects\vareya\migration-package\
```

## GIT

- Repo: `github.com/josbreda/vareya-ai.git`
- Branch: `main` (auto-deploy naar Vercel bij push)
- Vercel Git-integratie is gekoppeld aan **josbreda/vareya-ai** (eerder foutief aan vareya-website gekoppeld geweest — check `vercel.com/vareya/vareya-website/settings/git` bij deployproblemen)

## BELANGRIJKSTE ROUTES (live)

| Route | Functie |
|---|---|
| / | Homepage (NetworkHero particle animatie) |
| /fulfilment-scan/ | Primaire CTA: Free Rate Scan (Turnstile beveiligd) |
| /request-fulfilment-quote/ | Quote formulier |
| /api/leads | Lead endpoint: Supabase-first → HubSpot downstream |
| /knowledge/ | Kennisbank (3 artikelen) |
| /why-vareya-ai/ | Visiepagina |
| /about/ | Bedrijfspagina |

## LEAD ARCHITECTUUR (NIET VERBREKEN)

1. Validatie + Turnstile + honeypot
2. Supabase insert (permanent, source of truth)
3. Resend notificaties (non-blocking)
4. HubSpot sync (downstream, non-blocking, retry_pending bij storing)
5. Warm lead scoring: fit_score (0-50) + intent_score (0-50) = warmth (0-100); HOT ≥70, WARM ≥40

**HubSpot failure mag NOOIT leadverlies in Supabase veroorzaken.**

## CLAIMS REGISTER v1.2 = ENIGE BRON VOOR PUBLIEKE CLAIMS

`content/claims-register.md` versie 1.2 (9 aug 2026, Raymond goedgekeurd). Cooperative/membership/pooled-volume claims zijn **review-only** — niet publiceren zonder goedkeuring.

## CREDENTIALS

Secrets staan in:
- `C:\Users\josme\HOS\projects\vareya-ai\.env.local` (lokaal)
- Vercel Environment Variables (productie)
- `C:\Users\josme\HOS\.env` (GitHub PAT)

Nooit secrets in commits, samenvattingen of andere bestanden.
