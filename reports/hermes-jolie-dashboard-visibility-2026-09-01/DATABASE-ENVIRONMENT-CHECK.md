# DATABASE-ENVIRONMENT-CHECK — welk systeem gebruikt welke database?

## Drie kandidaten vergeleken (geen secrets getoond)

### 1. Importsysteem (waar de productie-write van 01-09 naartoe ging)
- Container `aos-postgres`, database `aos`, user `aos` (PostgreSQL).
- Verbinding via `docker exec aos-postgres psql -U aos -d aos`.
- Bevat: Jolie-org/lead/contact/taak (zie DATABASE-EVIDENCE.md), 332 leads.

### 2. Productie-API (wat het dashboard werkelijk aanroept)
- Container `aos-api` (FastAPI), env: `POSTGRES_USER=aos`, `POSTGRES_DB=aos` (host = `aos-postgres` op het docker-netwerk).
- **Conclusie: de productie-API gebruikt DEZELFDE PostgreSQL-database als het importsysteem.** De insert en het dashboard lezen/write dezelfde `aos`-database.
- Bewijs: live API-response no-filter `total: 319` = DB `count(*) WHERE is_archived=false` = 332 − 13.

### 3. De losse staging-SQLite (verwarringsobject)
- Container `lead-dashboard-api-staging` (Node, port 4000): `LEADS_DB_PATH=/data/leads.db`, SQLite.
- Tabellen: users, leads, activities, notes, tasks, templates, saved_views — **geen** organizations/contacts-tabellen; `leads: 0`.
- **Niet** wat `leads.jmconcepts.cloud` serveert: Traefik routeert die hostname naar `aos-leads-web` (SPA) → `aos-api` → PostgreSQL. Live curl van `https://leads.jmconcepts.cloud/` toont de React-SPA (`<title>VareYa Leads</title>`, assets `index-DD43LKUf.js` → na fix `index-DkDZbj6w.js`).
- **Classificatie: NON_PRODUCTION_UNUSED_ARTIFACT.** Niet verwijderd (afzonderlijke toestemming nodig).

### Migratie/schema-versie
- Niet gewijzigd; deze opdracht voerde geen migraties uit.

### Aantallen per verbinding (vergelijk)

| Verbinding | leads |
|---|---|
| PostgreSQL `aos` (importsysteem = productie) | 332 (319 actief) |
| Productie-API live response (no-filter) | 319 |
| SQLite staging `leads.db` | 0 |

## Expliciete bepaling

**De insert en het dashboard gebruiken dezelfde database (PostgreSQL `aos`).** De SQLite-database is een niet-productie-artefact en verklaart niets over productiezichtbaarheid.
