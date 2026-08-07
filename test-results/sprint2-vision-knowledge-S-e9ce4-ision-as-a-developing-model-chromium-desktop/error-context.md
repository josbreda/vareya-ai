# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sprint2-vision-knowledge.spec.ts >> Sprint 2 vision and knowledge pages >> the vision page presents Raymond's vision as a developing model
- Location: tests\sprint2-vision-knowledge.spec.ts:19:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Raymond\'s vision', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Raymond\'s vision', { exact: true })

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- banner:
  - link "Vareya — Home":
    - /url: /
    - text: Vareya
  - navigation "Main navigation":
    - link "EU Fulfilment":
      - /url: /eu-fulfilment
    - link "For Shopify":
      - /url: /shopify-fulfilment-europe
    - link "US Brands":
      - /url: /eu-fulfilment-us-brands
    - link "UK Brands":
      - /url: /eu-fulfilment-uk-brands
    - link "Check your fit":
      - /url: /fulfilment-scan
- main:
  - text: Vision
  - heading "A different kind of fulfilment company" [level=1]
  - paragraph: Most fulfilment providers are built to maximise margins for outside shareholders. Vareya is being built differently — as a cooperative where the brands that use the service become members and owners.
  - heading "The cooperative model" [level=2]
  - paragraph: Vareya is being set up as a cooperative (Coöperatie U.A.), which means the members — the brands that use the fulfilment service — collectively own and govern the operation.
  - paragraph: This is different from a traditional fulfilment company. In a traditional model, every bit of efficiency that gets discovered becomes margin for shareholders. In Vareya's model, the operation belongs to the members themselves.
  - paragraph: "The principle is simple: organise fulfilment cooperatively, bundle volumes from multiple smaller brands, and create an efficient fulfilment setup where the benefits of scale go back to the members."
  - heading "What this means in practice" [level=2]
  - heading "Democratic governance" [level=3]
  - paragraph: Members make decisions together. One member, one vote — regardless of volume. The direction of Vareya is guided by the members, not by external shareholders.
  - heading "Efficiency belongs to members" [level=3]
  - paragraph: "When the cooperative operates efficiently, the surplus goes back to the members — not to outside investors. This aligns the incentives: everyone benefits from doing things well."
  - heading "Bundled volumes, better terms" [level=3]
  - paragraph: Individual brands are often too small to negotiate the best rates with carriers, packaging suppliers, or technology providers. By combining volumes across members, the cooperative can negotiate as a larger entity.
  - heading "Built for the long term" [level=3]
  - paragraph: Cooperatives are designed for continuity, not for an exit. The goal is building a stable, reliable fulfilment operation that serves members for decades — not selling to the highest bidder after a few years.
  - heading "Who this is for" [level=2]
  - paragraph: Vareya is designed for brands that want more than just a fulfilment provider. It is for brands that want to be part of building something — a shared operation that gets better as more members join.
  - paragraph: Vareya is generally best suited to brands shipping 500 or more orders per month.
  - paragraph: Vareya currently operates from Breda, The Netherlands, and is building its cooperative membership. The first members will help shape how the cooperative operates.
  - heading "How we are building this" [level=2]
  - paragraph: Vareya is not a finished product. The cooperative structure, the membership model, and the governance processes are being built alongside the fulfilment operation itself.
  - paragraph: "The early members will help define how the cooperative works — from governance rules to how surplus gets distributed. This is a deliberate choice: building the structure with the people who will use it, rather than imposing a finished template."
  - paragraph: "What is operational today is the fulfilment service itself: the warehouse in Breda, the carrier network, the Shopify and Amazon FBM integrations, and the returns handling. The cooperative layer is being added on top of that foundation."
  - heading "Interested in being part of this?" [level=2]
  - paragraph: The first members will shape how Vareya operates. If the cooperative model resonates with how you think about your business, we would like to talk.
  - link "Check your fit →":
    - /url: /fulfilment-scan
  - link "Contact Vareya":
    - /url: /contact
- contentinfo:
  - link "Vareya":
    - /url: /
  - paragraph: European fulfilment for growing e-commerce brands. Based in Breda, the Netherlands.
  - heading "Services" [level=4]
  - list:
    - listitem:
      - link "EU Fulfilment":
        - /url: /eu-fulfilment
    - listitem:
      - link "Shopify Fulfilment":
        - /url: /shopify-fulfilment-europe
    - listitem:
      - link "US Brands":
        - /url: /eu-fulfilment-us-brands
    - listitem:
      - link "UK Brands":
        - /url: /eu-fulfilment-uk-brands
    - listitem:
      - link "Cosmetics & Supplements":
        - /url: /cosmetics-supplements-fulfilment-europe
  - heading "Company" [level=4]
  - list:
    - listitem:
      - link "Contact":
        - /url: /contact
    - listitem:
      - link "Fulfilment Scan":
        - /url: /fulfilment-scan
    - listitem:
      - link "Request Quote":
        - /url: /request-fulfilment-quote
  - heading "Legal" [level=4]
  - list:
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy
    - listitem:
      - link "Cookie Policy":
        - /url: /cookies
  - paragraph: © 2026 Vareya BV. All rights reserved.
  - paragraph: Bagven Park 6, 4838 EH Breda, The Netherlands
