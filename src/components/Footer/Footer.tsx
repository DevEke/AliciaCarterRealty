import Link from "next/link";
import Image from "next/image";
import eoh from "../../../public/eoh_white.svg"
import styles from "./Footer.module.css";
import logo from "../../../public/logo-white.svg";
import { TbBrandFacebook, TbBrandX, TbBrandYoutube, TbBrandPinterest, TbBrandInstagram, TbPhone, TbAt } from "react-icons/tb";

export function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} role="contentInfo">
            <div className={`container ${styles.footerInner}`}>
                <div className={styles.footerTop}>
                    <div className={styles.footerTopLeft}>
                        <img className={styles.footerLogo} width={191} height={34} alt="alicia carter realty footer logo" src={logo.src} />
                        <div className={styles.footerContact}>
                        <p className={styles.footerSummary}>Alicia Carter Realty supports first-time homebuyers with education, credit readiness, and access to affordable homeownership solutions across Texas.</p>
                        <ul className={styles.footerContactLinks}>
                            <li className={styles.footerContactLink}>
                                <TbPhone />
                                <Link href="tel:+19722302100">(972) 230-2100</Link>
                            </li>
                            <li className={styles.footerContactLink}>
                                <TbAt />
                                <Link href="mailto:info@aliciacarterrealty.com">info@aliciacarterrealty.com</Link>
                            </li>
                        </ul>
                        <p className={styles.footerServing}>Serving the Dallas-Fort Worth and Houston, Texas Areas</p>
                        </div>
                        <ul className={styles.footerSocials}>
                            <li className={styles.footerSocial}><Link target="_blank" rel="noreferrer" href="https://www.facebook.com/aliciacarterrealty"><TbBrandFacebook /></Link></li>
                            <li className={styles.footerSocial}><Link target="_blank" rel="noreferrer" href="https://www.twitter.com/homesbyalicia"><TbBrandX /></Link></li>
                            <li className={styles.footerSocial}><Link target="_blank" rel="noreferrer" href="https://www.youtube.com/acrealtyandcreditservices"><TbBrandYoutube /></Link></li>
                            <li className={styles.footerSocial}><Link target="_blank" rel="noreferrer" href="https://www.pinterest.com/aliciacarterrealty"><TbBrandPinterest /></Link></li>
                            <li className={styles.footerSocial}><Link target="_blank" rel="noreferrer" href="https://www.instagram.com/homesbyalicia0?igshid=xw8e6senuoy"><TbBrandInstagram /></Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerRight}>
                        <div className={styles.footerTopRight}>
                            <ul className={styles.footerLinkList}>
                                <li className={styles.footerLinkListTitle}>All Services</li>
                                <li className={styles.footerLinkListLink}><Link href="/services/credit-readiness">Credit Readiness Services</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/services/down-payment-assistance">Down Payment Assistance</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/services/rent-to-own-services">Rent to Own Services</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/services/affordable-loan-solutions">Affordable Loan Solutions</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/services/home-selling">Home Selling Services</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/services/foreclosure-assistance">Foreclosure Assistance</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/services/notary-services">Notary Services</Link></li>
                            </ul>
                            <ul className={styles.footerLinkList}>
                                <li className={styles.footerLinkListTitle}>Resources</li>
                                <li className={styles.footerLinkListLink}><Link href="/first-time-homebuyer-tips">First Time Homebuyer Tips</Link></li>
                            </ul>
                            <ul className={styles.footerLinkList}>
                                <li className={styles.footerLinkListTitle}>Contact</li>
                                <li className={styles.footerLinkListLink}><Link href="/about">About</Link></li>
                                <li className={styles.footerLinkListLink}><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className={styles.texasNotices}>
                            <Image src={eoh} height={96} width={96} alt="equal opportunity housing logo" />
                            <ul className={styles.texasNoticesList}>
                                <li><Link className={styles.footerLink} target="_blank" rel="noopener noreferrer" href="/legal/ConsumerProtectionNotice.pdf">Texas Consumer Protection Notice</Link></li>
                                <li><Link className={styles.footerLink} target="_blank" rel="noopener noreferrer" href="/legal/TRECIABS.pdf">TREC Information About Brokerage Services</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p className={styles.footerCopyright}>© {year} Alicia Carter Realty, All Rights Reserved</p>
                    <ul className={styles.footerBottomNav}>

                        <li><Link className={styles.footerLink} href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link className={styles.footerLink} href="/terms-of-service">Terms of Service</Link></li>
                        <li><Link className={styles.footerLink} href="/site-map">Sitemap</Link></li>
                        <li><Link className={styles.footerLink} href="https://www.vecteezy.com/free-vector/background">Background Vectors by Vecteezy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
