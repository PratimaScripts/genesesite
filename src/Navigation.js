import React from "react";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
        <img src={logo} id="logo" className="App-logo" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="About">
            <NavDropdown.Item href="#action/1.1">Who we are</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">How we work</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">
              Certifications
            </NavDropdown.Item>
          </NavDropdown>
        <NavDropdown title="Products" className="mega-menu">
            <Container className="d-block">
                <Row>
                    <Col>
                        <h5>Our Key Solution</h5>
                        <ul>
                            <li><a href="/#">Storage</a></li>
                            <li><a href="/#">Atlassian</a></li>
                            <li><a href="/#">Microsoft Workloads</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Our Customer Reference</h5>
                        <ul>
                            <li><a href="/#">Attendance System</a></li>
                            <li><a href="/#">Career Genese</a></li>
                            <li><a href="/#">Deshsanchar CloudFront</a></li>
                            <li><a href="/#">Attendance System Cloudfront</a></li>
                            <li><a href="/#">Leapfrog</a></li>
                            <li><a href="/#">Nepal Distillery</a></li>
                            <li><a href="/#">Ashlesha Tally</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Case Studies</h5>
                        <ul>
                            <li><a href="/#">Sipradi</a></li>
                            <li><a href="/#">Deshsanchar</a></li>
                            <li><a href="/#">Longtail</a></li>
                            <li><a href="/#">APCA</a></li>
                            <li><a href="/#">Buddha Air</a></li>
                            <li><a href="/#">eSewapasal</a></li>
                            <li><a href="/#">Khalti</a></li>
                        </ul>
                    </Col>
                  </Row>
            </Container>
          </NavDropdown>
          <NavDropdown title="Services">
            <NavDropdown.Item href="#action/2.1">
              Cloud Digital Transformation
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">
              Expert Cloud Advise and Support
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">
              Software Development
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2.4">
              Dedicated Teams
            </NavDropdown.Item>
          </NavDropdown>
            <Nav.Link href="#products">Portfolio</Nav.Link>
            <NavDropdown title="Insights">
                <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Support</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="https://www.genesecloud.academy/" target="_blank">Cloud Academy</Nav.Link>
          <NavDropdown title="Contact">
            <NavDropdown.Item href="#action/4.1">Careers</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.1">Sales</NavDropdown.Item>
            <NavDropdown.Item href="#action/4.2">Support</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
