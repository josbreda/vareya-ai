# Vareya.ai — Launch Checklist

## Pre-Launch (Day 3, before 15:00)

### Content & Claims
- [ ] Raymond has approved all claims
- [ ] CLAIMS.md verified against live copy
- [ ] No forbidden claims present
- [ ] British English spelling checked

### Technical
- [ ] Production build passes (`npm run build`)
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] All routes return correct status codes
- [ ] Custom 404 page present

### Forms
- [ ] Turnstile validated server-side
- [ ] Honeypot present
- [ ] Rate limiting active
- [ ] Submission ID generated
- [ ] Lead persisted to Supabase
- [ ] Internal notification sent
- [ ] Prospect confirmation sent
- [ ] No PII in GA4 events

### SEO
- [ ] Unique title + meta description per page
- [ ] One H1 per page
- [ ] Canonical tags present
- [ ] XML sitemap accessible
- [ ] robots.txt present
- [ ] Organization schema
- [ ] WebSite schema
- [ ] BreadcrumbList schema
- [ ] No fake Review schema
- [ ] Preview noindex confirmed
- [ ] Thank-you routes noindex

### Security
- [ ] No API keys exposed client-side
- [ ] Supabase service-role key server-only
- [ ] No internal error details to user
- [ ] Security headers present

### Analytics
- [ ] GTM container active
- [ ] GA4 receiving events
- [ ] Consent management working
- [ ] No PII in events

### DNS & SSL
- [ ] vareya.ai DNS resolves
- [ ] SSL certificate active
- [ ] www → apex redirect working

### Monitoring
- [ ] Search Console property verified
- [ ] Uptime monitoring configured

## Go/No-Go Decision

- [ ] All P0/P1 defects resolved
- [ ] Production env vars present and verified
- [ ] Live submission test passed end-to-end
- [ ] Rollback instructions verified
- [ ] **DECISION: GO / NO-GO**
