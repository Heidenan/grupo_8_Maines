const path =require('path'); //nos ayuda a decir donde está el archivo (creo que el json de data)
const fs = require('fs')    // nos ayuda a interactuar, leerlo, escribir, etc etc al archivo user de data
const model = {
    list: () => JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json'))),
    show: id => model.list().find(e => e.id == id)
}

module.exports = model