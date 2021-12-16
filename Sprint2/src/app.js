const express = require ('express')
const path = require ('path')
const app = express ()

app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () =>
    console.log("Servidor Corriendo en el puerto 3000") )


app.use(express.static(path.resolve(__dirname,'../public')))

app.get('/', (req,res) =>   res.sendFile(path.resolve(__dirname,'./views/index.html')))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname,'./views', 'register.html')))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname,'./views', 'login.html')))
app.get('/carrito', (req,res) => res.sendFile(path.resolve(__dirname,'./views/carrito.html')))
app.get('/entregas', (req,res) => res.sendFile(path.resolve(__dirname,'./views/entregas.html')))
app.get('/compras', (req,res) => res.sendFile(path.resolve(__dirname,'./views/compras.html')))
app.get('/ayuda', (req,res) => res.sendFile(path.resolve(__dirname,'./views/ayuda.html')))
app.get('/suscripciones', (req,res) => res.sendFile(path.resolve(__dirname,'./views/suscripciones.html')))
app.get('/detalleProducto', (req,res) => res.sendFile(path.resolve(__dirname,'./views/detalleProducto.html')))

