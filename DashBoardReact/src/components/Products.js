import React, { Component } from "react";
import "./App.css";
import {} from "@mui/material";

class Products extends Component {
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
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((response) =>
        this.setState({ products: response.products, count: response.count })
      );
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1> Cantidad total de Productos: {this.state.count} </h1>
        <ol className="description-products">
          {this.state.products &&
            this.state.products.map((product) => (
              <li key={product.id}>
                <p>Nombre: {product.name}</p>
                <p>Id: {product.id}</p>
                <p>Descripción: {product.description}</p>
                <p>Detalle: {product.detailURL}</p>
                <p>Categoria: {product.category}</p>
              </li>
            ))}
        </ol>
      </>
    );
  }
}

export default Products;
