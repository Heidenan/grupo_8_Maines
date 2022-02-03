const path = require('path'); //nos ayuda a decir donde está el archivo (creo que el json de data)
const fs = require('fs')    // nos ayuda a interactuar, leerlo, escribir, etc etc al archivo user de data
const model = {
    file: path.resolve(__dirname, '../data','files.json'),
    read: () => fs.readFileSync(model.file),
    write: data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    search: (prop, value) => model.all().find(element => element[prop] == value),
    generate: data => Object({
        id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
        url: (data.filename),
    }),
    create: data => {
        let newImage = model.generate(data);
        let all = model.all();
        all.push(newImage);
        model.write(all)
        return newImage
    },
}

module.exports = model;