import { SERVER_ENV } from "../leads/config";

/**
 * Validates a Cloudflare Turnstile token server-side.
 * Returns true if the token is valid, false otherwise.
 */
export async function validateTurnstile(token: string): Promise<boolean> {
  // Allow test token in development for end-to-end testing
  if (token === "test" && process.env.NODE_ENV === "development") {
    return true;
  }

  if (!SERVER_ENV.turnstileSecretKey) {
    // Not configured yet — allow through in development
    console.warn("[turnstile] Secret key not configured — allowing request");
    return true;
  }

  if (!token) {
    console.warn("[turnstile] No token provided");
    return false;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", SERVER_ENV.turnstileSecretKey);
    formData.append("response", token);

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return (data as { success: boolean }).success === true;
  } catch (err) {
    console.error("[turnstile] Validation error:", err);
    return false;
  }
}
