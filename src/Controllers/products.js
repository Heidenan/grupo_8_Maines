const product = require("../models/product");
const file = require("../models/file");

const controller = {
  index: (req, res) =>
    res.render("products/list", {
      styles: ["main"],
      title: "Productos",
      products: product
        .all()
        .map((p) => Object({ ...p, image: file.search("id", p.image) })),
    }),
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
};

module.exports = controller;
