const db = require("../../database/models");
const Op = db.Sequelize.Op;

const Users = db.User;
module.exports = {
  // user's list
  /* list: (req, res) => { */
    /* Users.findAll({ attributes: ["id", "nombre", "apellido", "email"] })
      .then((users) => {
        if (users.length > 0) {
          let response = {
            meta: {
              status: 200,
              totalUsers: users.length,
            },
            data: users,
          };
          users.forEach((user) => {
            response.data.push({
              id: user.id,
              Nombre: user.name,
              Apellido: user.last_name,
              Email: user.email,
              User: `/api/users/${user.id}`,
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
  }, */
  // user's id
  /* show: (req, res) => {
    db.User.findByPk(req.params.id).then((user) => {
      return res.status(200).json({
        data: {
          id: user.id,
          Nombre: user.name,
          Apellido: user.last_name,
          Email: user.email,
          Administrador: user.admin,
          Avatar: "http://localhost:3000/uploads/avatars/" + user.avatar.url,
          User: `http://localhost:3000/api/users/${user.id}`,
        },
        status: 200,
      });
    });
  }, */

  allUsers:(req, res) => {
      Users.findAll()
        .then((users) => {
          res.send({ users });
        })
        .catch((err) => {
          res.send(err);
        });
    },
};
