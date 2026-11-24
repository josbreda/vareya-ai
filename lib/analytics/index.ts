/** Backward-compatible public analytics API.
 * Native JS cores also run in the repository's Node strip-types test runner.
 * Raw UTM values belong ONLY to functional CRM attribution, never events.
 */
export { readAttribution } from "../attribution.js";
export type { AttributionParams } from "../attribution.js";
export {
  FUNNEL_DEFINITION, SCAN_STEP_IDS, SUBMIT_ERROR_REASONS,
  routeGroup, trackEvent, trackPageView, trackCTAClick,
  trackScanStart, trackScanStep, trackScanComplete,
  trackQuoteFormStart, trackQuoteFormSubmit, trackQuoteFormSubmitError,
  trackEmailClick, trackPhoneClick,
} from "./events.js";
export type { SubmitErrorReason } from "./events.js";
