/** Consent gate shared by helpers, the loader and functional attribution.
 * No event queue and no cross-document fallback if storage is unavailable.
 */
export const CONSENT_KEY = "vareya_cookie_consent";
const states = new WeakMap();
function state() {
    if (typeof window === "undefined")
        return null;
    let s = states.get(window);
    if (!s) {
        s = { fallback: null, listeners: new Set() };
        states.set(window, s);
        const current = s;
        window.addEventListener?.( "cookie_consent_updated", (event) => {
            const choice = event.detail;
            if (choice !== "accepted" && choice !== "declined")
                return;
            // Prefer a readable, persisted choice. Fall back only when this
            // explicit in-document choice could not be persisted.
            current.fallback = choice;
            try {
                if (localStorage.getItem(CONSENT_KEY) === choice) current.fallback = null;
            } catch { /* blocked storage: honour the explicit session choice */ }
            for (const listener of current.listeners)
                listener();
        });
        window.addEventListener?.( "storage", (event) => {
            if (event.key !== CONSENT_KEY && event.key !== null)
                return;
            current.fallback = null;
            for (const listener of current.listeners)
                listener();
        });
    }
    return s;
}
export function readConsent() {
    const s = state();
    if (s?.fallback)
        return s.fallback;
    try {
        const v = localStorage.getItem(CONSENT_KEY);
        return v === "accepted" || v === "declined" ? v : null;
    }
    catch {
        return null;
    }
}
export function writeConsent(choice) {
    if (choice !== "accepted" && choice !== "declined")
        return;
    const s = state();
    if (s)
        s.fallback = choice;
    try {
        localStorage.setItem(CONSENT_KEY, choice);
        if (s && localStorage.getItem(CONSENT_KEY) === choice) s.fallback = null;
    }
    catch { /* in-document choice only */ }
    if (s)
        for (const listener of s.listeners)
            listener();
}
export function hasAnalyticsConsent() {
    return typeof window !== "undefined" && readConsent() === "accepted";
}
export function subscribeConsent(listener) {
    const s = state();
    s?.listeners.add(listener);
    return () => { s?.listeners.delete(listener); };
}
