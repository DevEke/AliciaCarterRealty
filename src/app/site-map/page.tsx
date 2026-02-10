import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Alicia Carter Realty",
  description:
    "Browse the main pages and services available on the Alicia Carter Realty website.",
  openGraph: {
    title: "Sitemap | Alicia Carter Realty",
    description:
      "Browse the main pages and services available on the Alicia Carter Realty website.",
    type: "website",
  },
};

export default function SitemapPage() {
    return (
        <div>
            <section className="section">
                <nav aria-label="sitemap" className="container contentPad">
                    <div className="privacyContainer">
                        <h1>Sitemap</h1>
                        <p>This page provides an overview of the main sections of the Alicia Carter Realty website to help visitors quickly find the information they’re looking for.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Primary Pages</h2>
                        <ul className="basicList">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/first-time-homebuyer-tips">First Time Homebuyer Tips</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="privacyContainer">
                        <h2>Services</h2>
                        <ul className="basicList">
                            <li><Link href="/services/credit-readiness">Credit Readiness</Link></li>
                            <li><Link href="/services/down-payment-assistance">Down Payment Assistance</Link></li>
                            <li><Link href="/services/affordable-loan-solutions">Affordable Loan Solutions</Link></li>
                            <li><Link href="/services/rent-to-own-services">Rent-to-Own Services</Link></li>
                        </ul>
                    </div>
                    <div className="privacyContainer">
                        <h2>Legal</h2>
                        <ul className="basicList">
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    )
}
