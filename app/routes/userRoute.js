const {authJwt} = require("../middleware");
const { allUserAccess, userAccess, moderatorAccess, adminAccess } = require("../controllers/userController");
const { viewUser } = require("../controllers/authController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
      app.get('/api/data/user', viewUser);
      app.get("/api/all", allUserAccess);

      app.get("/api/user", [authJwt.checkToken], userAccess);
    
      app.get(
        "/api/mod",
        [authJwt.checkToken, authJwt.checkModerator],
        moderatorAccess
      );
    
      app.get(
        "/api/admin",
        [authJwt.checkToken, authJwt.checkAdmin],
        adminAccess
      );
}