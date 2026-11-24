import { SERVER_ENV } from "../leads/config";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  /**
   * Resend idempotency key (≤256 chars, 24 h window): a retried send for the
   * same submission returns the original result instead of sending a second
   * email. The payload must be identical across retries for Resend to
   * deduplicate — it is, because all inputs derive from the submission.
   */
  idempotencyKey?: string;
}

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapedOrFallback(value: unknown, fallback = "N/A"): string {
  const text = typeof value === "string" ? value.trim() : "";
  return escapeHtml(text || fallback);
}

/**
 * Sends an email via Resend API.
 * Returns { success: true } or { success: false, error: string }.
 * Never throws — failures are logged but do not block the caller.
 */
export async function sendEmail(payload: EmailPayload): Promise<
  { success: true; id: string } | { success: false; error: string }
> {
  if (!SERVER_ENV.resendApiKey) {
    console.warn("[email] Resend not configured — email not sent");
    return { success: false, error: "Resend API key not configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SERVER_ENV.resendApiKey}`,
        "Content-Type": "application/json",
        ...(payload.idempotencyKey
          ? { "Idempotency-Key": payload.idempotencyKey }
          : {}),
      },
      body: JSON.stringify({
        from: "Vareya <noreply@vareya.ai>",
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
      }),
    });

    const body = await res.json();

    if (!res.ok) {
      console.error("[email] Resend error:", body);
      return { success: false, error: (body as { message?: string }).message || "Unknown error" };
    }

    return { success: true, id: (body as { id?: string }).id || "unknown" };
  } catch (err) {
    console.error("[email] Network error:", err);
    return { success: false, error: err instanceof Error ? err.message : "Network error" };
  }
}

/**
 * Sends internal notification to LEAD_OWNER_EMAIL.
 * Returns true when the email was accepted by Resend, false otherwise.
 * This is a complete actionable fallback copy; durable acceptance is gated by
 * the lead-dashboard write in /api/leads.
 */
export async function sendInternalNotification(
  submissionId: string,
  formType: string,
  company: string,
  name: string,
  attribution?: {
    email?: string;
    phone?: string;
    website?: string;
    message?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    landing_page?: string;
    platform?: string;
    volume?: string;
    markets?: string[];
    services?: string[];
  }
): Promise<boolean> {
  const att = attribution ?? {};
  const attLines =
    att.utm_source || att.utm_medium || att.utm_campaign || att.utm_content || att.landing_page
      ? `
      <hr />
      <p><strong>Attribution:</strong><br />
      Landing: ${escapedOrFallback(att.landing_page)}<br />
      UTM source: ${escapedOrFallback(att.utm_source, "—")}<br />
      UTM medium: ${escapedOrFallback(att.utm_medium, "—")}<br />
      UTM campaign: ${escapedOrFallback(att.utm_campaign, "—")}<br />
      UTM content: ${escapedOrFallback(att.utm_content, "—")}</p>`
      : "";
  const result = await sendEmail({
    to: SERVER_ENV.leadOwnerEmail,
    subject: `New ${formType} lead: ${company}`,
    idempotencyKey: `${submissionId}/internal`,
    html: `
      <h2>New Vareya Lead</h2>
      <p><strong>Type:</strong> ${escapeHtml(formType)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapedOrFallback(att.email)}</p>
      <p><strong>Phone:</strong> ${escapedOrFallback(att.phone)}</p>
      <p><strong>Website:</strong> ${escapedOrFallback(att.website)}</p>
      <p><strong>Message:</strong> ${escapedOrFallback(att.message)}</p>
      <p><strong>Submission ID:</strong> ${escapeHtml(submissionId)}</p>
      <p><strong>Platform:</strong> ${escapedOrFallback(att.platform)} · <strong>Volume:</strong> ${escapedOrFallback(att.volume)} · <strong>Markets:</strong> ${escapeHtml((att.markets ?? []).join(", ") || "N/A")} · <strong>Services:</strong> ${escapeHtml((att.services ?? []).join(", ") || "N/A")}</p>
      ${attLines}
    `,
  });

  if (!result.success) {
    console.error(`[email] Failed to send internal notification for ${submissionId}: ${result.error}`);
  }
  return result.success;
}

/**
 * Sends prospect confirmation email.
 *
 * Jos approved an English, branded scan receipt and a 24-hour results
 * commitment on 6 November 2026. Quote receipts use the same English branded
 * layout, without extending the scan's 24-hour commitment to quote requests.
 * The stable Resend idempotency key prevents a retry sending duplicate mail.
 */
export async function sendProspectConfirmation(
  email: string,
  name: string,
  formType: string,
  submissionId: string,
  locale: "en" | "nl" = "en",
): Promise<boolean> {
  const isScan = formType === "scan";
  // Keep the caller contract; both confirmations are intentionally English.
  void locale;
  const subject = isScan
    ? "Thanks for your fulfilment scan — VareYa"
    : "Your quote request has been received — VareYa";

  const result = await sendEmail({
    to: email,
    subject,
    idempotencyKey: `${submissionId}/confirm`,
    html: `
      <!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body style="margin:0;padding:0;background:#f4f7f5;color:#172b26;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7f5;"><tr><td align="center" style="padding:28px 16px;">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e0e8e3;border-radius:12px;">
            <tr><td style="padding:32px 32px 24px;"><a href="https://vareya.ai/?lang=en"><img src="https://vareya.ai/images/brand/vareya-email-logo.png" width="200" height="45" alt="VareYa" style="display:block;border:0;width:200px;max-width:100%;height:auto;" /></a></td></tr>
            <tr><td style="padding:0 32px 32px;font-size:16px;line-height:1.6;">
              <h1 style="margin:0 0 20px;font-size:24px;line-height:1.3;font-weight:600;">Thank you, ${escapeHtml(name.trim().split(/\s+/)[0] || "there")}!</h1>
              <p style="margin:0 0 16px;">${isScan ? "Thanks for reaching out and sharing your fulfilment plans with VareYa." : "We have received your quote request."}</p>
              <p style="margin:0 0 24px;">${isScan ? "Our team will review your answers, and you’ll receive your fulfilment scan results by email <strong>within 24 hours</strong>." : "Vareya will review your details and follow up by email with next steps."}</p>
              <p style="margin:0;">Warm regards,<br /><strong>The VareYa team</strong></p>
            </td></tr>
            <tr><td style="padding:20px 32px;border-top:1px solid #e0e8e3;font-size:12px;line-height:1.6;color:#64746e;">
              Reference: ${escapeHtml(submissionId)}<br />Vareya BV · Bagven Park 6 · 4838 EH Breda · The Netherlands<br />
              <a href="https://vareya.ai/?lang=en" style="color:#18664b;">vareya.ai</a> · <a href="mailto:info@vareya.ai" style="color:#18664b;">info@vareya.ai</a>
            </td></tr>
          </table>
        </td></tr></table>
      </body></html>
    `,
  });

  if (!result.success) {
    console.error(`[email] Failed to send confirmation for ${submissionId}: ${result.error}`);
  }
  return result.success;
}
