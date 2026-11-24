import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import type { Translate } from "./core";

/** Translate rendered server content while preserving React elements, links and data attributes. */
export function localizeNode(node: ReactNode, t: Translate): ReactNode {
  if (typeof node === "string") {
    const key = node.replace(/\s+/g, " ").trim();
    if (!key || !/[A-Za-zÀ-ž]/.test(key)) return node;
    const translated = t(key);
    return (node.match(/^\s*/)?.[0] ?? "") + translated + (node.match(/\s*$/)?.[0] ?? "");
  }
  if (Array.isArray(node)) return Children.map(node, (child) => localizeNode(child, t));
  if (!isValidElement<{ children?: ReactNode; alt?: string; title?: string; "aria-label"?: string }>(node)) return node;
  if (node.type === "script" || node.type === "style") return node;
  const props: { children?: ReactNode; alt?: string; title?: string; "aria-label"?: string } = {};
  for (const attr of ["alt", "title", "aria-label"] as const) {
    const value = node.props[attr];
    if (typeof value === "string" && value) {
      props[attr] = t(value);
    }
  }
  if ("children" in node.props) props.children = localizeNode(node.props.children, t);
  return cloneElement(node, props);
}
