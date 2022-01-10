const product = require('../models/product')
const controller = {
    index: (req,res) => res.render ('products/list',{list: product.list()}),
    create: (req, res) => res.render('products/create'),
    save:(req, res) => {
        let result = product.store(req.body);
        return res.send(result) 
}
}
module.exports = controller