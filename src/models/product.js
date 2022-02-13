const path = require("path"); //nos ayuda a decir donde está el archivo (creo que el json de data)
const fs = require("fs"); // nos ayuda a interactuar, leerlo, escribir, etc etc al archivo user de data
const file = require("./file");
const model = {
  file: path.resolve(__dirname, "../data", "products.json"),
  read: () => fs.readFileSync(model.file),
  write: (data) => fs.writeFileSync(model.file, JSON.stringify(data, null, 2)),
  all: () => JSON.parse(model.read()),
  generate: (data) =>
    Object({
      id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
      name: data.name,
      price: parseInt(data.price),
      offert: data.offert ? true : false,
      image: data.file.map((f) => file.create(f).id),
      discount: data.discount ? parseInt(data.discount) : 0,
      description: data.description,
      /*aca hay que agregar todas las categorias que queremos que tenga cada objeto
        O sea cada producto que vendemos por ejemplo */
    }),
  create: (data) => {
    let newProduct = model.generate(data);
    let all = model.all();
    all.push(newProduct);
    model.write(all);
    return newProduct;
  },
  search: (prop, value) =>
    model.all().find((element) => element[prop] == value),
  update: (id, data) => {
    let all = model.all();
    let updated = all.map((e) => {
      if (e.id == id) {
        e.name = data.name;
        e.price = data.price;
        e.offert = data.offert ? true : false;
        return e;
      }
      return e;
    });
    model.write(updated);
    let product = model.search("id", id);
    return product;
  },
  delete: (id) => model.write(model.all().filter((e) => e.id != id)),
};

module.exports = model;

/*const model = {
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
*/
