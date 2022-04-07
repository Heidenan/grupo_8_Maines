import React, { Component } from "react";
import "./App.css";
import Products from "./Products.js";
import Users from "./Users.js";
import cors from "cors";
/* import {} from "@mui/material"; */

class App extends Component {
  // A class component must have its constructor --> allows to receive props (sate)

  constructor(props) {
    super(props);
    // super --> capturates the props of the parent component
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <Users />
        <Products />
      </>
    );
  }
}

export default App;
