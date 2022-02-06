const express = require("express");
const path = require("path");
const method = require("method-override");
const app = express();
const cookie = require("cookie-parser");
const session = require("express-session");

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.resolve(__dirname, "../public")));
app.use("/uploads", express.static(path.resolve(__dirname, "../uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(session({ secret: "secret", saveUninitialized: true, resave: false }));

//Server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () =>
  console.log("listening on http://localhost:" + app.get("port"))
);
app.use(method("m")); // ?_m=PUT || ?_m=DELETE --> Forms

//Routes

app.use(require("./routes/carrito"));
app.use(require("./routes/entregas"));
app.use(require("./routes/compras"));
app.use(require("./routes/ayuda"));
app.use(require("./routes/productDetail"));

const mainRoutes = require("./routes/main");
app.use(mainRoutes);

const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

const userRoutes = require("./routes/users");
app.use("/users", userRoutes);

const filesRoutes = require("./routes/files");
app.use("/files", filesRoutes);
