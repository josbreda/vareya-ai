# Non-EU country content pipeline — daily knowledge articles

Status: Day-1 batch live. Daily unattended execution is **not yet active** — see
"What is not durable yet" below for the exact missing piece and why it was
not worked around.

## Scope

15 approved non-EU destinations (`content/claims-register.md` v1.6 §"Approved
shipping destinations", filtered to non-EU; must match `src/content/countries.ts`
`COUNTRIES` keys exactly): united-kingdom, united-states, canada, australia,
new-zealand, norway, switzerland, japan, china, hong-kong, brazil, south-korea,
saudi-arabia, turkey, united-arab-emirates. "Rest of the World" is never used
as a country name or slug, per the register's naming rule.

Target volume: **2 articles per country per day** (1 practical + 1 deep-dive)
= 30/day at full rate. This is a target, not a promise — see "Sustainable
rate" below for why it is not held constant indefinitely.

## Where articles live

- Content: `src/content/knowledge.ts`, `KNOWLEDGE_ARTICLES` array. Each new
  article is a `KnowledgeArticle` object appended to that array.
- Rendering: `src/app/knowledge/[slug]/page.tsx` (existing, unmodified
  rendering logic) + `src/app/knowledge/page.tsx` (index listing, unmodified).
- Sitemap: `src/app/sitemap.ts` already iterates every `KNOWLEDGE_ARTICLES`
  entry automatically — adding an article to the array is sufficient, no
  separate sitemap edit needed.
- Schema addition made for this pipeline: `KnowledgeSection.internalLinks?`
  (optional, additive — existing 15 articles unaffected) renders a row of
  linked pills at the end of a section, used to point at the relevant
  country/service page and other knowledge articles.

## The durable queue

`content/editorial-queue.json` is the persisted state — not a fixed 30-day
calendar of pre-written titles (that would either be too imprecise to be
useful, or would have to invent facts about news 3 weeks out, which is
exactly what the brief prohibits). Instead it is a **rotation**: two ordered
lists of topic categories (practical, deep-dive — see
`scripts/content-pipeline/queue_lib.py` for the exact lists and the
rationale for each), and for every country, a pointer into each list.

- `pending` — not yet written.
- `published` — live, with `slug` and `publishedAt` recorded.
- (also defined, not yet used: `researching`, `drafted`, `review`,
  `rejected`, `deferred` — for when the writing step is automated; see
  below.)

`scripts/content-pipeline/next_topics.py` is the read/advance interface:

```
python3 scripts/content-pipeline/next_topics.py                # next pending slot, every country
python3 scripts/content-pipeline/next_topics.py --country japan # one country
python3 scripts/content-pipeline/next_topics.py --mark-published \
  --country japan --slot practical --category export-documentation \
  --published-slug japan-... --published-at 2026-09-15
```

`scripts/content-pipeline/build_queue.py` only initialises or fully rebuilds
the queue (refuses to run over an existing file without `--force`, since a
rebuild discards all status history). It has already been run once, for
this pipeline's launch.

## Quality gates (apply to every article, day 1 or day 90)

1. **Claims compliance** — every Vareya-capability sentence is either a
   verbatim import from `src/content/claims.ts` or a direct paraphrase of an
   "Approved facts" line in `content/claims-register.md`. Run
   `bash scripts/prohibited-claims-scan.sh` before publishing (also runs in
   CI via `.github/workflows/claims-guard.yml` on every PR to `main`).
2. **General-market facts separated from Vareya's own service** — every
   customs/VAT/export-rule paragraph cites a named source with a URL;
   Vareya-specific sentences are visually and structurally distinct
   (separate section or explicit "Vareya's role starts when..." framing).
3. **Freshly verified, not reused blind** — changeable facts (customs
   thresholds, trade-agreement status, the EU parcel levy) are re-checked
   against a primary source at write time, even where `src/content/countries.ts`
   already has research on file (that research is dated — `consultedAt` per
   country — and is a starting point, not a substitute for re-checking
   anything that could have moved since). Day-1 batch re-verification
   surfaced one materially outdated assumption: the EU-Australia FTA has
   *concluded negotiations* (24 March 2026) but is explicitly listed as
   still pending ratification by the European Commission — not yet in
   force. Publishing "concluded" as "in force" would have been a real
   factual error.
4. **No invented specifics** — no lead times, savings figures, customer
   names/cases, certifications, integrations or local presence not on the
   approved-facts list. No superlatives outside the two narrow exceptions
   in the claims register.
