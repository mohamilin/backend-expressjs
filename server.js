const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());     //parse request of content-type -application/json
app.use(bodyParser.urlencoded(  //parse request of content-type -application/x-www-form-urlencoded 
    {extended : true}));

//route welcome
app.get("/", (req, res) => {
    res.json({
        message : "welcome to amilin's server"
    });
});

//setting port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


