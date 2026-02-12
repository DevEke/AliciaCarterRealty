import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal/Reveal";
import ResponsiveImage from "@/components/ResponsiveImage";
import image1 from "../../../public/set1-04.svg";
import image2 from "../../../public/set2-02.svg";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";

export const metadata: Metadata = {
    title: "First-Time Homebuyer Tips",
    description:
      "Practical guidance to help first-time homebuyers understand credit, budgeting, and early preparation before purchasing a home.",
    openGraph: {
      title: "First-Time Homebuyer Tips",
      description:
        "Practical guidance to help first-time homebuyers understand credit, budgeting, and early preparation before purchasing a home.",
      type: "article",
    },
  };

export default function FirstTimeHomebuyerTipsPage() {
    return (
        <div>
            <section className="section">
            <div className="container heroContainer">
              <div className="heroContent contentPad">
                        <Reveal>
                            <h1>Helpful Guidance for<br/> <span className="brand">First-Time Homebuyers</span></h1>
                            <p className="subHeading">When the idea of buying your first home begins to take shape, it’s easy to focus on listings and possibilities before addressing the practical side of the process. Taking time to prepare early—by understanding your finances, credit, and overall readiness—can help you approach homeownership with greater clarity and confidence, especially in competitive markets.</p>
                        </Reveal>
                    </div>
                </div>
            </section>
      <section className="section accentBackground">
            <div className="container containerFlex">
                <div className="flexContent">
                    <Reveal>
                        <h2>Understanding Your Credit Before You Buy</h2>
                        <p>Your credit profile plays a significant role in the loan options and interest rates available to you. Reviewing your credit early in the homebuying process gives you time to identify errors, understand key factors affecting your score, and make improvements before applying for a mortgage.</p>
                        <div className="emphasis">
                            <TbInfoCircle className="emphasisIcon" />
                            <p>Even small improvements made ahead of time can have a meaningful impact over the life of a loan.</p>
                        </div>
                    </Reveal>
                </div>
                <div className="flexImage">
                    <Reveal>
                        <ResponsiveImage src={image1} alt="test" />
                    </Reveal>
                </div>
            </div>
        </section>
        <section className="externalLinks">
            <Reveal>
                <p>If you’d like deeper guidance around credit preparation, our <Link className="inline-link" href="/services/credit-readiness">Credit Readiness</Link> services provide additional context.</p>
            </Reveal>
        </section>
        <section className="section">
            <div className="container containerFlex flexReverse">
                <div className="flexImage">
                <Reveal>
                    <ResponsiveImage src={image2} alt="test" />
                </Reveal>
                </div>
                <div className="flexContent">
                    <Reveal>
                        <h2>Planning for the Full Cost of Homeownership</h2>
                        <p>Beyond the purchase price, homeownership comes with ongoing costs that are easy to overlook at the start of the process. Property taxes, homeowners insurance, utilities, and routine maintenance can all affect your monthly budget. Taking time to review your finances with these factors in mind can help prevent surprises and support long-term stability.</p>
                        <div className="emphasis">
                            <TbInfoCircle className="emphasisIcon" />
                            <p>Building room for emergency repairs and unexpected expenses is an important part of preparing responsibly.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
        <section className="externalLinks">
            <Reveal>
                <p>Some first-time buyers also explore <Link className="inline-link" href="/services/down-payment-assistance">Down Payment Assistance</Link> programs as part of their planning.</p>
            </Reveal>
        </section>
        <section className="section accentBackground">
            <div className="container">
                <div className="centeredContent contentPad">
                    <Reveal>
                        <h2>Preparing with Confidence</h2>
                        <p>Preparing to buy your first home is less about having everything figured out at once and more about understanding where you stand today. By focusing on credit awareness, realistic budgeting, and early preparation, first-time buyers can move forward with greater confidence and clearer expectations throughout the process.</p>
                    </Reveal>
                </div>
            </div>
        </section>
        <section className="externalLinks ">
            <Reveal>
                <p>Understanding the available <Link className="inline-link" href="/services/affordable-loan-options">Affordable Loan Solutions</Link> can also be part of early preparation.</p>
            </Reveal>
        </section>
        <section className="section actionBackground">
            <Reveal>
                <div className="container containerFlex contentPad actionFlex">
                    <div className="halfContent">
                        <h2>When You’re Ready, We’re Here</h2>
                        <p>If you have questions about preparing for your first home purchase or want help understanding your next steps, a conversation can help bring clarity.</p>
                    </div>
                    <CallToActionButton />
                </div>
            </Reveal>
        </section>
    </div>
    )
}
