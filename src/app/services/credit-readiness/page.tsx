import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ResponsiveImage from "@/components/ResponsiveImage";
import image from "../../../../public/set3-04.svg";
import bills from "../../../../public/bills.svg"
import cards from "../../../../public/cards.svg"
import review from "../../../../public/review.svg"
import balances from "../../../../public/balances.svg"
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";

export const metadata: Metadata = {
    title: "Credit Readiness Services",
    description:
      "Practical guidance to help first-time buyers understand their credit, improve key factors over time, and prepare for homeownership with confidence.",
    openGraph: {
      title: "Credit Readiness Services",
      description:
        "Practical guidance to help first-time buyers understand their credit, improve key factors over time, and prepare for homeownership with confidence.",
      type: "article",
    },
};

  export default function CreditReadinessPage() {
    return (
        <div>
            <section className="section">
                <div className="container heroContainer">
                    <div className="heroContent contentPad">
                        <h1>Preparing Your Credit for <span className="brand">Homeownership</span></h1>
                        <p className="subHeading">Credit readiness is about understanding where your credit stands today and knowing what steps can help you prepare for future homeownership. Improving your credit is rarely instant, but with the right information and consistent actions, meaningful progress is possible over time. This page outlines practical considerations and resources to help you move forward with clarity and confidence.</p>
                        <div className="anchors">
                            <p>On this page:{" "}
                                <Link className="inline-link" href="#steps-to-strengthen-credit">Steps to Improve your Credit</Link>,{" "}
                                <Link className="inline-link" href="#why-credt-matters">Why Credit Matters</Link>, and{" "}
                                <Link className="inline-link" href="#free-credit-report">How to Access your Free Credit Report</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="steps-to-strengthen-credit" className="section accentBackground">
                <div className="container contentPad">
                    <div className="centeredContent">
                        <h2>Steps You Can Take to Strengthen Your Credit</h2>
                        <p>While every credit profile is different, there are several common actions that often play a role in improving credit over time.</p>
                    </div>
                    <div className="contentGridTwoColumn">
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="pay bills on time icon" src={bills}/>
                            <h3>Pay bills on time</h3>
                            <p>Consistent, on-time payments are one of the most influential factors in credit scoring. Even small missed payments can have an outsized impact.</p>
                        </div>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="keep balances low icon" src={balances}/>
                            <h3>Keep balances low</h3>
                            <p>High balances relative to your credit limits can signal risk. Managing usage carefully can help improve how your credit is evaluated.</p>
                        </div>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="review credit report icon" src={review}/>
                            <h3>Review your credit report for inaccuracies</h3>
                            <p>Errors do happen. Regularly reviewing your credit report can help you identify and address incorrect or outdated information.</p>
                        </div>
                        <div className="gridItemLeftAligned">
                            <Image className="gridItemImage" height={72} width={72} alt="avoid closing credit cards icon" src={cards}/>
                            <h3>Avoid closing unused credit cards unnecessarily</h3>
                            <p>Older accounts contribute to credit history length. Closing them without a clear reason can sometimes do more harm than good.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="externalLinks">
                    <p>If you’re also exploring affordability, you may want to review our <Link className="inline-link" href="/services/down-payment-assistance">Down Payment Assistance</Link> and <Link className="inline-link" href="/services/affordable-loan-solutions">Affordable Loan Solutions</Link> services.</p>
                </section>
            <section id="why-credit-matters" className="section">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <h2>Why Credit Matters</h2>
                        <p>Credit scores are commonly used by lenders as one way to assess risk. A lower credit score can limit available options and, in some cases, result in higher interest rates or less favorable loan terms. While credit is only one part of the overall picture, understanding how it affects borrowing can help you make more informed decisions as you prepare for homeownership.</p>
                        <div className="emphasis">
                            <TbInfoCircle className="emphasisIcon" />
                            <p>Improving credit can expand options and help reduce long-term borrowing costs.</p>
                        </div>
                    </div>
                    <div className="flexImage">
                        <ResponsiveImage src={image} alt="test" />
                    </div>
                </div>
            </section>
            <section id="free-credit-report" className="section accentBackground">
                <div className="container">
                    <div className="centeredContent contentPad">
                        <h2>Accessing Your Free Credit Report</h2>
                        <p>Federal law allows you to request a free copy of your credit report from each of the three major credit reporting agencies once every 12 months. Reviewing your credit report can help you better understand your current standing and identify any inaccuracies that may need attention.</p>
                    </div>
                </div>

            </section>
            <section className="externalLinks">
                    <p>You can request your free credit report at <Link className="inline-link" href="https://www.annualcreditreport.com"target="_blank" rel="noopener noreferrer">AnnualCreditReport.com</Link></p>
                </section>
            <section className="section actionBackground">
                <div className="container containerFlex contentPad actionFlex">
                    <div className="halfContent">
                        <h2>When You’re Ready, We’re Here</h2>
                        <p>If you’re ready to take the next step toward improving your credit and preparing for homeownership, a conversation can help clarify what makes sense for your situation.</p>
                    </div>
                    <CallToActionButton />
                </div>
            </section>
        </div>
    )
  }
