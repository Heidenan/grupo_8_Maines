import React, { Component } from "react";
import "./App.css";



/* import {} from "@mui/material"; */
class LastUser extends Component {
    // A class component must have its constructor --> allows to receive props (sate)
  
    constructor(props) {
      super(props);
      // super --> capturates the props of the parent component
      this.state = {
        user: [],
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/api/lastUser")
        .then((response) => response.json())
        .then((response) => this.setState({ user: response.user}));
    }
  
    componentDidUpdate() {}
  
    render() {
       return (
        <>
        <h1> Ultimo usuario creado: </h1>
       
        </>
      );
    }
  }
  
  
  export default LastUser;
  