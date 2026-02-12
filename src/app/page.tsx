import type { Metadata } from "next";
import Image from "next/image";
import image1 from "../../public/set1-02.svg";
import image2 from "../../public/set2-04.svg";
import { Reveal } from "@/components/Reveal/Reveal";
import Link from "next/link";
import understand from '../../public/understand.svg';
import explore from '../../public/explore.svg';
import forward from '../../public/forward.svg';
import { CallToActionButton } from "../components/CallToActionButton";
import ResponsiveImage from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "Alicia Carter Realty | Real Estate Guidance in Dallas–Fort Worth & Houston",
  description:
    "Real estate guidance for buyers and homeowners in Dallas–Fort Worth and Houston, Texas. Credit readiness, down payment assistance, home selling strategy, and foreclosure options support.",
    keywords: [
      "Dallas real estate",
      "Fort Worth real estate",
      "Houston real estate",
      "home buying Texas",
      "home selling Texas",
    ],
  openGraph: {
    title:
      "Alicia Carter Realty | Buy with Confidence. Sell with Strategy.",
    description:
      "Structured real estate guidance for buyers and homeowners across the Dallas–Fort Worth and Houston areas. Preparation, pricing, and informed next steps.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container heroContainer">
          <div className="heroContent contentPad">
            <Reveal>
              <h1><span className="brand">Buy with confidence.</span> Sell with strategy.</h1>
              <p className="subHeading">We guide buyers and homeowners through preparation, pricing, negotiation, and next steps with steady, informed support at every stage of the real estate process.</p>
              <CallToActionButton label="Schedule a Consultation"/>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section accentBackground">
        <div className="container containerFlex">
          <div className="flexContent">
            <Reveal>
              <h2>A Thoughtful Approach to Real Estate</h2>
              <p>Whether you are purchasing your first home, preparing to sell, or navigating a time-sensitive situation, our approach centers on clear explanations, informed guidance, and support that moves at your pace. The objective is confidence rooted in understanding, not pressure.</p>
            </Reveal>
          </div>
          <div className="flexImage">
            <Reveal>
              <ResponsiveImage src={image1} alt="test" />
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container contentPad">
          <div className="centeredContent">
            <Reveal>
              <h2>Who We Serve</h2>
              <p>Every real estate decision carries weight. Whether you are entering the market, preparing to sell, or navigating unexpected circumstances, our role is to provide structured guidance that supports informed and confident choices.</p>
            </Reveal>
          </div>
            <div className="contentGridThreeColumn">
              <Reveal>
                <div className="gridItemCenterAligned">
                  <img className="gridItemImage" height={72} width={72} alt="down payment assistance icon" src={explore.src}/>
                  <h3>Home Buyers</h3>
                  <p>We help first-time and returning buyers strengthen preparation, understand financing, and approach the market with confidence.</p>
                  <Link className="link" href="/services#homebuyer-services">Explore Buyer Services</Link>
                </div>
              </Reveal>
              <Reveal>
                <div className="gridItemCenterAligned">
                  <img className="gridItemImage" height={72} width={72} alt="credit readiness icon" src={forward.src}/>
                  <h3>Home Sellers</h3>
                  <p>We guide homeowners through pricing strategy, property preparation, and negotiation from listing through closing.</p>
                  <Link className="link" href="/services#homeowner-services">Explore Seller Services</Link>
                </div>
              </Reveal>
              <Reveal>
                <div className="gridItemCenterAligned">
                  <img className="gridItemImage" height={72} width={72} alt="affordable loan options icon" src={understand.src}/>
                  <h3>Home Owners Seeking Options</h3>
                  <p>For those facing financial pressure or uncertainty, we provide clear information and structured next steps.</p>
                  <Link className="link" href="/services/foreclosure-assistance">Explore Foreclosure Assistance</Link>
                </div>
              </Reveal>
            </div>
        </div>
      </section>
      <section className="section accentBackground">
        <div className="container containerFlex flexReverse">
          <div className="flexImage">
            <Reveal>
              <ResponsiveImage src={image2} alt="test" />
            </Reveal>
          </div>
          <div className="flexContent">
            <Reveal>
              <h2>A Structured Way Forward</h2>
              <p>Every transaction carries financial and personal weight. Our approach centers on preparation, thoughtful strategy, and clear communication so you understand each decision before it is made. The result is movement with intention rather than urgency.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section actionBackground">
        <Reveal>
          <div className="container containerFlex contentPad actionFlex">
            <div className="halfContent">
              <h2>When You’re Ready, We’re Here</h2>
              <p>Every situation is different. A brief consultation can help clarify direction and outline a path forward.</p>
            </div>
            <CallToActionButton />
          </div>
        </Reveal>
      </section>
      <section className="section">
        <div className="container">
          <div className="centeredContent contentPad">
            <p className="muted">Alicia Carter Realty supports buyers and homeowners across Texas, including the Dallas–Fort Worth and Houston areas. With a focus on education, credit readiness, financing clarity, and structured guidance, we work with first-time buyers, returning buyers, and homeowners preparing to sell or evaluate their options.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
