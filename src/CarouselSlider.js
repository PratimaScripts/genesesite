import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import SlideOne from "./carousel-images/digital-transformation-expert.png";
import SlideTwo from "./carousel-images/cutting-edge-technology.png";
import { HashLink as Link } from "react-router-hash-link";

function CarouselSlider() {
  return (
    <Carousel interval="30000">
      <Carousel.Item
        style={{
          backgroundImage: `url(${SlideOne})`
        }}
      >
        <Carousel.Caption>
          <Container>
            <div>
              <h3>Digital Transformation Experts</h3>
              <p>
                Our certified Architects, Developers and DevOps experts make
                your transition to the cloud in a managed, cost-effective and
                secure way. We build efficient, highly scalable, reliable
                infrastructures and continuous delivery pipelines. Allowing you
                to reduce expenditure and deliver features faster.
              </p>
              <p>
                <Link to="/services/digital-transformation">
                  Learn more about how we can migrate your business
                </Link>
              </p>
            </div>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: `url(${SlideTwo})` }}>
        <Carousel.Caption>
          <Container>
            <div>
              <h3>Cutting Edge Technologies</h3>
              <p>
                Integrate enterprise services and the latest technologies into
                the daily operations of your business. Optimise and automate
                business processes using AI such as textprocessing and image
                recognition. Connect your apps to the world of IoT and collect,
                analyse and utilise business Big Data on easy to read
                dashboards.
              </p>
              <p>
                <Link to="/services/digital-transformation">
                  Learn more about integrating these technologies into your
                  business.
                </Link>
              </p>
            </div>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage:
            "url(http://dev.genesesolution.com/wp-content/uploads/2018/11/aws-1.jpg)"
        }}
      >
        <Carousel.Caption className="dark">
          <Container>
            <div>
              <h3>Expert Advice and Support</h3>
              <h5>Certified Experienced Cloud Professionals from £250/day*</h5>
              <p>
                As partners of the major cloud providers, our team will assess
                and optimise your infrastructure and applications. We're ready
                to pick up your cloud environment and manage it for you, so you
                can focus on your business. Take advantage of our introductory
                offers starting from £250 per day.*.
              </p>
              <p>
                <Link to="/services/cloud-expert-advice-and-support">
                  Learn more about Expert Advise &amp; Support
                </Link>
              </p>
              <p>
                <small>
                  {" "}
                  * Prices depend on project duration and are subjected to VAT.
                </small>
              </p>
            </div>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage:
            "url(http://dev.genesesolution.com/wp-content/uploads/2018/11/web-development.jpg)"
        }}
      >
        <Carousel.Caption className="dark">
          <Container>
            <div>
              <h3>Build Your Own Team</h3>
              <p>
                Improve the speed and flexibility of your organisation with
                on-demand talent. Our thorough and sustainable hiring pipeline
                provides the expertise you need, as and when you need them. Make
                use of our internal team, or hire internationally. Just define
                your criteria, we'll provide experienced IT professionals to
                join your project.
              </p>
              <p>
                <Link to="/services/dedicated-teams">
                  Check our welcome offers.
                </Link>
              </p>
            </div>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselSlider;
