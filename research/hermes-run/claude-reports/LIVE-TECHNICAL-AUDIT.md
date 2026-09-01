# Live Technical Audit — Vareya Domain Portfolio

**Date executed:** 2026-09-01. **Method:** read-only `dig`, `curl`, `openssl s_client`, WebFetch. No forms submitted, no destructive actions. Raw evidence files retained in agent scratchpad (sitemaps, homepages, headers) — available on request.

---

## 1. vareya.ai — main commercial site (Next.js/Vercel)

- **DNS:** `216.198.79.1` (Vercel edge). **HTTP chain:** clean single-hop www→apex (308) and http→https (308). **TLS:** valid, `notBefore=2026-08-07`, `notAfter=2026-11-05`, Let's Encrypt.
- **robots.txt:** `Allow: /`, disallows `/api/` and `/thank-you/`. No explicit AI-crawler directives (GPTBot/ClaudeBot/Google-Extended) — the wildcard allow implicitly permits them.
- **sitemap.xml:** 37 URLs, `lastmod` values genuinely current (2026-08-10 through 2026-08-30) — actively maintained, not stale.
- **llms.txt:** exists, 200. Contains legal name, address, phone, email, KVK/VAT, an approved-facts summary, and **"42 approved destinations"** — see CLAIMS-RECONCILIATION.csv, this number conflicts with the actual current approved list (41 countries, counted directly from `content/claims-register.md` v1.5).
- **Canonical:** self-canonical on every page checked (homepage, /eu-fulfilment/, /shopify-fulfilment-europe/, /knowledge/). No noindex found anywhere, no `X-Robots-Tag` header.
- **Structured data:** `Organization`, `PostalAddress`, `WebSite`, `FAQPage` + 5×`Question`/`Answer` on the homepage.
- **Gap found:** no `og:image` and no `og:url` on the homepage — link previews (Slack/LinkedIn/WhatsApp) will render without an image.
- **Links/forms/errors:** 13 internal links spot-checked, all 200. No forms in raw homepage HTML (CTAs link out to dedicated form pages, not fetched). No demo/placeholder text found. 404 handling correct (custom page, 308→404).

## 2. vareya.com — legacy WordPress site (same KVK entity)

- **DNS:** `84.247.9.137`. **HTTP chain:** apex→www→https, clean, 1 hop. **TLS:** valid but **expires 2026-09-23** — sooner than every other property; flag for renewal tracking.
- **robots.txt/sitemap:** Rank Math-generated, 4 sub-sitemaps. **Sitemap defect confirmed:** `page-sitemap.xml` lists 129 `<url>` entries but only **57 are unique** — most pages are listed 2–3 times in the same file.
- **llms.txt:** does not exist (404).
- **Canonical:** self-canonical throughout — **not** cross-canonicalized to vareya.ai. The two brand sites compete as fully independent indexable properties.
- **CRITICAL — unsupported claim confirmed live:** homepage body text contains **"empowering over 1000 brands worldwide"** (confirmed via direct WebFetch, 2026-09-01). See CLAIMS-RECONCILIATION.csv row C-001.
- **CRITICAL — old/unapproved facts confirmed live:** the address "Hoevenseweg 41, 4877 LA Etten-Leur, Netherlands" appears as a second warehouse location (canonical entity data is Bagven Park 6, Breda only); phone +31(0)76 3030540 and email sales@vareya.com (canonical is +31 6 19 12 34 72 / info@vareya.ai); "staging" text found 10 times in the raw HTML; broader industry claims (fashion, food, tech) and geographic claims (UK/US/Canada/Australia expansion) that exceed the approved capability/destination list.
- **CRITICAL — infinite redirect loop:** `https://www.vareya.com/faq/` redirects to itself (301→itself, `x-redirect-by: Rank Math`), reproduced with `curl exit 47 CURLE_TOO_MANY_REDIRECTS`. The correct FAQ page (`/frequently-asked-questions/`) works fine and is in the sitemap.
- **Brand-message inconsistency:** homepage meta description reads "one of Europe's proven leader in eCommerce Fulfillment... any size eCommerce business" — a generalist positioning directly contradicting vareya.ai's boutique "500+ orders/month" positioning, and grammatically broken ("proven leader", singular/plural mismatch) live in production.
- This entire domain was already flagged as a **P0 finding on 10 August 2026** (`docs/VAREYA-DOMAIN-ENTITY-AUDIT.md`) and a consolidation plan (301 to vareya.ai) was **approved by Raymond on 21 August 2026** — but as of this audit (2026-09-01, 11 days later), **it has not been executed.** See BLOCKERS.md.

## 3. vareya.nl

