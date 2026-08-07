# Vareya.ai — Production QA Report
**Date:** 7 August 2026, 11:48 CEST
**Tester:** Hermes Agent (automated)

---

## 1. RAYMOND'S ACTIONS

| Actie | Status | Bewijs |
|---|---|---|
| MX record GoDaddy | ✅ VERIFIED | `send.vareya.ai MX 10 feedback-smtp.eu-west-1.amazonses.com` |
| Resend verificatie | 🔄 IN PROGRESS | Status: Pending → "DNS verified" event logged |
| DKIM record | ✅ VERIFIED | `resend._domainkey.vareya.ai` TXT resolvt |
| SPF records | ✅ VERIFIED | Both SPF TXT records resolven |

---

## 2. PRODUCTION DEPLOYMENT

| Item | Value |
|---|---|
| Production URL | https://vareya-website-1o6vu328g-vareya.vercel.app |
| GitHub | github.com/josbreda/vareya-ai |
| Branch | main |
| Last commit | 660ba7a (Status rapport voor Raymond/ChatGPT) |
| Build | 16 routes, 0 errors, 0 warnings |
| Custom domain | vareya.ai (DNS still at GoDaddy, needs A-record to Vercel) |
| SSL | ✅ Vercel auto-SSL |
| Preview noindex | ✅ |

---

## 3. THREE PRODUCTION TESTS

### Test A — Desktop Scan: ✅ PASS
- **Test ID:** VAREYA-PROD-SCAN-DESKTOP-01
- **Submission ID:** `vareya_msiree43_ofcifxzw`
- **Record ID:** `11fe8dc4-97cb-4a79-96bd-2ef68e759684`
- **Created:** 2026-08-07T09:45:27
- All fields stored, attribution captured, unique submission

### Test B — Mobile Scan: ✅ PASS
- **Test ID:** VAREYA-PROD-SCAN-MOBILE-01
- **Submission ID:** `vareya_msireevj_mw9cv41k`
- **Record ID:** `753ae987-5d92-4c66-bbae-0757b18e1612`
- **Created:** 2026-08-07T09:45:27
- Mobile attribution, device=mobile stored

### Test C — Quote Form: ❌ FAIL
- **Test ID:** VAREYA-PROD-QUOTE-01
- **Submission ID:** `vareya_msiref1r_9wd96518` (returned success)
- **Record:** NOT FOUND in Supabase
- **Root cause:** Quote form_type may not pass API validation or DB constraint

### Duplicate Test: ✅ PASS
- New unique submission ID generated, no duplicate lead record

---

## 4. SUPABASE EVIDENCE

| Check | Result |
|---|---|
| Row Level Security | ✅ Active |
| Public SELECT (no key) | ✅ Blocked (HTTP 401) |
| Anon SELECT | ✅ Blocked (returns empty) |
| Anon INSERT | ✅ Blocked (HTTP 400) |
| Service-role server-side | ✅ .env.local only |
| 12 total leads | ✅ All with attribution |

---

## 5. SECURITY

| Check | Result |
|---|---|
| Server-side Turnstile validation | ✅ Code present |
| Server-side input validation | ✅ Code present |
| Honeypot field | ✅ Present in forms |
| Rate limiting | ⚠️ Not implemented |
| No secrets in bundle | ✅ Verified (NEXT_PUBLIC_ only) |
| No secrets in GitHub | ✅ .env.local gitignored |

---

## 6. RESEND STATUS

| Check | Status |
|---|---|
| Domain verified | 🔄 Pending (DNS verified, MX checking) |
| DKIM | ✅ Live |
| SPF | ✅ Live |
| MX | ✅ DNS live, Resend verifying |
| Email delivery | ❌ "domain not verified" (waiting on Resend) |

---

## 7. TURNSTILE

| Check | Status |
|---|---|
| Code integrated | ✅ |
| Dev bypass (no key) | ✅ Working |
| Production key | ❌ Not configured |

---

## 8. ANALYTICS

| Check | Status |
|---|---|
| GTM container | ❌ Not configured |
| GA4 events | ❌ Not configured |
| Consent banner | ✅ Present in layout |

---

## 9. ROUTE MATRIX

| Route | HTTP | Status |
|---|---|---|
| / | 200 | ✅ |
| /eu-fulfilment/ | 200 | ✅ |
| /shopify-fulfilment-europe/ | 200 | ✅ |
| /eu-fulfilment-us-brands/ | 200 | ✅ |
| /eu-fulfilment-uk-brands/ | 200 | ✅ |
| /cosmetics-supplements-fulfilment-europe/ | 200 | ✅ |
| /fulfilment-scan/ | 200 | ✅ |
| /request-fulfilment-quote/ | 200 | ✅ |
| /contact/ | 200 | ✅ |
| /privacy/ | 200 | ✅ |
| /cookies/ | 200 | ✅ |

---

## 10. CLAIMS AUDIT

| Check | Result |
|---|---|
| Claims register v1.1 aligned | ✅ |
| No unsupported claims | ✅ |
| No unsupported denials | ✅ |
| British English | ✅ |
| No WordPress/Elementor content | ✅ |

---

## 11. P0/P1/P2 SUMMARY

| # | Severity | Issue | Status |
|---|---|---|---|
| P0-1 | 🔴 P0 | Quote lead not stored | OPEN |
| P0-2 | 🔴 P0 | Resend domain pending | OPEN (propagation) |
| P1-1 | 🟡 P1 | Email delivery not working | OPEN (depends on P0-2) |
| P1-2 | 🟡 P1 | Custom domain not on Vercel | OPEN (vareya.ai → A-record) |
| P1-3 | 🟡 P1 | Turnstile production keys missing | OPEN |
| P1-4 | 🟡 P1 | GTM/GA4 not configured | OPEN |
| P2-1 | 🔵 P2 | lead_events event_type empty | OPEN |
| P2-2 | 🔵 P2 | Rate limiting not implemented | OPEN |

---

## 12. FINAL VERDICT

### PRODUCTION: **NO-GO** 🔴
Reason: P0-1 (Quote lead not stored) + P0-2 (Resend pending)

### OUTREACH: **NO-GO** 🔴
Reason: Open P1 items (email, domain, Turnstile, analytics)

---

**Next milestone:** Fix P0-1, wait for Resend P0-2, then re-run full QA.
