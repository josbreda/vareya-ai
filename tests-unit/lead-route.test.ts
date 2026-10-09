/**
 * /api/leads route integration tests.
 *
 * Boots the real Next.js route against a local dashboard stub. All external
 * integrations are disabled; no production service is contacted.
 */
import { after, before, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { createServer, type Server } from "node:http";
import { once } from "node:events";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

let dashboardServer: Server;
let dashboardPort = 0;
let dashboardStatus = 201;
let dashboardCalls: Array<Record<string, unknown>> = [];
let appPort = 0;
let nextProcess: ChildProcessWithoutNullStreams;
let nextOutput = "";

async function listenOnFreePort(server: Server): Promise<number> {
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const address = server.address();
  assert.ok(address && typeof address === "object");
  return address.port;
}

async function reserveFreePort(): Promise<number> {
  const server = createServer();
  const port = await listenOnFreePort(server);
  await new Promise<void>((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
  return port;
}

async function waitForNext(): Promise<void> {
  const deadline = Date.now() + 45_000;
  while (Date.now() < deadline) {
    if (nextProcess.exitCode !== null) {
      throw new Error(`next dev exited ${nextProcess.exitCode}\n${nextOutput}`);
    }
    try {
      const response = await fetch(`http://127.0.0.1:${appPort}/api/leads`);
      if (response.status > 0) return;
    } catch {
      // Server is still starting.
    }
    await delay(250);
  }
  throw new Error(`next dev did not become ready\n${nextOutput}`);
}

async function postLead(overrides: Record<string, unknown> = {}): Promise<Response> {
  return fetch(`http://127.0.0.1:${appPort}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Route Test",
      company: "Route Test Ltd",
      work_email: "route-test@example.com",
      form_type: "quote",
      turnstile_token: "test",
      ...overrides,
    }),
  });
}

before(async () => {
  dashboardServer = createServer(async (request, response) => {
    const chunks: Buffer[] = [];
    for await (const chunk of request) chunks.push(Buffer.from(chunk));
    dashboardCalls.push(JSON.parse(Buffer.concat(chunks).toString("utf8")));
    response.writeHead(dashboardStatus, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ status: dashboardStatus === 201 ? "created" : "failed" }));
  });
  dashboardPort = await listenOnFreePort(dashboardServer);
  appPort = await reserveFreePort();

  const nextBin = join(process.cwd(), "node_modules", "next", "dist", "bin", "next");
  nextProcess = spawn(
    process.execPath,
    [nextBin, "dev", "--webpack", "-H", "127.0.0.1", "-p", String(appPort)],
    {
    cwd: process.cwd(),
    env: {
      ...process.env,
      NODE_ENV: "development",
      TURNSTILE_SECRET_KEY: "",
      RESEND_API_KEY: "",
      LEAD_OWNER_EMAIL: "",
      HUBSPOT_ACCESS_TOKEN: "",
      ZAPIER_WEBHOOK_URL: "",
      LEAD_DASHBOARD_FREE_RATE_SCAN_API_KEY: "route-test-key",
      LEAD_DASHBOARD_FREE_RATE_SCAN_URL: `http://127.0.0.1:${dashboardPort}/api/leads/webhooks/free-rate-scan`,
    },
    stdio: "pipe",
  });
  const collect = (chunk: Buffer) => {
    nextOutput = (nextOutput + chunk.toString("utf8")).slice(-20_000);
  };
  nextProcess.stdout.on("data", collect);
  nextProcess.stderr.on("data", collect);
  await waitForNext();
});

after(async () => {
  if (nextProcess && nextProcess.exitCode === null) {
    nextProcess.kill("SIGTERM");
    await Promise.race([once(nextProcess, "exit"), delay(5_000)]);
  }
  if (dashboardServer) {
    await new Promise<void>((resolve) => dashboardServer.close(() => resolve()));
  }
});

beforeEach(() => {
  dashboardStatus = 201;
  dashboardCalls = [];
});

test("legitimate quote website reaches Turnstile instead of the honeypot", async () => {
  const response = await postLead({
    website: "https://example.com/?a=1&b=2",
    turnstile_token: "",
  });
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.match(body.error, /missing-input-secret/);
  assert.equal(body.success, undefined);
  assert.equal(dashboardCalls.length, 0);
});

test("dedicated bot_field returns fake success before validation and delivery", async () => {
  const response = await postLead({
    bot_field: "filled-by-bot",
    turnstile_token: "",
  });
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.success, true);
  assert.match(body.submission_id, /^vareya_/);
  assert.equal(dashboardCalls.length, 0);
});

test("HTTP 200 requires one awaited durable dashboard write", async () => {
  const response = await postLead({ website: "https://route-test.example" });
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.success, true);
  assert.equal(dashboardCalls.length, 1);
  assert.equal(dashboardCalls[0].submission_id, body.submission_id);
  assert.equal(dashboardCalls[0].website, "https://route-test.example");
});

test("dashboard non-2xx is refused and is not retried or double-forwarded", async () => {
  dashboardStatus = 500;

  const response = await postLead();
  const body = await response.json();

  assert.equal(response.status, 503);
  assert.match(body.error, /safely save/i);
  assert.equal(dashboardCalls.length, 1);
});
