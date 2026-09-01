# PRODUCTION-API-EVIDENCE — live zoektests, 2026-09-01

Methode: exact het endpoint van de React-SPA (`GET https://leads.jmconcepts.cloud/api/leads`, zelfde query-params), geauthenticeerd met de canonieke service-API-key (X-API-Key). Key-verificatie: lengte 60, prefix `aos_75431525c007`, **sha256-hash MATCH met `api_keys.key_hash`** van de actieve service-identiteit — waarde zelf nooit geprint/opgeslagen.

Resultaten na deploy van commit `cafc521` (alle HTTP 200):

| Test | URL | total | items | Lead-ID |
|---|---|---|---|---|
| no-filter (pagina 1) | `?limit=50&sort=-updated_at` | 319 | 50 | Jolie op rij 2: `6fca56c9-308a-42f0-88ad-3d67c3be15f1` |
| zoek op naam | `?search=Jolie Beauty` | 1 | 1 | `6fca56c9…` ✓ |
| zoek op domein | `?search=joliebeauty.co.uk` | 1 | 1 | `6fca56c9…` ✓ |
| zoek op e-mail | `?search=saul@joliebeauty.co.uk` | 1 | 1 | `6fca56c9…` ✓ |
| hoofdlettervariant | `?search=SAUL@JOLIEBEAUTY.CO.UK` | 1 | 1 | `6fca56c9…` ✓ |
| spaties getrimd | `?search=%20%20Jolie Beauty%20%20` | 1 | 1 | `6fca56c9…` ✓ |
| partieel | `?search=jolie` | 1 | 1 | `6fca56c9…` ✓ |
| wildcard-literal | `?search=jolie%25` | 0 | 0 | — (% geëscaped, geen wildcard) |
| statusfilter | `?status=qualified` | 1 | 1 | `6fca56c9…` ✓ |

## Bewezen

- DoD 4/5/6/7: naam-, domein- en e-mailzoeken leveren alledrie hetzelfde lead-ID `6fca56c9-308a-42f0-88ad-3d67c3be15f1`.
- DoD 8: geen dubbele rijen, `total_count` correct (1 bij gerichte zoek, 319 ongefilterd).
- Authenticatie blijft afgedwongen: ongeauthenticeerde request → 401/403 (regressietest 15, en service-key-hash controle).
- Bestaande status-/bronfilters, sortering en paginering onaangetast (regressietests 9–13).

## Vóór de fix (bewezen defect)

Endpointcode filterde alleen op `LeadOrganization.name`; zoeken op domein of e-mail retourneerde 0 resultaten. De frontend-placeholder ("Zoek op organisatienaam") bevestigde de beperkte scope.
