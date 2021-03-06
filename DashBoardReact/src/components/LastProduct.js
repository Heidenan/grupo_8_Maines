import React, { Component } from "react";
import "./App.css";

class LastProduct extends Component {
    // A class component must have its constructor --> allows to receive props (sate)
  
    constructor(props) {
      super(props);
      // super --> capturates the props of the parent component
      this.state = {
        products: [],
        count: [],
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:3000/api/lastProduct")
        .then((response) => response.json())
        .then((response) => this.setState({ products: response.products, count: response.count }));
    }
  
    componentDidUpdate() {}
  
    render() {
      return (  
        <>
        <h1> Cantidad total de Productos: {this.state.count} </h1>
   <ul>
            {this.state.products &&
              this.state.products.map((product) => (
                <li key={product.id}>
                  <p>{product.name}</p>
                  <p>{product.id}</p>
                  <p>{product.description}</p>
                  <p>{product.detailURL}</p>
                  <p>{product.category}</p>
                </li>
              ))}
          </ul>
        </>
      );
    }
  }

  export default LastProduct;


  