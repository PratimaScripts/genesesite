import React from "react";
import "./App.scss";
import Navigation from "./Navigation";
import Carousel from "./CarouselSlider";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navigation />
      </header>
      <div id="carousel">
        <Carousel />
      </div>
      <div id="main-content">
        <Homepage />
      </div>

      <Footer />
     
    </div>
  );
}

export default App;
