import React, { Component } from "react";
import "./App.css";

/* import {} from "@mui/material"; */
class Users extends Component {
  // A class component must have its constructor --> allows to receive props (sate)

  constructor(props) {
    super(props);
    // super --> capturates the props of the parent component
    this.state = {
      users: [],
      count: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((response) =>
        this.setState({ users: response.users, count: response.count })
      );
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1> Cantidad total de Usuarios: {this.state.count} </h1>
      </>
    );
  }
}

export default Users;
