const path = require("path"); //nos ayuda a decir donde está el archivo (creo que el json de data)
const fs = require("fs"); // nos ayuda a interactuar, leerlo, escribir, etc etc al archivo user de data
const model = {
  file: path.resolve(__dirname, "../data", "users.json"),
  read: () => fs.readFileSync(model.file, "utf8"),
  write: (data) => fs.writeFileSync(model.file, JSON.stringify(data, null, 2)),
  // Los últimos parámetros son para que formato del texto se vea mejor
  listAllUsers: () => JSON.parse(model.read()),
  show: (id) => model.list().find((e) => e.id == id),
  generated: (data) =>
    // Here we generate a new user
    Object({
      id: model.all().length == 0 ? 1 : model.all().pop().id + 1,
      email: String(data.email),
      password: String(data.password),
      // Toma la contraseña, calcula la verificación del hash y la encripta
      // El hash es un algoritmo que convierte la contraseña indescifrable
      // isAdmin: String(data.email).includes("@digitalhouse.com"),
      // isActive: true,
    }),
  create: (data) => {
    let allUsers = model.all();
    console.log(data);
    let user = model.generated(data);
    allUsers.push(user);
    model.write(allUsers);
    return user;
    // Here we create the user and we add it to the current list of users
  },
};

module.exports = model;
