# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: routes.spec.ts >> Quote Thank You (/thank-you/quote/) → 200, no console errors
- Location: tests\routes.spec.ts:23:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/thank-you/quote/
Call log:
  - navigating to "http://localhost:3000/thank-you/quote/", waiting until "load"

```

# Test source

```ts
  1  | /**
  2  |  * Core route smoke tests — every route must return 200.
  3  |  */
  4  | import { test, expect } from "@playwright/test";
  5  | 
  6  | const ROUTES = [
  7  |   { path: "/", name: "Homepage" },
  8  |   { path: "/eu-fulfilment/", name: "EU Fulfilment" },
  9  |   { path: "/shopify-fulfilment-europe/", name: "Shopify Fulfilment" },
  10 |   { path: "/eu-fulfilment-us-brands/", name: "US Brands" },
  11 |   { path: "/eu-fulfilment-uk-brands/", name: "UK Brands" },
  12 |   { path: "/cosmetics-supplements-fulfilment-europe/", name: "Cosmetics" },
  13 |   { path: "/fulfilment-scan/", name: "Scan Form" },
  14 |   { path: "/request-fulfilment-quote/", name: "Quote Form" },
  15 |   { path: "/contact/", name: "Contact" },
  16 |   { path: "/privacy/", name: "Privacy" },
  17 |   { path: "/cookies/", name: "Cookies" },
  18 |   { path: "/thank-you/scan/", name: "Scan Thank You" },
  19 |   { path: "/thank-you/quote/", name: "Quote Thank You" },
  20 | ];
  21 | 
  22 | for (const route of ROUTES) {
  23 |   test(`${route.name} (${route.path}) → 200, no console errors`, async ({ page }) => {
  24 |     const errors: string[] = [];
  25 |     page.on("console", (msg) => {
  26 |       if (msg.type() === "error") errors.push(msg.text());
  27 |     });
  28 | 
> 29 |     const res = await page.goto(route.path);
     |                            ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/thank-you/quote/
  30 |     expect(res?.status()).toBe(200);
  31 | 
  32 |     // H1 present
  33 |     const h1 = page.locator("h1");
  34 |     await expect(h1.first()).toBeVisible();
  35 | 
  36 |     // No console errors
  37 |     expect(errors.filter((e) => !e.includes("favicon") && !e.includes("GTM"))).toEqual([]);
  38 |   });
  39 | }
  40 | 
  41 | test("404 page → status 404", async ({ page }) => {
  42 |   const res = await page.goto("/nonexistent-page-12345");
  43 |   expect(res?.status()).toBe(404);
  44 |   await expect(page.locator("h1")).toContainText("not found");
  45 | });
  46 | 
```