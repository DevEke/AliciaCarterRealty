"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/logo-color.svg";
import { TextAlignEnd, X } from "lucide-react";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useHeaderControl } from "@/hooks/useHeaderControl";

const navigation = [
    { href: "/", label: "Home"},
    { href: "/services", label: "Services"},
    { href: "/first-time-homebuyer-tips", label: "First Time Homebuyer Tips"},
    { href: "/about", label: "About"},
    { href: "/contact", label: "Contact"}
]

export function Header() {
    const [open, setOpen] = useState(false);

    function onNavClick() {
        setOpen(false);
    }

    useScrollLock(open);
    const { hidden } = useHeaderControl({ thresholdPx: 10 });

    useEffect(() => {
        function onResize() {
          if (window.innerWidth > 768) setOpen(false);
        }
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
          if (e.key === "Escape") setOpen(false);
        }
        if (open) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
      }, [open]);


    return (
        <>
        <header className={` ${styles.header} ${hidden ? styles.headerHidden : ""}`} role="banner">
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.brand} onClick={onNavClick}>
                    <Image width={191} height={34} src={logo} alt="alicia carter realty logo"/>
                </Link>

                {/* Desktop nav */}
                <nav className={styles.navDesktop} aria-label="Primary">
                    {navigation.map((link) => (
                        <Link key={link.href} href={link.href} className={link.href === "/contact" ?styles.contact : styles.link}>{link.label}</Link>
                    ))}
                </nav>

                {/* Mobile button */}
                <button
                    type="button"
                    className={styles.menuButton}
                    aria-label="Open menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    { open ? <X size={24} aria-hidden /> : <TextAlignEnd size={24} aria-hidden/> }
                </button>
            </div>
        </header>
        {/* Mobile menu panel */}

            <>
                <button
                    type="button"
                    className={` ${styles.overlay} ${open ? styles.overlayOpen : ""}`}
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    style={{ pointerEvents: open ? "auto" : "none"}}
                />
                <nav
                    id="mobile-menu"
                    className={`${styles.navMobile} ${open ? styles.navMobileOpen : ""}`}
                    aria-label="Mobile Primary"
                    style={{ pointerEvents: open ? "auto" : "none" }}
                >
                    <div className={`container ${styles.mobileInner}`}>
                        {navigation.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={onNavClick}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
        </>
    </>
    );
}
