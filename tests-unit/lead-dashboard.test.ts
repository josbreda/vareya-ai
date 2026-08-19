/**
 * Lead Dashboard webhook — unit tests (node:test).
 * Run: npm run test:unit
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const {
  buildLeadDashboardPayload,
  notifyLeadDashboard,
  LEAD_DASHBOARD_ENDPOINT,
} = await import("../src/lib/lead-dashboard.ts");

const SENTINEL = "SENTINEL_TEST_KEY_1234567890";

/** Installeert een fetch-mock; retourneert de vastgelegde calls. */
type FetchCall = {
  url: string;
  init: {
    method?: string;
    headers: Record<string, string>;
    body?: string;
    signal: AbortSignal;
  };
};

function mockFetch(
  handler: (
    n: number,
    init: { method?: string; headers: Record<string, string>; body?: string; signal: AbortSignal },
  ) => Response | Promise<Response>,
): FetchCall[] {
  const calls: FetchCall[] = [];
  globalThis.fetch = async (url: string | URL | Request, init?: RequestInit) => {
    const urlStr = String(url);
    const normalized = {
      method: init?.method,
      headers: (init?.headers ?? {}) as Record<string, string>,
      body: typeof init?.body === "string" ? init.body : undefined,
      signal: (init?.signal ?? new AbortController().signal) as AbortSignal,
    };
    calls.push({ url: urlStr, init: normalized });
    return handler(calls.length, normalized);
  };
  return calls;
}

test("1. succesvolle webhook: POST met X-API-Key naar correct endpoint", async () => {
  process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY = SENTINEL;
  const calls = mockFetch(() => new Response("{}", { status: 201 }));
  const status = await notifyLeadDashboard(
    buildLeadDashboardPayload(
      { company: "ACME", work_email: "a@b.co", name: "Ann", submission_id: "sub-1" },
      "sub-1",
    ),
  );
  assert.equal(status, "sent");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, LEAD_DASHBOARD_ENDPOINT);
  assert.equal(calls[0].init.method, "POST");
  assert.equal(calls[0].init.headers["X-API-Key"], SENTINEL);
});

test("2. nieuwe scan payload mapping: alle contractvelden juist", () => {
  const p = buildLeadDashboardPayload(
    {
      company: "  Acme Ltd ",
      work_email: "bob@acme.co",
      name: "Bob",
      phone: "+31 6 0000",
      website: "acme.co",
      company_country: "United Kingdom",
      product_category: "fashion",
      ecommerce_platform: "shopify",
      monthly_order_volume: "500-1000",
      sku_count: "42",
      comments: "hello",
      landing_page: "/free-rate-scan/",
      referrer: "https://google.com",
      utm_source: "outbound",
      utm_medium: "email",
      utm_campaign: "uk_ecommerce_pilot_01",
      utm_content: "acme",
      desired_start_date: "2026-09-01",
      target_markets: ["nl", "de"],
      services_needed: ["pick-pack"],
      device: "desktop",
    },
    "sub-9",
  );
  assert.equal(p.company, "Acme Ltd");
  assert.equal(p.email, "bob@acme.co");
  assert.equal(p.name, "Bob");
  assert.equal(p.phone, "+31 6 0000");
  assert.equal(p.website, "acme.co");
  assert.equal(p.country, "United Kingdom");
  assert.equal(p.product_category, "fashion");
  assert.equal(p.platform, "shopify");
  assert.equal(p.order_volume, "500-1000");
  assert.equal(p.sku_count, 42);
  assert.equal(p.message, "hello");
  assert.equal(p.form_type, "scan");
  assert.equal(p.source_page, "/free-rate-scan/");
  assert.equal(p.referrer, "https://google.com");
  assert.equal(p.utm_source, "outbound");
  assert.equal(p.utm_medium, "email");
  assert.equal(p.utm_campaign, "uk_ecommerce_pilot_01");
  assert.equal(p.utm_content, "acme");
  assert.equal(p.desired_start_date, "2026-09-01");
  assert.equal(p.submission_id, "sub-9");
  assert.ok(p.timestamp);
});

test("3. ontbrekende optionele velden worden weggelaten", () => {
  const p = buildLeadDashboardPayload(
    { company: "Min", work_email: "m@m.co", submission_id: "sub-2" },
    "sub-2",
  );
  const json = JSON.stringify(p);
  for (const key of ["name", "phone", "website", "country", "utm_source", "sku_count", "desired_start_date"]) {
    assert.ok(!json.includes(`"${key}"`), `veld ${key} mag niet aanwezig zijn`);
  }
  assert.equal(p.source_page, "/free-rate-scan/"); // default
});

