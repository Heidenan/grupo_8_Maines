import React, { Component } from "react";
import "./App.css";
import cors from "cors";
/* import {} from "@mui/material"; */

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends Component {
  // A class component must have its constructor --> allows to receive props (sate)

  constructor(props) {
    super(props);
    // super --> capturates the props of the parent component
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users/last")
      .then((response) => response.json())
      .then((response) => this.setState({ users: response.users}));
  }

  componentDidUpdate() {}

  render() {
    if(!this.state.users.length > 0) return null;
    console.log(this.state.users)
    return (
      <>
        <h1>{this.props.title}</h1>;
        {this.state.users.map(user => <h1 key={user.id}>{user.name}</h1>)}
      </>
    );
  }
}

export default App;
