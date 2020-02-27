import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import CloudAnalysis from "./cloud-analysis.jpg";
import { HashLink as Link } from "react-router-hash-link";

export default function CloudExpertAdviceAndSupport() {
  useEffect(() => {
    window.scrollTo(0, 0)
 }, [])
 
  return (
    <div>
      <div
        className="section text-white with-background with-overlay"
        style={{ backgroundImage: `url(${CloudAnalysis})` }}
      >
        <Container>
          <h1 className="">Cloud Expert Advice & Support</h1>
          <p>
            At Genese Solution we are passionate about Cloud technology and its
            ability to improve the way your business operates. We are Advanced
            Tier Consulting Partners for AWS and also partners with Microsoft
            Azure and Google Cloud. This means that we have an extensive and
            proven knowledge base.
          </p>
          <p>
            <Link to="/about#certifications">View our certifications here</Link>
          </p>
        </Container>
      </div>
      <div className="section section-sm bg-primary text-white">
        <Container >
          <h4>
            We'll discuss your IT requirements and provide strategic advice on
            which cloud services meet your business needs and how to implement
            them.
          </h4>
        </Container>
      </div>
      <div className="section bg-light" id="service">
        <Container>
          <h3>Already have a cloud environment?</h3>
          <p>
            Our experts will review the architecture of your infrastructure and
            applications. The team will then provide you with advice on how they
            can be optimised and should you wish to, manage them on your behalf
            so that you can get back doing what you do best.
          </p>
          <p>
            Our Security Specialists will provide a cost and security audit,
            reporting any vulnerabilities, excessive expenditure and any
            underutilised resources. We'll provide recommendations as to how to
            mitigate risk and reduce the amount you are spending, whilst making
            sure that your business adheres to regulations and best practices.
          </p>
          <p>
            <Link to="/contact">Need advice? Get in touch!</Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
