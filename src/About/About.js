import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CEO from "./caroline.jpg";
import CTO from "./anjani.jpg";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import CloudExpert from "../Homepage/images/cloud-expert.svg";
import AwsLogo from "../Homepage/partner-logos/aws.svg";
import AzureLogo from "../Homepage/partner-logos/azure.svg";
import GoogleCloudLogo from "../Homepage/partner-logos/googleCloud.svg";
import AtlassianLogo from "../Homepage/partner-logos/atlassian.svg";
import NagiosLogo from "../Homepage/partner-logos/nagios.png";
import VmwareLogo from "../Homepage/partner-logos/vmware.svg";
import AlibabaGroupLogo from "../Homepage/partner-logos/alibaba.png";
import Neo4jLogo from "../Homepage/partner-logos/neo4j.svg";
import BarracudaLogo from "../Homepage/partner-logos/barracuda.png";
import TrendMicroLogo from "../Homepage/partner-logos/trend-micro.svg";
import SpotinstLogo from "../Homepage/partner-logos/spotinst.png";

export default function About() {
  return (
    <div>
        <div className="section bg-primary text-white">
        <h1 className="m-0">About Us</h1>
        </div>
      <div className="section section-sm bg-white">
        <Container>
          <h3>Who we are</h3>
          <p>
            Genese Solution is an IT consultancy specialising in cloud services
            and software development. Our Head Office is in London but we have
            others across Asia and Australia. We are an enthusiastic team who
            are truly passionate about tech. We deliver cost-effective exclusive
            IT solutions, building quality into every project.
          </p>
          <p>
            We are Google Cloud, Microsoft Azure and Amazon Web Service
            partners, having achieved Advanced Tier status. Our competence and
            expertise with cloud technologies grants us access to exclusive
            resources and support, allowing us to offer the very best solutions
            for our customers.
          </p>
          <p>
            As a business, we have taken the time to build a sustainable talent
            acquisition legacy. The Genese Cloud Academy (the largest IT
            training centre in Nepal) was created to bridge the gap between
            education and employment. Our Cloud Academy selects the most gifted
            MSC and BSC graduates in the country and provides them with
            commercial experience, training and global industry certification.
            This 'talent incubator' approach has not only created a highly
            skilled workforce but has allowed us to retain them.
          </p>
          <p>
            We are passionate about empowering people in developing areas of the
            world. By providing education and training, we are using IT as a
            vehicle to boost local communities.
          </p>
          <p>
            Our company executives have over a decade's experience working in
            the UK, for multi-national companies such as Amazon, Microsoft,
            Capital One and Rackspace. It is this experience and high
            expectations which have set our standard in quality and security.
          </p>
          <Row className="justify-content-md-center team">
            <Col lg={6}>
              <img src={CEO} alt="Caroline"></img>
              <h5>Caroline Dantas</h5>
              <p>CEO</p>
              <ul className="social-icons">
                <li className="linkedin">
                  <a
                    href="https://www.linkedin.com/company/genese-software-solution/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <img src={CTO} alt="Anjani"></img>
              <h5>Anjani Phuyal</h5>
              <p>
                CTO and founder of Genese Cloud Academy and Girls In Tech Nepal
              </p>
              <ul className="social-icons">
                <li className="linkedin">
                  <a
                    href="https://www.linkedin.com/company/genese-software-solution/"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section p-0 bg-light" id="how_we_work">
        <Container fluid className="p-0">
          <Row className="m-0">
            <Col lg={5} className="p-0">
              <div
                className="section-image"
                style={{ backgroundImage: `url(${CloudExpert})` }}
              ></div>
            </Col>
            <Col lg={7} className="p-0">
              <div className="section-content section-content-sm wide right text-left">
                <h3>How we work</h3>
                <p>
                  The first step in any project is to understand our customer,
                  by learning about who we are working with, we are better able
                  to gather requirements and come up with a strategy that aligns
                  to your business objectives.
                </p>
                <p>
                  This process of exploring and engaging with our customers,
                  allows us to understand and share your product vision. We have
                  a core belief that in order to provide the best results for
                  our customer, the people developing the solution, should
                  understand what they are building and why.
                </p>
                <p>
                  We work in small autonomous agile teams, where the focus is
                  ownership, quality and end to end responsibility for what we
                  build. Our teams report to a tech lead or project manager who
                  then convenes with the customer. This is usually done weekly
                  but can be as often as is required.
                </p>
                <p>
                  Alliteratively, we are able to provide individuals in a range
                  of roles. This option allows you to manage the project
                  yourself and scale an existing team with speed and
                  flexibility. Perfect for businesses who are looking to reduce
                  overheads by paying for expertise, as and when they need them.
                  During this process, we match your requirements with our best
                  candidates, provide their resumes and let you decide the best
                  fit for you.
                </p>
                <p>
                  Our team is supported by our Cloud Academy excellence centre.
                  We have created a culture of peer to peer learning, that
                  promotes teamwork, collaboration and innovation. Where people
                  in similar roles from different teams share ideas and discuss
                  problems to propagate knowledge, driving standards.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-sm bg-white partners">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12} className="mb-5">
              <h3>Our Partners</h3>
              <div className="d-flex justify-content-center align-items-center">
                <div className="flex-fill">
                  <img src={AwsLogo} alt="AWS Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={AzureLogo} alt="Azure Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={GoogleCloudLogo} alt="Google Cloud Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={AtlassianLogo} alt="Atlassian Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={NagiosLogo} alt="Nagios Logo"></img>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="flex-fill">
                  <img src={VmwareLogo} alt="Vmware Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={AlibabaGroupLogo} alt="Alibaba Group Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={Neo4jLogo} alt="Neo4j Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={BarracudaLogo} alt="Barracuda Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={TrendMicroLogo} alt="Trend Micro Logo"></img>
                </div>
                <div className="flex-fill">
                  <img src={SpotinstLogo} alt="Spotinst Logo"></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
