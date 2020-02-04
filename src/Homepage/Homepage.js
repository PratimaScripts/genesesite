import React from "react";
import logo from "./logo.svg";
import offer from "./offer.png";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "./HomepageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function renderImages(images) {
  if (images === undefined) {
    return null;
  } else {
    return images.map((item, i) => {
      return <img src={item} alt="banner" />;
    });
  }
}

function renderLink(link) {
  if (link === undefined) {
    return null;
  } else if (link.url != undefined) {
    return <a href={link.url}>{link.text}</a>;
  }
}

function Homepage() {
  return (
    <div>
      {data.Content.map((item, i) => {
        return (
          <div key={i} className={item.class}>
            <Container>
              <div className="section">
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
                <div className="image-section">{renderImages(item.images)}</div>
                <p>{renderLink(item.link)}</p>
              </div>
            </Container>
          </div>
        );
      })}      
    </div>
  );
}

export default Homepage;
