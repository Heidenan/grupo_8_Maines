const product = require("../models/product");
const file = require("../models/file");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// Tables ///

const Products = db.Product;
const Categories = db.categorie;

const controller = {
  index: (req, res) => {
    Products.findAll({
      include: [{ association: "category" }],
    })
      .then((products) => {
        res.render("products/list", { products });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  /*(req, res) =>
    res.render("products/list", {
      styles: ["main"],
      title: "Productos",
      products: product
        .all()
        .map((p) => Object({ ...p, image: file.search("id", p.image) })),
    }), */
  create: (req, res) =>
    res.render("products/create", {
      styles: ["products/create"],
      title: "Nuevo Producto",
    }),
  save: (req, res) => {
    req.body.file = req.files;
    let created = product.create(req.body);
    return res.redirect("/products/" + created.id);
  },
  show: (req, res) => {
    let result = product.search("id", req.params.id);
    return result
      ? res.render("products/detail", {
          styles: ["products/detail"],
          title: "Producto | " + result.name,
          product: result,
        })
      : res.render("error", {
          msg: "Producto no encontrado",
        });
  },
  update: (req, res) =>
    res.render("products/update", {
      styles: ["products/create"],
      title: "Actualizar",
      product: product.search("id", req.params.id),
    }),
  modify: (req, res) => {
    let updated = product.update(req.params.id, req.body);
    return res.redirect("/products/" + updated.id);
  },
  delete: (req, res) => {
    product.delete(req.body.id);
    return res.redirect("/products/");
  },

  // Codigo para la base de datos ///

  // 'list': (req, res) => {
  //   Products.findAll({
  //     include: [{association: "category"}]
  //   })
  //   .then(products => {
  //     res.render("products/list", {products})
  //   })
  // },

  // 'detail': (req, res) => {
  //   Products.findByPk(req.params.id)
  //   .then(product => {
  //     res.render("/:id", {product})
  //   })
  // },

  // add: (req, res) => {
  //   res.render("/create")
  // },

  // create: (req, res) => {
  //   Products.create({

  //     name: req.body.name,

  //     description: req.body.description,

  //     price: req.body.price,

  //     offer: req.body.offer,

  //     image: req.body.image,

  //     discount: req.body.discount,

  //     discountValue: req.body.discountValue,

  //     category_id: req.body.category_id,

  //   }).then(() => {
  //     res.redirect("/")
  //   })
  //   .catch(error => {
  //     res.send(error)
  //   })
  // },
  // edit: (req, res) => {

  // },

  // update: (req, res) => {
  //   Products.update({
  //     ...req.body,
  //   },{
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(() => {
  //     res.redirect("/")
  //   })
  // },

  // delete: (req, res) => {

  //   let productId = req.params.id
  //   Products.findByPk(productId).then(product => {

  //   })
  //   .catch(error => {
  //     res.send(error)
  //   })

  // },

  // destroy: (req, res) => {
  //   Products.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(() => {
  //     res.redirect("/")
  //   })
  //   .catch(error => res.send(error))
  // }
};

module.exports = controller;
