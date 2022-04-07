import React, { Component } from "react";
import "./App.css";
import cors from "cors";



/* import {} from "@mui/material"; */
class Users extends Component {
    // A class component must have its constructor --> allows to receive props (sate)
  
    constructor(props) {
      super(props);
      // super --> capturates the props of the parent component
      this.state = {
        users: [],
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/api/users")
        .then((response) => response.json())
        .then((response) => this.setState({ users: response.users}));
    }
  
    componentDidUpdate() {}
  
    render() {
      if(!this.state.users.length > 0) return null;
      console.log(this.state.users)
      return (
        <>
          {this.state.users.map(user => <h1 key={user.id}>{user.name}</h1>)}
          {this.state.users.map(user => <h1 key={user.id}>{user.email}</h1>)}
        </>
      );
    }
  }
  
  
  export default Users;
  