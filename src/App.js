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
     
      <div id="main-content">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </HashRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
