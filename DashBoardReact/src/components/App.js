import React, { Component } from "react";
import "./App.css";
import {} from "@mui/material";
import LastProduct from "./LastProduct.js";
import LastUser from "./LastUser.js";
import Tabs from "./Tabs.js";

class App extends Component {
  // A class component must have its constructor --> allows to receive props (sate)

  constructor(props) {
    super(props);
    // super --> capturates the props of the parent component
    this.state = {
      /*  product: null,
      lastProduct:null,
      users:null,
      lasttUser:null */
    };
  }

  componentDidMount() {
    /*    Promise.all([
      fetch(`http://localhost:3000/api/products/products`).then(result => result.json()),
      fetch(`http://localhost:3000/api/products/products/last`).then(result => result.json()),
      fetch(`http://localhost:3000/api/users`).then(result => result.json()),
      fetch(`http://localhost:3000/api/users/last`).then(result => result.json()),
        ])
    .then(results => {
        this.setState({products:results[0].data,lastProduct:results[1].data,users:results[2].data,lastUser:results[3].data})
    })
    .catch(err => console.log(err))
  */
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1 className="title">{this.props.title}</h1>
        <img src="favicon.ico" className="logo" alt="logo"></img>
        <Tabs />
      </>
    );
  }
}

export default App;
