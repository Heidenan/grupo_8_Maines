const db = require("../../database/models");

module.exports = {
  list: (req,res) => {
    db.Product.findAll({
        include: [{ association: "category" }]
      })
    .then(allProducts => {
        let result ={
            count:  allProducts.length,
            products: [],
            meta: {
                status: 200,
                url: 'api/products'
            },
        }
        allProducts.forEach(product =>{
            result.products.push({
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category.name,
                detailURL: "http://localhost:3000/api/products/" + product.id
            })
        })
       return res.json(result)
        
    })
    .catch(err => {
        let result ={
            err,
            meta: {
                status: 404,
                url: 'api/products'
            },
        }
        res.json(result)
    })
},
  show: function (req, res) {
    db.Product.findByPk(req.params.id, {
      include: [{ association: "category" }]
    })
      .then((product) => {
        if (product) {
          return res.status(200).json({
            id: product.id,
            Nombre: product.name,
            Descripción: product.description,
            Precio: product.price,
            Descuento: product.discount,
            category: product.category.name,
            image: "http://localhost:3000/" + product.image,
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
  lastProduct:(req,res) =>{
    db.Product.findOne({
        order: [['id', 'DESC']]
    })
    .then((product) => {
        return res.status(200).json({
            data: {
                    id: product.id,
                    name: product.name,
                    image: "http://localhost:3000/avatars/" + product.image,
                  },
                 status: 200,
        })
        })
        .catch(err => {
            return res.status(404).json( {
                error: 'No existe el producto' } );;
                 })
     }
};
