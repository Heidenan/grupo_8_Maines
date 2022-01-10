const path =require('path'); //nos ayuda a decir donde está el archivo (creo que el json de data)
const fs = require('fs')    // nos ayuda a interactuar, leerlo, escribir, etc etc al archivo user de data
const model = {
    list: () => JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json'))),
    show: id => model.list().find(e => e.id == id),
    store: data => {
        let all = model.list()
        let id = all.length > 0 ? all[all.length-1].id + 1 : 1
        let product = {id:id,...data}
        all.push(product)
        fs.writeFileSync(path.resolve(__dirname,"../data/products.json"),JSON.stringify(all, null, 2))
        return product
    }
}

module.exports = model