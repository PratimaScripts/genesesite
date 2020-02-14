import React from "react";
import "./App.scss";
import Navigation from "./Navigation";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./Contact/Contact";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navigation />
      </header>
      <HashRouter>
        <div id="main-content">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
