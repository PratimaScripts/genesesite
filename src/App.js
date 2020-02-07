import React from "react";
import "./App.scss";
import Navigation from "./Navigation";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer";
import { HashRouter, Switch, Route } from "react-router-dom";
import SalesForm from "./Contact/SalesForm";
import SupportForm from "./Contact/SupportForm";

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
            <Route path="/sales" component={SalesForm} />
            <Route path="/support" component={SupportForm} />
          </Switch>
        </HashRouter>
      </div>

      <Footer />
    </div>
  );
}

export default App;
