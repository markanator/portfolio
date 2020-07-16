import React from "react";
import {Route} from "react-router-dom";
// Analytics
import ReactGA from 'react-ga';

// layout
import Layout from './layout';

// CONTAINERS
import MainContent from "./containers/MainContent/MainContent";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";

export default function App() {
    ReactGA.initialize('UA-172015867-1');
    ReactGA.pageview(window.location.pathname + window.location.search);


    return (
        <Layout>
            <div className="App-wrapper">
                <div>
                    <Route exact path="/">
                        <MainContent/>
                    </Route>
                    <Route exact path="/me">
                        <About/>
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                </div>
            </div>
        </Layout>
    );
}
