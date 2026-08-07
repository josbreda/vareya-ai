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

function scoreFit(lead: LeadData): { score: number; status: string } {
  let score = 0;
  if (lead.ecommerce_platform?.toLowerCase() === "shopify") score += 1;
  if (lead.ecommerce_platform?.toLowerCase().includes("amazon")) score += 1;
  const vol = lead.monthly_order_volume || "";
  if (vol.includes("1000") || vol.includes("2000") || vol.includes("5000")) score += 2;
  else if (vol.includes("500")) score += 1;
  if ((lead.target_markets || []).length > 3) score += 1;
  if (lead.form_type === "scan") score += 2;
  const status = score >= 7 ? "QUALIFIED" : score >= 4 ? "POSSIBLE FIT" : "NOT A FIT";
  return { score, status };
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
    const fit = scoreFit(lead);
    result.fitScore = fit.score;
    const taskBody = {
      properties: {
        hs_task_subject: `[${fit.status}] ${lead.company} — ${lead.name}`,
        hs_task_body: `FIT SCORE: ${fit.score}/10 (${fit.status})\n\nSubmission: ${lead.submission_id}\nForm: ${lead.form_type}\nPlatform: ${lead.ecommerce_platform||"N/A"}\nVolume: ${lead.monthly_order_volume||"N/A"}\nMarkets: ${(lead.target_markets||[]).join(", ")||"N/A"}\nLanding: ${lead.landing_page||"N/A"}\nDevice: ${lead.device||"N/A"}\n\nREVIEW: Check platform compatibility, volume threshold (500+/mo), product fit, market coverage within 1 working day.`,
        hs_task_status: "NOT_STARTED", hs_task_priority: fit.score >= 4 ? "HIGH" : "MEDIUM",
        hs_timestamp: new Date().toISOString(),
      },
    };
    const tr = await hs("POST","/crm/v3/objects/tasks",taskBody);
    result.taskId = tr.id;
    result.status = "synced";
  } catch(e) { result.status = "retry_pending"; result.error = e instanceof Error ? e.message.slice(0,255) : "Unknown"; }
  return result;
}
