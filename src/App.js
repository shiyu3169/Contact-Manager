import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact
          name="Karen Smite"
          email="karen@gmail.com"
          phone="555-555-5555"
        />
      </div>
    );
  }
}

export default App;
