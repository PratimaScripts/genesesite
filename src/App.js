import React from "react";
import "./App.scss";
import Navigation from "./Navigation";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import About from "./About/About";
import DedicatedTeams from "./Services/DedicatedTeams.js";
import SoftwareDevelopment from "./Services/SoftwareDevelopment.js";
import DigitalTransformation from "./Services/DigitalTransformation.js";
import CloudExpertAdviceAndSupport from "./Services/CloudExpertAdviceAndSupport.js";
import ContactForm from "./Contact/ContactForm";

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
            <Route path="/services/dedicated-teams" component={DedicatedTeams} />
            <Route path="/services/software-development" component={SoftwareDevelopment} />
            <Route path="/services/digital-transformation" component={DigitalTransformation} />
            <Route path="/services/cloud-expert-advice-and-support" component={CloudExpertAdviceAndSupport} />
            <Route path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
