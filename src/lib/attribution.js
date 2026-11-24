import { hasAnalyticsConsent, subscribeConsent } from "./analytics/consent.js";
/** Functional CRM attribution; NEVER forward these values to analytics.
 * First = earliest explicit relevant campaign observed with consent in this
 * tab/window. Latest = most recent different relevant campaign, as a whole.
 * Relevant requires source/medium/campaign; direct/internal values do not
 * qualify. An external referrer alone is NOT guessed into a campaign.
 * Lifetime: tab session, at most 30 minutes from the latest new campaign.
 */
export const ATTRIBUTION_STORAGE_KEY = "vareya_campaign_session_v1";
export const ATTRIBUTION_TTL_MS = 30 * 60 * 1000;
const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const tabs = new WeakMap();
/** Trim and bound CRM values; this is NOT a claim that UTM values are PII-free. */
export function parseAttribution(source) {
    var _a;
    const params = typeof source === "string" ? new URLSearchParams(source) : source;
    const result = {};
    for (const key of KEYS) {
        const value = (_a = params.get(key)) === null || _a === void 0 ? void 0 : _a.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 200);
        if (value)
            result[key] = value;
    }
    return result;
}
function relevant(a) {
    if (!a.utm_source && !a.utm_medium && !a.utm_campaign)
        return false;
    const internal = /^(?:\(?direct\)?|\(?none\)?|internal|self|vareya(?:\.ai|\.com|\.nl)?|www\.vareya\.(?:ai|com|nl))$/i;
    return ![a.utm_source, a.utm_medium].some((v) => v && internal.test(v));
}
function crmPath(value) {
    try {
        const u = new URL(value, "https://vareya.ai");
        return u.pathname.slice(0, 300);
    }
    catch {
        return "/";
    }
}
function referrerOrigin(value) {
    try {
        const u = new URL(value);
        if (!/^https?:$/.test(u.protocol) || /(^|\.)vareya\.(ai|com|nl)$/.test(u.hostname))
            return "";
        // Host only: never query, path, fragment, credentials or a full referrer.
        return u.origin + "/";
    }
    catch {
        return "";
    }
}
function touchFrom(value) {
    if (!value || typeof value !== "object")
        return null;
    const v = value;
    if (typeof v.captured_at !== "number" || !Number.isFinite(v.captured_at) || typeof v.landing_page !== "string" || typeof v.referrer !== "string")
        return null;
    const p = new URLSearchParams();
    for (const key of KEYS)
        if (typeof v[key] === "string")
            p.set(key, v[key]);
    const fields = parseAttribution(p);
    return relevant(fields) ? Object.assign(Object.assign({}, fields), { landing_page: crmPath(v.landing_page), referrer: referrerOrigin(v.referrer), captured_at: v.captured_at }) : null;
}
function clear(s) {
    s.snapshot = null;
    s.loaded = true;
    try {
        window.sessionStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
    }
    catch { /* no storage */ }
}
function tab() {
    if (typeof window === "undefined")
        return null;
    let s = tabs.get(window);
    if (!s) {
        s = { snapshot: null, loaded: false };
        tabs.set(window, s);
        const current = s;
        subscribeConsent(() => { if (!hasAnalyticsConsent())
            clear(current); });
    }
    return s;
}
export function getAttributionSnapshot(now = Date.now()) {
    const s = tab();
    if (!s)
        return null;
    if (!hasAnalyticsConsent()) {
        clear(s);
        return null;
    }
    if (!s.loaded) {
        s.loaded = true;
        try {
            const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
            if (raw && raw.length <= 12000) {
                const v = JSON.parse(raw);
                const first = touchFrom(v.first);
                const latest = touchFrom(v.latest);
                if (v.version === 1 && first && latest && typeof v.expires_at === "number" && Number.isFinite(v.expires_at) && first.captured_at <= latest.captured_at && latest.captured_at <= now && v.expires_at === latest.captured_at + ATTRIBUTION_TTL_MS) {
                    s.snapshot = { version: 1, first, latest, expires_at: v.expires_at };
                }
            }
        }
        catch { /* malformed/unavailable storage: unknown, never fabricate */ }
    }
    if (!s.snapshot || s.snapshot.expires_at <= now) {
        clear(s);
        return null;
    }
    // Return a copy so form consumers cannot mutate future attribution.
    return Object.assign(Object.assign({}, s.snapshot), { first: Object.assign({}, s.snapshot.first), latest: Object.assign({}, s.snapshot.latest) });
}
export function captureAttribution(source, now = Date.now()) {
    var _a;
    const s = tab();
    if (!s)
        return;
    if (!hasAnalyticsConsent()) {
        clear(s);
        return;
    }
    const previous = getAttributionSnapshot(now);
    const fields = parseAttribution(source !== null && source !== void 0 ? source : window.location.search);
    if (!relevant(fields))
        return;
    // Repeat render / unchanged campaign / internal navigation never resets origin.
    if (previous && KEYS.every((k) => previous.latest[k] === fields[k]))
        return;
    const touch = Object.assign(Object.assign({}, fields), { landing_page: crmPath(window.location.pathname), referrer: referrerOrigin(typeof document === "undefined" ? "" : document.referrer), captured_at: now });
    s.snapshot = { version: 1, first: (_a = previous === null || previous === void 0 ? void 0 : previous.first) !== null && _a !== void 0 ? _a : touch, latest: touch, expires_at: now + ATTRIBUTION_TTL_MS };
    try {
        window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(s.snapshot));
    }
    catch { /* accepted, in-document only */ }
}
/** Existing form API. No consent: only this submitted URL, without storage.
 * Accepted: last relevant campaign from the consented journey, not raw first.
 */
export function readAttribution(source) {
    var _a;
    const current = parseAttribution(source);
    if (!hasAnalyticsConsent()) {
        getAttributionSnapshot(); // removes any now-disallowed campaign state
        return current;
    }
    captureAttribution(source);
    const touch = (_a = getAttributionSnapshot()) === null || _a === void 0 ? void 0 : _a.latest;
    if (!touch)
        return current;
    const result = {};
    for (const key of KEYS)
        if (touch[key])
            result[key] = touch[key];
    return result;
}
/** CRM context only. Legacy original_* matches latest/top-level campaign;
 * explicit first_* preserves earliest consented campaign. Never replace form path.
 */
export function readAttributionContext() {
    const snapshot = getAttributionSnapshot();
    if (!snapshot) return {};
    const { first, latest } = snapshot;
    const result = { original_landing_page: latest.landing_page, first_landing_page: first.landing_page };
    if (latest.referrer) result.original_referrer = latest.referrer;
    if (first.referrer) result.first_referrer = first.referrer;
    for (const key of KEYS) if (first[key]) result[`first_${key}`] = first[key];
    return result;
}
