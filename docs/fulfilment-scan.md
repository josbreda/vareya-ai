# Fulfilment Scan — Technical Specification

Last updated: 2026-08-06

## Overview
The fulfilment scan (`/fulfilment-scan/`) is the primary conversion action. It is a 6-step self-assessment that collects operational data and returns a qualitative fit indication.

## Steps

### Step 1: Monthly Order Volume
- Question: "How many orders do you ship per month?"
- Options: `<500`, `500–1,000`, `1,000–5,000`, `5,000–10,000`, `10,000+`
- Logic: Vareya is best suited to 500+. Lower volumes may still qualify — flagged for review.

### Step 2: E-commerce Platform
- Question: "Which platform do you sell on?"
- Options: `Shopify`, `Amazon FBM`, `Shopify + Amazon`, `Other`
- Logic: Direct integrations available for Shopify and Amazon FBM. Other platforms require qualification.

### Step 3: Product Category
- Question: "What do you sell?"
- Options: `Cosmetics`, `Supplements`, `Phone Cases`, `Accessories`, `Apparel`, `Other`
- Logic: Core specialisations affect warehouse fit. "Other" flagged for review.

### Step 4: Target Markets
- Question: "Where do your customers order from?"
- Multi-select: `Netherlands`, `Germany`, `Belgium`, `France`, `UK`, `Nordics`, `Southern Europe`, `Eastern Europe`, `Rest of World`
- Logic: Carrier assignment depends on destination mix.

### Step 5: Returns
- Question: "Do you need returns handling?"
- Options: `Yes, essential`, `Nice to have`, `Not needed`
- Logic: Returns handling is included in standard service.

### Step 6: Results
- Calculated from previous answers
- Three possible outcomes:
  - **Strong fit**: ≥4 positive indicators
  - **Good fit**: 2–3 positive indicators  
  - **Needs review**: <2 positive indicators
- Each outcome includes contextual guidance
- CTA: "Request a fulfilment quote" for strong/good fit; "Talk to us" for needs review

## Technical Implementation
- Client component: `src/app/fulfilment-scan/page.tsx`
- State managed via React useState (6-step wizard)
- Honeypot field included for bot detection
- UTM parameters captured and persisted
- On submit: POST to `/api/leads` with form_type="scan"
- Submission ID generated server-side
- Lead stored in Supabase `leads` table with `scan_answers` JSONB

## Privacy
- No PII sent to GA4
- Privacy checkbox required before submission
- `privacy_acknowledged_at` timestamp stored

## Attribution
- UTM parameters captured from URL
- `landing_page`, `referrer`, `device` stored with lead
