import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function CarouselSlider() {
  return (
    <Carousel interval="30000">
      <Carousel.Item style={{ backgroundImage: "url(http://dev.genesesolution.com/wp-content/uploads/2018/11/monitoring-1.jpg)" }}>
        <Carousel.Caption>
          <Container>
              <div>
           <h3>Digital Transformation</h3>
          <h5>Do your Digital Transformation with our Cloud Experts</h5>
          <p>
            Our certified Architects, Developers and DevOps experts make your transition to the cloud in a managed, cost-effective and secure way. Our expertise is to build efficient, highly scalable, reliable infrastructures and continuous delivery pipelines that maximise profits and allow you to deliver features faster. As partners for the major cloud providers including AWS, Microsoft Azure and Google Suite, we help you find the right cloud solution.
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
      <Carousel.Item style={{ backgroundImage: "url(http://dev.genesesolution.com/wp-content/uploads/2018/10/cloud-computing.jpg)" }}>
        <Carousel.Caption>
          <Container>
              <div>
            <h3>Instant Access to Cutting Edge Technologies</h3>
          <h5>
            Go Serverless, Integrate IoT, Big Data and Machine Learning into your business
          </h5>
          <p>
            Cherry pick in-house enterprise services and the latest technologies using APIs and a Serverless architecture to take advantage of the best Cloud has to offer. Optimise and automate business processes using established Artificial Intelligence and Machine Learning services such as text processing, identity management and image recognition. Connect your apps to the world of IoT, the Internet of Things, collect, analyse through well defined pipelines and visualise business Big Data on comprehensive dashboards.
          </p>
          <p>
              <a href="./Offers/Welcome2020">
                Learn more about how we can migrate your business
                </a>
            </p>
            </div>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: "url(http://dev.genesesolution.com/wp-content/uploads/2018/11/aws-1.jpg)" }}>
        <Carousel.Caption className="dark">
          <Container>
              <div>
            <h3>Prompt advice and support from certified professionals</h3>
          <h5>Certified Experienced Cloud Professionals from £250/day*</h5>
          <p>
            Get advice and support from our experienced cloud Architects, Developers and DevOps professionals starting at £250 per day* for the major cloud providers including AWS and Microsoft Azure. We'll pick up your infrastructure and applications from where you've left and manage it for you. 
            </p>
                <p>
              <a href="./Offers/Welcome2020">
              Learn more about our cloud support services
            </a>
             </p>
            <p>
              * Prices depend on project duration and are subjected to VAT.
            </p>
            </div>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>
          <Carousel.Item style={{ backgroundImage: "url(http://dev.genesesolution.com/wp-content/uploads/2018/11/web-development.jpg)" }}>
        <Carousel.Caption className="dark">
          <Container>
              <div>
            <h3>Hire us or with us!</h3>
          <h5>Hire one of our experts or let us do the hiring for you!</h5>
          <p>
            Define your criteria and we'll do the hiring for you. We are an AWS Advanced Tier Partner and have a team of talented Architects, Developers and DevOps internationally certified to Professional level. Our thorough and sustainable hiring pipeline allows you to choose the best talent from our internal team or internationally. Based in the UK with Tier 2 Visa sponsorship we are able to provide teams locally and remotely. We have offices in the UK, Australia, Nepal, Pakistan and Bangladesh. Have exclusive, first-hand access to talented candidates straight from our <a target="_blank" rel="noopener noreferrer" href="https://www.genesecloud.academy">Cloud Academy</a>
            </p>
            </div>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselSlider;
