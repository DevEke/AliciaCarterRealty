import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ResponsiveImage from "@/components/ResponsiveImage";
import image from "../../../../public/set3-02.svg";
import owner from "../../../../public/owner.svg"
import buyer from "../../../../public/buyer.svg"
import options from "../../../../public/options.svg"
import upfront from "../../../../public/upfront.svg"
import mortgage from "../../../../public/mortgage.svg"
import educate from "../../../../public/educate.svg"
import styles from "./page.module.css";
import { TbInfoCircle } from "react-icons/tb";
import { CallToActionButton } from "@/components/CallToActionButton";

export const metadata: Metadata = {
    title: "Affordable Loan Solutions",
    description:
      "Guidance to help buyers understand affordable loan options, program requirements, and whether specific loan programs may align with their homeownership goals.",
    openGraph: {
      title: "Affordable Loan Solutions",
      description:
        "Guidance to help buyers understand affordable loan options, program requirements, and whether specific loan programs may align with their homeownership goals.",
      type: "article",
    },
  };

  export default function AffordableLoanSolutionPage() {
    return (
        <div>
            <section className="section">
            <div className="container heroContainer">
              <div className="heroContent contentPad">
                  <h1>Exploring <span className="brand">Affordable Loan Solutions</span></h1>
                  <p className="subHeading">Affordable loan solutions refer to mortgage options designed to make homeownership more accessible by offering flexible terms, alternative qualification criteria, or reduced upfront costs. These programs are often intended for owner-occupied homes and may vary by lender, location, and individual financial circumstances. Understanding how these options work can help you better evaluate whether they align with your goals and eligibility.</p>
                  <div className="anchors">
                      <p>On this page:{" "}
                          <Link className="inline-link" href="#loan-features">Common Features of Affordable Loan Programs</Link>,{" "}
                          <Link className="inline-link" href="#program-guidelines">Understanding Program Guidelines</Link>, and{" "}
                          <Link className="inline-link" href="#community-loan-solution">Community Affordable Loan Solution Program</Link>.
                      </p>
                  </div>
              </div>
            </div>
          </section>
          <section id="loan-features" className="section accentBackground">
            <div className="container contentPad">
                <div className="centeredContent">
                    <h2>Common Features of Affordable Loan Programs</h2>
                    <p>While program details vary, many affordable loan options share similar characteristics designed to reduce barriers to homeownership.</p>
                </div>
                <div className="contentGridThreeColumn">
                <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="owner occupied focus icon" src={owner}/>
                <h3>Owner-occupied focus</h3>
                <p>These programs are typically intended for primary residences rather than second homes or investment properties.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="flexible buyer eligibility icon" src={buyer}/>
                <h3>Flexible buyer eligibility</h3>
                <p>Some programs are available to both first-time and repeat homebuyers, depending on specific criteria.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="alternative qualification options icon" src={options}/>
                <h3>Alternative qualification options</h3>
                <p>Certain programs may allow the use of non-traditional credit history or alternative documentation in place of standard requirements.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="reduced upfront costs icon" src={upfront}/>
                <h3>Reduced upfront costs</h3>
                <p>Features such as lower down payments, grants, or secondary financing may be available in some cases.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="mortgage insurance considerations icon" src={mortgage}/>
                <h3>Mortgage insurance considerations</h3>
                <p>Some affordable loan programs do not require private mortgage insurance, depending on structure and eligibility.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="education requirements icon" src={educate}/>
                <h3>Education requirements</h3>
                <p>Completion of a homebuyer education course is commonly required as part of the approval process.</p>
              </div>
                </div>

            </div>
          </section>
          <section className="externalLinks">
                    <p>Because qualification often depends on credit profile and history, reviewing our <Link className="inline-link" href="/services/credit-readiness">Credit Readiness</Link> services may also be helpful.</p>
                </section>
          <section id="program-guidelines" className="section">
            <div className="container containerFlex">
                <div className="flexContent">
                    <h2>Understanding Program Guidelines</h2>
                    <p>Affordable loan programs often include income limits and maximum loan amounts that are based on local housing costs and median income levels. These guidelines are intended to ensure programs serve buyers they are designed to support, but the specific thresholds can vary by program, lender, and location. Because limits may change over time, reviewing current requirements is an important part of evaluating available options.</p>
                    <div className="emphasis">
                    <TbInfoCircle className="emphasisIcon" />
                        <p>What qualifies in one area or year may not apply in another.</p>
                    </div>
                </div>
                <div className="flexImage">
                    <ResponsiveImage src={image} alt="test" />
                </div>
            </div>

        </section>
        <section className="externalLinks">
                <p>Some buyers also explore <Link className="inline-link" href="/services/down-payment-assistance">Down Payment Assistance</Link> programs alongside loan options.</p>
            </section>
        <section id="community-loan-solution" className="section accentBackground">
            <div className="container contentPad">
                <div className="contentGridTwoColumn">
                    <div className={styles.solutionContentLeft}>
                        <h2>Community Affordable Loan Solution Program</h2>
                        <p>One affordable loan option some buyers explore is Bank of America’s Community Affordable Loan Solution program. This program is designed to reduce common barriers to homeownership by offering alternative qualification criteria and lower upfront costs for eligible buyers, depending on location and individual circumstances.</p>
                        <div className="emphasis">
                        <TbInfoCircle className="emphasisIcon" />
                            <p>Alicia Carter Realty does not originate loans and does not guarantee eligibility or approval. Guidance is provided to help buyers understand available options and next steps.</p>
                        </div>
                    </div>
                    <div className={styles.solutionContentRight}>
                        <h3>Bank of America — Community Affordable Loan Solution</h3>
                        <ul>
                            <li>Intended for owner-occupied primary residences</li>
                            <li>Available to both first-time and repeat homebuyers, depending on eligibility</li>
                            <li>May allow non-traditional credit qualification</li>
                            <li>Does not require private mortgage insurance</li>
                            <li>Typically requires completion of a homebuyer education course</li>
                            <li>Subject to income limits and program guidelines</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="section actionBackground">
                <div className="container containerFlex contentPad actionFlex">
                    <div className="halfContent">
                        <h2>When You’re Ready, We’re Here</h2>
                        <p>If you’d like help understanding whether this loan option aligns with your goals and circumstances, a conversation can help clarify what to explore next.</p>
                    </div>
                    <CallToActionButton />
                </div>
            </section>
        </div>
    )
  }
