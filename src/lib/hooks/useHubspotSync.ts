/**
 * HubSpot CRM sync layer for Vareya.ai.
 * 
 * Architecture: lead dashboard (VPS/Postgres) first. HubSpot is downstream. 
 * If HubSpot fails, the lead is still safely stored in the lead dashboard.
 */

const HUBSPOT_BASE = "https://api.hubapi.com";

interface HubSpotSyncResult {
  contactId: string | null;
  companyId: string | null;
  taskId: string | null;
  associationCreated: boolean;
  error?: string;
}

interface LeadData {
  name: string;
  company: string;
  work_email: string;
  phone_number?: string;
  company_country?: string;
  ecommerce_platform?: string;
  monthly_order_volume?: string;
  target_markets?: string[];
  landing_page?: string;
  device?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  submission_id: string;
  form_type: string;
}

async function hsFetch(endpoint: string, options: RequestInit = {}) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) throw new Error("HUBSPOT_ACCESS_TOKEN not configured");

  const url = endpoint.startsWith("http") ? endpoint : `${HUBSPOT_BASE}${endpoint}`;
  
  const res = await fetch(url, {
    ...options,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HubSpot API error ${res.status}: ${body.slice(0, 200)}`);
  }

  return res.json();
}

/**
 * Upsert a contact in HubSpot. Uses email as unique identifier.
 */
async function upsertContact(lead: LeadData): Promise<string> {
  const properties: Record<string, string> = {
    email: lead.work_email,
    firstname: lead.name.split(" ")[0] || lead.name,
    lastname: lead.name.split(" ").slice(1).join(" ") || "",
    phone: lead.phone_number || "",
    hs_lead_status: "NEW",
  };

  // Search for existing contact by email
  try {
    const searchRes = await hsFetch(`/crm/v3/objects/contacts/search`, {
      method: "POST",
      body: JSON.stringify({
        filterGroups: [{
          filters: [{ propertyName: "email", operator: "EQ", value: lead.work_email }],
        }],
      }),
    });

    if (searchRes.results?.length > 0) {
      const contactId = searchRes.results[0].id;
      // Update existing contact
      await hsFetch(`/crm/v3/objects/contacts/${contactId}`, {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      });
      return contactId;
    }
  } catch {
    // Search failed or contact not found — create new
  }

  // Create new contact
  const createRes = await hsFetch("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  return createRes.id;
}

/**
 * Upsert a company in HubSpot. Uses company name as unique identifier.
 */
async function upsertCompany(lead: LeadData): Promise<string> {
  const properties: Record<string, string> = {
    name: lead.company,
    country: lead.company_country || "",
  };

  // Search for existing company
  try {
    const searchRes = await hsFetch(`/crm/v3/objects/companies/search`, {
      method: "POST",
      body: JSON.stringify({
        filterGroups: [{
          filters: [{ propertyName: "name", operator: "EQ", value: lead.company }],
        }],
      }),
    });

    if (searchRes.results?.length > 0) {
      return searchRes.results[0].id;
    }
  } catch {
    // Fall through to create
  }

  const createRes = await hsFetch("/crm/v3/objects/companies", {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  return createRes.id;
}

/**
 * Create association between contact and company.
 */
async function createAssociation(contactId: string, companyId: string): Promise<void> {
  // Using v4 associations API
  await hsFetch(`/crm/v4/objects/contacts/${contactId}/associations/companies/${companyId}`, {
    method: "PUT",
  });
}

/**
 * Create a follow-up task for the lead.
 */
async function createTask(contactId: string, lead: LeadData): Promise<string> {
  const taskBody = {
    properties: {
      hs_task_subject: `New lead: ${lead.company} — ${lead.name}`,
      hs_task_body: `Form type: ${lead.form_type}\nSubmission ID: ${lead.submission_id}\nPlatform: ${lead.ecommerce_platform || "N/A"}\nVolume: ${lead.monthly_order_volume || "N/A"}\nMarkets: ${(lead.target_markets || []).join(", ") || "N/A"}\nLanding page: ${lead.landing_page || "N/A"}\nDevice: ${lead.device || "N/A"}`,
      hs_task_status: "NOT_STARTED",
      hs_task_priority: "HIGH",
      hs_timestamp: new Date().toISOString(),
    },
    associations: [{
      to: { id: contactId },
      types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 204 }],
    }],
  };

  const res = await hsFetch("/crm/v3/objects/tasks", {
    method: "POST",
    body: JSON.stringify(taskBody),
  });

  return res.id;
}

/**
 * Main sync function — call this after the lead-dashboard ingest succeeds.
 * The lead dashboard always gets the lead first. HubSpot sync is non-blocking.
 */
export async function syncToHubSpot(lead: LeadData): Promise<HubSpotSyncResult> {
  const result: HubSpotSyncResult = {
    contactId: null,
    companyId: null,
    taskId: null,
    associationCreated: false,
  };

  try {
    // Step 1: Upsert contact
    result.contactId = await upsertContact(lead);

    // Step 2: Upsert company
    result.companyId = await upsertCompany(lead);

    // Step 3: Create association
    if (result.contactId && result.companyId) {
      await createAssociation(result.contactId, result.companyId);
      result.associationCreated = true;
    }

    // Step 4: Create follow-up task
    if (result.contactId) {
      result.taskId = await createTask(result.contactId, lead);
    }

    return result;
  } catch (error) {
    return {
      ...result,
      error: error instanceof Error ? error.message : "Unknown HubSpot sync error",
    };
  }
}