- Resolves to the same IP as vareya.com (84.247.9.137) and redirects **directly cross-domain to www.vareya.com** (not to vareya.ai, and not to its own www subdomain first) — fully folded into the legacy vareya.com property. Served off the vareya.com TLS certificate (no dedicated cert). Clean single-hop redirects, http and https both correct.

## 4. go.vareya.com

- **DNS:** CNAME → jmconcepts.cloud → `46.202.172.194` (Hostinger, same box as jmconcepts.cloud — not the vareya.com Apache box, not the vareya.ai Vercel deployment). **TLS:** valid, dedicated cert.
- **Positive finding:** the domain-consolidation redirect to `vareya.ai/knowledge/` **has been executed** — this part of the 21-August plan is done. The destination page itself is healthy (200, self-canonical, no noindex).
- **CONTRADICTS known-status claim of a "335-route redirect map (327 redirects + 8 exceptions)":** 35 distinct paths were tested — plausible old-URL guesses, real current vareya.com slugs pulled live from its own sitemap, and deliberate nonsense control paths. **Every single one returned an identical single-hop 301 to `https://vareya.ai/knowledge/`**, with byte-identical response headers regardless of source path. No JSON/CSV/sitemap artifact listing individual routes was found anywhere on the domain — robots.txt and sitemap.xml requests themselves fall into the same catch-all. This is strong, reproducible evidence that **go.vareya.com currently implements a single blanket catch-all rule, not a per-URL redirect map.** Whether the 335-route map ever existed and was later replaced, was never fully deployed, or exists behind a routing condition not triggered by direct path requests (e.g. query-string/referrer rules) could not be determined via curl — this needs direct confirmation from whoever manages the Hostinger panel. See BLOCKERS.md.

## 5. leads.jmconcepts.cloud — internal lead-CRM dashboard

- **DNS:** `153.92.223.73` (distinct host from the jmconcepts.cloud/go.vareya.com box). **TLS:** valid.
- Logged-out response is a bare Vite/React SPA shell (empty `<div id="root">`, title "VareYa Leads") — expected for a client-rendered app; no attempt was made to bypass auth.
- **Finding:** `/robots.txt` and `/llms.txt` both return **200 with the identical SPA shell body** (not real robots/llms files) — the SPA's catch-all route serves the app shell for any path with status 200, not 404. This means there is **no explicit crawl-exclusion directive at the infrastructure level** for an internal CRM, though no meaningful content is server-rendered without JS+auth for a crawler to actually index.

## 6. jmconcepts.cloud — portfolio/case-study site (separate static codebase, not vareya-ai)

- **DNS:** `46.202.172.194`. Apex and www both serve identical content (200, same etag) with no redirect between them. **TLS:** valid.
- **robots.txt/sitemap:** simple, 3 URLs in sitemap (homepage, samenwerking.html, lid-worden.html), no lastmod. **llms.txt:** does not exist.
- **Gap:** no `<link rel="canonical">` at all, on any page checked.
- **CRITICAL — the primary unsupported claim under investigation, confirmed live and exact:** homepage body text (line-level, confirmed via direct fetch, last-modified header `Sun, 05 Jul 2026 10:06:13 GMT`) reads: *"Vareya, een e-fulfilment specialist met 1.000+ merken, liep tegen een grens aan: honderden kleine webshops vielen buiten de boot door hun minimum van 500 orders per maand."* A corrected version (removing the unsupported figure, everything else unchanged) has been prepared as a reviewable patch — see CHANGE-PROPOSALS.md.
- Minor: og:description text differs slightly in wording from the meta description tag.

## Cross-cutting findings

1. **The "1,000+ brands"/"1.000+ merken" claim exists on at least three independent properties**: jmconcepts.cloud (homepage, live), www.vareya.com (homepage, live, worded "empowering over 1000 brands worldwide"), and an internal JMConcepts concept document (`concept-samen-verzonden.md`, June 2026). No source anywhere — internal or external — substantiates this figure; it is explicitly listed as a **forbidden claim** in Vareya's own `content/claims-register.md` and `docs/ENTITY-SUBMISSION-PACK.md`.
2. **vareya.ai and vareya.com are not consolidated** — both fully live, independently indexable, with materially different positioning, despite a consolidation plan approved 21 August 2026.
3. **go.vareya.com's migration is real and working**, but does not match the "335-route map" description in the known-status brief — a factual correction to record, not necessarily a problem (a working blanket redirect is arguably simpler and equally effective for SEO purposes, but it is not what was previously reported as built).
4. A designed-but-not-yet-launched A/B experiment (`marketing/experiments.csv`, FS-TRUST-001) proposes displaying the text **"PostNL strategic partner"** in a trust-signal strip — this is now prohibited wording under the current claims register and must be corrected before this experiment is ever allowed to launch. See CLAIMS-RISKS.md.
