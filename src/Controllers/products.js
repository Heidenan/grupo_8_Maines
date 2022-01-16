const product = require('../models/product')

const controller = {
    index: (req,res) => res.render('products/list',{ // Este metodo es para renderizar el archivo (o la vista) list. Tambien podemos agregar en este mismo metodo
                                                     // archivos css para que le den forma a la vista list. Podemos agregar todos los css que querramos aunque
                                                     // por ejemplo para css que vayan a estar en todas las vistas como el header y el footer
                                                     // tiene mas sentido incluirlos directamente en los archivos html o css que ponerlos en cada metodo de cada controlador
    styles: ['main'],
    title: 'Productos',
    products: product.all()
    }),
    create: (req,res) => res.render('products/create',{
        styles:['products/create'],
        title: 'Nuevo Producto',
        
    }),
    save: (req,res) => {
        let created = product.create(req.body);
        return res.send(created)
    },
    show: (req,res) => {
        let result = product.search('id', req.params.id)
        return result ? res.render('products/detail',{
            styles: ['products/detail'],
            title: 'Producto | '+result.name,
            product: result
        } ) :res.render('error',{
            msg: 'Producto no encontrado'
        })
    },
    update: (req,res) => res.render('products/update',{
        styles: ['products/create'],
        title: 'Actualizar',
        product: product.search('id', req.params.id)
    }),
    modify: (req, res) => {
        let updated = product.update(req.params.id,req.body)
        return res.send(updated)
    },
    delete: (req,res) => {
        product.delete(req.body.id)
        return res.redirect('/products/')
    }

}

module.exports = controller








/*const controller = {
    index: (req,res) => res.render ('products/list',{list: product.list()}),
    create: (req, res) => res.render('products/create'),
    save:(req, res) => {
        let result = product.store(req.body);
        return res.send(result) 
}
}
module.exports = controller
*/