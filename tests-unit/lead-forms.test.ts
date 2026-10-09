import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const formFiles = [
  join(process.cwd(), "src", "app", "free-rate-scan", "page.tsx"),
  join(process.cwd(), "src", "app", "request-fulfilment-quote", "page.tsx"),
];

test("both lead forms submit a dedicated bot_field without reusing website", () => {
  for (const file of formFiles) {
    const source = readFileSync(file, "utf8");
    assert.match(source, /name="bot_field"/, file);
    assert.match(source, /bot_field:\s*honeypot/, file);
    assert.doesNotMatch(source, /name="website"[\s\S]{0,180}value=\{honeypot\}/, file);
  }
});
