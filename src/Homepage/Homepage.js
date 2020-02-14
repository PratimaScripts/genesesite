import React from "react";
import Carousel from "../CarouselSlider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AwsLogo from "./partner-logos/aws.svg";
import AzureLogo from "./partner-logos/azure.svg";
import GoogleCloudLogo from "./partner-logos/googleCloud.svg";
import AtlassianLogo from "./partner-logos/atlassian.svg";
import CloudExpert from "./images/cloud-expert.svg";
import Certification from "./images/certification.jpg";
import WebDevelopment from "./images/web-development-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faShoppingCart,
  faRoute,
  faHamburger,
  faTv,
  faHeartbeat,
  faUserFriends,
  faMagic,
  faThumbsUp,
  faServer,
  faShieldAlt,
  faRocket
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

function renderImages(images) {
  if (images === undefined) {
    return null;
  } else {
    return images.map((item, i) => {
      return <img src={item} alt="banner" />;
    });
  }
}

function renderLink(link) {
  if (link === undefined) {
    return null;
  } else if (link.url !== undefined) {
    return <a href={link.url}>{link.text}</a>;
  }
}

function Homepage() {
  return (
    <div>
      <div id="carousel">
        <Carousel />
      </div>
      <div className="section section-sm bg-white partners">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section p-0 bg-light" id="product">
        <Container fluid className="p-0">
          <Row className="m-0">
            <Col lg={6} className="p-0">
              <div
                className="section-image"
                style={{ backgroundImage: `url(${CloudExpert})` }}
              ></div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="section-content right text-left">
                <h3>Cloud Experts Driving Digital Transformation</h3>
                <p>
                  Are you a startup? Small or medium businesses? We provide
                  expert IT advice, cloud migration, service integration and
                  software development. Allowing your company to focus on its
                  core business. Our management team has experience working for
                  big companies like eBay, Microsoft, Amazon, Rackspace and
                  Capital One.
                </p>
                <p>
                  <a href="/services/digital-transformation">
                    Learn more about how our certified cloud experts can take
                    care of your digital transformation
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className="section p-0 text-white with-background"
        style={{ backgroundImage: `url(${WebDevelopment})` }}
      >
        <Container className="p-0">
          <Row className="m-0" fluid>
            <Col lg={6} className="p-0"></Col>
            <Col lg={6} className="p-0">
              <div className="section-content right text-left">
                <h3>
                  We build search optimised secure websites, mobile apps and
                  cloud services in a cost-effective way.
                </h3>
                <p>
                  <a href="/services/software-development">
                    More details on how we can help you build and optimise your
                    website, mobile app or cloud services.
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section bg-white" id="service">
        <Container fluid>
          <h3>Start a project with us</h3>
          <Row className="boxes boxesv2">
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faUserFriends} />
                  </div>
                  <p>We focus on the customer.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <p>
                    Our loyal and experienced team can streamline and enhance
                    the operational efficiency of your business through faster
                    and more resilient development.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faMagic} />
                  </div>
                  <p>
                    We are test-oriented, utilising test automation to build and
                    assure quality into every product.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  <p>
                    You can scale your IT resources on-demand, reliably and
                    securely according to your project needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faServer} />
                  </div>
                  <p>
                    We'll advise on, provision and manage your cloud
                    infrastructure, reducing cost and improving security and
                    compliance.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                  <p>
                    As cloud and security specialists we'll help you migrate
                    your services to the cloud and integrate enterprise services
                    seamlessly and securely. Using cloud managed services you
                    can reduce capital or operational expense, accelerate
                    time-to-business-value and improve on ROI.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p>
            <a href="#sales">
              Start a project with us, arrange a free consultation here.
            </a>
          </p>
        </Container>
      </div>
      <div className="section bg-primary text-white">
        <Container fluid>
          <h3>
            Having worked across a wide range of industries, we can help you
          </h3>
          <Row className="boxes">
            <Col lg={2}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPiggyBank} />
                  </div>
                  <h5>Banking</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </div>
                  <h5>Retail & eCommerce</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faHeartbeat} />
                  </div>
                  <h5>Healthcare</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTv} />
                  </div>
                  <h5>Tv & Media</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faHamburger} />
                  </div>
                  <h5>Food & drink</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <Card.Body>
                  <div className="icon">
                    <FontAwesomeIcon icon={faRoute} />
                  </div>
                  <h5>Travel</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p>
            <a href="#sales">
              Find out more on how we can help in your industry.
            </a>
          </p>
        </Container>
      </div>
      <div
        className="section p-0 text-white with-background"
        style={{ backgroundImage: `url(${Certification})` }}
      >
        <Container fluid className="p-0">
          <Row className="m-0">
            <Col lg={6} className="p-0">
              {/* <div className="section-image" style={{ backgroundImage: `url(${Certification})` }}>
						</div> */}
            </Col>
            <Col lg={6} className="p-0">
              <div className="section-content right text-left">
                <p>
                  <strong>
                    Our team is experienced and qualified. Our cloud experts
                    have achieved a range of technical certifications with the
                    major cloud providers. This extensive knowledge allows us to
                    provide the best solution for you.{" "}
                  </strong>
                </p>
                <Row className="certifications">
                  <Col lg={4}>
                    <Card>
                      <Card.Body>
                        <img src={AwsLogo} alt="AWS Logo"></img>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card>
                      <Card.Body>
                        <img src={AzureLogo} alt="Azure Logo"></img>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card>
                      <Card.Body>
                        <img
                          src={GoogleCloudLogo}
                          alt="Google Cloud Logo"
                        ></img>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <p>
                  <a href="/#">
                    View all of our internationally recognised certifications.
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Homepage;
