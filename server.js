require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
// const fs = require("fs");
// let dbUser = fs.readFileSync(process.env.DB_USERNAME);
// let dbPassword = fs.readFileSync(process.env.DB_PASSWORD);

const Role = db.role;

// const authRouter = require("./app/routes/authRoute");
const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(bodyParser.json()); //parse request of content-type -application/json
app.use(
  bodyParser.urlencoded(
    //parse request of content-type -application/x-www-form-urlencoded
    { extended: true }
  )
);

// connect to mongoDB
db.mongoose
  .connect("process.env.DB_PROJECT", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log("Success connect MongoDB");
    initial();
  })
  .catch((err) => {
    console.error("Connection erro", err);
    process.exit();
  });

//route welcome
app.get("/", (req, res) => {
  res.json({
    message: "welcome to amilin's server",
  });
});

//setting port
// list of router
// app.use("/api", authRouter);
require("./app/routes/authRoute")(app);
require("./app/routes/userRoute")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// functions

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
