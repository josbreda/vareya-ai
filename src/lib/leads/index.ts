import { SERVER_ENV } from "./config";

/**
 * Generates a unique, idempotent submission ID.
 * Format: vareya_<timestamp>_<random>
 */
export function generateSubmissionId(): string {
  const ts = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10);
  return `vareya_${ts}_${rand}`;
}

/**
 * Normalises and sanitises lead data before storage.
 */
export function sanitiseLeadData(raw: Record<string, unknown>): Record<string, unknown> {
  const clean: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(raw)) {
    if (value === undefined || value === null) continue;

    // Trim strings
    if (typeof value === "string") {
      clean[key] = value.trim().slice(0, 1000); // prevent massive strings
    } else {
      clean[key] = value;
    }
  }

  // Ensure required fields
  if (!clean.submission_id) {
    clean.submission_id = generateSubmissionId();
  }
  if (!clean.privacy_acknowledged_at) {
    clean.privacy_acknowledged_at = new Date().toISOString();
  }

  return clean;
}

/**
 * Validates lead input server-side.
 * Returns { valid: false, errors: [...] } or { valid: true }
 */
export function validateLeadInput(
  data: Record<string, unknown>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
    errors.push("Name is required");
  }
  if (!data.work_email || typeof data.work_email !== "string") {
    errors.push("Work email is required");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.work_email as string)) {
    errors.push("Invalid email format");
  }
  if (!data.company || typeof data.company !== "string" || !data.company.trim()) {
    errors.push("Company name is required");
  }
  if (data.form_type && !["scan", "quote"].includes(data.form_type as string)) {
    errors.push("Invalid form type");
  }

  return { valid: errors.length === 0, errors };
}
