import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import * as emailjs from "emailjs-com";

function SalesForm() {
  const [validated, setValidated] = useState(false);

  const [formInput, setFormInput] = useState({
    fname: "",
    lname: "",
    city: "",
    state: "",
    email_id: "",
    subject: "",
    message: ""
  });

  const handleChange = e => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      formInput.fname !== "" &&
      formInput.lname !== "" &&
      formInput.city !== "" &&
      formInput.state !== "" &&
      formInput.email_id !== "" &&
      formInput.subject !== "" &&
      formInput.message !== ""
    ) {
      let templateParams = {
        from_email: formInput.email_id,
        to_email: "astute.yard@gmail.com",
        subject: formInput.subject,
        html: formInput.message,
        fname: formInput.fname,
        lname: formInput.lname
      };

      emailjs
        .send(
          "contact_service",
          "emailjs_article",
          templateParams,
          "user_1hFQLccZWV2fXyEudYRAC"
        )
        .then(
          result => {
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
    }

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <div className="section section-sm">
        <Row style={{ justifyContent: "center" }}>
          <Col lg={8}>
            <h1>Contact Us</h1>
            <p>
              Thank you for your interest in Genese Solution and our services.
              Please share your inquiry and contact information. We'll get back
              to you as soon as possible.
            </p>
            <Form
              className="text-left"
              style={{ margin: "auto", width: "100%", marginTop: "30px" }}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Row>
                <Col lg={6}>
                  <Form.Group controlId="formBasicFirstname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      onChange={handleChange}
                      name="fname"
                    />
                    <Form.Control.Feedback className="text-muted">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Preferred Contact Method</Form.Label>
                    <InputGroup className="mb-2">
                      <InputGroup.Prepend>
                        <InputGroup.Radio name="contact_method" />
                      </InputGroup.Prepend>
                      <Form.Control placeholder="Email Address" />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Radio name="contact_method" />
                      </InputGroup.Prepend>
                      <Form.Control placeholder="Phone Number" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>When is a good time for us to call?</Form.Label>
                    <InputGroup>
                    <Form.Control as="select" onChange={handleChange}>
                      <option>Date</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                    <Form.Control as="select" onChange={handleChange}>
                      <option>Month</option>
                      <option>UK</option>
                      <option>Australia</option>
                      <option>USA</option>
                      <option>Nepal</option>
                      <option>India</option>
                    </Form.Control>
                    <Form.Control as="select" onChange={handleChange}>
                      <option>Time</option>
                      <option>09:00</option>
                      <option>11:00</option>
                      <option>12:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                      <option>17:00</option>
                    </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="formBasicLastname">
                    <Form.Label>Location</Form.Label>
                    <Form.Control as="select" onChange={handleChange}>
                      <option>Choose a Location</option>
                      <option>UK</option>
                      <option>Australia</option>
                      <option>USA</option>
                      <option>Nepal</option>
                      <option>India</option>
                    </Form.Control>
                    <Form.Control.Feedback className="text-muted">
                      Looks good!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Area of Interest</Form.Label>
                    <Form.Check name="areaOfInterest" label="Dedicated Teams" />
                    <Form.Check
                      name="areaOfInterest"
                      label="Cloud Expert Advice & Support"
                    />
                    <Form.Check
                      name="areaOfInterest"
                      label="Software Development"
                    />
                    <Form.Check
                      name="areaOfInterest"
                      label="Digital Transformation"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="4"
                  name="message"
                  onChange={handleChange}
                  placeholder="e.g.
                  I'm looking to hire an experienced DevOps engineer for
                  a 3 month contract. I also need a website for a new
                  business."
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit" className="mb-3 text-center">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SalesForm;
