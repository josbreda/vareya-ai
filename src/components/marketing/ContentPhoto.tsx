"use client";
import { useT } from "@/i18n/client";
import type { ReactNode } from "react";

export interface ContentPhotoData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ContentPhotoProps {
  photo: ContentPhotoData;
  /** Classes for the <img> element. */
  className?: string;
  /** Classes for the wrapping <figure>. */
  frameClassName?: string;
  /** Localized alt text; falls back to the source photo's English alt. */
  alt?: string;
  caption?: ReactNode;
}

/**
 * Content image wrapper for the Raymond photo set.
 *
 * Deliberately a plain <img> with explicit intrinsic dimensions: the site
 * serves pre-optimised static WebP exports from /public, so no runtime
 * image-optimizer dependency is introduced for the self-hosted build.
 */
export function ContentPhoto({ photo, className, frameClassName, alt, caption }: ContentPhotoProps) {
  const t = useT();
  return (
    <figure className={frameClassName ?? "m-0"}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static WebP exports from /public, avoids a runtime optimizer dependency */}
      <img
        src={photo.src}
        alt={t(alt ?? photo.alt)}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        className={className ?? "h-auto w-full rounded-xl border border-slate-200 bg-slate-100 object-cover"}
      />
      {caption ? <figcaption className="mt-2 text-sm leading-6 text-muted">{caption}</figcaption> : null}
    </figure>
  );
}
