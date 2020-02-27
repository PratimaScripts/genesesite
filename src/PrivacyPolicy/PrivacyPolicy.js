import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <div className="section bg-primary text-white">
        <h1 className="m-0">Privacy Policy</h1>
      </div>
      <div className="section section-sm text-left">
        <Container>
          <h4>What information do you hold about me?</h4>
          <p>
            As soon as you visit our website our web server automatically
            registers the domain from which you access the website the time,
            date and Internet Protocol (IP) address you came from. We use this
            information to gather data about the usage of our website. This is
            so we can refine the content and make more useful information
            available to you.
          </p>
          <p>
            If you have requested information via one of our forms, we will use
            the information that you provided to do this. This information will
            be shared internally with the department most appropriate to deal
            with your enquiry.
          </p>
          <p>
            We will use your details to provide you with additional information
            about our products and services that we believe may interest you.
          </p>
          <p>
            If you do not wish to receive further communication, send an email
            to{" "}
            <a href="mailto:info@genesesolution.com">info@genesesolution.com</a>{" "}
            stating that you wish to opt-out. Please provide your name and email
            address and we will amend your preferences to ensure you no longer
            receive further communication.
          </p>
          <h5>Our Customers</h5>
          <p>
            We collect and store contact details of existing customers of Genese
            Solution to allow us to deliver products and services to you, as set
            out in our contract with you. We need this information to meet our
            contractual obligations, and for billing and other communications
            relating to our work with you. We will also send information to our
            customers about our products and services that may be of interest to
            you.
          </p>
          <h5>Please note:</h5>
          <ul>
            <li>
              We will not exchange, sell or otherwise give away any of your
              personal information to any other companies or individuals.
            </li>
            <li>
              The General Data Protection Regulation (GDPR) requires us to
              explain what the legal basis is for us processing your personal
              data for the purposes listed above.
            </li>
            <li>
              Tracking website usage, responding to your enquiries and sending
              you further communication about our products and services is
              necessary for our legitimate interests.
            </li>
            <li>
              Holding details of our customers for correspondence, service
              delivery and billing purposes is necessary for the performance of
              a contract.
            </li>
          </ul>
          <h4>Legitimate Interests</h4>
          <p>
            The GDPR also states that we have to explain what our legitimate
            interests are if we are using that as a legal basis.
          </p>
          <p>
            We have a legitimate interest in networking and growing our
            business, and to achieve this it is necessary for us to communicate
            to customers and prospective customers to answer enquiries, and to
            inform you about relevant products, services and events that may be
            of interest to you. We feel that our business contacts would
            reasonably expect us to contact them in a business context, and you
            have the right to opt-out of receiving marketing communication from
            us at any time.
          </p>
          <p>
            We also have a legitimate interest in understanding the usage of our
            website and using this to refine the content that is available to
            you.
          </p>
          <h5>How long the data will be stored</h5>
          <p>
            We retain information about organisations for as long as is
            necessary to help inform future actions, which is no more than five
            years unless they pertain to an active customer.
          </p>
          <h4>Cookies</h4>
          <p>
            To make this site work properly, we sometimes place small data files
            called cookies on your device. Most modern websites do this.
          </p>
          <h5>What are cookies?</h5>
          <p>
            A cookie is a small text file that a website saves on your computer
            or mobile device when you visit the site. It enables the website to
            remember if you’ve visited it before – allowing the site to tailor
            and vary content based on who the user is. Typically a cookie is
            made out of two bits of information – a unique user ID and a site
            name, but they can be more complex.
          </p>
          <h5>How do we use cookies?</h5>
          <p>
            <strong>We use cookies to remember:</strong>
          </p>
          <ul>
            <li>If you’ve agreed to the use of cookies on our site</li>
            <li>If you’ve ever filled in a form on our site</li>
          </ul>
          <p>
            We also use the following analytics tools which utilise cookies –
            these generate statistical and other information about website
            usage:
          </p>
          <ul>
            <li>Google Analytics</li>
          </ul>
          <p>
            Enabling these cookies is not strictly necessary for the website to
            work but it will provide you with a better browsing experience. You
            can delete or block these cookies, but if you do that some features
            of this site may not work as intended. We will never share your
            information with third parties.
          </p>
          <h5>How to control cookies</h5>
          <p>
            You can control and/or delete cookies as you wish – for details, see{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://aboutcookies.org/">
              aboutcookies.org
            </a>
            . You can delete all cookies that are already on your computer and
            you can set most browsers to prevent them from being placed. If you
            do this, however, you may have to manually adjust some preferences
            every time you visit a site and some services and functionalities
            may not work.
          </p>
          <h4>Data subject rights</h4>
          <p>
            Individuals have certain rights in relation to their personal data
            under GDPR. You have the right to access a copy of the data we hold
            about you, and to ask us to correct any inaccurate or incomplete
            information.
          </p>
          <p>
            In limited circumstances, you have the right to ask us to erase the
            data we hold about you, and the right to object to us processing
            data about you.
          </p>
          <p>
            The right to object applies in particular to direct marketing, and
            you have the right to opt-out from receiving this communication from
            us using the details above.
          </p>
          <p>
            For more information on how to exercise your other rights, please
            contact{" "}
            <a href="mailto:info@genesesolution.com">info@genesesolution.com</a>
          </p>
          <h4>Contact Details</h4>
          <p>
            Genese Solution Ltd is the data controller for all personal data we
            store and process for these purposes.
          </p>
          <p>
            We are registered with the Information Commissioner’s Office:{" "}
            <a target="_blank" href="#/">
              LINK HERE
            </a>
          </p>
          <p>
            If you are unhappy with our use of your personal data, you are
            entitled to complain to the ICO:{" "}
            <a target="_blank" rel="noopener noreferrer" href="https://ico.org.uk/make-a-complaint/">
              ico.org.uk/concerns/
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
}
