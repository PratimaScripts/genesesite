import React from "react";
import "./App.scss";
import Navigation from "./Navigation";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./About/About";
import ContactForm from "./Contact/Contact";

function App() {
  return (
    <HashRouter>
      <div>
        <header className="App-header">
          <Navigation />
        </header>

        <div id="main-content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
