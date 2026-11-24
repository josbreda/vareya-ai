import { Fragment, type ReactNode } from "react";

const TOKEN = /(\{[A-Za-z0-9_]+\})/g;

/**
 * Renders an already-translated message containing named placeholders, where
 * values may be React nodes (links, emphasis). Keeps rich sentences in one
 * catalogue key instead of splitting them into fragile fragments.
 */
export function RichText({
  message,
  values,
}: {
  message: string;
  values: Record<string, ReactNode>;
}) {
  const parts = message.split(TOKEN);
  return (
    <>
      {parts.map((part, index) => {
        const match = /^\{([A-Za-z0-9_]+)\}$/.exec(part);
        if (match && values[match[1]] !== undefined) {
          return <Fragment key={index}>{values[match[1]]}</Fragment>;
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