test("4. extra scan-velden blijven behouden", () => {
  const p = buildLeadDashboardPayload(
    {
      company: "X",
      work_email: "x@x.co",
      target_markets: ["nl", "fr", "de"],
      services_needed: ["storage", "returns"],
      device: "mobile",
    },
    "sub-3",
  );
  assert.deepEqual(p.target_markets, ["nl", "fr", "de"]);
  assert.deepEqual(p.services_needed, ["storage", "returns"]);
  assert.equal(p.device, "mobile");
});

test("5. ontbrekende credential: fetch wordt NIET aangeroepen", async () => {
  delete process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY;
  const calls = mockFetch(() => new Response("{}", { status: 201 }));
  const status = await notifyLeadDashboard(
    buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-4"),
  );
  assert.equal(status, "not_configured");
  assert.equal(calls.length, 0);
});

test("6. dashboard timeout: abort levert 'timeout'", async () => {
  process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY = SENTINEL;
  mockFetch((_n: number, init: { method?: string; headers: Record<string, string>; body?: string; signal: AbortSignal }) =>
    new Promise<never>((_res, rej) => {
      init.signal.addEventListener("abort", () =>
        rej(Object.assign(new Error("aborted"), { name: "AbortError" })),
      );
    }),
  );
  const status = await notifyLeadDashboard(
    buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-6"),
    40,
  );
  assert.equal(status, "timeout");
});

test("7. dashboard HTTP 500: 'failed', gooit niet", async () => {
  process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY = SENTINEL;
  mockFetch(() => new Response("boom", { status: 500 }));
  const status = await notifyLeadDashboard(
    buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-7"),
  );
  assert.equal(status, "failed");
});

test("8. idempotentie: geen automatische retry, submission_id stabiel", async () => {
  process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY = SENTINEL;
  const calls = mockFetch(() => new Response("boom", { status: 500 }));
  await notifyLeadDashboard(
    buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-8"),
  );
  assert.equal(calls.length, 1); // exact één poging, geen retry
  const body = JSON.parse(calls[0].init.body);
  assert.equal(body.submission_id, "sub-8");
});

test("9. attributie behouden in payload", () => {
  const p = buildLeadDashboardPayload(
    {
      company: "X",
      work_email: "x@x.co",
      utm_source: "outbound",
      utm_medium: "email",
      utm_campaign: "uk_ecommerce_pilot_01",
      utm_content: "thrifted",
      landing_page: "/free-rate-scan/",
    },
    "sub-9",
  );
  assert.equal(p.utm_source, "outbound");
  assert.equal(p.utm_medium, "email");
  assert.equal(p.utm_campaign, "uk_ecommerce_pilot_01");
  assert.equal(p.utm_content, "thrifted");
  assert.equal(p.source_page, "/free-rate-scan/");
});

test("12. dashboard-falen breekt geaccepteerde lead niet: geen throw", async () => {
  process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY = SENTINEL;
  mockFetch(() => Promise.reject(new Error("ECONNREFUSED")));
  const status = await notifyLeadDashboard(
    buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-12"),
  );
  assert.equal(status, "failed");
});

test("13. credential zit niet in client-bundel: scanpagina importeert module niet", () => {
  const scanPage = readFileSync(
    join(process.cwd(), "src", "app", "free-rate-scan", "page.tsx"),
    "utf8",
  );
  assert.ok(!scanPage.includes("lead-dashboard"));
  assert.ok(!scanPage.includes("LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY"));
  const quotePage = readFileSync(
    join(process.cwd(), "src", "app", "request-fulfilment-quote", "page.tsx"),
    "utf8",
  );
  assert.ok(!quotePage.includes("lead-dashboard"));
});

test("14. geen secret in logs", async () => {
  process.env.LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY = SENTINEL;
  const logs: string[] = [];
  const orig = console.error;
  console.error = (...args) => logs.push(JSON.stringify(args));
  try {
    mockFetch(() => new Response("boom", { status: 401 }));
    await notifyLeadDashboard(
      buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-14"),
    );
    mockFetch(() => Promise.reject(new Error("network down")));
    await notifyLeadDashboard(
      buildLeadDashboardPayload({ company: "X", work_email: "x@x.co" }, "sub-14b"),
    );
  } finally {
    console.error = orig;
  }
  for (const line of logs) {
    assert.ok(!line.includes(SENTINEL), "log mag de key niet bevatten");
  }
});
