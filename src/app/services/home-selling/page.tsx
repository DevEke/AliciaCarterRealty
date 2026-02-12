import type { Metadata } from "next";
import Link from "next/link";
import image1 from "../../../../public/set2-03.svg";
import image2 from "../../../../public/set3-03.svg";
import image3 from "../../../../public/set1-03.svg";
import { Reveal } from "@/components/Reveal/Reveal";
import ResponsiveImage from "@/components/ResponsiveImage";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";



export const metadata: Metadata = {
    title: "Home Selling Services | Alicia Carter Realty",
    description:
        "Professional home valuation, preparation guidance, negotiation support, and full-service representation for homeowners ready to sell.",
    openGraph: {
        title: "Home Selling Services | Alicia Carter Realty",
        description:
            "Professional home valuation, preparation guidance, negotiation support, and full-service representation for homeowners ready to sell.",
        type: "website",
    },
  };

export default function HomeSellingPage() {
    return (
        <div>
            <section className="section">
                <div className="container heroContainer">
                    <div className="heroContent contentPad">
                        <Reveal>
                            <h1><span className="brand">Strategic Home Selling</span> From Start to Close</h1>
                            <p>Selling your home involves more than placing it on the market. From accurate pricing to preparation, negotiation, and closing strategy, every decision affects your final outcome. We guide homeowners through each stage of the selling process with clarity, preparation, and informed decision-making.</p>
                        </Reveal>
                        <div className="anchors">
                            <Reveal>
                                <p>On this page:{" "}
                                    <Link className="inline-link" href="#home-valuation">Accurate Home Valuation</Link>,{" "}
                                    <Link className="inline-link" href="#preparing-your-home">Preparation That Creates Buyer Confidence</Link>, and{" "}
                                    <Link className="inline-link" href="#negotiation-closing">Negotiation With Purpose</Link>.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-valuation" className="section accentBackground">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <Reveal>
                            <h2>Accurate Home Valuation</h2>
                            <p className="spacer-down">Understanding your home’s true market value is the foundation of a successful sale. We provide detailed, data-driven property evaluations based on current market conditions, comparable sales, and neighborhood trends so you can price confidently from the start.</p>
                            <CallToActionButton label="Request a Home Valuation" />
                        </Reveal>
                    </div>
                    <div className="flexImage">
                        <Reveal>
                            <ResponsiveImage src={image1} alt="test" />
                        </Reveal>
                    </div>
                </div>
            </section>
            <section id="preparing-your-home" className="section">
                <div className="container containerFlex flexReverse">
                    <div className="flexImage">
                        <Reveal>
                            <ResponsiveImage src={image2} alt="test" />
                        </Reveal>
                    </div>
                    <div className="flexContent">
                        <Reveal>
                            <h2>Preparation That Creates Buyer Confidence</h2>
                            <p>Strategic preparation can significantly influence how buyers perceive your home and the strength of the offers you receive. We provide guidance on presentation, curb appeal, minor improvements, and overall positioning so your property enters the market with clarity and confidence.</p>
                            <div className="emphasis">
                                <TbInfoCircle className="emphasisIcon" />
                                <p>The goal is not perfection. It is reducing buyer hesitation.</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section id="negotiation-closing" className="section accentBackground">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <Reveal>
                            <h2>Negotiation With Purpose</h2>
                            <p>Once offers begin to come in, the focus shifts from exposure to evaluation. We help you assess terms beyond price alone, reviewing contingencies, timelines, repair requests, closing costs, and contractual details so you can make informed decisions at every stage.</p>
                            <div className="emphasis">
                                <TbInfoCircle className="emphasisIcon" />
                                <p>The strongest offer is not always the highest one.</p>
                            </div>
                        </Reveal>
                    </div>
                    <div className="flexImage">
                        <Reveal>
                            <ResponsiveImage src={image3} alt="test" />
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section actionBackground">
                <Reveal>
                    <div className="container containerFlex contentPad actionFlex">
                        <div className="halfContent">
                            <h2>Let’s Discuss Your Selling Goals</h2>
                            <p>Whether you are ready to list or simply exploring your options, we offer confidential consultations to help you understand the process and determine your next steps.</p>
                        </div>
                        <CallToActionButton label="Schedule a Consultation" reason="home-selling"/>
                    </div>
                </Reveal>
            </section>
        </div>
    )
}
