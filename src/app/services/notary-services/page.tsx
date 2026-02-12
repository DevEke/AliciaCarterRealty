import type { Metadata } from "next";
import image from "../../../../public/set3-04.svg";
import { Reveal } from "@/components/Reveal/Reveal";
import ResponsiveImage from "@/components/ResponsiveImage";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";

export const metadata: Metadata = {
    title: "Mobile Notary Services in Texas | Alicia Carter Realty",
    description:
        "Professional mobile notary services across Texas, including loan signing documents, refinances, power of attorney, affidavits, employment verification, hospital and jail notarizations.",
    openGraph: {
        title: "Mobile Notary Services in Texas | Alicia Carter Realty",
        description:
            "Mobile notary services for real estate documents, financial transactions, legal paperwork, and personal documentation across Texas.",
        type: "website",
    },
};

export default function NotaryServicesPage() {
    return (
        <div>
            <section className="section">
                <div className="container heroContainer">
                    <div className="heroContent contentPad">
                        <Reveal>
                            <h1><span className="brand">Mobile Notary Services</span> Across Texas</h1>
                            <p>We provide professional mobile notary services throughout the state of Texas. Whether you require document verification related to real estate, personal matters, or official transactions, we offer dependable and convenient notarization.</p>
                        </Reveal>
                        <div className="anchors">
                            <Reveal>
                                <p></p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
            <section id="notarial-services" className="section accentBackground">
                <div className="container contentPad">
                    <div className="centeredContent">
                        <Reveal>
                            <h2>Notarial Services Available</h2>
                            <p>We specialize in a broad range of notarization services for individuals, families, and professionals, including:</p>
                        </Reveal>
                    </div>
                    <div className="contentGridTwoColumn">
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <h3>Real Estate & Financial Documents</h3>
                                <ul className="basicList">
                                    <li>Loan signing documents</li>
                                    <li>Refinances</li>
                                    <li>Reverse mortgages</li>
                                </ul>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <h3>Personal & Legal Documents</h3>
                                <ul className="basicList">
                                    <li>Power of attorney</li>
                                    <li>Wills</li>
                                    <li>Affidavits</li>
                                    <li>Jurats</li>
                                    <li>Acknowledgments</li>
                                    <li>General notary services</li>
                                </ul>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <h3>Specialty Mobile Services</h3>
                                <ul className="basicList">
                                    <li>Vehicle transfers</li>
                                    <li>Hospital notary services</li>
                                    <li>Jail notary services</li>
                                    <li>School notary services</li>
                                </ul>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="gridItemLeftAligned">
                                <h3>Identification & Verification</h3>
                                <ul className="basicList">
                                    <li>I-9 employment verification</li>
                                    <li>Employee verification documents</li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container containerFlex">
                    <div className="flexContent">
                        <Reveal>
                            <h2>Convenient Mobile Service</h2>
                            <p>As a mobile notary, we travel to your location when permitted, helping streamline the notarization process for individuals, families, and professionals across Texas. We aim to provide timely, organized service while maintaining the professionalism required for official documentation.</p>
                            <div className="emphasis">
                                <TbInfoCircle className="emphasisIcon" />
                                <p>Convenience should not compromise professionalism.</p>
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
            <section className="section actionBackground">
                <Reveal>
                    <div className="container containerFlex contentPad actionFlex">
                        <div className="halfContent">
                            <h2>Schedule Notary Services</h2>
                            <p>Contact us to confirm document requirements, acceptable identification, and appointment availability. We are available to help ensure your documents are properly notarized and completed in accordance with Texas notarial standards.</p>
                        </div>
                        <CallToActionButton label="Request Notary Service" reason="notary-services"/>
                    </div>
                </Reveal>
            </section>
        </div>
    )
}
