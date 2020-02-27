import React, { useState } from "react";
import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Navigation() {
  // const [isOpenAbout, setIsOpenAbout] = useState(false);
  // const [isOpenServices, setIsOpenServices] = useState(false);
  // const [isOpenContact, setIsOpenContact] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState("");

  const clearActiveDropdown = () => setActiveDropdown("");

  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} id="logo" className="App-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="About"
              // onMouseEnter = { () => setIsOpenAbout(true) }
              // onMouseLeave = { () => setIsOpenAbout(false) }
              // show={ isOpenAbout }
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={clearActiveDropdown}
              show={activeDropdown === "about"}
            >
              <NavDropdown.Item eventKey={1.1}>
                <Link to="/about#who_we_are">Who we are</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={1.2}>
                <Link to="/about#how_we_work">How we work</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={1.3}>
                <Link to="/about#certifications" style={{width: "100px"}}>Certifications</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={1.4}>
                <Link to="/about#partners">Partners</Link>
              </NavDropdown.Item>

            </NavDropdown>
            {/* <NavDropdown title="Products" className="mega-menu">
              <Container className="d-block">
                <Row>
                  <Col>
                    <h5>Our Key Solution</h5>
                    <ul>
                      <li>
                        <a href="/#">Storage</a>
                      </li>
                      <li>
                        <a href="/#">Atlassian</a>
                      </li>
                      <li>
                        <a href="/#">Microsoft Workloads</a>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <h5>Our Customer Reference</h5>
                    <ul>
                      <li>
                        <a href="/#">Attendance System</a>
                      </li>
                      <li>
                        <a href="/#">Career Genese</a>
                      </li>
                      <li>
                        <a href="/#">Deshsanchar CloudFront</a>
                      </li>
                      <li>
                        <a href="/#">Attendance System Cloudfront</a>
                      </li>
                      <li>
                        <a href="/#">Leapfrog</a>
                      </li>
                      <li>
                        <a href="/#">Nepal Distillery</a>
                      </li>
                      <li>
                        <a href="/#">Ashlesha Tally</a>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <h5>Case Studies</h5>
                    <ul>
                      <li>
                        <a href="/#">Sipradi</a>
                      </li>
                      <li>
                        <a href="/#">Deshsanchar</a>
                      </li>
                      <li>
                        <a href="/#">Longtail</a>
                      </li>
                      <li>
                        <a href="/#">APCA</a>
                      </li>
                      <li>
                        <a href="/#">Buddha Air</a>
                      </li>
                      <li>
                        <a href="/#">eSewapasal</a>
                      </li>
                      <li>
                        <a href="/#">Khalti</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </NavDropdown> */}
            <NavDropdown
              title="Services"
              // onMouseEnter = { () => setIsOpenServices(true) }
              // onMouseLeave = { () => setIsOpenServices(false) }
              // show={ isOpenServices }
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={clearActiveDropdown}
              show={activeDropdown === "services"}
            >
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
            <Nav.Link href="https://www.genesecloud.academy/" target="_blank">
              Cloud Academy
            </Nav.Link>
            {/* <NavDropdown
              title="Contact"
              // onMouseEnter={() => setIsOpenContact(true)}
              // onMouseLeave={() => setIsOpenContact(false)}
              // show={isOpenContact}
              onMouseEnter={ () => setActiveDropdown("contact") }
              onMouseLeave={ clearActiveDropdown }
              show={ activeDropdown === "contact" }
            >
              <NavDropdown.Item href="#sales">Sales</NavDropdown.Item>
              <NavDropdown.Item href="#support">Support</NavDropdown.Item>
            </NavDropdown> */}

            {/* <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink> */}
            <Nav.Link href="#contact" eventKey="2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
