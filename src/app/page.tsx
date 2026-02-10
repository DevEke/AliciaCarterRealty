import type { Metadata } from "next";
import Image from "next/image";
import image from "../../public/set1-02.svg";
import styles from "./page.module.css";
import payment from '../../public/payment.svg';
import credit from '../../public/credit.svg';
import loans from '../../public/loans.svg';
import understand from '../../public/understand.svg';
import prepare from '../../public/prepare.svg';
import explore from '../../public/explore.svg';
import forward from '../../public/forward.svg';
import { CallToActionButton } from "../components/CallToActionButton";
import ResponsiveImage from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "Alicia Carter Realty",
  description:
    "Guidance for first-time homebuyers in Texas—credit readiness, down payment assistance, affordable loan options, and rent-to-own education to help you move forward with clarity.",
  openGraph: {
    title: "Alicia Carter Realty",
    description:
      "Guidance for first-time homebuyers in Texas—credit readiness, down payment assistance, affordable loan options, and rent-to-own education to help you move forward with clarity.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container heroContainer">
          <div className="heroContent contentPad">
            <h1><span className="brand">Your First Home</span><br/> Doesn’t Have to Be Confusing</h1>
            <p className="subHeading">Clear guidance and support for first-time buyers navigating the homeownership process with confidence.</p>
            <CallToActionButton />
          </div>
        </div>
      </section>
      <section className="section accentBackground">
        <div className="container containerFlex">
          <div className="flexContent">
            <h2>Built with First-Time Buyers in Mind</h2>
            <p>Buying your first home shouldn’t feel rushed or overwhelming. Our approach is centered on clear explanations, honest guidance, and support that moves at your pace, helping you understand your options and feel confident from early preparation through closing.</p>
          </div>
          <div className="flexImage">
              <ResponsiveImage src={image} alt="test" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container contentPad">
          <div className="centeredContent">
            <h2>How We Support First-Time Buyers</h2>
          </div>
            <div className="contentGridThreeColumn">
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="down payment assistance icon" src={payment}/>
                <h3>Down Payment Assistance</h3>
                <p>Exploring programs that make homeownership more accessible.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="credit readiness icon" src={credit}/>
                <h3>Credit Readiness</h3>
                <p>Helping buyers understand and improve credit before applying.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="affordable loan options icon" src={loans}/>
                <h3>Affordable Loan Options</h3>
                <p>Identifying financing paths that fit your situation.</p>
              </div>
            </div>
        </div>
      </section>
      <section className="section accentBackground">
        <div className="container contentPad">
          <div className="centeredContent">
            <h2>What the Homebuying Process Looks Like</h2>
          </div>
          <div className="contentGridFourColumn">
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="understand your starting point icon" src={understand}/>
                <h3>1. Understand your starting point</h3>
                <p>Get clarity on your financial picture and homeownership goals.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="prepare with confidence icon" src={prepare}/>
                <h3>2. Prepare with confidence</h3>
                <p>Review credit, financing options, and assistance programs that may apply to you.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="explore homes intentionally icon" src={explore}/>
                <h3>3. Explore homes intentionally</h3>
                <p>Search with realistic expectations and without pressure to rush.</p>
              </div>
              <div className="gridItemCenterAligned">
                <Image className="gridItemImage" height={72} width={72} alt="move forward when you’re ready icon" src={forward}/>
                <h3>4. Move forward when you’re ready</h3>
                <p>Take the next steps only when it feels right for you.</p>
              </div>
            </div>
        </div>
      </section>
      <section className="section actionBackground">
        <div className="container containerFlex contentPad actionFlex">
          <div className="halfContent">
            <h2>When You’re Ready, We’re Here</h2>
            <p>Get clear guidance and support without pressure or rushed decisions.</p>
          </div>
          <CallToActionButton />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="centeredContent contentPad">
            <p className="muted">Alicia Carter Realty works with first-time homebuyers seeking clear guidance through the homeownership process. With a focus on education, credit readiness, and accessible financing options, we support buyers as they prepare, explore, and move forward with confidence. Services are available to clients across Texas, including the Dallas–Fort Worth and Houston areas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
