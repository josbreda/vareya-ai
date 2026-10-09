import { afterEach, test } from "node:test";
import assert from "node:assert/strict";
import { createJiti } from "jiti";

const jiti = createJiti(import.meta.url);
const { validateTurnstile } = await jiti.import("../src/lib/turnstile/index.ts");

const originalNodeEnv = process.env.NODE_ENV;
const originalSecret = process.env.TURNSTILE_SECRET_KEY;
const originalFetch = globalThis.fetch;

afterEach(() => {
  if (originalNodeEnv === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = originalNodeEnv;
  if (originalSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY;
  else process.env.TURNSTILE_SECRET_KEY = originalSecret;
  globalThis.fetch = originalFetch;
});

test("missing Turnstile secret fails closed outside the explicit development bypass", async () => {
  delete process.env.TURNSTILE_SECRET_KEY;
  process.env.NODE_ENV = "production";
  globalThis.fetch = async () => {
    throw new Error("Turnstile network must not be called without a secret");
  };

  const result = await validateTurnstile("visitor-token");

  assert.deepEqual(result, { valid: false, codes: ["missing-input-secret"] });
});

test("development bypass accepts only the explicit test token", async () => {
  delete process.env.TURNSTILE_SECRET_KEY;
  process.env.NODE_ENV = "development";

  assert.deepEqual(await validateTurnstile("test"), { valid: true, codes: [] });
  assert.deepEqual(await validateTurnstile("visitor-token"), {
    valid: false,
    codes: ["missing-input-secret"],
  });
});
