
const { chromium } = require("@playwright/test");

(async () => {
  const browser = await chromium.launch();
  const pages = [
    { name: "au-brands-desktop", url: "https://vareya.ai/european-fulfilment-for-australian-brands/", width: 1280, height: 800 },
    { name: "au-brands-mobile", url: "https://vareya.ai/european-fulfilment-for-australian-brands/", width: 360, height: 800 },
    { name: "nz-brands-desktop", url: "https://vareya.ai/european-fulfilment-for-new-zealand-brands/", width: 1280, height: 800 },
    { name: "nz-brands-mobile", url: "https://vareya.ai/european-fulfilment-for-new-zealand-brands/", width: 360, height: 800 },
    { name: "shipping-aunz-desktop", url: "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/", width: 1280, height: 800 },
    { name: "shipping-aunz-mobile", url: "https://vareya.ai/shipping-from-europe-to-australia-new-zealand/", width: 360, height: 800 },
  ];

  for (const page of pages) {
    const ctx = await browser.newContext({ viewport: { width: page.width, height: page.height } });
    const p = await ctx.newPage();
    await p.goto(page.url, { waitUntil: "networkidle" });
    await p.screenshot({ path: `docs/screenshots/au-nz-content-sprint/${page.name}.png`, fullPage: false });
    console.log(`OK: ${page.name}`);
    await ctx.close();
  }

  await browser.close();
})();
