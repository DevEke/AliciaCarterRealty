import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./page.module.css";
import team from "../../content/team.json";
import { TbPhone, TbAt } from "react-icons/tb";

export const metadata: Metadata = {
    title: "About Alicia Carter Realty",
    description:
      "A boutique real estate agency providing clear, personalized guidance for buyers and sellers, grounded in experience, community involvement, and strong client relationships.",
    openGraph: {
      title: "About Alicia Carter Realty",
      description:
        "A boutique real estate agency providing clear, personalized guidance for buyers and sellers, grounded in experience, community involvement, and strong client relationships.",
      type: "website",
    },
  };


export default function AboutPage() {
    return (
        <div>
            <section className="section">
            <div className="container heroContainer">
              <div className="heroContent contentPad">
                <Reveal>
                    <h1>About <span className="brand">Alicia Carter Realty</span></h1>
                    <p className="subHeading">Alicia Carter Realty is a boutique real estate agency focused on guiding clients through buying, selling, and homeownership decisions with care and clarity. With more than two decades of experience, our work is grounded in strong relationships, community involvement, and a commitment to providing thoughtful, personalized support at every stage of the process.</p>
                    <div className="centeredContent">
                    <p className="brand bold spacer">Our approach is shaped by professionalism, honesty, integrity, dedication, and respect—values that guide how we work and how we serve our clients.</p>
                    <small className="muted">Established in 1999.</small>
                    </div>
                  </Reveal>
              </div>

            </div>
          </section>
          <section id="loan-features" className="section accentBackground">
                      <div className="container contentPad">
                          <div className="centeredContent">
                            <Reveal>
                                <h2>Meet the Team</h2>
                                <p>Our team is made up of experienced professionals dedicated to providing clear guidance and responsive support throughout your homeownership journey.</p>
                            </Reveal>
                          </div>
                          <div className="contentGridThreeColumn">
                            {
                                team.map((member) => {
                                    return (
                                        <Reveal key={member.license}>
                                        <div key={member.license} className={`gridItemCenterAligned ${styles.memberGridItem}`} >
                                            <Image className="gridItemImage" height={72} width={72} alt={`Photo of ${member.name}`} src={member.photo}/>
                                            <h3>{member.name}</h3>
                                            <p>{member.title}</p>
                                            <p>License: {member.license}</p>
                                            <div className={styles.memberGridItemContactInfoContainer}>
                                                <div className={styles.memberGridItemContactInfo}>
                                                    <TbPhone />
                                                    <Link href={`tel:${member.phone}`}>{member.phone}</Link>
                                                </div>
                                                <div className={styles.memberGridItemContactInfo}>
                                                    <TbAt />
                                                    <Link href={`mailto:${member.email}`}>{member.email}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                    )
                                })
                            }
                          </div>
                      </div>
                    </section>
                <section className="externalLinks">
                        <Reveal>
                            <p className="brand bold">We believe clear communication and thoughtful guidance make a meaningful difference throughout the homeownership process.</p>
                        </Reveal>
                </section>
        </div>
    )
}
