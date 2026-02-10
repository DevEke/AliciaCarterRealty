"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Reveals only the first time it enters the viewport */
  once?: boolean;
  /** IntersectionObserver threshold */
  threshold?: number;
  /** Root margin for earlier/later reveal (e.g. "0px 0px -10% 0px") */
  rootMargin?: string;
  /** Tag or component to render (defaults to div) */
  as?: React.ElementType;
};

export function Reveal({
  children,
  className,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reduced motion: reveal immediately (schedule to avoid sync state warning)
    if (prefersReducedMotion()) {
      queueMicrotask(() => setVisible(true));
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  const classes = [
    styles.reveal,
    visible ? styles.visible : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag

      ref={(el: unknown) => {
        ref.current = el as HTMLElement | null;
      }}
      className={classes}
    >
      {children}
    </Tag>
  );
}
