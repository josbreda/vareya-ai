export const CONSENT_KEY: "vareya_cookie_consent";
export type ConsentChoice = "accepted" | "declined";
export function readConsent(): ConsentChoice | null;
export function writeConsent(choice: ConsentChoice): void;
export function hasAnalyticsConsent(): boolean;
export function subscribeConsent(listener: () => void): () => void;
