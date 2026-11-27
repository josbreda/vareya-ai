"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { useLocale } from "@/i18n/client";
import styles from "./ArticleTicker.module.css";

const COPY = {
  en: { pause: "Pause", play: "Play", reduced: "Automatic scrolling is off for reduced motion." },
  nl: { pause: "Pauzeren", play: "Afspelen", reduced: "Automatisch bewegen staat uit bij minder beweging." },
  de: { pause: "Pause", play: "Abspielen", reduced: "Automatisches Scrollen ist bei reduzierter Bewegung ausgeschaltet." },
  fr: { pause: "Pause", play: "Lecture", reduced: "Le défilement automatique est désactivé pour réduire les mouvements." },
  es: { pause: "Pausar", play: "Reproducir", reduced: "El desplazamiento automático está desactivado para reducir el movimiento." },
};
function subscribeVisibility(notify: () => void) {
  document.addEventListener("visibilitychange", notify);
  return () => document.removeEventListener("visibilitychange", notify);
}
const readVisibility = () => document.visibilityState === "visible";
const serverNotVisible = () => false;

export function ArticleTicker({ children, copies }: { children: ReactNode; copies: ReactNode }) {
  const locale = useLocale();
  const copy = COPY[locale];
  const [paused, setPaused] = useState(false);
  const visible = useSyncExternalStore(subscribeVisibility, readVisibility, serverNotVisible);
  return (
    <div className={styles.root} data-article-strip data-paused={paused || !visible} data-user-paused={paused}>
      <div className={styles.viewport} data-article-viewport>
        <div className={styles.track} data-article-track>
          <div className={styles.group} data-article-group>{children}</div>
          <div className={`${styles.group} ${styles.duplicate}`} data-article-group aria-hidden="true">{copies}</div>
        </div>
      </div>
      <div className={styles.controls}>
        <p className={styles.motionNote}>{copy.reduced}</p>
        <button type="button" className={styles.toggle} disabled={!visible} data-article-toggle aria-pressed={paused} onClick={() => setPaused(!paused)}>
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span> {paused ? copy.play : copy.pause}
        </button>
      </div>
    </div>
  );
}
