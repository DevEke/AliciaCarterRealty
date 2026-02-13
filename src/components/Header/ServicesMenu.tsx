"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./ServicesMenu.module.css";
import { serviceCategories } from "@/lib/serviceLinks";

type Props = {
  closeOnNavigate?: () => void; // optional for mobile integration
};

export function ServicesMenu({ closeOnNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (!rootRef.current) return;
      if (!rootRef.current.contains(target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      ref={rootRef}
      className={styles.root}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)} // click works too (useful for touchpads)
      >
        Services
      </button>

      <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`} role="menu">
        <div className={styles.menuInner}>
          {serviceCategories.map((cat) => (
            <div key={cat.title} className={styles.column}>
              <div className={styles.columnTitle}>{cat.title}</div>

              <ul className={styles.list}>
                {cat.links.map((item) => (
                  <li key={item.href} className={styles.item}>
                    <Link
                      className={styles.link}
                      href={item.href}
                      onClick={() => {
                        setOpen(false);
                        closeOnNavigate?.();
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerRow}>
          <Link
            href="/services"
            className={styles.allServices}
            onClick={() => {
              setOpen(false);
              closeOnNavigate?.();
            }}
          >
            View all services
          </Link>
        </div>
      </div>
    </div>
  );
}
