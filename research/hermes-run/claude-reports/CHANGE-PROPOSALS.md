# Change Proposals

No production content was changed. Every item below is a prepared, reviewable proposal. None has been deployed.

---

## CP-01 — Remove unsupported brand-count claim from jmconcepts.cloud homepage

**File affected:** `HOS/projects/jmconcepts/index.html` (line 348), which mirrors the live `https://jmconcepts.cloud/` homepage.

**Current (live, confirmed 2026-09-01):**
> "Vareya, een e-fulfilment specialist met 1.000+ merken, liep tegen een grens aan: honderden kleine webshops vielen buiten de boot door hun minimum van 500 orders per maand."

**Proposed:**
> "Vareya, een e-fulfilment specialist, liep tegen een grens aan: honderden kleine webshops vielen buiten de boot door hun minimum van 500 orders per maand."

**Rationale:** the "1.000+ merken" figure is explicitly listed as forbidden in Vareya's own `content/claims-register.md` v1.5 and `docs/ENTITY-SUBMISSION-PACK.md`, with no supporting evidence found anywhere, internal or external. Removing it is the minimal, single-clause edit — no other part of the sentence or page changes.

**Prepared artifacts:** `change-proposals/jmconcepts-index-BEFORE.html` (exact current file) and `change-proposals/jmconcepts-index-AFTER.html` (corrected) are both included in this report bundle. This was originally attempted as a git branch, but `HOS/` is entirely excluded from this repository's version control (`.gitignore`), so a file-level before/after pair is the working equivalent here.

**Blocked on:** B-01 (no jmconcepts.cloud hosting/FTP access available). Requires manual deployment by whoever holds that Hostinger account.

---

## CP-02 — Correct the "PostNL strategic partner" wording in the FS-TRUST-001 experiment design

**File affected:** `marketing/linkedin-drafts.md` referenced above is unrelated; the actual file is `marketing/experiments.csv` (vareya-ai repo), row `FS-TRUST-001`, the `variant` column.

**Current (designed, not yet launched):**
> "Add a compact text-only trust strip below the step 1 introduction: 'PostNL strategic partner' | 'ShipHero WMS, fully integrated with Shopify' | '5-carrier network: PostNL, DHL, Asendia, FedEx and Royal Mail'."

**Proposed:**
> "Add a compact text-only trust strip below the step 1 introduction: 'PostNL main carrier in the Netherlands' | 'ShipHero WMS, fully integrated with Shopify' | '5-carrier network: PostNL, DHL, Asendia, FedEx and Royal Mail'."

**Rationale:** matches the approved wording already in use elsewhere on the live site (fixed in commits 926aed1 and 719fb96/E05), which this experiment file was never updated to reflect.

**Blocked on:** nothing technical — this is a plain CSV edit in a repository this audit has read access to but was not asked to modify unilaterally, since it's a marketing/experiment-design decision. Recommend Jos or the marketing owner apply this directly; happy to prepare the exact diff on request.

---

## CP-03 — Correct the country count in llms.txt and ENTITY-SUBMISSION-PACK.md

**Files affected:** the live `vareya.ai/llms.txt` content source (wherever it's generated from in the vareya-ai repo — not located precisely in this pass, recommend a `grep -rl "42 approved destinations"` across `src/` to find the exact generator) and `docs/ENTITY-SUBMISSION-PACK.md` line 27.

**Current:** both state "42 countries/destinations."

**Proposed:** either state the precise current count (41, machine-counted from `content/claims-register.md` v1.5's actual list) or drop the specific number and reference the list itself, which is lower-maintenance and avoids this class of drift recurring.

**Rationale:** a public, machine-readable file (llms.txt) currently states a number that doesn't match the authoritative source it's supposed to summarize — exactly the kind of fact an AI system would ingest as ground truth.

**Blocked on:** nothing — this is a same-repository content fix, not a hosting/access issue. Recommend as a P0 fix in the next content pass.

---

## CP-04 — De-conflict the three "claims register" documents

**Files affected:** `docs/CLAIMS.md`, `docs/claims-register.md`, `content/claims-register.md` (all in the vareya-ai repo).

**Proposed:**
1. Delete or clearly stamp `docs/claims-register.md` (the 6 August, `claims.ts`/`facts.ts`-referencing audit doc) as **SUPERSEDED — see content/claims-register.md**, since it references a content architecture that no longer exists.
2. Re-sync `docs/CLAIMS.md`'s quick-reference content to the current v1.5, or delete it and redirect readers directly to `content/claims-register.md` — a stale quick-reference is worse than no quick-reference, since it currently states the prohibited "strategic partner" wording as if approved.

**Rationale:** this exact confusion appears to be the direct cause of CP-02's finding (an experiment designed using the stale wording).

**Blocked on:** nothing — same-repository documentation cleanup.

---

## CP-05 — Fix the infinite redirect loop on www.vareya.com/faq/

**File affected:** Rank Math redirect rules on the www.vareya.com WordPress install (not a file in any repository this audit has access to).

**Current:** `/faq/` redirects to itself indefinitely (confirmed via `curl exit 47 CURLE_TOO_MANY_REDIRECTS`).

**Proposed:** point the Rank Math redirect rule for `/faq/` to the actual working page, `/frequently-asked-questions/` (already in the site's own sitemap and confirmed live).

**Blocked on:** WordPress/Rank Math admin access to www.vareya.com — the same access needed for B-02, so this can be batched with the domain-consolidation work once access exists (or fixed independently first, since it's a smaller, faster win if consolidation takes longer).

---

## CP-06 — Wire the LinkedIn mark-as-sent action to the same approval gate as email send

**Files affected:** the `mark-sent` endpoint in the leads application (identified during this audit's lead-engine check; exact file not re-located in this pass — the email `send_email` endpoint's approval-gate logic is the reference implementation to mirror).

**Proposed:** require `human_approved_at` to be set (and matching the current message version, same as the email path) before allowing a lead to be marked as sent via the LinkedIn/manual-copy path.

**Rationale:** this audit found 2 real "sent" records in the database, neither of which has a corresponding human-approval record — meaning the approval gate, while correctly built for email, is not currently enforced for the manual/LinkedIn channel. This is the single most safety-relevant gap found in the entire lead engine.

**Blocked on:** nothing — an engineering task, not an access/credential issue. Recommend P0.

---

## CP-07 — Import contact-enrichment research into the production `lead_contacts` table

**Files affected:** `HOS/projects/vareya-ai-lead-engine/data/contact-enrichment-44.csv` and `high-quality-leads.csv` (source data) → `lead_contacts` table (destination).

**Proposed:** a one-time import script matching enriched decision-maker records (26 identified) to their corresponding `lead_organizations` rows and inserting `lead_contacts` records, so the CRM actually surfaces this already-completed research to whoever works the leads.

**Blocked on:** nothing — an engineering task.
