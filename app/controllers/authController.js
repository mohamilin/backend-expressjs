require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;
const Role = db.role;

module.exports = {
  register: (req, res) => {
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

  login: (req, res) => {
      User.findOne({
          username: req.body.username
      })
      .populate("roles", "-__v")
      .exec((err, user) => {
          if(err) {
              res.status(500).send({message: `Error is ${err}`});
              return;
          }
          if(!user) {
              return res.status(400).send({message: "User not found"})
              
          }
                    
          const passwordIsValid = bcrypt.compareSync(
              req.body.password,
              user.password
          );
          if(!passwordIsValid) {
              return res.status(401).send({
                  accessToken: null,
                  message: "Invalid Password"
              });
          }
          const token = jwt.sign({id: user.id}, process.env.SECRET, {
              expiresIn: 86400 //24 jam
          });

          const authorization = [];
          for(let i = 0;  i < user.roles.length; i++) {
              authorization.push(
                  "ROLE_" + user.roles[i].name.toUpperCase());
          }
          res.status(200).send({
              id: user._id,
              username: user.username,
              email: user.email,
              roles: authorization,
              accessToken: token,
          });
      });

  }
};
