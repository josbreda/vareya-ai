/* eslint-disable @typescript-eslint/no-require-imports -- one-shot Node CommonJS QA script; `require` is its native module mode */

const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const pages = [
    { name: "01-homepage-desktop", url: "http://localhost:3000/", width: 1280, height: 800 },
    { name: "02-homepage-mobile", url: "http://localhost:3000/", width: 360, height: 800 },
    { name: "03-eu-fulfilment-desktop", url: "http://localhost:3000/eu-fulfilment/", width: 1280, height: 800 },
    { name: "04-fulfilment-scan-desktop", url: "http://localhost:3000/fulfilment-scan/", width: 1280, height: 800 },
    { name: "05-fulfilment-scan-mobile", url: "http://localhost:3000/fulfilment-scan/", width: 360, height: 800 },
    { name: "06-quote-form-desktop", url: "http://localhost:3000/request-fulfilment-quote/", width: 1280, height: 800 },
    { name: "07-thank-you-scan", url: "http://localhost:3000/thank-you/scan/", width: 1280, height: 800 },
  ];
  
  for (const page of pages) {
    const ctx = await browser.newContext({ viewport: { width: page.width, height: page.height } });
    const p = await ctx.newPage();
    await p.goto(page.url, { waitUntil: "networkidle" });
    await p.screenshot({ path: `docs/screenshots/${page.name}.png`, fullPage: false });
    console.log(`OK: ${page.name}`);
    await ctx.close();
  }
  
  await browser.close();
})();
