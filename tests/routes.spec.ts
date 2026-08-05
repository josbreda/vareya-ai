/**
 * Core route smoke tests — every route must return 200.
 */
import { test, expect } from "@playwright/test";

const ROUTES = [
  { path: "/", name: "Homepage" },
  { path: "/eu-fulfilment/", name: "EU Fulfilment" },
  { path: "/shopify-fulfilment-europe/", name: "Shopify Fulfilment" },
  { path: "/eu-fulfilment-us-brands/", name: "US Brands" },
  { path: "/eu-fulfilment-uk-brands/", name: "UK Brands" },
  { path: "/cosmetics-supplements-fulfilment-europe/", name: "Cosmetics" },
  { path: "/fulfilment-scan/", name: "Scan Form" },
  { path: "/request-fulfilment-quote/", name: "Quote Form" },
  { path: "/contact/", name: "Contact" },
  { path: "/privacy/", name: "Privacy" },
  { path: "/cookies/", name: "Cookies" },
  { path: "/thank-you/scan/", name: "Scan Thank You" },
  { path: "/thank-you/quote/", name: "Quote Thank You" },
];

for (const route of ROUTES) {
  test(`${route.name} (${route.path}) → 200, no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    const res = await page.goto(route.path);
    expect(res?.status()).toBe(200);

    // H1 present
    const h1 = page.locator("h1");
    await expect(h1.first()).toBeVisible();

    // No console errors
    expect(errors.filter((e) => !e.includes("favicon") && !e.includes("GTM"))).toEqual([]);
  });
}

test("404 page → status 404", async ({ page }) => {
  const res = await page.goto("/nonexistent-page-12345");
  expect(res?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("not found");
});
