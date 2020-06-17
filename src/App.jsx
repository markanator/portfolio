import React from "react";
import { Route } from "react-router-dom";

// COMPONENTS
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// CONTAINERS
import MainContent from "./containers/MainContent/MainContent";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="App-wrapper">
        <>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route exact path="/me">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </>
      </div>

      <Footer />
    </div>
  );
}
