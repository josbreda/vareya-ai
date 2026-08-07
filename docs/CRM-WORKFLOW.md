# Vareya.ai — CRM Workflow & Qualification Process
**Date:** 7 August 2026
**Status:** OPERATIONAL — Technical sync live, workflow documented

---

## THE SALES PIPELINE

```
SCAN COMPLETED
  ↓
Supabase lead stored (permanent)
  ↓
HubSpot contact + company + task created
  ↓
Jos reviews scan within 1 working day
  ↓
  ├─ NOT A FIT → Close, no deal
  ├─ POSSIBLE FIT → Follow-up task, gather info
  └─ QUALIFIED → Deal created, proposal stage
```

## LEAD QUALIFICATION RULES

### Auto-scored signals (visible in task body).

| Signal | Points |
|---|---|
| Shopify platform | +1 |
| Amazon FBM | +1 |
| Volume 500-1000/mo | +1 |
| Volume 1000+/mo | +2 |
| Returns required | +1 |
| Target markets >3 countries | +1 |
| Cosmetics/supplements category | +1 |
| UTM source present | +1 |
| Completed scan (not quote-only) | +2 |

**Fit score: MAX 10**

### Qualification thresholds.

| Score | Status |
|---|---|
| 7+ | Qualified — Create deal immediately |
| 4-6 | Possible fit — Follow-up task |
| 0-3 | Not a fit — Close |

## HUBSPOT CUSTOM PROPERTIES NEEDED

Jos must create these in HubSpot (Settings → Properties → Create):

### Contact properties:
1. `vareya_lead_status` — Dropdown: New, Under Review, Possible Fit, Qualified, Not a Fit, Follow-up Required
2. `vareya_fit_score` — Number (0-10)
3. `vareya_submission_id` — Text
4. `vareya_form_type` — Dropdown: Scan, Quote

### Deal pipeline stages (Sales → Deals → Pipelines):
1. Qualification
2. Proposal
3. Negotiation
4. Closed Won
5. Closed Lost

## JOS' DAILY WORKFLOW

### Morning (15 min):
1. Open HubSpot → Tasks → Filter: "Vareya" → Sort: Priority
2. Work through tasks HIGH → MEDIUM
3. For each: review scan data → set fit status

### Review checklist per lead:
- [ ] Monthly volume matches Vareya threshold (500+)
- [ ] Product category fits (cosmetics, supplements, phone cases, accessories)
- [ ] E-commerce platform compatible (Shopify, Amazon FBM)
- [ ] Target markets overlap with Vareya shipping destinations
- [ ] No red flags (prohibited products, unrealistic expectations)

### After review:
- Update `vareya_lead_status`
- If QUALIFIED → create Deal in HubSpot
- If POSSIBLE FIT → reply with clarifying questions
- If NOT A FIT → polite close, archive

## RESPONSE TEMPLATES

### Qualified — proposal request:
```
Hi [name],

Thanks for completing the Vareya fulfilment scan. Based on what you shared, 
your setup looks like a good fit for our fulfilment service.

I'd like to schedule a call to discuss your requirements in detail and put 
together a proposal. Are you available this week?

Best,
Jos — Vareya
```

### Possible fit — follow-up:
```
Hi [name],

Thanks for taking the Vareya scan. Your setup is interesting — I have a 
few questions before I can confirm whether we're a good fit.

[custom questions based on scan gaps]

Looking forward to hearing from you.

Best,
Jos — Vareya
```

### Not a fit — polite close:
```
Hi [name],

Thanks for taking the time to complete the Vareya fulfilment scan.

Based on what you shared, your current setup doesn't quite match what 
Vareya is optimised for right now. I'd recommend [alternative suggestion].

We're growing fast — feel free to check back in a few months.

Best,
Jos — Vareya
```

## METRICS TO TRACK

| Metric | Target |
|---|---|
| Scan → response time | < 1 working day |
| Scan → qualification rate | > 60% possible fit or better |
| Qualified → deal created | 100% |
| Deal → closed won | TBD after first 20 deals |
