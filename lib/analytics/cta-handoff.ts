/**
 * Functional CTA/Topic handoff (existing register IDs only).
 *
 * A click on an element carrying data-topic-id/data-cta-id records the pair
 * in sessionStorage so the scan/quote form can forward it to the durable lead
 * dashboard. Storage requires analytics consent and carries no URL,
 * referrer, e-mail or other PII, and only exact existing IDs are accepted.
 *
 * Unknown values are ignored and never guessed or derived. An existing known
 * handoff is preserved (first known source wins); a later unknown click can
 * therefore neither erase nor replace it. TTL mirrors the existing campaign
 * attribution window.
 */
import { hasAnalyticsConsent } from "./consent.js";
import {
  normaliseCtaId,
  normaliseTopicId,
  type CtaId,
  type TopicId,
} from "../topic-cta-register.ts";

export const CTA_HANDOFF_STORAGE_KEY = "vareya_cta_handoff_v1";
export const CTA_HANDOFF_TTL_MS = 30 * 60 * 1000;
export const CTA_HANDOFF_VERSION = 1;

export interface CtaHandoff {
  version: typeof CTA_HANDOFF_VERSION;
  topic_id?: TopicId;
  cta_id?: CtaId;
  captured_at: number;
  expires_at: number;
}

export interface CtaHandoffIds {
  topic_id?: TopicId;
  cta_id?: CtaId;
}

interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

interface ElementLike {
  getAttribute(name: string): string | null;
}

function defaultStorage(): StorageLike | null {
  try {
    if (typeof window === "undefined") return null;
    return window.sessionStorage;
  } catch {
    return null;
  }
}

function allowed(storage: StorageLike | null): boolean {
  if (hasAnalyticsConsent()) return true;
  try { storage?.removeItem(CTA_HANDOFF_STORAGE_KEY); } catch { /* unavailable */ }
  return false;
}

function readRecord(
  now: number,
  storage: StorageLike | null,
): CtaHandoff | null {
  if (!storage || !allowed(storage)) return null;
  try {
    const raw = storage.getItem(CTA_HANDOFF_STORAGE_KEY);
    if (!raw || raw.length > 1000) return null;
    const value = JSON.parse(raw) as Partial<CtaHandoff>;
    if (
      value?.version !== CTA_HANDOFF_VERSION ||
      !Number.isFinite(value.captured_at) ||
      !Number.isFinite(value.expires_at)
    ) {
      return null;
    }
    const capturedAt = value.captured_at as number;
    const expiresAt = value.expires_at as number;
    const topicId = normaliseTopicId(value.topic_id);
    const ctaId = normaliseCtaId(value.cta_id);
    if (
      capturedAt > now ||
      expiresAt <= now ||
      expiresAt > capturedAt + CTA_HANDOFF_TTL_MS ||
      (!topicId && !ctaId)
    ) {
      storage.removeItem(CTA_HANDOFF_STORAGE_KEY);
      return null;
    }
    return {
      version: CTA_HANDOFF_VERSION,
      ...(topicId ? { topic_id: topicId } : {}),
      ...(ctaId ? { cta_id: ctaId } : {}),
      captured_at: capturedAt,
      expires_at: expiresAt,
    };
  } catch {
    return null;
  }
}

/** Read the current valid handoff; unknown or malformed state is `{}`. */
export function readCtaHandoff(
  now: number = Date.now(),
  storage: StorageLike | null = defaultStorage(),
): CtaHandoffIds {
  const record = readRecord(now, storage);
  if (!record) return {};
  return {
    ...(record.topic_id ? { topic_id: record.topic_id } : {}),
    ...(record.cta_id ? { cta_id: record.cta_id } : {}),
  };
}

/**
 * Capture the IDs of a clicked element. Returns `null` when the element has
 * no known IDs, leaving any existing handoff untouched. When a valid handoff
 * already exists, compatible missing fields may be filled; known values stay unchanged.
 */
export function captureCtaHandoffFromElement(
  element: ElementLike,
  now: number = Date.now(),
  storage: StorageLike | null = defaultStorage(),
): CtaHandoffIds | null {
  if (!allowed(storage)) return null;
  const topicId = normaliseTopicId(element.getAttribute("data-topic-id"));
  const ctaId = normaliseCtaId(element.getAttribute("data-cta-id"));
  if (!topicId && !ctaId) return null;

  const existing = readRecord(now, storage);
  // Fill missing fields only when the new click does not contradict an existing ID.
  const sharesKnownId = !!existing && ((!!topicId && topicId === existing.topic_id) || (!!ctaId && ctaId === existing.cta_id));
  const compatible = !existing || (sharesKnownId && (!topicId || !existing.topic_id || topicId === existing.topic_id) && (!ctaId || !existing.cta_id || ctaId === existing.cta_id));
  const mergedTopic = existing?.topic_id ?? (compatible ? topicId : undefined);
  const mergedCta = existing?.cta_id ?? (compatible ? ctaId : undefined);
  if (storage) {
    const record: CtaHandoff = {
      version: CTA_HANDOFF_VERSION,
      ...(mergedTopic ? { topic_id: mergedTopic } : {}),
      ...(mergedCta ? { cta_id: mergedCta } : {}),
      captured_at: existing?.captured_at ?? now,
      expires_at: existing?.expires_at ?? now + CTA_HANDOFF_TTL_MS,
    };
    try {
      storage.setItem(CTA_HANDOFF_STORAGE_KEY, JSON.stringify(record));
    } catch {
      /* Storage unavailable: the form simply carries no IDs. */
    }
  }

  return {
    ...(mergedTopic ? { topic_id: mergedTopic } : {}),
    ...(mergedCta ? { cta_id: mergedCta } : {}),
  };
}

