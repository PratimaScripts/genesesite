import React from "react";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
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
        <Nav className="mr-auto">
          <NavDropdown title="About">
            <NavDropdown.Item href="#action/1.1">Who we are</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">How we work</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">
              Certifications
            </NavDropdown.Item>
          </NavDropdown>
        <NavDropdown title="Products" className="mega-menu">
            <Container>Products mega menu!</Container>
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
