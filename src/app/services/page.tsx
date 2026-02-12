import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal/Reveal";
import image from "../../../public/set2-03.svg";
import credit from "../../../public/credit.svg";
import payment from "../../../public/payment.svg";
import loans from "../../../public/loans.svg";
import notary from "../../../public/notary.svg";
import selling from "../../../public/selling.svg";
import foreclosure from "../../../public/foreclosure.svg";
import { CallToActionButton } from "@/components/CallToActionButton";
import rent from "../../../public/rent.svg";
import ResponsiveImage from "@/components/ResponsiveImage";

export const metadata: Metadata = {
    title: "Services for First-Time Homebuyers",
    description:
        "Educational and consultative services designed to help first-time buyers prepare financially and move forward with confidence.",
  };

export default function ServicesPage() {
    return (
        <div>
            <section className="section">
                <div className="container heroContainer">
                    <div className="heroContent contentPad">
                        <Reveal>
                            <h1>Services Designed for<br/> <span className="brand">First-Time Homebuyers</span></h1>
                            <p className="subHeading">Our services focus on helping first-time buyers understand their options, prepare financially, and move forward with confidence. Support is tailored to your situation and pace, without pressure or rushed decisions.</p>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section accentBackground">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <Reveal>
                            <h2>A Flexible Path to Homeownership</h2>
                            <p>Not every first-time buyer starts in the same place. These services are designed to work together, allowing you to focus on what matters most at your stage of the homebuying process—without being locked into a single path.</p>
                        </Reveal>
                    </div>
                    <div className="flexImage">
                        <Reveal>
                            <ResponsiveImage src={image} alt="test" />
                        </Reveal>
                    </div>
                </div>
            </section>
            <section id="homebuyer-services" className="section">
                <div className="container contentPad">
                    <div className="centeredContent">
                        <Reveal>
                            <h2>Home Buyer Services</h2>
                            <p>Services designed to guide first-time and returning buyers through preparation, financing clarity, and informed homeownership decisions. From strengthening credit to identifying assistance programs and structured purchase options, we help buyers move forward with strategy and confidence.</p>
                        </Reveal>
                    </div>
                    <div className="contentGridTwoColumn">
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={credit} alt="credit readiness services icon"  height={72} width={72} className="gridItemImage"/>
                                <h3>Credit Readiness Services</h3>
                                <p>Credit plays a significant role in the homebuying process, but it doesn’t have to be confusing or intimidating. Credit readiness services focus on helping buyers understand their current credit profile, identify areas for improvement, and take practical steps toward strengthening their financial position before applying for a mortgage.</p>
                                <Link href="/services/credit-readiness" className="link">Learn more about credit readiness</Link>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={payment} alt="down payment assistance icon"  height={72} width={72} className="gridItemImage"/>
                                <h3>Down Payment Assistance</h3>
                                <p>Down payment assistance programs can help make homeownership more accessible, but eligibility and availability vary. This service focuses on helping first-time buyers explore programs that may apply to their situation and understand how assistance can fit into a broader homebuying plan.</p>
                                <Link href="/services/down-payment-assistance" className="link">Learn more about down payment assistance</Link>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={loans} alt="affordable loan services icon"  height={72} width={72} className="gridItemImage"/>
                                <h3>Affordable Loan Solutions</h3>
                                <p>Financing options for first-time buyers can vary widely based on individual circumstances. Affordable loan solutions focus on helping buyers understand different loan types, affordability considerations, and financing paths that align with their financial goals, without pressure to choose a one-size-fits-all option.</p>
                                <Link href="/services/affordable-loan-solutions" className="link">Learn more about affordable loan options</Link>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={rent} alt="rent to own services icon" height={72} width={72} className="gridItemImage"/>
                                <h3>Rent-to-Own Services</h3>
                                <p>Rent-to-own arrangements can offer an alternative path toward homeownership for some buyers, but they require careful consideration. Rent-to-own services focus on helping individuals understand how these agreements work, evaluate whether they align with their goals, and explore them as part of a broader, informed homebuying strategy.</p>
                                <Link href="/services/rent-to-own-services" className="link">Learn more about rent-to-own options</Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section id="homeowner-services" className="section accentBackground">
                <div className="container contentPad">
                    <div className="centeredContent">
                        <Reveal>
                            <h2>Home Owner Services</h2>
                            <p>Services designed to help homeowners protect their equity, evaluate strategic decisions, and navigate complex transitions with clarity. Whether you are preparing to sell or facing financial pressure, we provide structured guidance to support informed outcomes.</p>
                        </Reveal>
                    </div>
                    <div className="contentGridTwoColumn">
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={selling} alt="credit readiness services icon"  height={72} width={72} className="gridItemImage"/>
                                <h3>Home Selling Services</h3>
                                <p>Strategic representation for homeowners preparing to sell. From detailed market-based valuation and property preparation guidance to negotiation and contract management, we help position your home competitively and navigate each stage of the selling process with clarity and structure.</p>
                                <Link href="/services/home-selling" className="link">Learn more about home selling services</Link>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={foreclosure} alt="foreclosure assistance icon"  height={72} width={72} className="gridItemImage"/>
                                <h3>Foreclosure Assistance</h3>
                                <p>Advisory support for homeowners experiencing missed payments or foreclosure risk. We help you understand your timeline, evaluate available options, and take organized next steps based on accurate information—so decisions are made deliberately rather than under pressure.</p>
                                <Link href="/services/foreclosure-assistance" className="link">Learn more about foreclosure assistance</Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section id="additional-services" className="section">
                <div className="container contentPad">
                    <div className="centeredContent">
                        <Reveal>
                            <h2>Additional Services</h2>
                            <p>Practical services available to support related needs beyond buying or selling.</p>
                        </Reveal>
                    </div>
                    <div className="contentGridTwoColumn">
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <Image src={notary} alt="notary services icon"  height={72} width={72} className="gridItemImage"/>
                                <h3>Notary Services</h3>
                                <p>Mobile notary services available across Texas for real estate documents, financial transactions, legal paperwork, employment verification, and personal documentation. Professional, timely, and structured service when official notarization is required.</p>
                                <Link href="/services/notary-services" className="link">Learn more about notary services</Link>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section accentBackground">
                <div className="container">
                    <div className="centeredContent contentPad">
                        <Reveal>
                            <h2>Not Every Buyer Follows the Same Path</h2>
                            <p>Some buyers begin by focusing on credit or financing, while others are already prepared and need guidance navigating the final steps. These services are designed to adapt to your situation, allowing you to move forward in a way that makes sense for you, without pressure to follow a predefined path.</p>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section actionBackground">
                <Reveal>
                    <div className="container containerFlex contentPad actionFlex">
                        <div className="actionContent">
                            <h2>When You’re Ready, We’re Here</h2>
                            <p>Start with a conversation to better understand your options and how these services may apply to your situation.</p>
                        </div>
                        <CallToActionButton />
                    </div>
                </Reveal>
            </section>
        </div>
    )
}
