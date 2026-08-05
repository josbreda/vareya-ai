# Vareya.ai — Rollback Procedure

## Scenario 1: Bad Production Deploy

1. In Vercel dashboard → Deployments → find last known good deployment
2. Click "..." → "Promote to Production"
3. Verify: `curl -sI https://vareya.ai` returns 200

## Scenario 2: Database Issue

1. Supabase dashboard → SQL Editor
2. Run rollback migration from `supabase/migrations/`
3. Verify lead data integrity

## Scenario 3: DNS Issue

1. Vercel dashboard → Domains → vareya.ai
2. Verify DNS records match Vercel requirements
3. If broken: point DNS back to previous target

## Scenario 4: Full Rollback

1. Promote last known good deployment in Vercel
2. Verify all routes: `/`, `/eu-fulfilment/`, `/fulfilment-scan/`, etc.
3. Verify form submission works
4. Notify Raymond via Telegram

## Rollback Verification

After any rollback:
- [ ] Homepage loads
- [ ] Scan form submits
- [ ] Quote form submits
- [ ] Leads reach Supabase
- [ ] Notifications fire
- [ ] SSL valid
