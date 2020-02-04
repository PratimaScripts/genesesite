import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from "./Homepage/logo.svg";
import offer from "./Homepage/offer.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col lg={3}>
              <h5>Contact</h5>
              <img src={logo} id="logo" className="App-logo" alt="logo" />
              <p>London, UK (+44) 020 38437303</p>
              <p>Kathmandu, Nepal +9779801837374</p>
              <p>sales@genesolution.com</p>
              <p>support@genesesolution.com</p>
            </Col>
            <Col lg={3}>
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">How we Work</a>
                </li>
              </ul>
              <div className="bg-white p-1 rounded">
                <h5 className="text-dark text-center">Our Partners</h5>
                <div className="d-flex">
                  <div>
                    <img src="http://dev.genesesolution.com/wp-content/uploads/2018/12/partner_amazon.png" alt="partner_amazon"></img>
                  </div>
                  <div>
                    <img src="http://dev.genesesolution.com/wp-content/uploads/2018/12/partner_azure.png" alt="partner_azure"></img>
                  </div>
                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Google_Cloud_Logo.svg/200px-Google_Cloud_Logo.svg.png" alt="partner_google"></img>
                  </div>
                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Atlassian-logo.svg/1280px-Atlassian-logo.svg.png" alt="partner_atlassian"></img>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <h5>Services</h5>
              <ul>
                <li>
                  <a href="/#">Digital Transformation</a>
                </li>
                <li>
                  <a href="/#">Cloud Development</a>
                </li>
                <li>
                  <a href="/#">Expert Advice & Support</a>
                </li>
                <li>
                  <a href="/#">Dedicated Teams </a>
                </li>
                <li>
                  <a href="/#">Dedicated Teams </a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <img src={offer} alt="offer"></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bottom-bar">
        <Container>
          <p class="text-white m-0">&copy; Copyright 2020 Genese</p>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
