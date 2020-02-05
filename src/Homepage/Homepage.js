import React from "react";
import Container from "react-bootstrap/Container";
import data from "./HomepageData";
import Carousel from "../CarouselSlider";

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
  } else if (link.url !== undefined) {
    return <a href={link.url}>{link.text}</a>;
  }
}

function Homepage() {
  return (
    <div>
      {data.Content.map((item, i) => {
        return (
          <>
            <div id="carousel">
              <Carousel />
            </div>

            <div key={i} className={item.class}>
              <Container>
                <div className="section">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                  <div className="image-section">
                    {renderImages(item.images)}
                  </div>
                  <p>{renderLink(item.link)}</p>
                </div>
              </Container>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Homepage;
