const db = require("../../database/models");

module.exports = {
  list: function (req, res) {
    db.Product.findAll({ include: ["categories"] })
      .then((products) => {
        if (products.length > 0) {
          let response = {
            meta: {
              status: 200,
              total: products.length,
            },
            data: products,
          };
          products.forEach((product) => {
            response.data.push({
              id: product.id,
              Nombre: product.name,
              Descripción: product.description,
              Precio: product.price,
              //imagen: `http://localhost:3000/uploads/${product.images.url}`,
              Producto: "http://localhost:3000" + `/api/products/${product.id}`,
            });
          });
          //     meta: {status: 200},
          //     count: products.length,
          //     // categoryById: categories.foreach(category => {
          //     //         return {
          //     //         name: category.name,
          //     //         categoryById: category.length
          //     //         }
          //     //     }
          //     // ),
          //     products: products,
          // }
          return res.status(200).json(response);
        } else {
          return res.status(404).json({
            error: "No se encontraron productos",
          });
        }
      })
      .catch((err) => {
        return res.status(500).json({
          error: "No se pudo conectar a la base",
        });
      });
  },
  show: function (req, res) {
    db.Product.findByPk(req.params.id, {
      include: ["categories"],
    })
      .then((product) => {
        if (product) {
          return res.status(200).json({
            id: product.id,
            Nombre: product.name,
            Descripción: product.description,
            Precio: product.price,
            Descuento: product.discount,
            Producto: "http://localhost:3000/api/products/" + product.id,
          });
        } else {
          return res.status(404).json({
            error: "No se encontro el producto",
          });
        }
      })
      .catch((err) => {
        return res.status(500).json({
          error: "No se pudo conectar a la base",
        });
      });
  },
};
