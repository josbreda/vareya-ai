import { SERVER_ENV } from "../leads/config";

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
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
 */
export async function sendInternalNotification(
  submissionId: string,
  formType: string,
  company: string,
  name: string
): Promise<void> {
  const result = await sendEmail({
    to: SERVER_ENV.leadOwnerEmail,
    subject: `New ${formType} lead: ${company}`,
    html: `
      <h2>New Vareya Lead</h2>
      <p><strong>Type:</strong> ${formType}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Submission ID:</strong> ${submissionId}</p>
      <p><a href="https://vareya.ai/admin">View in dashboard</a></p>
    `,
  });

  if (!result.success) {
    console.error(`[email] Failed to send internal notification for ${submissionId}: ${result.error}`);
  }
}

/**
 * Sends prospect confirmation email.
 */
export async function sendProspectConfirmation(
  email: string,
  name: string,
  formType: string,
  submissionId: string
): Promise<void> {
  const isScan = formType === "scan";

  const result = await sendEmail({
    to: email,
    subject: isScan
      ? "Your fulfilment scan results — Vareya"
      : "Your quote request — Vareya",
    html: `
      <h2>Thank you, ${name}</h2>
      <p>We have received your ${isScan ? "fulfilment scan" : "quote request"}.</p>
      <p>We will review your information and get back to you within one working day.</p>
      <p><strong>Reference:</strong> ${submissionId}</p>
      <hr />
      <p style="color: #64748B; font-size: 0.875rem;">
        Vareya BV — Bagven Park 6, 4838 EH Breda, The Netherlands<br />
        <a href="https://vareya.ai">vareya.ai</a>
      </p>
    `,
  });

  if (!result.success) {
    console.error(`[email] Failed to send confirmation to ${email} for ${submissionId}: ${result.error}`);
  }
}
