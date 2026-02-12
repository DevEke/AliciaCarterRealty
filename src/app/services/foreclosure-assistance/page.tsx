import type { Metadata } from "next";
import Link from "next/link";
import image1 from "../../../../public/set1-04.svg";
import image2 from "../../../../public/set3-04.svg";
import { Reveal } from "@/components/Reveal/Reveal";
import ResponsiveImage from "@/components/ResponsiveImage";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";



export const metadata: Metadata = {

}

export default function ForeclosureAssistancePage() {
    return (
        <div>
            <section className="section">
                <div className="container heroContainer">
                    <div className="heroContent contentPad">
                        <Reveal>
                            <h1><span className="brand">Foreclosure Assistance</span> & Options Guidance</h1>
                            <p>Facing missed payments or the possibility of foreclosure can feel overwhelming. We provide structured guidance to help homeowners understand their situation, evaluate available options, and take informed next steps with clarity and organization.</p>
                        </Reveal>
                        <div className="anchors">
                            <Reveal>
                            <p>On this page:{" "}
                                <Link className="inline-link" href="#understand-timeline-position">Understanding Your Timeline and Positioning</Link>,{" "}
                                <Link className="inline-link" href="#evaluate-options">Evaluating Available Options</Link>, and{" "}
                                <Link className="inline-link" href="#structure-guidance">Structured Guidance, Not Pressure</Link>.
                            </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <section id="understand-timeline-position" className="section accentBackground">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <Reveal>
                            <h2>Understanding Your Timeline and Positioning</h2>
                            <p>The foreclosure process follows a legal timeline, and the options available to you often depend on where you are within that process. We help you review your current status, clarify important dates, and understand what alternatives may still be available so decisions are made with awareness rather than urgency alone.</p>
                            <div className="emphasis">
                                <TbInfoCircle className="emphasisIcon" />
                                <p>Time matters—but informed timing matters more.</p>
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
            <section id="evaluate-options" className="section">
                <div className="container container">
                    <div className="centeredContent contentPad">
                        <Reveal>
                            <h2>Evaluating Available Options</h2>
                            <p>Depending on your circumstances, several paths may be available. These can include negotiating with your lender, exploring repayment arrangements, selling the property before foreclosure proceedings advance, or considering other structured solutions. We help you review each option carefully so you understand the potential outcomes, financial implications, and practical next steps.</p>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="externalLinks">
                <Reveal>
                    <p>If selling becomes the most practical route, you can learn more about our <Link className="inline-link" href="/services/home-selling">Home Selling Services</Link>.</p>
                </Reveal>
            </section>
            <section id="structure-guidance" className="section accentBackground">
                <div className="container containerFlex flexReverse">
                    <div className="flexImage">
                        <Reveal>
                            <ResponsiveImage src={image2} alt="test" />
                        </Reveal>
                    </div>
                    <div className="flexContent">
                        <Reveal>
                            <h2>Structured Guidance, Not Pressure</h2>
                            <p>Our role is to help you approach the situation methodically. We provide clear explanations, outline realistic timelines, and help you organize the information needed to make responsible decisions. The objective is not urgency for its own sake—but clarity, stability, and forward movement.</p>
                            <div className="emphasis">
                                <TbInfoCircle className="emphasisIcon" />
                                <p>Decisions made calmly are often decisions made wisely.</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section actionBackground">
                <Reveal>
                    <div className="container containerFlex contentPad actionFlex">
                        <div className="halfContent">
                            <h2>Discuss Your Situation Confidentially</h2>
                            <p>If you are facing financial pressure or uncertainty about your home, you do not have to navigate it alone. We offer confidential consultations to help you review your position, understand your options, and determine practical next steps.</p>
                        </div>
                        <CallToActionButton label="Schedule a Consultation" reason="foreclosure-assistance" />
                    </div>
                </Reveal>
            </section>
        </div>
    )
}
