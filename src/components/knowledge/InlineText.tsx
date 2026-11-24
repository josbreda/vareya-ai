import { localizeNode } from "@/i18n/localize-node";
import { getT as getTForContent } from "@/i18n/server";
import Link from "@/i18n/Link";
import { parseInlineText } from "./inline-text";

const FILE_HREF = /\.(csv|pdf|zip|xlsx?|docx?|png|jpe?g|svg|webp)$/i;

const LINK_CLASS = "font-semibold text-primary hover:underline";

/**
 * Renders one article string. Plain strings render unchanged; markdown-style
 * links become real hyperlinks (static files download instead of routing).
 */
export async function InlineText({ text }: { text: string }) {
  const __pageT = await getTForContent();
  const tokens = parseInlineText(text);

  if (tokens.length === 1 && tokens[0].type === "text") {
    return localizeNode(<>{text}</>, __pageT);
  }

  return localizeNode((
    <>
      {tokens.map((token, index) => {
        if (token.type === "text") {
          return <span key={index}>{token.value}</span>;
        }
        if (FILE_HREF.test(token.href)) {
          return (
            <a key={index} href={token.href} download className={LINK_CLASS}>
              {token.label}
            </a>
          );
        }
        return (
          <Link key={index} href={token.href} className={LINK_CLASS}>
            {token.label}
          </Link>
        );
      })}
    </>
  ), __pageT);
}
