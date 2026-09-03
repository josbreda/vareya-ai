/**
 * Zapier webhook — unit tests (node:test).
 * Run: npm run test:unit
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const { buildZapierPayload, notifyZapier } = await import("../src/lib/zapier.ts");

const SENTINEL_URL = "https://hooks.zapier.com/hooks/catch/123456/abcdef/";

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

test("1. succesvolle webhook: POST JSON naar de Zapier Catch Hook", async () => {
  process.env.ZAPIER_WEBHOOK_URL = SENTINEL_URL;
  const calls = mockFetch(() => new Response("{}", { status: 200 }));
  const status = await notifyZapier(
    buildZapierPayload(
      { form_type: "quote", company: "ACME", work_email: "a@b.co", name: "Ann" },
      "sub-1",
    ),
  );
  assert.equal(status, "sent");
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, SENTINEL_URL);
  assert.equal(calls[0].init.method, "POST");
  assert.equal(calls[0].init.headers["Content-Type"], "application/json");
});

test("2. quote payload mapping: platte velden voor Offorte-mapping", () => {
  const p = buildZapierPayload(
    {
      form_type: "quote",
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
      landing_page: "/request-fulfilment-quote/",
      referrer: "https://google.com",
      utm_source: "outbound",
      utm_medium: "email",
      utm_campaign: "uk_ecommerce_pilot_01",
      utm_content: "acme",
      desired_start_date: "2026-09-01",
      target_markets: ["nl", "de"],
    },
    "sub-9",
  );
  assert.equal(p.form_type, "quote");
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
  assert.equal(p.source_page, "/request-fulfilment-quote/");
  assert.equal(p.referrer, "https://google.com");
  assert.equal(p.utm_source, "outbound");
  assert.equal(p.utm_medium, "email");
  assert.equal(p.utm_campaign, "uk_ecommerce_pilot_01");
  assert.equal(p.utm_content, "acme");
  assert.equal(p.desired_start_date, "2026-09-01");
  assert.deepEqual(p.target_markets, ["nl", "de"]);
  assert.equal(p.submission_id, "sub-9");
  assert.ok(p.timestamp);
});

test("3. scan payload: form_type wordt scan", () => {
  const p = buildZapierPayload(
    { form_type: "scan", company: "ScanCo", work_email: "s@s.co" },
    "sub-scan",
  );
  assert.equal(p.form_type, "scan");
});

test("4. ontbrekende optionele velden worden weggelaten", () => {
  const p = buildZapierPayload(
    { form_type: "quote", company: "Min", work_email: "m@m.co" },
    "sub-2",
  );
  const json = JSON.stringify(p);
  for (const key of [
    "name",
    "phone",
    "website",
    "country",
    "utm_source",
    "sku_count",
    "desired_start_date",
    "target_markets",
  ]) {
    assert.ok(!json.includes(`"${key}"`), `veld ${key} mag niet aanwezig zijn`);
  }
});

test("5. ontbrekende credential: fetch wordt NIET aangeroepen", async () => {
  delete process.env.ZAPIER_WEBHOOK_URL;
  const calls = mockFetch(() => new Response("{}", { status: 200 }));
  const status = await notifyZapier(
    buildZapierPayload({ form_type: "quote", company: "X", work_email: "x@x.co" }, "sub-4"),
  );
  assert.equal(status, "not_configured");
  assert.equal(calls.length, 0);
});

test("6. Zapier timeout: abort levert 'timeout'", async () => {
  process.env.ZAPIER_WEBHOOK_URL = SENTINEL_URL;
  mockFetch((_n: number, init: { method?: string; headers: Record<string, string>; body?: string; signal: AbortSignal }) =>
    new Promise<never>((_res, rej) => {
      init.signal.addEventListener("abort", () =>
        rej(Object.assign(new Error("aborted"), { name: "AbortError" })),
      );
    }),
  );
  const status = await notifyZapier(
    buildZapierPayload({ form_type: "quote", company: "X", work_email: "x@x.co" }, "sub-6"),
    40,
  );
  assert.equal(status, "timeout");
});

test("7. Zapier HTTP 500: 'failed', gooit niet", async () => {
  process.env.ZAPIER_WEBHOOK_URL = SENTINEL_URL;
  mockFetch(() => new Response("boom", { status: 500 }));
  const status = await notifyZapier(
    buildZapierPayload({ form_type: "quote", company: "X", work_email: "x@x.co" }, "sub-7"),
  );
  assert.equal(status, "failed");
});

test("8. Zapier-falen breekt geaccepteerde lead niet: geen throw", async () => {
  process.env.ZAPIER_WEBHOOK_URL = SENTINEL_URL;
  mockFetch(() => Promise.reject(new Error("ECONNREFUSED")));
  const status = await notifyZapier(
    buildZapierPayload({ form_type: "quote", company: "X", work_email: "x@x.co" }, "sub-12"),
  );
  assert.equal(status, "failed");
});

test("9. geen automatische retry: exact één poging, submission_id stabiel", async () => {
  process.env.ZAPIER_WEBHOOK_URL = SENTINEL_URL;
  const calls = mockFetch(() => new Response("boom", { status: 500 }));
  await notifyZapier(
    buildZapierPayload({ form_type: "quote", company: "X", work_email: "x@x.co" }, "sub-8"),
  );
  assert.equal(calls.length, 1);
  const body = JSON.parse(calls[0].init.body);
  assert.equal(body.submission_id, "sub-8");
});

test("10. credential zit niet in client-bundel: pagina's importeren module niet", () => {
  const quotePage = readFileSync(
    join(process.cwd(), "src", "app", "request-fulfilment-quote", "page.tsx"),
    "utf8",
  );
  assert.ok(!quotePage.includes("zapier"));
  const scanPage = readFileSync(
    join(process.cwd(), "src", "app", "free-rate-scan", "page.tsx"),
    "utf8",
  );
  assert.ok(!scanPage.includes("zapier"));
});

test("11. env-var-naam is exact ZAPIER_WEBHOOK_URL (server-side)", () => {
  const mod = readFileSync(join(process.cwd(), "src", "lib", "zapier.ts"), "utf8");
  assert.ok(mod.includes("process.env.ZAPIER_WEBHOOK_URL"));
  assert.ok(!/process\.env\.NEXT_PUBLIC_/.test(mod), "geen NEXT_PUBLIC_ env-gebruik");
});

test("12. webhook-aanroep zit binnen een after()-blok in de route", () => {
  const route = readFileSync(
    join(process.cwd(), "src", "app", "api", "leads", "route.ts"),
    "utf8",
  );
  const idx = route.indexOf("notifyZapier(");
  assert.ok(idx > 0, "notifyZapier moet aangeroepen worden");
  const before = route.lastIndexOf("after(async () => {", idx);
  assert.ok(before > 0, "zapier-aanroep moet binnen after() zitten");
  const blockEnd = route.indexOf("});", idx);
  assert.ok(idx > before && idx < blockEnd, "aanroep staat in het after()-blok");
  assert.ok(!route.includes("void notifyZapier"), "geen untracked promise");
});

test("13. geen secret of PII in logs — alleen submission_id", async () => {
  process.env.ZAPIER_WEBHOOK_URL = SENTINEL_URL;
  const logs: string[] = [];
  const orig = console.error;
  console.error = (...args) => logs.push(JSON.stringify(args));
  try {
    mockFetch(() => new Response("boom", { status: 401 }));
    await notifyZapier(
      buildZapierPayload(
        { form_type: "quote", company: "X", work_email: "secret@x.co", name: "Secret" },
        "sub-14",
      ),
    );
    mockFetch(() => Promise.reject(new Error("network down")));
    await notifyZapier(
      buildZapierPayload({ form_type: "quote", company: "X", work_email: "s2@x.co" }, "sub-14b"),
    );
  } finally {
    console.error = orig;
  }
  for (const line of logs) {
    assert.ok(!line.includes(SENTINEL_URL), "log mag de webhook-URL niet bevatten");
    assert.ok(!line.includes("secret@x.co"), "log mag geen PII bevatten");
  }
});
