/**
 * POST /api/leads
 *
 * Processes fulfilment scan and quote form submissions.
 * Processing order: validate → Turnstile → insert → notify → confirm → log
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
import { SERVER_ENV } from "@/lib/leads/config";

export const maxDuration = 30;

/** Bounded await — downstream services may be slow but must never hang the request. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | undefined> {
  return Promise.race([
    promise,
    new Promise<undefined>((resolve) => setTimeout(() => resolve(undefined), ms)),
  ]);
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  try {
    const raw = await request.json();

    // 0. Honeypot check
    if (raw.website && (raw.website as string).trim() !== "") {
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

    // 4. Insert into Supabase — best effort. Email + HubSpot are the lead
    //    channels; a storage outage must never cost a lead.
    let leadId: string | null = null;
    const supabaseConfigured = SERVER_ENV.supabaseUrl && SERVER_ENV.supabaseServiceRoleKey;

    if (supabaseConfigured) {
      try {
        // Dynamic import to avoid build errors when Supabase not installed
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(
          SERVER_ENV.supabaseUrl,
          SERVER_ENV.supabaseServiceRoleKey
        );

        const { data: lead, error: insertError } = await supabase
          .from("leads")
          .insert({
            submission_id: submissionId,
            form_type: clean.form_type,
            status: "new",
            name: clean.name,
            company: clean.company,
            work_email: clean.work_email,
            phone: clean.phone || null,
            website: clean.website || null,
            company_country: clean.company_country || null,
            monthly_order_volume: clean.monthly_order_volume || null,
            sku_count: clean.sku_count || null,
            product_category: clean.product_category || null,
            target_markets: clean.target_markets || [],
            ecommerce_platform: clean.ecommerce_platform || null,
            amazon_fbm: clean.amazon_fbm || false,
            returns_required: clean.returns_required || false,
            desired_start_date: clean.desired_start_date || null,
            comments: clean.comments || null,
            scan_answers: clean.form_type === "scan" ? clean : null,
            landing_page: clean.landing_page || "",
            referrer: clean.referrer || "",
            utm_source: clean.utm_source || null,
            utm_medium: clean.utm_medium || null,
            utm_campaign: clean.utm_campaign || null,
            utm_content: clean.utm_content || null,
            device: clean.device || null,
            privacy_acknowledged_at: clean.privacy_acknowledged_at || new Date().toISOString(),
          })
          .select("id")
          .single();

        if (insertError) {
          console.error("[api/leads] Supabase insert error — continuing email-only:", insertError);
        } else {
          leadId = lead?.id || null;

          // Log lead event (best effort — never blocks the lead)
          try {
            await supabase.from("lead_events").insert({
              lead_id: leadId,
              event_name: "lead_created",
              metadata: {
                form_type: clean.form_type,
                submission_id: submissionId,
                company: clean.company,
                processing_time_ms: Date.now() - startTime,
              },
            });
          } catch (eventErr) {
            console.error("[api/leads] lead_events insert failed:", eventErr);
          }
        }
      } catch (err) {
        console.error("[api/leads] Supabase unavailable — continuing email-only:", err);
      }
    } else {
      // Supabase not configured — log and continue with mock
      console.log("[api/leads] Supabase not configured — lead logged only:", {
        submission_id: submissionId,
        form_type: clean.form_type,
        company: clean.company,
        name: clean.name,
        processing_time_ms: Date.now() - startTime,
      });
    }

    // 4.5 Sync to HubSpot — awaited with timeout (secondary channel, tolerant)
    if (process.env.HUBSPOT_ACCESS_TOKEN) {
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
          console.error("[api/leads] HubSpot sync timed out");
        } else if (hsResult.status === "synced") {
          console.log("[api/leads] HubSpot synced:", {
            contactId: hsResult.contactId,
            companyId: hsResult.companyId,
            taskId: hsResult.taskId,
          });
        } else {
          console.error("[api/leads] HubSpot sync error:", hsResult.error ?? hsResult.status);
        }
      } catch (importErr) {
        console.error("[api/leads] HubSpot module load failed:", importErr);
      }
    }

    // 5. Internal notification — REQUIRED minimum delivery condition.
    //    A 2xx/thank-you is only returned when the lead has reached the
    //    owner's inbox. Everything else is secondary or best-effort.
    const internalDelivered = await sendInternalNotification(
      submissionId,
      (clean.form_type as string) || "unknown",
      (clean.company as string) || "Unknown",
      (clean.name as string) || "Unknown",
      {
        utm_source: clean.utm_source ? String(clean.utm_source) : undefined,
        utm_medium: clean.utm_medium ? String(clean.utm_medium) : undefined,
        utm_campaign: clean.utm_campaign ? String(clean.utm_campaign) : undefined,
        utm_content: clean.utm_content ? String(clean.utm_content) : undefined,
        landing_page: clean.landing_page ? String(clean.landing_page) : undefined,
        platform: clean.ecommerce_platform ? String(clean.ecommerce_platform) : undefined,
        volume: clean.monthly_order_volume ? String(clean.monthly_order_volume) : undefined,
        markets: Array.isArray(clean.target_markets) ? clean.target_markets : undefined,
      }
    );

    if (!internalDelivered) {
      console.error(
        `[api/leads] Minimum delivery condition FAILED — internal notification not delivered for ${submissionId}`
      );
      return NextResponse.json(
        { error: "We couldn't process your submission right now. Please try again in a moment." },
        { status: 502 }
      );
    }

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

    // 6.5 Lead-dashboard webhook — ADDITIVE, best-effort, never blocks the lead.
    //     Scheduled via next/server after(): tracked by the Vercel function
    //     lifecycle (runs after the response is flushed, within maxDuration),
    //     NOT an untracked fire-and-forget promise.
    after(async () => {
      const dashboardStatus = await notifyLeadDashboard(
        buildLeadDashboardPayload(clean, submissionId),
        4000
      );
      if (!dashboardStatus || dashboardStatus !== "sent") {
        console.error(
          `[api/leads] Lead dashboard webhook ${dashboardStatus || "incomplete"} for ${submissionId}`
        );
      }
    });

    // 6.6 Zapier webhook — ADDITIVE, best-effort, never blocks the lead.
    //     Mirrors the lead-dashboard webhook: scheduled via next/server
    //     after(), skipped entirely when ZAPIER_WEBHOOK_URL is not set.
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
