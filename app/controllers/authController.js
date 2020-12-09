require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;
const Role = db.role;

module.exports = {
  register: async (req, res) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err, user) => {
      if (err) {
        res.status(500).send({
          message: `Error is ${err}`,
        });
        return;
      }

      if (req.body.roles) {
        Role.find({ name: { $in: req.body.roles } }, (err, roles) => {
          if (err) {
            res.status(500).send({
              message: `Error ${err}`,
            });
            return;
          }
          user.roles = roles.map(role => role._id);
          user.save(err => {
              if(err) {
                  res.status(500).send({message: `Error is ${err}`});
                  return;
              }
              res.send({message: "User was registered success", user})
          });
        });
      } else {
          Role.findOne({name: "user"}, (err, role)=> {
              if(err) {
                  res.status(500).status({message: `Error is ${err}`})
                  return;
              }
              user.roles = [role._id];
              user.save(err => {
                  if(err) {
                      res.status(500).send({message: `Error is ${err}`})
                      return;
                  }
                  res.send({message: "User was registered", user})
              });
          });
      }
    });
  },
};
