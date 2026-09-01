# PROHIBITED-CLAIMS-CI-GUARD — geïmplementeerd

## Wat er staat (branch hermes/vareya-raymond-decisions-2026-09-01)

1. **`scripts/prohibited-claims-scan.sh`** — scan over productiecontent (src/, public/, content/*.md, marketing/), exit 1 bij hits. Uitsluitingen: build/deps/snapshots (node_modules, .next, playwright-report, test-results). Zinnen (case-insensitive):
   - Coöperatie U.A.
   - being built as a cooperative
   - is a cooperative
   - strategic partner
   - over 1000 brands
   - 1,000+ brands
   - under 3 minutes
2. **`.claims-allowlist`** — expliciete allowlist voor historische auditcitaten en registerdefinities: `content/claims-register.md`, `docs/*`, `reports/*`, `content/content/review/*`, `research/*`. Productiecontent is NIET allowlistbaar.
3. **`.github/workflows/claims-guard.yml`** — GitHub Actions: draait de scan op elke pull request naar `main` (blokkeert merge bij hits).

## Testresultaten

| Test | Resultaat |
|---|---|
| Scan op schone branch | PASS (0 hits) |
| Negatieve test (zin in src/app/ geïnjecteerd) | PASS — guard blokkeert met bestand:regel | 
| Lokaal draaibaar | `bash scripts/prohibited-claims-scan.sh` ✓ |
| CI-draaibaar | workflow `Prohibited Claims Guard` op PR → main (eerste run bij volgende PR) |

## Beperkingen (eerlijk)

- CI-workflow is **toegevoegd maar nog nooit in GitHub Actions gelopen** (geen PR sindsdien) — de lokale runs zijn het bewijs; eerste echte PR-valideert de workflow-YAML.
- De scan ziet alleen de hierboven genoemde zinnen; nieuwe verboden claims moeten aan de lijst worden toegevoegd.
- Allowlist is bewust ruim voor docs/reports — wie daar nieuwe verboden claims wil plaatsen moet het register raadplegen.
