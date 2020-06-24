import React from 'react';

// COMPONENTS
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Layout (props) {
    return (
        <div  className="App">
            <Navbar />
                {props.children}
            <Footer/>
        </div>
    )
}