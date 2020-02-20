import React, {useState} from 'react';
// react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
// emailjs
import * as emailjs from "emailjs-com";
// react-datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react country region selector
import { CountryDropdown } from "react-country-region-selector";
// react phone input
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
// importing css for modal
import "../styles.css";

export default function ContactForm() {
    const [formInput, setFormInput] = useState({
        fullname: "",
        contact_method: "",
        email: "",
        phone: "",
        location: "",
        areaOfInterest: [],
        message: "",
        date: new Date()
    })

    const [error, setError] = useState("");

    const selectCountry = val => {
        setFormInput({
            ...formInput, location: val
        })
    }
    
    const selectDate = val => {
        setFormInput({
            ...formInput, date: val
        })
    }

    const isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };

    const choosePhone = val => {
        setFormInput({
            ...formInput, phone: val
        })
    }

    const [success, setSuccess] = useState(false);
    const [reset, setReset] = useState(false);
  
    const handleChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleCheck = ({ target }) => {
        const { name: blockName, checked, value } = target;
        setFormInput(prevState => {
            if (prevState[blockName]) {
            if (checked) {
                return {
                ...prevState,
                [blockName]: [...prevState[blockName], value]
                };
            } else {
                return {
                ...prevState,
                [blockName]: prevState[blockName].filter(option => option !== value)
                };
            }
            } else {
            if (checked) {
                return {
                ...prevState,
                [blockName]: [value]
                };
            } else {
                return prevState;
            }
            }
        });
    };

    const reset_modal = () => {
        document.getElementById('form').reset();
        setFormInput({
            ...formInput,
            fullname: "",
            contact_method: "",
            email: "",
            phone: "",
            location: "",
            areaOfInterest: [],
            message: '',
            date: new Date()
        })
        setReset(false);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (
          formInput.fullname !== "" &&
          formInput.email !== "" &&
          formInput.contact_method !== "" &&
          formInput.location !== "" &&
        //   formInput.areaOfInterest.length !== 0 &&
          formInput.location !== "" &&
          formInput.message !== ""
        ) {
            // sales@genesesolution.com, shrawan@genesesolution.com
          let templateParams = {
            from_email: formInput.email,
            to_email: "sales@genesesolution.com, shrawan@genesesolution.com",
            html: `Sales Inquiry from ${formInput.fullname}`,
            contact_method: formInput.contact_method,
            name: formInput.fullname,
            phone: formInput.phone,
            date: formInput.date,
            location: formInput.location,
            areaOfInterest: formInput.areaOfInterest,
            message: formInput.message
          };
       

          if(formInput.areaOfInterest.length === 0){
              setError(<p style={{color: "red"}}>Enter your area of interest</p>);
              return false;
          }
    
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
                reset_modal()
                setSuccess(true);
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

    
    };

    const close_modal = () =>{
        setReset(false);
        setSuccess(false);
    }

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
                            onSubmit={handleSubmit}
                            id="form"
                        >
                            <Row>
                                <Col lg={6}>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            name="fullname"
                                            onChange={handleChange}
                                            value={formInput.fullname}
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Preferred Contact Method</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Radio
                                                    name="contact_method"
                                                    value="email"
                                                    onChange={handleChange}
                                                />
                                            </InputGroup.Prepend>
                                            <Form.Control 
                                                required
                                                type="email"   
                                                name="email"                                             
                                                placeholder="Email Address"
                                                value={formInput.email}
                                                onChange={handleChange}
                                            />
                                        </InputGroup>

                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Radio 
                                                name="contact_method" 
                                                value="phone"
                                                onChange={handleChange}
                                                />
                                            </InputGroup.Prepend>

                                            <ReactPhoneInput
                                                name="phone"
                                                placeholder="Enter phone number"
                                                value={formInput.phone}
                                                onChange={choosePhone}
                                                // required={formInput.contact_method === "phone" ? required: ""}
                                            />
                                        </InputGroup>

                                    </Form.Group>
                                    {
                                        formInput.contact_method ==="phone" ?
                                        <Form.Group>
                                            <Form.Label>When is a good time for us to call?</Form.Label>
                                            <DatePicker 
                                                showPopperArrow={false}
                                                placeholderText="Select Date and Time"
                                                onChange={selectDate}
                                                selected={formInput.date}
                                                value={formInput.date}  
                                                minDate={new Date()}
                                                filterDate={isWeekday}
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                timeCaption="time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                className="form-control"
                                            />

                                        </Form.Group>:""
                                    }
                                        
                                </Col>
                                <Col lg={6}>
                                    <Form.Group>
                                        <Form.Label>Location</Form.Label>
                                        <CountryDropdown className="form-control" value={formInput.location} onChange={selectCountry} required/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Area of Interest</Form.Label>
                                        <Form.Check
                                            name="areaOfInterest"
                                            label="Dedicated Teams"
                                            id="dt"
                                            value={"Dedicated Teams" || formInput.areaOfInterest}
                                            onChange={handleCheck}
                                        />
                                        <Form.Check
                                            name="areaOfInterest"
                                            label="Cloud Expert Advice &amp; Support"
                                            id="ceas"
                                            value="Cloud Expert Advice &amp; Support"
                                            onChange={handleCheck}
                                        />
                                        <Form.Check
                                            name="areaOfInterest"
                                            label="Software Development"
                                            id="sd"
                                            value="Software Development"
                                            onChange={handleCheck}
                                        />
                                        <Form.Check
                                            name="areaOfInterest"
                                            label="Digital Transformation"
                                            id="dit"
                                            value="Digital Transformation"
                                            onChange={handleCheck}
                                        />
                                        {error}
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group>
                                <Form.Label>Details</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="4"
                                    name="message"
                                    id="message"
                                    onChange={handleChange}
                                    value={formInput.message}
                                    placeholder="e.g.
                                    I'm looking to hire an experienced DevOps engineer for
                                    a 3 month contract. I also need a website for a new
                                    business."
                                    required
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label><strong>Please note: </strong> In line with GDPR legislation, if you submit an enquiry using this form you are agreeing to our <a href="https://policies.google.com/privacy?hl=en">T&amp;Cs and Privacy Policy</a></Form.Label>
                            </Form.Group>

                            <Button type="submit" className="mb-3 text-center">Submit</Button>
                            <Button type="button" onClick={()=> setReset(true)}className="mb-3 ml-3 text-center">Reset</Button>

                        </Form>

                    </Col>
                </Row>
            </div>

            {success ? <div className="modalMain">
                <div className="modal_main">
                    <div className="modal_head">
                        <div className="modal_title">
                            <h2 className="text-center">Message Sent</h2>
                        </div>
                    </div>

                    <div className="modal_body text-center">
                        Thanks for your interest in Genesis Sales [Office Europe or Nepal]. One of our team members will be in touch with you shortly.
                    </div>
                
                    <div className="modal_footer">
                        <p className="text-center"><Button className="mb-3 text-center" onClick={() => close_modal()}>Okay</Button></p>
                    </div>
                </div>
            </div> : ""}

            {reset ? <div className="modalMain">
                <div className="modal_main">
                    <div className="modal_head">
                        <div className="modal_title">
                            <h2 className="text-center">Are You Sure?</h2>
                        </div>
                    </div>

                    <div className="modal_body text-center">
                        This will clear all the information on this page. Are you sure you’d like to continue? 
                    </div>
                
                    <div className="modal_footer">
                        <p className="text-center"><Button className="mb-3 text-center mr-3" onClick={() => reset_modal()}>Yes</Button><Button onClick={()=> setReset(false)} className="mb-3 text-center">Cancel</Button></p>
                    </div>
                </div>
            </div> : ""}

        </Container>
    )
}
