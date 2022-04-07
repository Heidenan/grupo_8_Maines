const db = require("../../database/models");
const Op = db.Sequelize.Op;

const Users = db.User;
module.exports = {
  // user's list
   list: (req,res) => {
    db.User.findAll()
    .then(allUsers => {
        let result ={
            count:  allUsers.length,
            users: [],
            meta: {
                status: 200,
                url: 'api/users'
            },
        }
        allUsers.forEach(user =>{
            result.users.push({
                id: user.id,
                name: user.name +" "+  user.last_name,
                email: user.email,
                detailURL: "http://localhost:3000/api/users/" + user.id
            })
        })
       return res.json(result)
      
    })
    .catch(err => {
        let result ={
            err,
            meta: {
                status: 404,
                url: 'api/users'
            },
        }
        res.json(result)
    })
},
  // user's id
   show: (req, res) => {
    db.User.findByPk(req.params.id).then((user) => {
      return res.status(200).json({
        data: {
          id: user.id,
          Nombre: user.name,
          Apellido: user.last_name,
          Email: user.email,
          Administrador: user.admin,
          avatar: "http://localhost:3000/avatars/" + user.avatar,
          User: `http://localhost:3000/api/users/${user.id}`,
        },
        status: 200,
      });
    });
  },

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
