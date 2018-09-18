import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
class App extends Component {
    render() {
        return (
            <div>
                <Header branding="Contact Manager" />
                <div className="container">
                    <Contact
                        name="John Doe"
                        email="jdoe@gmail.com"
                        phone="555-555-5555"
                    />
                    <Contact
                        name="Karen Smite"
                        email="karen@gmail.com"
                        phone="555-555-5555"
                    />
                </div>
            </div>
        );
    }
}

export default App;
