import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faDesktop,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

export default function SoftwareDevelopment() {
  return (
    <div>
      <div className="section text-white bg-primary">
        <Container>
          <h1 className="">Software Development</h1>
          <p>
            Genese Solution aid customers to embrace the latest technologies by
            providing bespoke software, mobile and web development. We deliver
            tested, functional and attractive cross-platform applications and
            websites. Our developers front- end expertise, ensure end-users have
            an optimum experience across desktops, smartphones, and tablets.
          </p>
        </Container>
      </div>
      <div className="section section-sm bg-light" id="service">
        <Container>
          <Row className="boxes boxesv2">
            <Col lg={4}>
              <Card className="border-0">
                <Card.Body className="p-0">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCloud} />
                  </div>
                  <p>
                    We design cloud-native web applications from scratch so you
                    can take advantage of container-based development to build
                    multiservice web apps adapted to elastic architectures.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="border-0 p-0">
                <Card.Body className="p-0">
                  <div className="icon">
                    <FontAwesomeIcon icon={faDesktop} />
                  </div>
                  <p>
                    We'll update or redesign unfriendly and out-dated web
                    interfaces in order for them to meet the latest user demands
                    and trends.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="border-0 p-0">
                <Card.Body className="p-0">
                  <div className="icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <p>
                    Improve your online presence and generate online sales
                    enquiries. We'll design and develop search optimised, secure
                    websites that are tailored specifically to your business
                    requirements.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p>
          <Link to="/contact">Let's discuss your needs. Contact us </Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
