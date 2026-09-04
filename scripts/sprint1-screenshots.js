/* eslint-disable @typescript-eslint/no-require-imports -- one-shot Node CommonJS QA script; `require` is its native module mode */
// Content Sprint 01 — preview screenshots (desktop + mobile)
const { chromium, devices } = require("@playwright/test");
const path = require("path");

const OUT = path.join(__dirname, "..", "docs", "screenshots", "content-sprint-01");

(async () => {
  const fs = require("fs");
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  const desktop = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await desktop.newPage();
  await page.goto("http://localhost:3000/knowledge/fulfilment-quotation-requirements/");
  await page.waitForLoadState("networkidle");

  // hero (header + H1)
  await page.locator("article header").screenshot({ path: path.join(OUT, "01-hero.png") });
  // direct answer
  await page.locator("h2#section-1").scrollIntoViewIfNeeded();
  await page.locator("section[aria-labelledby='section-1']").screenshot({ path: path.join(OUT, "02-direct-answer.png") });
  // table
  await page.locator("h2#section-4").scrollIntoViewIfNeeded();
  await page.locator("table").screenshot({ path: path.join(OUT, "03-nine-input-table.png") });
  // SKU section
  await page.locator("h2#section-9").scrollIntoViewIfNeeded();
  await page.locator("section[aria-labelledby='section-9'], section[aria-labelledby='section-10']").first().screenshot({ path: path.join(OUT, "04-sku-items.png") });
  // anonymised case
  await page.locator("h2#section-14").scrollIntoViewIfNeeded();
  await page.locator("section[aria-labelledby='section-14'], section[aria-labelledby='section-15']").first().screenshot({ path: path.join(OUT, "05-anonymised-case.png") });
  // checklist
  await page.locator("h2#section-19").scrollIntoViewIfNeeded();
  await page.locator("div[role='list'][aria-label='Quotation-readiness checklist']").screenshot({ path: path.join(OUT, "06-checklist.png") });
  // CTA
  await page.locator("#article-cta-heading").scrollIntoViewIfNeeded();
  await page.locator("section[aria-labelledby='article-cta-heading']").screenshot({ path: path.join(OUT, "07-cta.png") });

  // mobile
  const mobile = await browser.newContext({ ...devices["Pixel 5"] });
  const mpage = await mobile.newPage();
  await mpage.goto("http://localhost:3000/knowledge/fulfilment-quotation-requirements/");
  await mpage.waitForLoadState("networkidle");
  await mpage.screenshot({ path: path.join(OUT, "08-mobile-full.png"), fullPage: false });

  await browser.close();
  console.log("screenshots done:", OUT);
})();
