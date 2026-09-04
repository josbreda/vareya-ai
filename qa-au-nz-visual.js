/* eslint-disable @typescript-eslint/no-require-imports -- one-shot Node CommonJS QA script; `require` is its native module mode */

const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const targets = [
    { name: "au-desktop", url: "https://vareya.ai/european-fulfilment-for-australian-brands/", width: 1280, height: 800 },
    { name: "au-mobile", url: "https://vareya.ai/european-fulfilment-for-australian-brands/", width: 360, height: 800 },
    { name: "nz-desktop", url: "https://vareya.ai/european-fulfilment-for-new-zealand-brands/", width: 1280, height: 800 },
    { name: "nz-mobile", url: "https://vareya.ai/european-fulfilment-for-new-zealand-brands/", width: 360, height: 800 },
    { name: "ship-desktop", url: "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/", width: 1280, height: 800 },
    { name: "ship-mobile", url: "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/", width: 360, height: 800 },
  ];

  let fail = 0;
  for (const t of targets) {
    const ctx = await browser.newContext({ viewport: { width: t.width, height: t.height } });
    const p = await ctx.newPage();
    const errors = [];
    p.on("pageerror", (e) => errors.push("pageerror: " + e.message));
    p.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
    await p.goto(t.url, { waitUntil: "networkidle" });
    await p.waitForTimeout(800);

    const metrics = await p.evaluate(() => {
      const h1 = document.querySelectorAll("h1").length;
      const scan = Array.from(document.querySelectorAll('a[href*="free-rate-scan"]')).length;
      const details = document.querySelectorAll("details").length;
      const tables = document.querySelectorAll("table").length;
      const overflow = document.documentElement.scrollWidth - window.innerWidth;
      return { h1, scan, details, tables, overflow };
    });

    const ok = errors.length === 0 && metrics.h1 === 1 && metrics.scan >= 2 && metrics.details >= 4 && metrics.overflow <= 1;
    if (!ok) fail++;
    console.log(`${ok ? "PASS" : "FAIL"}  ${t.name}  h1=${metrics.h1} scanCTAs=${metrics.scan} faqDetails=${metrics.details} tables=${metrics.tables} h-overflow=${metrics.overflow}px jsErrors=${errors.length}`);
    if (errors.length) console.log("  errors: " + errors.slice(0, 3).join(" | "));
    await ctx.close();
  }
  await browser.close();
  console.log(fail === 0 ? "ALL VISUAL QA PASS" : `${fail} TARGET(S) FAILED`);
  process.exit(fail === 0 ? 0 : 1);
})();
