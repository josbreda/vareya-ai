import { afterEach, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);
const { sendInternalNotification, sendProspectConfirmation } = await jiti.import(
  "../src/lib/email/index.ts",
);

const originalFetch = globalThis.fetch;
const originalResendKey = process.env.RESEND_API_KEY;
const originalOwner = process.env.LEAD_OWNER_EMAIL;

let sentBodies: Array<Record<string, unknown>> = [];
let resendStatus = 200;

beforeEach(() => {
  sentBodies = [];
  resendStatus = 200;
  process.env.RESEND_API_KEY = "test-resend-key";
  process.env.LEAD_OWNER_EMAIL = "owner@example.com";
  globalThis.fetch = async (_url: string | URL | Request, init?: RequestInit) => {
    sentBodies.push(JSON.parse(String(init?.body ?? "{}")));
    return new Response(
      JSON.stringify(resendStatus < 300 ? { id: "email-test-id" } : { message: "rejected" }),
      { status: resendStatus, headers: { "Content-Type": "application/json" } },
    );
  };
});

afterEach(() => {
  globalThis.fetch = originalFetch;
  if (originalResendKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalResendKey;
  if (originalOwner === undefined) delete process.env.LEAD_OWNER_EMAIL;
  else process.env.LEAD_OWNER_EMAIL = originalOwner;
});

test("prospect confirmation returns true when Resend accepts it", async () => {
  const sent = await sendProspectConfirmation(
    "prospect@example.com",
    "Prospect",
    "quote",
    "sub-confirm-ok",
  );

  assert.equal(sent, true);
  assert.equal(sentBodies.length, 1);
});

test("prospect confirmation returns false when Resend rejects it", async () => {
  resendStatus = 500;

  const sent = await sendProspectConfirmation(
    "prospect@example.com",
    "Prospect",
    "scan",
    "sub-confirm-fail",
  );

  assert.equal(sent, false);
  assert.equal(sentBodies.length, 1);
});

test("internal fallback includes escaped prospect contact details and message", async () => {
  const sent = await sendInternalNotification(
    "sub-fallback",
    "quote",
    "Company <script>alert(1)</script>",
    "Name & Partner",
    {
      email: "prospect@example.com<script>",
      phone: "+31 <img src=x onerror=alert(1)>",
      website: "https://example.com/?a=1&b=<script>",
      message: 'Need "fast" <b>handling</b> & returns',
      platform: "shopify",
      volume: "500-1000",
      markets: ["nl", "de"],
    },
  );

  assert.equal(sent, true);
  assert.equal(sentBodies.length, 1);
  const html = String(sentBodies[0].html);
  assert.match(html, /Email:<\/strong> prospect@example\.com&lt;script&gt;/);
  assert.match(html, /Phone:<\/strong> \+31 &lt;img src=x onerror=alert\(1\)&gt;/);
  assert.match(html, /Website:<\/strong> https:\/\/example\.com\/\?a=1&amp;b=&lt;script&gt;/);
  assert.match(html, /Message:<\/strong> Need &quot;fast&quot; &lt;b&gt;handling&lt;\/b&gt; &amp; returns/);
  assert.doesNotMatch(html, /<script>|<img|<b>handling<\/b>/);

  const route = readFileSync(
    join(process.cwd(), "src", "app", "api", "leads", "route.ts"),
    "utf8",
  );
  for (const mapping of [
    "email: clean.work_email",
    "phone: clean.phone",
    "website: clean.website",
    "message: clean.comments",
  ]) {
    assert.ok(route.includes(mapping), `route must pass ${mapping}`);
  }
});
