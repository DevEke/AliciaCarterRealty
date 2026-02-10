"use client"

import { useState, useRef, useEffect } from "react";

type Options = {
    thresholdPx?: number;
}

export function useHeaderControl(options: Options = {}) {
    const { thresholdPx = 9 } = options;

    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);
    const tickingRef = useRef(false);

    useEffect(() => {
        lastYRef.current = window.scrollY;
        const onScroll = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;

            window.requestAnimationFrame(() => {
              const y = window.scrollY;
              const lastY = lastYRef.current;

              const delta = y - lastY;

              // Ignore tiny scroll jitter
              if (Math.abs(delta) >= thresholdPx) {
                // Hide only after user has scrolled a bit, and scrolling down
                if (delta > 0 && y > 64) setHidden(true);
                // Reveal when scrolling up
                if (delta < 0) setHidden(false);

                lastYRef.current = y;
              }

              tickingRef.current = false;
            });
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
        }, [thresholdPx]);

        return { hidden }
};
