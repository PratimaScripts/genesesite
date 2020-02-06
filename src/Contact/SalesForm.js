import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    if (formInput.fname !== "" && formInput.lname  !== "" && formInput.city  !== "" && formInput.state !== ""  && formInput.email_id  !== "" && formInput.subject !== ""  && formInput.message !== "")
    {
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
    <Form style={{ margin: 'auto', width:'100%', marginTop:'30px'}} noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Sales Form</h1>
      <Form.Row style={{justifyContent: 'center'}}>
        <Form.Group as={Col} md="4" controlId="formBasicFirstname">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            onChange={handleChange}
            name="fname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col}  md="4" controlId="formBasicLastname">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            onChange={handleChange}
            name="lname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row style={{justifyContent: 'center'}}>
        <Form.Group as={Col} md="4" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
            onChange={handleChange}
            name="city"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" onChange={handleChange} name="state" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row style={{justifyContent: 'center'}}>
        <Form.Group as={Col} md="8" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email_id"
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row style={{justifyContent: 'center'}}>
        <Form.Group as={Col} md="8" controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            className="text-primary"
            onChange={handleChange}
            placeholder="Enter Subject"
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row style={{justifyContent: 'center'}}>
        <Form.Group as={Col} md="8" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            onChange={handleChange}
            placeholder="Enter message"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter your message.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit" className='mb-3'>Submit form</Button>
    </Form>
  );
}

export default SalesForm;
