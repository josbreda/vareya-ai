# Blockers

Exact blockers only — no workarounds attempted, per instruction. Each entry states precisely what is missing and who can resolve it.

---

### B-01 — No hosting/FTP access for jmconcepts.cloud
**Blocks:** deploying the prepared fix for the "1.000+ merken" claim (see `CHANGE-PROPOSALS.md`).
**What's missing:** the accessible secrets vault (`/opt/aos/secrets/`) contains hosting credentials for `www.vareya.com` (WordPress/Itcoms) but **nothing for jmconcepts.cloud specifically**. The site is static HTML on Hostinger/LiteSpeed; no deploy script, FTP credential, or hosting-panel access was found anywhere in the accessible environment.
**Who can resolve:** whoever holds the Hostinger account for jmconcepts.cloud (likely Jos, as JMConcepts' own site).
**What's ready to go once access exists:** a corrected `index.html` (single-line change, verified minimal) is prepared at `change-proposals/jmconcepts-index-AFTER.html` in this report bundle.

### B-02 — No hosting/FTP access for www.vareya.com execution of the already-approved consolidation
**Blocks:** executing Raymond's 21 August 2026 approval to redirect vareya.com/vareya.nl to vareya.ai. This is the single highest-priority blocker in this entire audit — it has been open for 11+ days with known-unsupported claims live on production.
**What's missing:** `docs/VAREYA-DOMAIN-ENTITY-AUDIT.md` and `docs/MANUAL-ACTIONS-RAYMOND-JOS.md` both state execution "vereist Hostinger-FTP/GoDaddy-toegang" (requires Hostinger-FTP/GoDaddy access) as a manual action. The `vareya-hosting.md` secrets file has placeholder (empty) fields for exactly this: "www.vareya.com hosting (nog te ontvangen van Itcoms)" — provider, panel URL, username, password, FTP details are all blank.
**Who can resolve:** Itcoms (per the secrets file, this access was expected *from* Itcoms and had not yet arrived as of the file's last update) and/or Raymond/Jos directly with GoDaddy DNS access (WordPress wp-admin credentials for www.vareya.com *do* exist in the secrets vault, but wp-admin access does not by itself let someone set up domain-level 301 redirects or DNS changes — that needs the hosting panel/FTP or GoDaddy DNS access specifically).
**What's ready to go once access exists:** the full destination mapping is already documented in `docs/VAREYA-DOMAIN-ENTITY-AUDIT.md`.

### B-03 — go.vareya.com's actual routing configuration cannot be inspected from outside
**Blocks:** confirming whether the previously-reported 335-route redirect map exists in any form, or whether the single blanket catch-all this audit observed (35/35 test paths, identical behavior) is the complete current implementation.
**What's missing:** access to the Hostinger panel or server-side configuration (`.htaccess` or panel-level rule set) for go.vareya.com. External HTTP testing can only observe behavior, not configuration intent.
**Who can resolve:** whoever manages that Hostinger account (same host as jmconcepts.cloud).

### B-04 — WebSearch quota exhausted across multiple research agents
**Blocks:** live Google/Bing/DuckDuckGo SERP and AI-Overview observation for Vareya-related queries (Phase 3D, Part B); a portion of the EU customs regulatory research (IOSS 2026 reform check); a portion of the fulfilment-competitor and platform/carrier research (both agents had to work around a fully-exhausted quota using only direct WebFetch, which is unreliable for search-results pages specifically — several fetches returned unrelated/bot-challenge content mis-summarized as real results, and were correctly excluded rather than reported as fact).
**What's missing:** more WebSearch budget in a future session, or a licensed SERP-API tool as an alternative.
**Who can resolve:** whoever manages this environment's tool/API budget.

### B-05 — Several primary legal/regulatory sources are JavaScript-rendered and could not be read
**Blocks:** independent verification of the exact EU customs-reform regulation numbers, the political-agreement date, and the Customs Data Hub phase-in dates (2028/2031/2034) against EUR-Lex, Council of the EU, or European Parliament primary text directly.
**What's missing:** a tool capable of rendering JavaScript-heavy government sites, or a human doing the EUR-Lex search-interface lookup directly.
**Who can resolve:** a human with normal browser access, or a future session with a JS-capable fetch tool.

### B-06 — Several carrier/platform sites blocked or timed out
**Blocks:** verifying current official PostNL business/partnership terminology in full (only partial secondary evidence obtained), and current FedEx/Royal Mail/DHL Express product terminology (all returned 403/timeout on every attempt).
**What's missing:** access from an IP/environment not subject to the bot/geo-blocking these sites applied in this session.
**Who can resolve:** a human checking these sites directly, or a future session from a different network path.

### B-07 — Raw AI-visibility research artifacts were never committed to version control
**Blocks:** reproducing or auditing the original "667+900=1,567 answers" AI-visibility measurement's exact methodology, per-provider breakdown, or literal query list.
**What's missing:** the `research/` directory and its three named report files, referenced by `docs/RAYMOND-AI-DECISIONS.md` but absent from every branch and the full git history of the `vareya-ai` repo.
**Who can resolve:** nobody — this data is very likely permanently lost unless it exists in a local machine, chat log, or document outside any repository this audit had access to. Recommend asking Jos directly whether he has this material saved anywhere else before concluding it's unrecoverable.

### B-08 — Goodie (AI-visibility SaaS) has no connected account
**Blocks:** running any real, credentialed AI-visibility measurement using the one frozen, ready-to-use query set that does exist (`docs/aeo/goodie-prompts.csv`, 36 prompts).
**What's missing:** a Goodie account/API key, per `docs/growth-sprint-01/GOODIE-BASELINE.md`'s own status note.
**Who can resolve:** Jos (account owner).

### B-10 — Several competitor/carrier official pages were bot-blocked or unfetchable
**Blocks:** confirming Huboo's own pricing/integrations pages directly (403/Cloudflare block; only third-party directory data available), DHL Supply Chain's current EU warehouse count and its reported ~3,000 orders/month volume floor (dhl.com timed out repeatedly; the volume figure comes from a search-snippet, not a directly rendered page), and Amazon Multi-Channel Fulfillment's dedicated official documentation page (candidates 404'd; Seller Central itself is login-gated).
**What's missing:** a fetch path not subject to these sites' bot-protection, or direct human verification.
**Who can resolve:** a human checking these three specific pages directly, or a future session from a different network path / with a JS-capable fetch tool.

### B-09 — Decision-maker research was never imported into the production lead database
**Blocks:** the lead engine actually benefiting from the contact-enrichment research already done (26 named decision-makers identified in the 27 August pass, but only 2 `lead_contacts` rows exist in the database today).
**What's missing:** not a credential/access blocker — this is a data-integration task that was simply never done as a follow-up step.
**Who can resolve:** an engineering pass to import `HOS/projects/vareya-ai-lead-engine/data/*.csv` contact data into the `lead_contacts` table.