- alert
- dialog "Cookie consent":
  - paragraph:
    - text: We use cookies to analyse site traffic and improve your experience.
    - link "Learn more":
      - /url: /privacy/
    - text: .
  - button "Only essential"
  - button "Accept all"
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | const KNOWLEDGE_ARTICLES = [
  4  |   {
  5  |     slug: "what-is-cooperative-fulfilment",
  6  |     title: "What is cooperative fulfilment?",
  7  |   },
  8  |   {
  9  |     slug: "ecommerce-fulfilment-netherlands-guide",
  10 |     title: "E-commerce fulfilment from the Netherlands: a practical guide",
  11 |   },
  12 |   {
  13 |     slug: "shopify-fulfilment-europe-what-to-look-for",
  14 |     title: "Shopify fulfilment in Europe: what to look for",
  15 |   },
  16 | ] as const;
  17 | 
  18 | test.describe("Sprint 2 vision and knowledge pages", () => {
  19 |   test("the vision page presents Raymond's vision as a developing model", async ({ page }) => {
  20 |     const response = await page.goto("/why-vareya-ai/");
  21 | 
  22 |     expect(response?.status()).toBe(200);
  23 |     await expect(page.getByRole("heading", { level: 1 })).toContainText(
  24 |       "A different kind of fulfilment company",
  25 |     );
> 26 |     await expect(page.getByText("Raymond's vision", { exact: true })).toBeVisible();
     |                                                                       ^ Error: expect(locator).toBeVisible() failed
  27 |     await expect(page.getByText(/democratic member ownership/i)).toBeVisible();
  28 |     await expect(page.getByText(/surplus.*members/i)).toBeVisible();
  29 |     await expect(page.getByText(/being developed/i)).toBeVisible();
  30 |     await expect(
  31 |       page.getByRole("link", { name: "Check your EU fulfilment fit" }).first(),
  32 |     ).toHaveAttribute("href", "/fulfilment-scan/");
  33 |   });
  34 | 
  35 |   test("the knowledge hub only links to published, working articles", async ({ page }) => {
  36 |     const response = await page.goto("/knowledge/");
  37 | 
  38 |     expect(response?.status()).toBe(200);
  39 |     await expect(page.getByRole("heading", { level: 1 })).toContainText(
  40 |       "Practical fulfilment knowledge",
  41 |     );
  42 | 
  43 |     for (const article of KNOWLEDGE_ARTICLES) {
  44 |       const link = page.getByRole("link", { name: new RegExp(article.title, "i") });
  45 |       await expect(link).toHaveAttribute("href", `/knowledge/${article.slug}/`);
  46 | 
  47 |       const articleResponse = await page.request.get(`/knowledge/${article.slug}/`);
  48 |       expect(articleResponse.status()).toBe(200);
  49 |     }
  50 |   });
  51 | 
  52 |   for (const article of KNOWLEDGE_ARTICLES) {
  53 |     test(`${article.slug} renders a complete, indexable article`, async ({ page }) => {
  54 |       const response = await page.goto(`/knowledge/${article.slug}/`);
  55 | 
  56 |       expect(response?.status()).toBe(200);
  57 |       await expect(page.getByRole("heading", { level: 1 })).toHaveText(article.title);
  58 |       await expect(page.locator("article h2")).toHaveCount(3);
  59 |       await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
  60 |         "href",
  61 |         `https://vareya.ai/knowledge/${article.slug}/`,
  62 |       );
  63 | 
  64 |       const articleSchema = page.locator(
  65 |         'script[type="application/ld+json"][data-schema="article"]',
  66 |       );
  67 |       await expect(articleSchema).toHaveCount(1);
  68 |       const parsed = JSON.parse((await articleSchema.textContent()) || "{}");
  69 |       expect(parsed["@type"]).toBe("Article");
  70 |       expect(parsed.headline).toBe(article.title);
  71 | 
  72 |       await expect(page.locator("article")).not.toContainText("**");
  73 |     });
  74 |   }
  75 | 
  76 |   test("unknown knowledge slugs return the shared 404", async ({ page }) => {
  77 |     const response = await page.goto("/knowledge/not-a-real-article/");
  78 | 
  79 |     expect(response?.status()).toBe(404);
  80 |     await expect(page.getByRole("heading", { level: 1 })).toContainText("not found");
  81 |   });
  82 | 
  83 |   test("desktop navigation exposes the vision and knowledge hubs", async ({ page }) => {
  84 |     await page.goto("/");
  85 | 
  86 |     await expect(
  87 |       page.locator('nav[aria-label="Main navigation"]').getByRole("link", { name: "Why Vareya" }),
  88 |     ).toHaveAttribute("href", "/why-vareya-ai/");
  89 |     await expect(
  90 |       page.locator('nav[aria-label="Main navigation"]').getByRole("link", { name: "Knowledge" }),
  91 |     ).toHaveAttribute("href", "/knowledge/");
  92 |   });
  93 | });
  94 | 
```