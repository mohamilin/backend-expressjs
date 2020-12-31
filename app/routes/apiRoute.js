
const { addSchool, getAllSchool } = require("../controllers/schoolController");
const { addClass, getAllClass } = require("../controllers/classController");
const { addYear, getAllYear } = require("../controllers/yearAcademicController");
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.post('/add-year',  addYear);
    app.get('/year-academic', getAllYear);


    app.post('/add-school' , addSchool);
    app.get('/school', getAllSchool);

    app.post('/add-class', addClass );
    app.get('/class', getAllClass)

}