/**
 * POST /api/leads
 *
 * Processes fulfilment scan and quote form submissions.
 * Processing order: honeypot → validate → Turnstile → durable dashboard gate
 * → fallback notification → post-response secondary integrations
 *
 * Security:
 * - Server-side only (service role key never exposed)
 * - Turnstile validated server-side
 * - Honeypot detection
 * - Input sanitisation
 * - No PII in responses
 */

import { after, NextRequest, NextResponse } from "next/server";
import { generateSubmissionId, sanitiseLeadData, validateLeadInput } from "@/lib/leads";
import { validateTurnstile } from "@/lib/turnstile";
import { sendInternalNotification, sendProspectConfirmation } from "@/lib/email";
import { buildLeadDashboardPayload, notifyLeadDashboard } from "@/lib/lead-dashboard";
import { buildZapierPayload, notifyZapier } from "@/lib/zapier";

export const maxDuration = 30;

/** Bounded await — downstream services may be slow but must never hang the request. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | undefined> {
  return Promise.race([
    promise,
    new Promise<undefined>((resolve) => setTimeout(() => resolve(undefined), ms)),
  ]);
}

export async function POST(request: NextRequest) {
  try {
    let raw: Record<string, unknown>;
    try {
      raw = (await request.json()) as Record<string, unknown>;
    } catch {
      // Missing or malformed JSON body — the forms always send JSON.
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    // 0. Honeypot check — bot-only field, never the legitimate website field.
    if (typeof raw.bot_field === "string" && raw.bot_field.trim() !== "") {
      // Bot detected — return fake success
      console.log("[api/leads] Honeypot triggered — returning fake success");
      return NextResponse.json({
        success: true,
        submission_id: generateSubmissionId(),
      });
    }

    // 1. Validate input
    const { valid, errors } = validateLeadInput(raw);
    if (!valid) {
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 422 }
      );
    }

    // 1a. Rate limiting (basic — per IP)
    // TODO: Implement proper rate limiting with Redis or Upstash

    // 2. Validate Turnstile
    const turnstileToken = (raw.turnstile_token as string) || "";
    const turnstileResult = await validateTurnstile(turnstileToken);
    if (!turnstileResult.valid) {
      const codes = turnstileResult.codes.length
        ? turnstileResult.codes.join(", ")
        : "unknown";
      return NextResponse.json(
        {
          error: `Security check failed (${codes}). Please refresh and try again.`,
        },
        { status: 400 }
      );
    }

    // 3. Sanitise and generate submission ID
    const submissionId = generateSubmissionId();
    const clean = sanitiseLeadData({ ...raw, submission_id: submissionId });

    // 4. Supabase lead storage removed (project retired 2026-09 — migration history in docs/supabase-recovery/).
    //    Active lead channels: lead-dashboard webhook (VPS/Postgres), HubSpot, email notifications.
    //    Verified 2026-09-04: full form flow works end-to-end without Supabase.

    // 4.5 Durable lead-dashboard write — REQUIRED before any HTTP 200.
    //     The endpoint is idempotent via submission_id and the client makes
    //     exactly one bounded attempt.
    const dashboardDelivery = notifyLeadDashboard(
      buildLeadDashboardPayload(clean, submissionId),
      4000
    );

    // 5. Complete internal notification — actionable fallback copy.
    //    A dashboard write is the durable gate; email failure is logged but
    //    cannot turn an already persisted lead into a visitor-facing failure.
    const internalDelivery = withTimeout(
      sendInternalNotification(
        submissionId,
        (clean.form_type as string) || "unknown",
        (clean.company as string) || "Unknown",
        (clean.name as string) || "Unknown",
        {
          email: clean.work_email ? String(clean.work_email) : undefined,
          phone: clean.phone ? String(clean.phone) : undefined,
          website: clean.website ? String(clean.website) : undefined,
          message: clean.comments ? String(clean.comments) : undefined,
          utm_source: clean.utm_source ? String(clean.utm_source) : undefined,
          utm_medium: clean.utm_medium ? String(clean.utm_medium) : undefined,
          utm_campaign: clean.utm_campaign ? String(clean.utm_campaign) : undefined,
          utm_content: clean.utm_content ? String(clean.utm_content) : undefined,
          landing_page: clean.landing_page ? String(clean.landing_page) : undefined,
          platform: clean.ecommerce_platform ? String(clean.ecommerce_platform) : undefined,
          volume: clean.monthly_order_volume ? String(clean.monthly_order_volume) : undefined,
          markets: Array.isArray(clean.target_markets) ? clean.target_markets : undefined,
        }
      ),
      6000
    );

    const [dashboardStatus, internalDelivered] = await Promise.all([
      dashboardDelivery,
      internalDelivery,
    ]);

    if (!internalDelivered) {
      console.error(
        `[api/leads] Internal fallback notification failed/timed out for ${submissionId}`
      );
    }

    if (dashboardStatus !== "sent") {
      console.error(
        `[api/leads] Durable lead-dashboard write ${dashboardStatus} for ${submissionId}`
      );
      return NextResponse.json(
        { error: "We couldn't safely save your submission right now. Please try again in a moment." },
        { status: 503 }
      );
    }

    // 5.5 HubSpot sync — secondary, post-response and lifecycle-tracked.
    after(async () => {
      if (!process.env.HUBSPOT_ACCESS_TOKEN) return;

      try {
        const { syncLead } = await import("@/lib/hubspot");
        const hsResult = await withTimeout(
          syncLead({
            name: String(clean.name || ""),
            company: String(clean.company || ""),
            work_email: String(clean.work_email || ""),
            phone_number: clean.phone ? String(clean.phone) : undefined,
            company_country: clean.company_country ? String(clean.company_country) : undefined,
            ecommerce_platform: clean.ecommerce_platform ? String(clean.ecommerce_platform) : undefined,
            monthly_order_volume: clean.monthly_order_volume ? String(clean.monthly_order_volume) : undefined,
            target_markets: Array.isArray(clean.target_markets) ? clean.target_markets : undefined,
            landing_page: clean.landing_page ? String(clean.landing_page) : undefined,
            device: clean.device ? String(clean.device) : undefined,
            utm_source: clean.utm_source ? String(clean.utm_source) : undefined,
            utm_medium: clean.utm_medium ? String(clean.utm_medium) : undefined,
            utm_campaign: clean.utm_campaign ? String(clean.utm_campaign) : undefined,
            utm_content: clean.utm_content ? String(clean.utm_content) : undefined,
            submission_id: submissionId,
            form_type: String(clean.form_type || "unknown"),
          }),
          6000
        );
        if (!hsResult) {
          console.error(`[api/leads] HubSpot sync timed out for ${submissionId}`);
        } else if (hsResult.status === "synced") {
          console.log(`[api/leads] HubSpot synced for ${submissionId}`);
        } else {
          console.error(
            `[api/leads] HubSpot sync ${hsResult.status} for ${submissionId}`
          );
        }
      } catch {
        console.error(`[api/leads] HubSpot module load failed for ${submissionId}`);
      }
    });

    // 6. Prospect confirmation — post-response via after() (best-effort).
    //    No visitor-facing latency; tracked by the function lifecycle.
    after(async () => {
      const confirmationSent = await withTimeout(
        sendProspectConfirmation(
          clean.work_email as string,
          (clean.name as string) || "there",
          (clean.form_type as string) || "unknown",
          submissionId
        ),
        8000
      );
      if (!confirmationSent) {
        console.error(`[api/leads] Prospect confirmation failed/timed out for ${submissionId}`);
      }
    });


    // 6.6 Zapier webhook — secondary, best-effort and post-response.
    //     Scheduled via next/server after(), skipped entirely when
    //     ZAPIER_WEBHOOK_URL is not set.
    after(async () => {
      const zapierStatus = await notifyZapier(
        buildZapierPayload(clean, submissionId),
        4000
      );
      if (!zapierStatus || zapierStatus !== "sent") {
        console.error(
          `[api/leads] Zapier webhook ${zapierStatus || "incomplete"} for ${submissionId}`
        );
      }
    });

    // 7. Return success
    return NextResponse.json({
      success: true,
      submission_id: submissionId,
    });
  } catch (err) {
    console.error("[api/leads] Unhandled error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * Rate limiting helper — placeholder.
 * Replace with Upstash Redis or similar in production.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _checkRateLimit(_ip: string): boolean {
  // TODO: Implement rate limiting
  return true;
}
