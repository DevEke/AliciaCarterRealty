import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/set1-03.svg";
import credit from "../../../public/credit.svg";
import payment from "../../../public/payment.svg";
import loans from "../../../public/loans.svg";
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
                        <h1>Services Designed for<br/> <span className="brand">First-Time Homebuyers</span></h1>
                        <p className="subHeading">Our services focus on helping first-time buyers understand their options, prepare financially, and move forward with confidence. Support is tailored to your situation and pace, without pressure or rushed decisions.</p>
                    </div>
                </div>
            </section>
            <section className="section accentBackground">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <h2>A Flexible Path to Homeownership</h2>
                        <p>Not every first-time buyer starts in the same place. These services are designed to work together, allowing you to focus on what matters most at your stage of the homebuying process—without being locked into a single path.</p>
                    </div>
                    <div className="flexImage">
                        <ResponsiveImage src={image} alt="test" />
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="contentGridTwoColumn contentPad">
                        <div className="gridItemLeftAligned">
                            <Image src={credit} alt="credit readiness services icon"  height={72} width={72} className="gridItemImage"/>
                            <h2>Credit Readiness Services</h2>
                            <p>Credit plays a significant role in the homebuying process, but it doesn’t have to be confusing or intimidating. Credit readiness services focus on helping buyers understand their current credit profile, identify areas for improvement, and take practical steps toward strengthening their financial position before applying for a mortgage.</p>
                            <Link href="/services/credit-readiness" className="link">Learn more about credit readiness</Link>
                        </div>
                        <div className="gridItemLeftAligned">
                            <Image src={payment} alt="down payment assistance icon"  height={72} width={72} className="gridItemImage"/>
                            <h2>Down Payment Assistance</h2>
                            <p>Down payment assistance programs can help make homeownership more accessible, but eligibility and availability vary. This service focuses on helping first-time buyers explore programs that may apply to their situation and understand how assistance can fit into a broader homebuying plan.</p>
                            <Link href="/services/down-payment-assistance" className="link">Learn more about down payment assistance</Link>
                        </div>
                        <div className="gridItemLeftAligned">
                            <Image src={loans} alt="affordable loan services icon"  height={72} width={72} className="gridItemImage"/>
                            <h2>Affordable Loan Solutions</h2>
                            <p>Financing options for first-time buyers can vary widely based on individual circumstances. Affordable loan solutions focus on helping buyers understand different loan types, affordability considerations, and financing paths that align with their financial goals, without pressure to choose a one-size-fits-all option.</p>
                            <Link href="/services/affordable-loan-solutions" className="link">Learn more about affordable loan options</Link>
                        </div>
                        <div className="gridItemLeftAligned">
                            <Image src={rent} alt="rent to own services icon" height={72} width={72} className="gridItemImage"/>
                            <h2>Rent-to-Own Services</h2>
                            <p>Rent-to-own arrangements can offer an alternative path toward homeownership for some buyers, but they require careful consideration. Rent-to-own services focus on helping individuals understand how these agreements work, evaluate whether they align with their goals, and explore them as part of a broader, informed homebuying strategy.</p>
                            <Link href="/services/rent-to-own-services" className="link">Learn more about rent-to-own options</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section accentBackground">
                <div className="container">
                    <div className="centeredContent contentPad">
                        <h2>Not Every Buyer Follows the Same Path</h2>
                        <p>Some buyers begin by focusing on credit or financing, while others are already prepared and need guidance navigating the final steps. These services are designed to adapt to your situation, allowing you to move forward in a way that makes sense for you, without pressure to follow a predefined path.</p>
                    </div>
                </div>
            </section>
            <section className="section actionBackground">
                <div className="container containerFlex contentPad actionFlex">
                    <div className="actionContent">
                        <h2>When You’re Ready, We’re Here</h2>
                        <p>Start with a conversation to better understand your options and how these services may apply to your situation.</p>
                    </div>
                    <CallToActionButton />
                </div>
            </section>
        </div>
    )
}
