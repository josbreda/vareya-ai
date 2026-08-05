/**
 * Secrets loaded server-side only. Never exposed to client.
 */
export const SERVER_ENV = {
  get supabaseUrl() {
    return process.env.SUPABASE_URL || "";
  },
  get supabaseServiceRoleKey() {
    return process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  },
  get supabaseAnonKey() {
    return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  },
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
      this.supabaseUrl &&
      this.supabaseServiceRoleKey &&
      this.resendApiKey &&
      this.turnstileSecretKey &&
      this.leadOwnerEmail
    );
  },
};
