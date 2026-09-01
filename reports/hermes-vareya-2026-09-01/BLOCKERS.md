# BLOCKERS — 2026-09-01 (exact, met eigenaar en volgende stap)

| ID | Blokkade | Impact | Eigenaar | Volgende stap |
|---|---|---|---|---|
| B-01 | **vareya.com/vareya.nl hostingtoegang (Itcoms)** — redirect-consolidatie + verwijdering verboden claims onmogelijk | HOOGSTE: "over 1000 brands", testimonials, klantlogo's, superlatieven, garantieclaims 11+ dagen live na Raymond-goedkeuring | Raymond/Jos + Itcoms | Hosting/FTP/GoDaddy-toegang aanvragen bij Itcoms; dan map uit VAREYA-DOMAIN-ENTITY-AUDIT uitvoeren |
| B-02 | FulfilmentShortlist-profiel ongecorrigeerd ("Samsung, Nestlé en MAC", "99% nauwkeurigheid", 8 vervoerders, same-day) | Externe directory toont register-strijdige feiten | Redactie (dennis@wereldsma.nl) | Follow-up-mail (draft klaar); follow-up-venster 21-08 + 7 dagen = verlopen |
| B-03 | OpenAI-API credits op (429 insufficient) | Helft van V3-benchmark NOT TESTED; ook voor andere runs | Jos | Credits opwaarderen of accepteer DeepSeek-only |
| B-04 | Goodie-account ontbreekt | 36-prompt frozen set niet meetbaar via Goodie | Jos | Account/API-key koppelen |
| B-05 | lead_contacts-enrichment nooit geïmporteerd (26 DM's, 0 werk-e-mails in DB) | Contactability-gate blokkeert vrijwel alle outreach | Engineering/Jos | Import-script uit enrichment-CSV's (voorbereid) |
| B-06 | Resend-key niet in deze sessie (andere agent-sessie) | Geen correctiemails te verzenden (FulfilmentShortlist, ShipHero) | Mens/andere sessie | Via goedgekeurde mailroute verzenden |
| B-07 | 3PL Hub WAF 403 | Directory-correctie geblokkeerd | Mens | Handmatige correctie via browser |
| B-08 | LinkedIn legacy-pagina verweesd (geen page-admin) | LinkedIn-entity blijft suboptimaal | Raymond/Jos | LinkedIn-support werk-email-verificatie |
| B-09 | Thuiswinkel betaald programma (€3.950/jr) | NL-autoriteitscorpus blijft achter op Active Ants (Thuiswinkel-lid) | Raymond | Commercieel besluit |
| B-10 | WIP in lokale main-worktree (South-Korea-sprint, uncommitted) | Lokale main loopt achter op origin/main; niet door mij gereset (approval geweigerd) | Jos/andere sessie | `git pull` (ff) zodra WIP gecommit is |
| B-11 | go.vareya.com specifieke redirect-targets deels catch-all; NO_REDIRECT-routes redirecten toch | SEO-semantiek suboptimaal (geen schade, wel fidelity-gap) | Jos (Hostinger) | htaccess uitbreiden met specifieke regels (map aanwezig) |
| B-12 | CSP-header ontbreekt op Vercel-productie (staging had hem) | Hardening achterstand | Engineering | Volgende release meenemen |
