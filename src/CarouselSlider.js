import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import SlideOne from "./carousel-images/digital-transformation-expert.png";
import SlideTwo from "./carousel-images/cutting-edge-technology.png";

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
              <h5>
                Partners with the major cloud providers, we find the right cloud
                solution for you
              </h5>
              <p>
                Our certified Architects, Developers and DevOps experts make
                your transition to the cloud in a managed, cost-effective and
                secure way. We build efficient, highly scalable, reliable
                infrastructures and continuous delivery pipelines that reduce
                expenditure and allow you to deliver features faster.
              </p>
              <p>
                <a href="./Services/DigitalTransformation">
                  Learn more about how we can migrate your business
                </a>
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
              <h5>
                Integrate IoT, Big Data and Machine Learning into your business
              </h5>
              <p>
                Integrate enterprise services and the latest technologies into
                the daily operations of your business. Optimise and automate
                business processes using Artificial Intelligence such as text
                processing and image recognition. Connect your apps to the world
                of the Internet of Things (IoT) and collect, analyse and utilise
                business Big Data on easy to read dashboards.
              </p>
              <p>
                <a href="./Offers/Welcome2020">
                  Learn more about integrating these technologies into your
                  business.
                </a>
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
              <h3>Expert Advise and Support</h3>
              <h5>Certified Experienced Cloud Professionals from £250/day*</h5>
              <p>
                As partners of the major cloud providers such as AWS, Microsoft
                Azure and Google Cloud, our fully qualified cloud Architects,
                Developers and DevOps professionals will assess and optimise
                your infrastructure and applications. We're ready to pick up
                your cloud environment and manage it for you , so you can focus
                on your business. Take advantage of our introductory offers
                starting from £250 per day.*.
              </p>
              <p>
                <a href="./Offers/Welcome2020">
                  Learn more about Expert Advise &amp; Support
                </a>
              </p>
              <p>
                * Prices depend on project duration and are subjected to VAT.
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
              <h5>
                Hire from our of team experts or let us do the hiring for you
              </h5>
              <p>
                Improve the speed and flexibility of your organisation with
                on-demand talent. Our thorough and sustainable hiring pipeline
                provides the expertise you need, as and when you need them. Make
                use of our internal team, or hire internationally. All you have
                to do is define your criteria and we'll provide experienced,
                highly certified IT professionals ready to join your project.
              </p>
              <p>
                <a href="./Offers/Welcome2020">Check our welcome offers.</a>
              </p>
            </div>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselSlider;
