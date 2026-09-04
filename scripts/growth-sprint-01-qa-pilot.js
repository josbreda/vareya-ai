/* eslint-disable @typescript-eslint/no-require-imports -- one-shot Node CommonJS QA script; `require` is its native module mode */
// Growth Sprint 01 — outbound UTM e2e test (authorised by Jos) — PRECISE step-driven fill.
const { chromium } = require("@playwright/test");
const fs = require("fs");

const BASE = "https://vareya.ai";
const UTM = "/free-rate-scan/?utm_source=outbound&utm_medium=email&utm_campaign=content_sprint_01&utm_content=qa_pilot_test";
const QA = { name: "QA Pilot Test", company: "QA PILOT TEST DO NOT CONTACT", email: "qa-pilot-test-18082026@vareya.ai", phone: "0600000000" };

(async () => {
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await ctx.newPage();
  const log = [];
  page.on("response", (r) => { if (r.url().includes("/api/leads")) log.push("POST /api/leads -> " + r.status()); });
  page.on("console", (m) => { if (m.type() === "error") log.push("CONSOLE ERR: " + m.text().slice(0, 100)); });
  const shot = (n) => page.screenshot({ path: `docs/growth-sprint-01/qa-pilot-${n}.png` }).catch(() => {});

  try {
    await page.goto(BASE + UTM, { waitUntil: "networkidle" });
    log.push("landed: " + page.url());
    await page.waitForTimeout(1200);

    // Step 0: volume select
    await page.locator("select").first().selectOption("500-1000").catch((e) => log.push("volume select fail: " + String(e).slice(0, 80)));
    await clickContinue(page, log);

    // Step 1: category select
    await page.locator("select").first().selectOption("fashion").catch((e) => log.push("category fail: " + String(e).slice(0, 80)));
    await clickContinue(page, log);

    // Step 2: markets multiselect (buttons)
    for (const label of ["Netherlands", "Germany"]) {
      const b = page.getByRole("button", { name: label, exact: true });
      if (await b.count()) { await b.first().click(); log.push("market toggled: " + label); }
    }
    await clickContinue(page, log);

    // Step 3: platform select
    await page.locator("select").first().selectOption("shopify").catch((e) => log.push("platform fail: " + String(e).slice(0, 80)));
    await clickContinue(page, log);

    // Step 4: services multiselect
    for (const label of ["Pick & pack", "Storage"]) {
      const b = page.getByRole("button", { name: label, exact: true });
      if (await b.count()) { await b.first().click(); log.push("service toggled: " + label); }
    }
    await clickContinue(page, log);

    // Contact step
    await shot("contact-step");
    await page.locator('input[name="name"]').fill(QA.name);
    await page.locator('input[name="company"]').fill(QA.company);
    await page.locator('input[name="work_email"]').fill(QA.email);
    await page.locator('input[name="phone"]').fill(QA.phone).catch(() => {});
    log.push("contact fields filled");

    // Turnstile: wait for token (managed mode, up to 25s)
    let token = "";
    for (let i = 0; i < 25; i++) {
      token = await page.evaluate(() => (window.turnstile && window.turnstile.getResponse) ? window.turnstile.getResponse() : "");
      if (token) break;
      await page.waitForTimeout(1000);
    }
    log.push("turnstile token acquired: " + (token ? "YES (" + token.length + " chars)" : "NO — challenge not auto-passed"));

    if (!token) {
      await shot("turnstile-blocked");
    } else {
      // Submit
      const submitBtn = page.locator("button", { hasText: /Submit|Start|Get|Send|Scan/i }).last();
      const btnTxt = (await submitBtn.innerText().catch(() => "unknown")).trim();
      log.push("submit button text: " + btnTxt);
      await submitBtn.click();
      await page.waitForTimeout(6000);
      log.push("final url: " + page.url());
      await shot("after-submit");
      const t = await page.locator("body").innerText().catch(() => "");
      log.push("thank/confirmation visible: " + /thank|received|bedankt|ontvangen|review/i.test(t.slice(0, 900)));
    }
  } catch (e) {
    log.push("SCRIPT ERROR: " + String(e).slice(0, 250));
  }

  fs.writeFileSync("docs/growth-sprint-01/QA-PILOT-E2E-LOG.txt", log.join("\n"));
  console.log(log.join("\n"));
  await browser.close();
})();

async function clickContinue(page, log) {
  const b = page.locator("button", { hasText: "Continue" }).first();
  await b.click();
  await page.waitForTimeout(900);
  log.push("continue clicked; step heading now: " + (await page.locator("h2, h3").first().innerText().catch(() => "?")).slice(0, 40));
}
