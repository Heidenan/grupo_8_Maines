const user = require('../models/user')
const controller = {
    index: (req, res) => res.send(user.list()),
    show: (req, res) => {
        let result = user.show(req.params.id)
        return result ? res.send(result) : res.send('No se encontró el usuario!')
    }
}
module.exports = controller