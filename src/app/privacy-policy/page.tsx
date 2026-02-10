import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Alicia Carter Realty",
  description:
    "Learn how Alicia Carter Realty collects, uses, and protects information submitted through this website.",
  openGraph: {
    title: "Privacy Policy | Alicia Carter Realty",
    description:
      "Learn how Alicia Carter Realty collects, uses, and protects information submitted through this website.",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
    return (
        <div>
            <section className="section accentBackground">
                <div className="container contentPad">
                    <div className="privacyContainer">
                        <h1><span className="brand">Privacy Policy</span></h1>
                        <p>This Privacy Policy explains how Alicia Carter Realty collects, uses, and protects information submitted through this website. By using this site, you agree to the practices described below.</p>
                        <p>Last updated: February 2026</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Information We Collect</h2>
                        <p>We collect information that you voluntarily provide through our contact form. This may include:</p>
                        <ul className="basicList">
                            <li>Name</li>
                            <li>Emaill Address</li>
                            <li>Phone Number</li>
                            <li>Reason for Inquiry</li>
                            <li>Message Content</li>
                        </ul>
                        <p>We do not collect account information, payment details, or user-generated content such as comments or uploads.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>How We Use Your Information</h2>
                        <p>Information submitted through this website is used solely to:</p>
                        <ul className="basicList">
                            <li>Respond to inquiries and requests for information</li>
                            <li>Communicate regarding services you have asked about</li>
                            <li>Provide follow-up responses related to your inquiry</li>
                        </ul>
                        <p>We do not sell, rent, or share your personal information for marketing purposes.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Email Communications</h2>
                        <p>Messages submitted through the contact form are delivered via email using a third-party email service provider. Email communications are used only to respond to inquiries initiated by you.</p>
                        <p>Please note that email communication is not always secure, and we encourage users not to submit sensitive personal or financial information through the contact form.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Website Hosting and Data Handling</h2>
                        <p>This website is hosted by a third-party hosting provider. Information submitted through the contact form is processed and transmitted securely using industry-standard practices. We take reasonable steps to protect submitted information but cannot guarantee absolute security.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Analytics and Site Usage</h2>
                        <p>This website may use basic analytics tools to understand site usage and improve performance. These tools may collect non-identifying information such as page views or general traffic patterns. No personally identifiable information is collected through analytics.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>External Links</h2>
                        <p>This website may contain links to external websites. Alicia Carter Realty is not responsible for the privacy practices or content of third-party sites. Users are encouraged to review the privacy policies of any external sites they visit.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Changes to This Policy</h2>
                        <p>This Privacy Policy may be updated from time to time to reflect changes to the website or applicable practices. Updates will be reflected by revising the “Last updated” date at the top of this page.</p>
                    </div>
                    <div className="privacyContainer">
                        <h2>Contact</h2>
                        <p>If you have questions about this Privacy Policy or how information is handled, you may contact us through the website’s contact page.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
