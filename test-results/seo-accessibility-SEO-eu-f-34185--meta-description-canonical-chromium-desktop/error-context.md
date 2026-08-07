# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo-accessibility.spec.ts >> SEO >> /eu-fulfilment-uk-brands/: has title, meta description, canonical
- Location: tests\seo-accessibility.spec.ts:24:9

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/eu-fulfilment-uk-brands/
Call log:
  - navigating to "http://localhost:3000/eu-fulfilment-uk-brands/", waiting until "load"

```

# Test source

```ts
  1   | /**
  2   |  * SEO and accessibility tests.
  3   |  */
  4   | import { test, expect } from "@playwright/test";
  5   | 
  6   | const INDEXABLE_ROUTES = [
  7   |   "/",
  8   |   "/eu-fulfilment/",
  9   |   "/shopify-fulfilment-europe/",
  10  |   "/eu-fulfilment-us-brands/",
  11  |   "/eu-fulfilment-uk-brands/",
  12  |   "/cosmetics-supplements-fulfilment-europe/",
  13  |   "/fulfilment-scan/",
  14  |   "/request-fulfilment-quote/",
  15  |   "/contact/",
  16  |   "/privacy/",
  17  |   "/cookies/",
  18  | ];
  19  | 
  20  | const NOINDEX_ROUTES = ["/thank-you/scan/", "/thank-you/quote/"];
  21  | 
  22  | test.describe("SEO", () => {
  23  |   for (const route of INDEXABLE_ROUTES) {
  24  |     test(`${route}: has title, meta description, canonical`, async ({ page }) => {
> 25  |       await page.goto(route);
      |                  ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/eu-fulfilment-uk-brands/
  26  | 
  27  |       // Title
  28  |       const title = await page.title();
  29  |       expect(title.length).toBeGreaterThan(10);
  30  |       expect(title).toContain("Vareya");
  31  | 
  32  |       // Meta description
  33  |       const desc = page.locator('meta[name="description"]');
  34  |       await expect(desc).toHaveAttribute("content", /.+/);
  35  | 
  36  |       // Canonical
  37  |       const canonical = page.locator('link[rel="canonical"]');
  38  |       await expect(canonical).toHaveAttribute("href", /vareya\.ai/);
  39  | 
  40  |       // H1
  41  |       await expect(page.locator("h1").first()).toBeVisible();
  42  | 
  43  |       // No index (these should be indexable)
  44  |       const robots = page.locator('meta[name="robots"]');
  45  |       const robotsContent = await robots.getAttribute("content");
  46  |       if (robotsContent) {
  47  |         expect(robotsContent).not.toContain("noindex");
  48  |       }
  49  |     });
  50  |   }
  51  | 
  52  |   for (const route of NOINDEX_ROUTES) {
  53  |     test(`${route}: is noindex`, async ({ page }) => {
  54  |       const res = await page.goto(route);
  55  |       // Next.js metadata sets x-robots-tag or meta robots
  56  |       const headers = res?.headers();
  57  |       // Check meta robots
  58  |       const robots = page.locator('meta[name="robots"]');
  59  |       if (await robots.count() > 0) {
  60  |         const content = await robots.getAttribute("content");
  61  |         expect(content).toContain("noindex");
  62  |       }
  63  |     });
  64  |   }
  65  | 
  66  |   test("sitemap.xml returns XML", async ({ page }) => {
  67  |     const res = await page.goto("/sitemap.xml");
  68  |     expect(res?.status()).toBe(200);
  69  |     const text = await page.content();
  70  |     expect(text).toContain("<urlset");
  71  |     expect(text).toContain("vareya.ai");
  72  |   });
  73  | 
  74  |   test("robots.txt returns text", async ({ page }) => {
  75  |     const res = await page.goto("/robots.txt");
  76  |     expect(res?.status()).toBe(200);
  77  |     const text = await page.content();
  78  |     expect(text).toContain("sitemap");
  79  |   });
  80  | 
  81  |   test("JSON-LD structured data present", async ({ page }) => {
  82  |     await page.goto("/");
  83  |     const ldJson = page.locator('script[type="application/ld+json"]');
  84  |     const count = await ldJson.count();
  85  |     expect(count).toBeGreaterThanOrEqual(2);
  86  | 
  87  |     // Organization schema
  88  |     const first = await ldJson.first().textContent();
  89  |     const parsed = JSON.parse(first || "{}");
  90  |     expect(parsed["@type"]).toBeDefined();
  91  |   });
  92  | });
  93  | 
  94  | test.describe("Accessibility", () => {
  95  |   test("homepage: keyboard navigation works", async ({ page }) => {
  96  |     await page.goto("/");
  97  |     // Skip link should be present
  98  |     await expect(page.locator(".skip-link")).toBeVisible();
  99  |     // Tab through header
  100 |     await page.keyboard.press("Tab");
  101 |     // Should focus something
  102 |     const focused = page.locator(":focus");
  103 |     await expect(focused).toBeAttached();
  104 |   });
  105 | 
  106 |   test("homepage: images have alt text", async ({ page }) => {
  107 |     await page.goto("/");
  108 |     const images = page.locator("img");
  109 |     const count = await images.count();
  110 |     for (let i = 0; i < count; i++) {
  111 |       const alt = await images.nth(i).getAttribute("alt");
  112 |       expect(alt).toBeDefined();
  113 |     }
  114 |   });
  115 | 
  116 |   test("scan form: keyboard navigable", async ({ page }) => {
  117 |     await page.goto("/fulfilment-scan/");
  118 |     // Tab to select
  119 |     await page.keyboard.press("Tab");
  120 |     await page.keyboard.press("Tab");
  121 |     const focused = page.locator(":focus");
  122 |     await expect(focused).toBeAttached();
  123 |   });
  124 | });
  125 | 
```