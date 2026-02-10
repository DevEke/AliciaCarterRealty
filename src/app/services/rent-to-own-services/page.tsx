import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal/Reveal";
import ResponsiveImage from "@/components/ResponsiveImage";
import image from "../../../../public/set2-04.svg";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";

export const metadata: Metadata = {
  title: "Rent-to-Own Services",
  description:
    "Guidance to help buyers understand rent-to-own arrangements, evaluate risks and benefits, and determine whether this approach supports long-term homeownership goals.",
  openGraph: {
    title: "Rent-to-Own Services",
    description:
      "Guidance to help buyers understand rent-to-own arrangements, evaluate risks and benefits, and determine whether this approach supports long-term homeownership goals.",
    type: "article",
  },
};

  export default function RentToOwnServicesPage() {
    return (
        <div>
          <section className="section">
            <div className="container heroContainer">
              <div className="heroContent contentPad">
                <Reveal>
                  <h1>Rent-to-Own as a<br /> Path to <span className="brand">Future Homeownership</span></h1>
                  <p className="subHeading">Rent-to-own arrangements can offer a potential path toward homeownership for some buyers, but they require careful consideration. This service focuses on helping you understand how rent-to-own agreements typically work, what to look for, and how to evaluate whether this approach supports your long-term goals—without pressure or unrealistic promises.</p>
                  </Reveal>
                  <div className="anchors">
                  <Reveal>
                      <p>On this page:{" "}
                          <Link className="inline-link" href="#how-we-support-rent-to-own-buyers">How we Support Rent-To-Own Buyers</Link>, and{" "}
                          <Link className="inline-link" href="#is-rent-to-own-right-fit">Is Rent-To-Own the Right Fit?</Link>.
                      </p>
                      </Reveal>
                  </div>
              </div>
            </div>
          </section>
          <section id="how-we-support-rent-to-own-buyers" className="section accentBackground">
            <div className="container containerFlex">
                <div className="flexContent">
                <Reveal>
                    <h2>How We Support Rent-to-Own Buyers</h2>
                    <p>This service is designed to help buyers explore rent-to-own arrangements with clarity and caution. Support includes reviewing how agreements are structured, identifying key terms to understand, and helping you evaluate whether a rent-to-own option aligns with your financial readiness and long-term plans.</p>
                    <div className="emphasis">
                    <TbInfoCircle className="emphasisIcon" />
                      <p>Rent-to-own is not the right fit for everyone, and understanding the details upfront can help you avoid costly misunderstandings later.</p>
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
          <section id="is-rent-to-own-right-fit" className="section">
            <div className="container">
                <div className="centeredContent contentPad">
                <Reveal>
                    <h2>Is Rent-to-Own the Right Fit?</h2>
                    <p>Rent-to-own arrangements may be worth exploring for buyers who are not yet ready to purchase a home but are actively working toward that goal. These agreements can offer time to improve financial readiness while living in the home, but they also involve risks and obligations that differ from traditional renting or buying. Understanding those tradeoffs is essential before moving forward.</p>
                    </Reveal>
                </div>
            </div>

          </section>
          <section className="externalLinks">
          <Reveal>
              <p>Many buyers exploring rent-to-own are also working on their financial readiness. Reviewing our <Link className="inline-link" href="/services/credit-readiness">Credit Readiness</Link> services may help provide additional context.</p>
              </Reveal>
            </section>
          <section className="section actionBackground">
                    <Reveal>
                <div className="container containerFlex contentPad actionFlex">
                    <div className="halfContent">
                        <h2>When You’re Ready, We’re Here</h2>
                        <p>If you’d like to talk through whether a rent-to-own arrangement fits your goals, a conversation can help clarify your options and next steps.</p>

                    </div>

                    <CallToActionButton />
                </div>
                    </Reveal>
            </section>
        </div>
    )
  }
