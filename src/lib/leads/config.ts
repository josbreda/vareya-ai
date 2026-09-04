/**
 * Secrets loaded server-side only. Never exposed to client.
 */
export const SERVER_ENV = {
  get resendApiKey() {
    return process.env.RESEND_API_KEY || "";
  },
  get turnstileSecretKey() {
    return process.env.TURNSTILE_SECRET_KEY || "";
  },
  get leadOwnerEmail() {
    return process.env.LEAD_OWNER_EMAIL || "";
  },
  get isConfigured() {
    return !!(
      this.resendApiKey &&
      this.turnstileSecretKey &&
      this.leadOwnerEmail
    );
  },
};
