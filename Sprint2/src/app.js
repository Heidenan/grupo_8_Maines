const express = require ('express')
const path = require ('path')
const method = require('method-override')
const app = express ()

app.set("port", process.env.PORT || 3000)
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(app.get("port"), /*de aca para la derecha es opcional*/ () => console.log('listening on http://localhost:' + app.get('port')) )


app.use(express.static(path.resolve(__dirname,'../public')))
app.use(express.urlencoded({extended:true}))
app.use(method("_m")) // ?_m=PUT || ?_m=DELETE

app.use(require('./routes/main'))
app.use(require('./routes/register'))
app.use(require('./routes/login'))
app.use(require('./routes/carrito'))
app.use(require('./routes/entregas'))
app.use(require('./routes/compras'))
app.use(require('./routes/ayuda'))
app.use(require('./routes/suscripciones'))
app.use(require('./routes/productDetail'))
app.use(require('./routes/users'))
app.use(require('./routes/products'))