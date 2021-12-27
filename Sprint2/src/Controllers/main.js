const listaProductos = require('../data/productos')

module.exports = {
    index: (req,res) => res.render('index',{productos: listaProductos})
}