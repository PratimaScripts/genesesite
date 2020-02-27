import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DigitalTransformationImage from "./digital-transformation.png";

export default function DigitalTransformation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="section bg-primary text-white">
        <Container>
          <h1 className="">Digital Transformation</h1>
          <h1 className="">Digital Transformation</h1>
        </Container>
      </div>
      <div className="section p-0 bg-white" id="product">
        <Container fluid className="p-0">
          <Row className="m-0">
            <Col lg={6} className="p-0">
              <div
                className="section-image"
                style={{
                  backgroundImage: `url(${DigitalTransformationImage})`
                }}
              ></div>
            </Col>
            <Col lg={6} className="p-0">
              <div className="section-content right text-left">
                <p>
                  Cloud services form the foundation of Digital Transformation
                  and facilitate rapid business change, in a world that is
                  always changing, your business has to be able to adapt in
                  order to be competitive.
                </p>
                <p>
                  As Digital transformation experts, our team merge technology
                  with strategy. We create a personalised digital adoption plan,
                  that provides the best cloud solutions, meeting your business
                  needs without disrupting ongoing operations.
                </p>
                <p>
                  Let us transition your existing IT environments to the cloud
                  so that you can do away with outdated processes and legacy
                  technology. We specialise in building highly available,
                  infrastructure and storage. Our private and hybrid cloud
                  solutions accommodate diverse workloads with low latency and
                  robust disaster recovery.
                </p>
                <p>
                  We'll integrate digital technologies into multiple areas of
                  your organisation to optimise how you operate. Automate
                  time-consuming tasks using Artificial Intelligence, adding
                  value and improving the experience for your customers,
                  suppliers and employees.
                </p>
                <p>
                  Collect, analyse and utilise business Big Data through IoT.
                  Leverage data-driven insights to enable new service offerings,
                  create new earning potential, reduce expenditure and optimise
                  processes.
                </p>
                <p>
                  Our Digital Transformation will help your organisation to
                  become more agile, deliver features faster and at scale,
                  through integrated continuous delivery pipelines, API's and
                  serverless architecture. Improve collaboration with enterprise
                  technology, make workflows and file transfers across your
                  cloud environment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section bg-light" id="service">
        <Container>
          <p>
            <a href="#/contact">
              Take the first step towards your Digital Transformation and
              arrange a free consutlation.
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
}
