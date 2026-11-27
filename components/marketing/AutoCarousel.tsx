"use client";

import { Children, useCallback, useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { useLocale } from "@/i18n/client";
import styles from "./AutoCarousel.module.css";

const COPY = {
  en: { previous: "Previous items", next: "Next items", pause: "Pause", play: "Play", reduced: "Automatic scrolling is off for reduced motion", items: "Items", carousel: "carousel" },
  nl: { previous: "Vorige kaarten", next: "Volgende kaarten", pause: "Pauzeren", play: "Afspelen", reduced: "Automatisch wisselen staat uit bij minder beweging", items: "Kaarten", carousel: "carrousel" },
  de: { previous: "Vorherige Karten", next: "Nächste Karten", pause: "Pause", play: "Abspielen", reduced: "Automatischer Wechsel ist bei reduzierter Bewegung ausgeschaltet", items: "Karten", carousel: "Karussell" },
  fr: { previous: "Cartes précédentes", next: "Cartes suivantes", pause: "Pause", play: "Lecture", reduced: "Le défilement automatique est désactivé pour réduire les mouvements", items: "Cartes", carousel: "carrousel" },
  es: { previous: "Tarjetas anteriores", next: "Tarjetas siguientes", pause: "Pausar", play: "Reproducir", reduced: "El desplazamiento automático está desactivado para reducir el movimiento", items: "Tarjetas", carousel: "carrusel" },
};
const subscribeHydration = () => () => {};
const clientReady = () => true;
const serverNotReady = () => false;
const serverReducedMotion = () => true;
function subscribeReducedMotion(notify: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", notify);
  return () => media.removeEventListener("change", notify);
}
const readReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function subscribeVisibility(notify: () => void) {
  document.addEventListener("visibilitychange", notify);
  return () => document.removeEventListener("visibilitychange", notify);
}
const readVisibility = () => document.visibilityState === "visible";
function measure(track: HTMLDivElement) {
  const item = track.firstElementChild as HTMLElement | null;
  const width = item?.getBoundingClientRect().width ?? track.clientWidth;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  const step = width + gap;
  return { step, visible: Math.max(1, Math.round((track.clientWidth + gap) / step)) };
}

export function AutoCarousel({ children, name, labelledBy, multiple = false, dark = false }: {
  children: ReactNode;
  name: "reviews" | "articles";
  labelledBy: string;
  multiple?: boolean;
  dark?: boolean;
}) {
  const copy = COPY[useLocale()];
  const motionNoteId = useId();
  const items = Children.toArray(children);
  const count = items.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<number | null>(null);
  const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(1);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const hydrated = useSyncExternalStore(subscribeHydration, clientReady, serverNotReady);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, readReducedMotion, serverReducedMotion);
  const documentVisible = useSyncExternalStore(subscribeVisibility, readVisibility, serverNotReady);
  const maxStart = Math.max(0, count - visible);
  const active = Math.min(start, maxStart);
  const playing = hydrated && !userPaused && !hovered && !reducedMotion && inView && documentVisible && maxStart > 0;

  const readPosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const geometry = measure(track);
    setVisible(geometry.visible);
    setStart(Math.max(0, Math.min(count - geometry.visible, Math.round(track.scrollLeft / geometry.step))));
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(() => { targetRef.current = null; readPosition(); });
    observer.observe(track);
    return () => observer.disconnect();
  }, [readPosition]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.2), { threshold: [0, 0.2] });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = (next + maxStart + 1) % (maxStart + 1);
    targetRef.current = target;
    track.scrollTo({ left: target * measure(track).step, behavior: reducedMotion ? "auto" : "smooth" });
  }, [maxStart, reducedMotion]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => goTo(active + 1), 7000);
    return () => window.clearTimeout(timer);
  }, [playing, active, goTo]);

  return (
    <div ref={rootRef} className={`${styles.carousel} ${multiple ? styles.multiple : ""} ${dark ? styles.dark : ""}`} role="group" aria-roledescription={copy.carousel} aria-labelledby={labelledBy} data-carousel={name} data-start={active} data-visible={visible} data-playing={playing} data-reduced-motion={reducedMotion}>
      <div ref={trackRef} className={styles.track} data-carousel-track tabIndex={0} aria-labelledby={labelledBy} onScroll={readPosition}
        onScrollEnd={() => { targetRef.current = null; readPosition(); }}
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={() => setHovered(false)}
        onFocusCapture={() => setUserPaused(true)} onPointerDown={() => { targetRef.current = null; setUserPaused(true); }}
        onWheel={(event) => { if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) { targetRef.current = null; setUserPaused(true); } }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          const current = targetRef.current ?? active;
          const target = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: maxStart }[event.key];
          if (target !== undefined) { event.preventDefault(); goTo(target); }
        }}>
        {items.map((item, index) => {
          const hidden = hydrated && (index < active || index >= active + visible);
          return <div key={index} className={styles.item} role="group" aria-label={`${copy.items} ${index + 1} / ${count}`} aria-hidden={hidden} inert={hidden} data-carousel-item>{item}</div>;
        })}
      </div>
      <div className={styles.controls}>
        <span className={styles.counter} role="status" aria-live={playing ? "off" : "polite"} aria-atomic="true" aria-label={`${copy.items} ${active + 1} / ${count}`}>{active + 1}{visible > 1 ? `–${Math.min(count, active + visible)}` : ""} / {count}</span>
        <div className={styles.buttons}>
          <button type="button" className={styles.button} data-carousel-toggle aria-label={userPaused || reducedMotion ? copy.play : copy.pause} aria-describedby={hydrated && reducedMotion ? motionNoteId : undefined} disabled={!hydrated || reducedMotion || maxStart === 0} onClick={() => setUserPaused((paused) => !paused)}>{userPaused || reducedMotion ? copy.play : copy.pause}</button>
          <button type="button" className={styles.button} data-carousel-previous aria-label={copy.previous} disabled={!hydrated || maxStart === 0} onClick={() => { setUserPaused(true); goTo((targetRef.current ?? active) - 1); }}><span aria-hidden="true">←</span></button>
          <button type="button" className={styles.button} data-carousel-next aria-label={copy.next} disabled={!hydrated || maxStart === 0} onClick={() => { setUserPaused(true); goTo((targetRef.current ?? active) + 1); }}><span aria-hidden="true">→</span></button>
        </div>
      </div>
      {hydrated && reducedMotion && <p id={motionNoteId} className="mt-3 text-sm leading-6">{copy.reduced}</p>}
    </div>
  );
}
