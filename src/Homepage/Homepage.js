import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import data from "./HomepageData";

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
      content here
    </div>
  );
}

export default Homepage;
