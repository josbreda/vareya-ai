/**
 * Valueless, per-form interaction latch.
 *
 * The callback runs at most once, on the first real user interaction with a
 * form field. Mounting, rendering, page views and focus/blur never call it.
 * The latch takes no field arguments by design, so free text, selections and
 * other PII cannot reach analytics through this path.
 */
export type InteractionOnce = {
  /** Records one user interaction; invokes the callback only the first time. */
  mark: () => void;
  /** True once a user interaction has been recorded. */
  hasStarted: () => boolean;
};

export function createInteractionOnce(onFirstInteraction: () => void): InteractionOnce {
  let started = false;
  return {
    mark() {
      if (started) return;
      started = true;
      onFirstInteraction();
    },
    hasStarted() {
      return started;
    },
  };
}
