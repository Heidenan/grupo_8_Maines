const db = require("../../database/models");
const Op = db.Sequelize.Op;

module.exports = {
  // user's list
  list: (req, res) => {
    db.User.findAll({ attributes: ["id", "nombre", "apellido", "email"] })
      .then((users) => {
        if (users.length > 0) {
          let response = {
            meta: {
              status: 200,
              totalUsers: users.length,
            },
            data: [],
            //data: users
          };
          users.forEach((user) => {
            response.data.push({
              id: user.id,
              Nombre: user.nombre,
              Apellido: user.apellido,
              Email: user.email,
              urlUser: `/api/users/${user.id}`,
            });
          });

          return res.status(200).json(response);
        } else {
          return res.status(404).json({
            error: "No hay usuarios",
          });
        }
      })
      .catch((error) => {
        return res.status(500).json({
          error: "No se pudo conectar a la base",
        });
      });
  },
  // user's id
  showUser: (req, res) => {
    db.User.findByPk(req.params.id).then((user) => {
      return res.status(200).json({
        data: {
          id: user.id,
          Nombre: user.name,
          Apellido: user.last_name,
          Email: user.email,
          Administrador: user.admin,
          urlAvatar: "http://localhost:3000/uploads/avatars/" + user.avatar.Url,
          urlUser: `/api/users/${user.id}`,
        },

        status: 200,
      });
    });
  },
};
