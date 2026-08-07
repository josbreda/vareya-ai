"use client";

import { useState, useEffect } from "react";

interface RotatingHeadlineProps {
  prefix: string;
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingHeadline({
  prefix,
  words,
  interval = 2000,
  className = "",
}: RotatingHeadlineProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 300);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  return (
    <span className={className}>
      {prefix}{" "}
      <span
        className="inline-block text-network transition-all duration-300"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}
