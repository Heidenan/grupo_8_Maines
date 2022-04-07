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
      .then((response) => this.setState({ user: response.data }));
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1> Ultimo usuario creado: </h1>
        <ol className="description-user">
            <li key={this.state.user.id}>
                <p>Nombre: {this.state.user.name}</p>
                <p>Id: {this.state.user.id}</p>
                <p>Descripción: {this.state.user.description}</p>
                <p>Detalle: {this.state.user.detailURL}</p>
                <p>Categoria: {this.state.user.category}</p>
              </li>
        </ol>
      </>
    );
  }
}

export default LastUser;
