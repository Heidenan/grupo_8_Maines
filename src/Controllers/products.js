const product = require("../models/product");
const file = require("../models/file");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const validator = require("express-validator");

// Tables ///

const Products = db.Product;
const Categories = db.Category;

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
    /*(req, res) =>
    res.render("products/list", {
      styles: ["main"],
      title: "Productos",
      products: product
        .all()
        .map((p) => Object({ ...p, image: file.search("id", p.image) })),
    }), */
  },
  productDetail: (req, res) => res.render("products/productDetail",),
  carrito: (req, res) => res.render("products/productCart"),
  compras: (req,res) => res.render('products/compras'),
  create: (req, res) =>
    Categories.findAll()
      .then(function (categories) {
        return res.render("products/create", {
          categories: categories,
          styles: ["/create"],
          title: "Nuevo Producto",
        });
      })
      .catch((err) => {
        res.send(err);
      }),
  save: (req, res) => {
    const errors = validator.validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.render("products/create", {
        errors: errors.mapped(),
      });
    }
    Products.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      offert: req.body.offert,
      image: req.files[0].filename,
      discount: req.body.discount,
      discountValue: req.body.discountValue,
      category_id: parseInt(req.body.category_id),
    })
      .then(() => {
        res.redirect("/products");
      })
      .catch((err) => {
        res.send(err);
      });

    /* (req, res) => {
    req.body.file = req.files;
    let created = product.create(req.body);
    return res.redirect("/products/" + created.id); */
  },
  show: (req, res) => {
    Products.findByPk(req.params.id).then((product) => {
      res.render("products/detail", { product });
    });
  },
  update: (req, res) => {
    Products.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then(() => {
      res.redirect("/products/" + req.params.id);
    });
  },
  destroy: (req, res) => {
    Products.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/products/");
      })
      .catch((error) => res.send(error));
  },
  edit: (req, res) => {
    Products.findByPk(req.params.id).then((product) => {
      res.render("products/update", { product: product });
    });
  },
  // Codigo para la base de datos ///

  // detail: (req, res) => {
  //   Products.findByPk(req.params.id)
  //   .then(product => {
  //     res.render("/:id", {product})
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
