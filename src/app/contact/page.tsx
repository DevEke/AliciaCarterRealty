
import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Reveal } from "@/components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for clear guidance and support as you explore your path to homeownership.",
  };

  export default function ContactPage() {

    return (
      <div>
        <section className="section accentBackground contentPad">
          <div className="container contentGridTwoColumn">
            <div className="formContent">
              <Reveal>
                <h1><span className="brand">Start with a Conversation</span></h1>
                <p className="subHeading">Every first-time buyer’s situation is different. Use the form to tell us a bit about what you’re exploring, and we’ll follow up with information that’s relevant to your next step.</p>
              </Reveal>
            </div>
            <Suspense fallback={null}>
              <Reveal>
                <ContactForm />
              </Reveal>
            </Suspense>
          </div>
        </section>
      </div>
    );
  }
