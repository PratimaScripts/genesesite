import React from "react";
import Container from "react-bootstrap/Container";
import { HashLink as Link } from "react-router-hash-link";
import DedicatedTeamsImage from "./dedicated-teams.png";

export default function DedicatedTeams() {
  return (
    <div>
      <div className="section text-white bg-primary">
        <Container>
          <h1 className="">Dedicated Teams</h1>
          <p>
            We provide customizable managed agile teams of certified Developers,
            Programmers, Architects, Quality Assurance and DevOps Engineers. We
            design, test, manage and build your idea from scratch, our ability
            to execute all of this in house allows you to concentrate on your
            business.
          </p>
        </Container>
      </div>
      <img src={DedicatedTeamsImage} alt="Dedicated Teams"></img>
      <div className="section bg-light" id="service">
        <Container>
          <h5 className="mb-4">
            We have taken the time to create a process which builds in quality,
            enabling us to release features often and consistently deliver
            projects on time.
          </h5>
          <p>
            Our experience in collaborating on projects across different time
            zones has shown us how important communication is. Our ability to
            communicate and extract your project requirements enables us to
            provide peace of mind as well as the best technical solution. Based
            in the UK with offices in Europe, Australia and Asia we are able to
            provide teams both locally and remotely.
          </p>
          <p>
            If you're looking to scale an existing team or want to build and
            manage your own, our internal resources and hiring process provide
            seamless expertise where and when you need them. Once you have
            determined who is needed and for how long, we are able to provide
            quality professionals at a competitive price.{" "}
          </p>
          <p>
            <Link to="/contact">Have a project in mind? Get in touch!</Link>
          </p>
        </Container>
      </div>
    </div>
  );
}
