/**
 * HubSpot CRM Integration — Vareya.ai
 * Architecture: Supabase-first. HubSpot downstream. Never lose a lead.
 */
const HS = "https://api.hubapi.com";

export type SyncStatus = "not_required" | "pending" | "syncing" | "synced" | "retry_pending" | "failed_manual_review";
export type LeadStatus = "new" | "contacted" | "qualified" | "proposal" | "closed_won" | "closed_lost" | "unqualified";

interface LeadData {
  name: string; company: string; work_email: string;
  phone_number?: string; company_country?: string;
  ecommerce_platform?: string; monthly_order_volume?: string;
  target_markets?: string[]; landing_page?: string; device?: string;
  utm_source?: string; utm_medium?: string; utm_campaign?: string; utm_content?: string;
  submission_id: string; form_type: string;
}

interface SyncResult { contactId: string | null; companyId: string | null; taskId: string | null; dealId: string | null; status: SyncStatus; fitScore?: number; error?: string; }

function scoreWarmth(lead: LeadData): { fitScore: number; intentScore: number; totalScore: number; status: string } {
  // FIT SCORE (0-50): operational compatibility
  let fit = 0;
  if (lead.ecommerce_platform?.toLowerCase() === "shopify") fit += 10;
  if (lead.ecommerce_platform?.toLowerCase().includes("amazon")) fit += 5;
  const vol = lead.monthly_order_volume || "";
  if (vol.includes("2000") || vol.includes("5000")) fit += 15;
  else if (vol.includes("1000")) fit += 12;
  else if (vol.includes("500")) fit += 8;
  if ((lead.target_markets || []).length >= 3) fit += 5;
  if ((lead.target_markets || []).length >= 5) fit += 5;
  fit = Math.min(fit, 50);
  
  // INTENT SCORE (0-50): commercial signals
  let intent = 0;
  if (lead.form_type === "scan") intent += 20;  // highest intent
  else if (lead.form_type === "quote") intent += 25;  // explicit buying intent
  if (lead.utm_source?.toLowerCase().includes("linkedin")) intent += 5;
  if (lead.utm_medium === "cpc") intent += 5;
  if (lead.utm_campaign) intent += 3;
  if (lead.landing_page?.includes("scan")) intent += 5;
  if (lead.landing_page?.includes("quote")) intent += 5;
  if (lead.landing_page?.includes("shopify") || lead.landing_page?.includes("us-brands")) intent += 3;
  intent = Math.min(intent, 50);
  
  const total = fit + intent;
  const status = total >= 70 ? "HOT" : total >= 40 ? "WARM" : total >= 20 ? "COOL" : "COLD";
  return { fitScore: fit, intentScore: intent, totalScore: total, status };
}

async function hs(method: string, path: string, body?: unknown) {
  const t = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!t) throw new Error("HUBSPOT_ACCESS_TOKEN not set");
  const r = await fetch(`${HS}${path}`, { method, headers: { Authorization: `Bearer ${t}`, "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
  if (!r.ok) { const b = await r.text().catch(() => ""); throw new Error(`HS ${r.status}: ${b.slice(0,200)}`); }
  return r.json();
}

export async function syncLead(lead: LeadData): Promise<SyncResult> {
  const result: SyncResult = { contactId: null, companyId: null, taskId: null, dealId: null, status: "syncing" };
  try {
    const email = lead.work_email.toLowerCase().trim();
    // 1. Contact upsert
    const props: Record<string,string> = { email, firstname: lead.name.split(" ")[0]||lead.name, lastname: lead.name.split(" ").slice(1).join(" ")||"", phone: lead.phone_number||"" };
    let contactId: string;
    try {
      const sr = await hs("POST","/crm/v3/objects/contacts/search",{filterGroups:[{filters:[{propertyName:"email",operator:"EQ",value:email}]}]});
      if (sr.results?.length) { contactId = sr.results[0].id; await hs("PATCH",`/crm/v3/objects/contacts/${contactId}`,{properties:props}); }
      else { const cr = await hs("POST","/crm/v3/objects/contacts",{properties:props}); contactId = cr.id; }
    } catch(e) { const cr = await hs("POST","/crm/v3/objects/contacts",{properties:props}); contactId = cr.id; }
    result.contactId = contactId;
    // 2. Company upsert
    let companyId: string;
    try {
      const sr = await hs("POST","/crm/v3/objects/companies/search",{filterGroups:[{filters:[{propertyName:"name",operator:"EQ",value:lead.company}]}]});
      if (sr.results?.length) { companyId = sr.results[0].id; }
      else { const cr = await hs("POST","/crm/v3/objects/companies",{properties:{name:lead.company,country:lead.company_country||""}}); companyId = cr.id; }
    } catch(e) { const cr = await hs("POST","/crm/v3/objects/companies",{properties:{name:lead.company}}); companyId = cr.id; }
    result.companyId = companyId;
    // 3. Association
    try { await hs("PUT",`/crm/v4/objects/contacts/${contactId}/associations/companies/${companyId}`); } catch(e) { /* non-blocking */ }
    // 4. Score & task
    const w = scoreWarmth(lead);
    result.fitScore = w.totalScore;
    const taskProps: Record<string, string> = {
      hs_task_subject: `[${w.status}] ${lead.company} — ${lead.name}`,
      hs_task_body: `WARMTH: ${w.totalScore}/100 (${w.status}) | FIT: ${w.fitScore}/50 | INTENT: ${w.intentScore}/50\n\nSubmission: ${lead.submission_id}\nForm: ${lead.form_type}\nPlatform: ${lead.ecommerce_platform||"N/A"}\nVolume: ${lead.monthly_order_volume||"N/A"}\nMarkets: ${(lead.target_markets||[]).join(", ")||"N/A"}\nLanding: ${lead.landing_page||"N/A"}\nDevice: ${lead.device||"N/A"}\nAttribution: utm_source=${lead.utm_source||"—"} · utm_medium=${lead.utm_medium||"—"} · utm_campaign=${lead.utm_campaign||"—"} · utm_content=${lead.utm_content||"—"}\n\nREVIEW: Check platform compatibility, volume threshold (500+/mo), product fit, market coverage within 1 working day.`,
      hs_task_status: "NOT_STARTED", hs_task_priority: w.totalScore >= 40 ? "HIGH" : "MEDIUM",
      hs_timestamp: new Date().toISOString(),
    };
    // Assign owner when configured (portal default otherwise)
    if (process.env.HUBSPOT_OWNER_ID) {
      taskProps.hubspot_owner_id = process.env.HUBSPOT_OWNER_ID;
    }
    const tr = await hs("POST", "/crm/v3/objects/tasks", { properties: taskProps });
    result.taskId = tr.id;
    // Associate the follow-up task with the contact so it shows on the lead
    // record (best-effort — sync must not fail when association is blocked)
    try {
      await hs("PUT", `/crm/v3/objects/tasks/${tr.id}/associations/contacts/${contactId}/task_to_contact`);
    } catch (e) {
      console.error("[hubspot] Task association to contact failed:", e instanceof Error ? e.message : e);
    }
    result.status = "synced";
  } catch(e) { result.status = "retry_pending"; result.error = e instanceof Error ? e.message.slice(0,255) : "Unknown"; }
  return result;
}
