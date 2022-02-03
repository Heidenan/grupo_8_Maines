const express = require("express");
const path = require("path");
const method = require("method-override");
const app = express(); // requerimos express en la variable app porque lo vamos a
// ejecutar para la configuracion que viene debajo.
// ver comentarios en /routes/products para mas info

app.set("views", path.resolve(__dirname, "views"));

//Configuración
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));
app.use(express.urlencoded({ extended: true }));

//Servidor
app.set("port", process.env.PORT || 3000);
app.listen(
  app.get("port"),
  /*de aca para la derecha es opcional*/ () =>
    console.log("listening on http://localhost:" + app.get("port"))
);

app.use(method("m")); // ?_m=PUT || ?_m=DELETE

//Rutas

app.use(require("./routes/login"));
app.use(require("./routes/carrito"));
app.use(require("./routes/entregas"));
app.use(require("./routes/compras"));
app.use(require("./routes/ayuda"));
app.use(require("./routes/suscripciones"));
app.use(require("./routes/productDetail"));

const mainRoutes = require("./routes/main");
app.use(mainRoutes);

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

app.use(require("./routes/users"));

const filesRoutes = require("./routes/files");
app.use("/files", filesRoutes);
