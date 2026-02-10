import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import ResponsiveImage from "@/components/ResponsiveImage";
import image from "../../../../public/set2-03.svg";
import grants from "../../../../public/grants.svg";
import interest from "../../../../public/interest.svg";
import deferred from "../../../../public/deferred.svg";
import forgive from "../../../../public/forgive.svg";
import styles from "./page.module.css";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";

export const metadata: Metadata = {
    title: "Down Payment Assistance",
    description:
      "Guidance on down payment assistance programs, including common program types, eligibility considerations, and trusted resources for first-time homebuyers.",
    openGraph: {
      title: "Down Payment Assistance",
      description:
        "Guidance on down payment assistance programs, including common program types, eligibility considerations, and trusted resources for first-time homebuyers.",
      type: "article",
    },
  };

  export default function DownPaymentAssistancePage() {
    return (
        <div>
            <section className="section">
                <div className="container heroContainer">
                    <div className="heroContent contentPad">
                        <Reveal>
                        <h1>Understanding <span className="brand">Down Payment Assistance</span></h1>
                        <p className="subHeading">Down payment assistance refers to a range of programs designed to help homebuyers reduce the upfront cost of purchasing a home. These programs may offer grants or low-interest loan options and are often provided through state, county, or local agencies. Because availability, eligibility, and terms vary widely, understanding how these programs work is an important first step before deciding whether they may be a good fit for your situation.</p>
                        </Reveal>
                        <div className="anchors">
                        <Reveal>
                            <p>On this page:{" "}
                                <Link className="inline-link" href="#assistance-types">Common Types of Down Payment Assistance</Link>,{" "}
                                <Link className="inline-link" href="#program-eligibility">Program Availability and Eligibility</Link>, and{" "}
                                <Link className="inline-link" href="#assistance-resources">Where to Find Program Information</Link>.
                            </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <section id="assistance-types" className="section accentBackground">
                <div className="container contentPad">
                    <div className="centeredContent">
                    <Reveal>
                        <h2>Common Types of Down Payment Assistance</h2>
                        <p>Down payment assistance programs can take different forms, each with its own terms and considerations.</p>
                        </Reveal>
                    </div>
                    <div className="contentGridTwoColumn">
                    <Reveal>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="grants icon" src={grants}/>
                            <h3>Grants</h3>
                            <p>Funds provided to help cover down payment costs that typically do not need to be repaid, as long as program requirements are met.</p>
                        </div>
                        </Reveal>
                        <Reveal>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="deferred loans icon" src={deferred}/>
                            <h3>Deferred Loans</h3>
                            <p>Second mortgages with payments deferred until a future event, such as selling, refinancing, or paying off the primary mortgage.</p>
                        </div>
                        </Reveal>
                        <Reveal>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="low interest loans icon" src={interest}/>
                            <h3>Low-Interest Loans</h3>
                            <p>Second mortgages that are repaid over time, often alongside the primary mortgage, with interest rates generally lower than standard loan options.</p>
                        </div>
                        </Reveal>
                        <Reveal>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="forgivable loans icon" src={forgive}/>
                            <h3>Forgivable loans</h3>
                            <p>Second mortgages that may be forgiven over a set period, provided the homeowner meets specific conditions, such as remaining in the home for a required number of years.</p>
                        </div>
                        </Reveal>
                    </div>
                </div>

            </section>
            <section className="externalLinks">
                <Reveal>
                    <p>Because eligibility often depends on financial readiness, reviewing our <Link className="inline-link" href="/services/credit-readiness">Credit Readiness</Link> services may also be helpful.</p>
                    </Reveal>
                </section>
            <section id="program-eligibility" className="section">
                <div className="container containerFlex">
                    <div className="flexContent">
                    <Reveal>
                        <h2>Program Availability and Eligibility</h2>
                        <p>Down payment assistance programs are offered through a wide range of state, county, and local agencies, as well as nonprofit organizations. Eligibility requirements, funding availability, and program terms can vary significantly depending on location and individual circumstances. Because these programs are subject to change, understanding current options often requires reviewing up-to-date information and guidance.</p>
                        <div className="emphasis">
                        <TbInfoCircle className="emphasisIcon" />
                            <p>What may be available in one area or at one point in time may not apply in another.</p>
                        </div>
                        </Reveal>
                    </div>
                    <div className="flexImage">
                    <Reveal>
                        <ResponsiveImage src={image} alt="test" />
                        </Reveal>
                    </div>
                </div>

            </section>
            <section className="externalLinks">
                <Reveal>
                    <p>You may also want to explore our <Link className="inline-link" href="/services/affordable-loan-solutions">Affordable Loan Solutions</Link> for additional context around financing options.</p>
                    </Reveal>
                </section>
            <section id="assistance-resources" className="section accentBackground">
                <div className="container contentPad">
                    <div className="centeredContent">
                    <Reveal>
                        <h2>Where to Find Program Information</h2>
                        <p>Several government agencies and nonprofit organizations provide information about down payment assistance programs at the state and national level. These resources can help buyers learn about potential options and better understand how assistance programs are structured.</p>
                        </Reveal>
                    </div>
                    <div className={styles.programsGrid}>
                        <div className={styles.programsGridLeft}>
                        <Reveal>
                            <h3>State & Program Resources (Texas)</h3>
                            </Reveal>
                            <Reveal>
                            <Link className={styles.containerLink} target="_blank" rel="noopener noreferrer" href="https://www.rd.usda.gov/tx">
                            <div className={styles.programsGridItem}>
                                <h4>U.S. Department of Housing and Urban Development (HUD)</h4>
                                <p>Lists homeownership assistance programs, including down payment assistance, by state.</p>
                                <p className={styles.fauxLink}>Click to visit website</p>
                                </div>
                            </Link>
                            </Reveal>
                            <Reveal>
                            <Link className={styles.containerLink}target="_blank" rel="noopener noreferrer" href="https://www.tdhca.state.tx.us/">
                            <div className={styles.programsGridItem}>
                                <h4>Texas Department of Housing and Community Affairs (TDHCA)</h4>
                                <p>Provides information on homebuyer programs and assistance available within Texas.</p>
                                <p className={styles.fauxLink}>Click to visit website</p>
                                </div>
                            </Link>
                            </Reveal>
                            <Reveal>
                            <Link className={styles.containerLink} target="_blank" rel="noopener noreferrer" href="https://www.tsahc.org/homebuyers-renters">
                            <div className={styles.programsGridItem}>
                                <h4>Texas State Affordable Housing Corporation (TSAHC)</h4>
                                <p>Offers educational resources and assistance programs for qualifying Texas homebuyers.</p>
                                <p className={styles.fauxLink}>Click to visit website</p>
                                </div>
                            </Link>
                            </Reveal>
                            <Reveal>
                            <Link className={styles.containerLink} target="_blank" rel="noopener noreferrer" href="https://welcomehome.tdhca.texas.gov/">
                            <div className={styles.programsGridItem}>
                                <h4>Texas Homebuyer Program</h4>
                                <p>Homebuying process guidance and step-by-step resources</p>
                                <p className={styles.fauxLink}>Click to visit website</p>
                                </div>
                            </Link>
                            </Reveal>
                        </div>
                        <div className={styles.programsGridRight}>
                            <Reveal>
                            <h3>Community Nonprofit Support</h3>
                            </Reveal>
                            <Reveal>
                            <Link  className={styles.containerLink} target="_blank" rel="noopener noreferrer" href="https://habitattexas.org/">
                            <div className={styles.programsGridItem}>
                                <h4>Habitat for Humanity</h4>
                                <p>Affordable homeownership support through local affiliates</p>
                                <p className={styles.fauxLink}>Click to visit website</p>
                                </div>
                            </Link>
                            </Reveal>
                            <Reveal>
                            <Link className={styles.containerLink} target="_blank" rel="noopener noreferrer" href="https://vlb.texas.gov/loans">
                            <div className={styles.programsGridItem}>
                                <h4>Veterans Land Board (VLB)</h4>
                                <p>Homeownership assistance programs for eligible Texas veterans.</p>
                                <p className={styles.fauxLink}>Click to visit website</p>
                            </div>
                            </Link>
                            </Reveal>
                        </div>
                    </div>
                    <div className="emphasis">
                    <TbInfoCircle className="emphasisIcon" />
                    <Reveal>
                        <p>Program availability, eligibility requirements, and terms are subject to change. Reviewing official sources is the best way to access current information.</p>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section actionBackground">
                    <Reveal>
                <div className="container containerFlex contentPad actionFlex">
                    <div className="halfContent">
                        <h2>When You’re Ready, We’re Here</h2>
                        <p>If you’re interested in exploring whether down payment assistance programs may be an option for you, a conversation can help clarify what’s available based on your goals and location.</p>

                    </div>

                    <CallToActionButton />
                </div>
                    </Reveal>
            </section>
        </div>
    )
  }