5. **Distinct search intent per article, not a name-swap** — before
   assigning a topic, check `KNOWLEDGE_ARTICLES` (14 pre-existing + whatever
   this pipeline has already published) for overlapping intent. Two of the
   14 pre-existing articles are already UK/US-specific
   (`uk-brands-eu-parcel-levy`, `shipping-to-eu-from-us-after-parcel-levy`)
   — the day-1 UK/US deep-dive topics were deliberately chosen to be
   complementary (trade-agreement/tariff angle) rather than duplicate the
   parcel-levy angle those already cover.
6. **Real internal linking** — every article links to its country's
   existing marketing page(s) (confirmed via `npm run build`'s route list,
   not assumed — e.g. UK/US kept their legacy `/eu-fulfilment-{uk,us}-brands/`
   slugs while every other country uses `/european-fulfilment-for-{x}-brands/`
   or `/european-fulfilment-for-{x}an-brands/`; guessing the pattern would
   have produced dead links for exactly those two countries).
7. **Reviewer disclosure** — `reviewer`/`reviewedAt` fields state plainly
   that this was researched and drafted by an AI pipeline against public
   sources and the claims register, following the same disclosure pattern
   already used on the 14 pre-existing articles (several credit "Hermes" as
   reviewer). No fabricated human byline is used; the schema.org `Article`
   author remains the real legal entity (Vareya BV), matching the existing,
   unmodified page template.

## Sustainable rate — an honest projection, not a promise

13 practical categories × 15 countries = 195 non-repeating practical slots.
10 deep-dive categories × 15 countries = 150 non-repeating deep-dive slots.
At the full 30/day target that is **~11.5 days** before any category repeats
for any country. Repeating a category for the same country after that point
is not automatically thin content — a "trade-agreement-context" article
written 3 months apart can reflect real regulatory movement (as the
EU-Australia FTA piece demonstrates) — but it does mean the category list
above should be revisited and extended before the first rotation completes,
and the daily rate should be reconsidered downward (e.g. to 1/country/day,
or a 3x/week cadence) rather than forced to hold at 30/day once the initial
backlog of genuinely distinct angles is exhausted. This document is the
place to record that decision when it is made — it has not been made yet
because the initial rotation has ~11 days of runway left.

## What is not durable yet (the actual gap)

The brief requires execution "independent of this chat session." Two
mechanisms were evaluated on this infrastructure:

1. **Claude Code's `CronCreate`** — schedules a prompt to fire in the
   future, but is explicitly session-scoped: "nothing is written to disk,
   and the job is gone when Claude exits," and recurring jobs auto-expire
   after 7 days regardless. This does not meet "independent of this chat
   session" under any reading of that phrase — it was not used for the
   recurring schedule for that reason.
2. **A systemd timer on the AOS VPS** (the actual durable, session-independent
   mechanism already used in production for `leads-pipeline` and the
   outreach worker) — infrastructurally straightforward to add: a timer
   firing daily in Europe/Amsterdam, calling
   `next_topics.py` to see what's due, then needing to actually **write**
   the article.

That second step — turning "next up: japan / export-documentation" into
900+ words of researched, claims-compliant, freshly-verified article text —
is the part that needs an LLM call. This repository/VPS has:

- `AI_API_KEY` / `AI_PROVIDER=hermes`, pointing at a self-hosted model.
  This is the same model already documented elsewhere in this
  infrastructure as unreliable for stating facts accurately (a prior,
  separate incident had it misstate live order status until the fact was
  injected deterministically rather than trusted to the model). Wiring an
  unattended, unreviewed model into compliance-sensitive customs/VAT/trade
  copy — the exact category of content this brief repeatedly warns against
  inventing or leaving unverified — was a considered decision, not an
  oversight: **not done**, because doing it would violate this same
  brief's own accuracy requirements.
- No Anthropic or OpenAI API key provisioned anywhere in `/opt/aos/secrets`
  or `/opt/aos/.env` for this purpose.

**Concrete missing access:** an LLM API credential (Anthropic or otherwise)
trusted enough for unreviewed compliance-sensitive copy, provisioned to a
script running on the AOS VPS or as a Vercel Cron Job's target route, plus
a decision on whether unattended publication should require any human
review step before going live given that trust level. Until one of those
exists, `next_topics.py` + the systemd timer scaffold can run daily and
correctly tell you what's next, but the actual writing step needs a human
or an interactive Claude Code session to run, the same way this Day-1 batch
was produced.
