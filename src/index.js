import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/main.css";
import "./css/home.css";
import "./css/about.css";
import "./css/projects.css";

import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
