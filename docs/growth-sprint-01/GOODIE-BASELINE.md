# Growth Sprint 01 — Goodie Baseline
**Date:** 18 August 2026 (Day 1)
**Owner:** Agent 2 (Goodie & AI Visibility)
**Status:** NOT CONNECTED — geen Goodie-credential, API-key, MCP-server of CLI in deze omgeving; workspace-audit kon alleen extern worden opgesteld.

## Workspace audit

| Vraag | Antwoord |
|---|---|
| Workspace bestaat? | ONBEKEND — geen toegang tot het Goodie-dashboard |
| Workspace-naam | ONBEKEND |
| Subscription | ONBEKEND |
| Users | ONBEKEND |
| Integraties beschikbaar | GA4, Search Console, HubSpot, Vercel (volgens productdocumentatie — te bevestigen in dashboard) |
| Integraties verbonden | ONBEKEND — waarschijnlijk GEEN (geen config-sporen lokaal) |
| Prompt-limit | ONBEKEND |
| Model-dekking | ONBEKEND |
| Toegangsmethode | Web-dashboard (geen MCP beschikbaar — bevestigd via tool-catalogus) |

## Connectieplan (least-privilege, uit te voeren met Jos)

1. GA4 → read-only property-koppeling.
2. Search Console → read-only property-koppeling.
3. HubSpot → beperkte scope (contact-events read, GEEN notes/lead-inhoud).
4. Vercel → deployment/analytics read-only indien beschikbaar.

## Data-allowlist naar Goodie (NIET overschrijden)

✅ page URL · page category · campaign · anonieme conversie-event · geaggregeerde lead-uitkomst · qualified/not-qualified aggregaat · opportunity-aggregaat
❌ naam · e-mail · telefoon · bedrijfsnaam · comments · destination distribution · parcel-maten · SKU-count · submission ID · rauwe HubSpot-notes · scan-antwoorden

## Prompt-import (20 stuks)

- Bron: `marketing/content-sprint-01-prompts.csv` (cs01-p-001 … cs01-p-020) — kopie: `marketing/growth-sprint-01-goodie-prompts.csv`.
- **Prompt-set ongewijzigd importeren vóór baseline** (missie-eis). Geen auto-publishing of auto-optimization activeren.
- Import-status: PENDING (dashboard-toegang vereist).

## Citation baseline (meting per prompt)

Per prompt meten zodra actief: Vareya mentioned/cited · cited URL · mention position · concurrerende merken · sentiment · feitelijke accuraatheid · ontbrekende info · model · markt · datum.
Registratie-skelet: `marketing/growth-sprint-01-ai-citations.csv`.

Afgeleide KPI's: Citation Rate · Prompt Coverage · Share of AI Voice · brand-description errors · geciteerde Vareya-pagina's · geciteerde concurrent-pagina's.

## Blokker

Goodie-login/API-credential van Jos. Zonder toegang is elke "citation baseline" een verzinsel — wordt niet gefabriceerd.
