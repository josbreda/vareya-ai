/**
 * Inline text parser for knowledge articles.
 *
 * Articles may embed markdown-style links inside paragraphs, bullets, table
 * cells and FAQ answers, e.g. "read [the cost article](/knowledge/.../)".
 * The renderer turns these into real <Link> elements instead of printing the
 * raw syntax. Content without link syntax is unaffected.
 */

export type InlineTextToken =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

const LINK_PATTERN = /\[([^\[\]\n]+)\]\(([^)\s]+)\)/g;

export function parseInlineText(input: string): InlineTextToken[] {
  const tokens: InlineTextToken[] = [];
  let lastIndex = 0;

  for (const match of input.matchAll(LINK_PATTERN)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      tokens.push({ type: "text", value: input.slice(lastIndex, index) });
    }
    tokens.push({ type: "link", label: match[1], href: match[2] });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < input.length) {
    tokens.push({ type: "text", value: input.slice(lastIndex) });
  }

  return tokens;
}
