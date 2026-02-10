import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Alicia Carter Realty",
    description:
      "Review the terms governing use of the Alicia Carter Realty website, including informational use, limitations, and external links.",
    openGraph: {
      title: "Terms of Service | Alicia Carter Realty",
      description:
        "Review the terms governing use of the Alicia Carter Realty website, including informational use, limitations, and external links.",
      type: "website",
    },
  };

export default function TermsOfServicePage() {
    return (
        <div>
            <section className="section accentBackground">
                <div className="container contentPad">
                    <div className="privacyContainer">
                        <h1><span className="brand">Terms of Service</span></h1>
                        <p>These Terms of Service govern your use of the Alicia Carter Realty website. By accessing or using this site, you agree to be bound by these terms. If you do not agree, you should not use the website.</p>
                        <p>Last updated: February 2026</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Use of This Website</h2>
                        <p>This website is provided for informational purposes only. The content on this site is intended to offer general guidance related to real estate services and homeownership topics. You agree to use the website in a lawful manner and not for any purpose that could damage, disable, or interfere with the site or its operation.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>No Professional or Legal Advice</h2>
                        <p>Information provided on this website does not constitute legal, financial, or lending advice. While we aim to provide accurate and helpful information, you should not rely on the content of this site as a substitute for professional advice tailored to your specific situation. Any decisions you make based on information from this site are made at your own discretion.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>No Client Relationship</h2>
                        <p>Use of this website or submission of a contact form does not create a client, agency, or fiduciary relationship. Any formal relationship will only be established through direct communication and mutual agreement.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Intellectual Property</h2>
                        <p>All content on this website, including text, images, graphics, and branding, is the property of Alicia Carter Realty or its licensors and is protected by applicable intellectual property laws. Content may not be copied, reproduced, or distributed without prior written permission, except for personal, non-commercial use.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Limitation of Liability</h2>
                        <p>Alicia Carter Realty is not responsible for any loss or damages arising from the use of this website or reliance on its content. The website is provided “as is” without warranties of any kind, either express or implied.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>External Links</h2>
                        <p>This website may contain links to third-party websites. Alicia Carter Realty is not responsible for the content, availability, or privacy practices of external sites and does not endorse them.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Changes to These Terms</h2>
                        <p>These Terms of Service may be updated from time to time. Any changes will be reflected by updating the “Last updated” date at the top of this page. Continued use of the website after changes are posted constitutes acceptance of those changes.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Contact</h2>
                        <p>If you have questions about these Terms of Service, you may contact us through the website’s contact page.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
