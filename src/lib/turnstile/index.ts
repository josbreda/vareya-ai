import { SERVER_ENV } from "../leads/config";

/**
 * Validates a Cloudflare Turnstile token server-side.
 * Returns { valid, codes } — codes carries Cloudflare's error-codes for
 * diagnosis (invalid-input-secret = wrong secret; timeout-or-duplicate =
 * token reused/expired; invalid-input-response = token not valid).
 */
export async function validateTurnstile(token: string): Promise<{
  valid: boolean;
  codes: string[];
}> {
  // Allow test token in development for end-to-end testing
  if (token === "test" && process.env.NODE_ENV === "development") {
    return { valid: true, codes: [] };
  }

  if (!SERVER_ENV.turnstileSecretKey) {
    // Not configured yet — allow through in development
    console.warn("[turnstile] Secret key not configured — allowing request");
    return { valid: true, codes: [] };
  }

  if (!token) {
    console.warn("[turnstile] No token provided");
    return { valid: false, codes: ["missing-input-response"] };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", SERVER_ENV.turnstileSecretKey);
    formData.append("response", token);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const data = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (data.success !== true) {
      console.warn(
        "[turnstile] Verification failed:",
        (data["error-codes"] ?? ["unknown"]).join(", "),
      );
    }
    return { valid: data.success === true, codes: data["error-codes"] ?? [] };
  } catch (err) {
    console.error("[turnstile] Validation error:", err);
    return { valid: false, codes: ["verification-request-failed"] };
  }
}
