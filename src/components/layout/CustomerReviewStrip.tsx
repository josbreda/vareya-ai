"use client";

import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore, type CSSProperties } from "react";
import { useLocale } from "@/i18n/client";
import type { ReviewFeed } from "@/lib/reviews/parse-3plhub";
import styles from "./CustomerReviews.module.css";

const COPY = {
  en: { pause: "Pause", play: "Play", reduced: "Automatic scrolling is off for reduced motion.", read: "Read full review on 3PL Hub" },
  nl: { pause: "Pauzeren", play: "Afspelen", reduced: "Automatisch bewegen staat uit bij minder beweging.", read: "Lees de volledige review op 3PL Hub" },
  de: { pause: "Pause", play: "Abspielen", reduced: "Automatisches Scrollen ist bei reduzierter Bewegung ausgeschaltet.", read: "Vollständige Bewertung auf 3PL Hub lesen" },
  fr: { pause: "Pause", play: "Lecture", reduced: "Le défilement automatique est désactivé pour réduire les mouvements.", read: "Lire l’avis complet sur 3PL Hub" },
  es: { pause: "Pausar", play: "Reproducir", reduced: "El desplazamiento automático está desactivado para reducir el movimiento.", read: "Leer la reseña completa en 3PL Hub" },
};
function subscribeVisibility(notify: () => void) {
  document.addEventListener("visibilitychange", notify);
  return () => document.removeEventListener("visibilitychange", notify);
}
const readVisibility = () => document.visibilityState === "visible";
const serverNotVisible = () => false;
const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
type Props = { feed: ReviewFeed; origin: "3plhub" | "snapshot"; innerPagesOnly?: boolean };

function ReviewStrip({ feed, origin }: Props) {
  const locale = useLocale(), copy = COPY[locale];
  const [paused, setPaused] = useState(false);
  const visible = useSyncExternalStore(subscribeVisibility, readVisibility, serverNotVisible);
  const reviews = feed.reviews;
  const sequence = Array.from({ length: Math.ceil(4 / reviews.length) }, () => reviews).flat();
  return (
    <section aria-labelledby="customer-reviews-heading" className={styles.section} data-review-strip data-paused={paused || !visible} data-review-origin={origin} data-review-fetched-at={feed.fetchedAt} data-review-count={feed.reviewCount}>
      <div className="container-site">
        <div className={styles.heading}>
          <h2 id="customer-reviews-heading">Customer reviews on 3PL Hub</h2>
          <button type="button" className={styles.pause} data-review-toggle onClick={() => setPaused(!paused)} aria-pressed={paused}>
            <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span> {paused ? copy.play : copy.pause}
          </button>
        </div>
        <div className={styles.viewport} data-review-viewport>
          <div className={styles.track} data-review-track style={{ "--review-duration": `${sequence.length * 12}s` } as CSSProperties}>
            {[0, 1].map(group => (
              <div key={group} className={`${styles.group} ${group ? styles.duplicate : ""}`} data-review-group aria-hidden={group ? true : undefined}>
                {sequence.map((review, index) => {
                  const cloned = group > 0 || index >= reviews.length;
                  return (
                    <figure key={`${review.id}-${index}`} className={`${styles.card} ${cloned ? styles.copy : ""}`} data-review-card data-review-id={review.id} data-copy={cloned} aria-hidden={cloned ? true : undefined}>
                      <figcaption className={styles.meta}><strong>{review.author}</strong><time dateTime={review.date}>{dateFormat.format(new Date(review.date))}</time></figcaption>
                      <p className={styles.rating} aria-label={`${review.rating} out of 5 stars`}>
                        <span className={styles.stars} aria-hidden="true">★★★★★<span style={{ width: `${review.rating / 5 * 100}%` }}>★★★★★</span></span> <span>{review.rating}/5</span>
                      </p>
                      <blockquote lang="en" className={styles.quote}>{review.text}</blockquote>
                      <a className={styles.source} href={review.sourceUrl} title={review.title} onFocus={event => { if (event.currentTarget.matches(":focus-visible")) event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" }); }} target="_blank" rel="noopener noreferrer" tabIndex={cloned ? -1 : undefined}>{copy.read} ↗</a>
                    </figure>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.motionNote}>{copy.reduced}</p>
      </div>
    </section>
  );
}
export function CustomerReviewStrip({ innerPagesOnly = false, ...props }: Props) {
  const pathname = usePathname();
  if (innerPagesOnly && pathname === "/") return null;
  return <ReviewStrip {...props} />;
}
