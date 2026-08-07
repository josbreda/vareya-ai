# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sprint2-vision-knowledge.spec.ts >> Sprint 2 vision and knowledge pages >> ecommerce-fulfilment-netherlands-guide renders a complete, indexable article
- Location: tests\sprint2-vision-knowledge.spec.ts:53:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 500
```

# Page snapshot

```yaml
- generic:
  - generic [active]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - navigation [ref=e6]:
          - button [disabled] [ref=e7]:
            - img "previous" [ref=e8]
          - generic [ref=e10]:
            - generic [ref=e11]: 1/
            - generic [ref=e12]: "1"
          - button [disabled] [ref=e13]:
            - img "next" [ref=e14]
        - generic [ref=e17]:
          - generic "Latest available version is detected (16.3.0)." [ref=e20]: Next.js 16.3.0
          - generic [ref=e21]: Turbopack
      - dialog "Runtime Error" [ref=e23]:
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]: Runtime Error
            - generic [ref=e32]:
              - button "Copy Error Info" [ref=e33] [cursor=pointer]
              - button "No related documentation found" [disabled] [ref=e36]
              - button "Attach Node.js inspector" [ref=e39] [cursor=pointer]
          - generic [ref=e48]: Jest worker encountered 2 child process exceptions, exceeding retry limit
      - contentinfo [ref=e51]:
        - region "Error feedback" [ref=e52]:
          - paragraph [ref=e53]:
            - link "Was this helpful?" [ref=e54] [cursor=pointer]:
              - /url: https://nextjs.org/telemetry#error-feedback
          - button "Mark as helpful" [ref=e55] [cursor=pointer]
          - button "Mark as not helpful" [ref=e59] [cursor=pointer]
    - generic [ref=e66] [cursor=pointer]:
      - button "Open Next.js Dev Tools" [ref=e67]
      - generic [ref=e71]:
        - button "Open issues overlay" [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]: "0"
            - generic [ref=e75]: "1"
          - generic [ref=e76]: Issue
        - button "Collapse issues badge" [ref=e77]
  - alert [ref=e80]
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
> 56 |       expect(response?.status()).toBe(200);
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
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