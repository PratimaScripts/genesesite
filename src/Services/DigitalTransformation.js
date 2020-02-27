import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DigitalTransformationImage from "./digital-transformation.png";

export default function DigitalTransformation() {
  return (
    <div>
      <div className="section bg-primary text-white">
        <Container>
          <h1 className="">Digital Transformation</h1>
          <p>
            As digital transformation experts, our team of certified Architects,
            Developers and DevOps professionals merge technology with strategy.
            We'll create a personalised cloud adoption strategy that offers the
            best solution for your business, without disrupting your ongoing
            operations.
          </p>
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
                  Let us transition your existing environments to the cloud so
                  that you can do away with outdated processes and legacy
                  technology. We specialise in building highly available,
                  infrastructure and storage. We offer private and hybrid cloud
                  solutions, that accommodate diverse workloads with low latency
                  and robust disaster recovery.
                </p>
                <p>
                  We'll integrate digital technology into multiple areas of your
                  organisation to optimise how you operate. Leverage data
                  analytics and automation to handle time-consuming tasks, add
                  value and improve the experience for your customers, suppliers
                  and employees.
                </p>
                <p>
                  Genese Solution will help you become more agile, deliver
                  features faster and at scale, through integrated continuous
                  delivery pipelines, API's and serverless architecture. Improve
                  collaboration with enterprise technology, make workflows and
                  file transfers across your cloud environment.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section bg-light" id="service">
        <Container>
          <p>
            Run your business with increased security and compliance. Our AWS
            certified Security Specialists understand how important control,
            privacy and data protection are to your business. We'll architect
            your infrastructure in line with best practices so that you can rest
            assured.
          </p>
          <p>
            <a href="#/contact">
              Let's discuss your digital transformation needs
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
}
