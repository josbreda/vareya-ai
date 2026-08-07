# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sprint2-vision-knowledge.spec.ts >> Sprint 2 vision and knowledge pages >> the knowledge hub only links to published, working articles
- Location: tests\sprint2-vision-knowledge.spec.ts:35:7

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  getByRole('link', { name: /What is cooperative fulfilment?/i })
Expected: "/knowledge/what-is-cooperative-fulfilment/"
Received: "/knowledge/what-is-cooperative-fulfilment"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for getByRole('link', { name: /What is cooperative fulfilment?/i })
    13 × locator resolved to <a href="/knowledge/what-is-cooperative-fulfilment" class="block p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all bg-white">…</a>
       - unexpected value "/knowledge/what-is-cooperative-fulfilment"

```

```yaml
- link "Cooperative model What is cooperative fulfilment? How a cooperative model changes the relationship between a fulfilment provider and the brands it serves. August 2026":
  - /url: /knowledge/what-is-cooperative-fulfilment
  - text: Cooperative model
  - heading "What is cooperative fulfilment?" [level=2]
  - paragraph: How a cooperative model changes the relationship between a fulfilment provider and the brands it serves.
  - text: August 2026
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
  26 |     await expect(page.getByText("Raymond's vision", { exact: true })).toBeVisible();
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
> 45 |       await expect(link).toHaveAttribute("href", `/knowledge/${article.slug}/`);
     |                          ^ Error: expect(locator).toHaveAttribute(expected) failed
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