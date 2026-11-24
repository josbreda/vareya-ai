/**
 * Single source of truth for resolving which lead form a submission belongs
 * to. Validation and durable storage MUST share this classifier: `form_type`
 * is optional for legacy clients, so a submission that will be stored and
 * processed as scan/quote has to be recognisable at validation time from
 * exactly the same evidence (declared field, else landing page).
 *
 * Plain ESM JavaScript (with a matching .d.ts) on purpose: the unit suite
 * imports the TypeScript callers natively, and Node's type stripping requires
 * explicit `.ts` specifiers that this project's tsconfig does not allow.
 */
export const FORM_PATHS = {
  quote: "/request-fulfilment-quote",
  scan: "/free-rate-scan",
};

/**
 * @param {string | undefined} declared
 * @param {string | undefined} landingPage
 * @returns {"scan" | "quote" | "unknown"}
 */
export function resolveFormType(declared, landingPage) {
  if (declared === "quote" || declared === "scan") return declared;
  if (landingPage) {
    if (landingPage.includes(FORM_PATHS.quote)) return "quote";
    if (landingPage.includes(FORM_PATHS.scan)) return "scan";
  }
  return "unknown";
}
