// const express = require("express");
// const app = express();
// const router = express.Router();
// const { register, login } = require("../controllers/authController");
// const { verifyRegister } = require("../middleware");

// router.post(
//     "/register",
//     [verifyRegister.checkUserNameOrEmail, verifyRegister.checkRole],
//     register
// );
// router.post("/login", login);
// module.exports = router;

// versi lain

const { register, login } = require("../controllers/authController");
const { verifyRegister } = require("../middleware");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.post(
      "/api/register",
      [
        verifyRegister.checkUserNameOrEmail,
        verifyRegister.checkRole
      ],
      register
    );
  
    app.post("/api/login", login);
  };
  