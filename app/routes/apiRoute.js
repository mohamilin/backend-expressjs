
const { addSchool, getAllSchool } = require("../controllers/schoolController");
const { addClass, getAllClass } = require("../controllers/classController");
const { addYear, getAllYear } = require("../controllers/yearAcademicController");
const { authJwt } = require("../middleware");
const { getAllClassDetail, addClassDetail } = require("../controllers/classDetailController");
const { addStudent, getAllStudent } = require("../controllers/studentController");
const { addSubject, getAllSubject } = require("../controllers/subjectController");
const { addSchedule, getAllSchedule } = require("../controllers/scheduleController");
const { addAttendence, getAllAttendence } = require("../controllers/attendenceController");

module.exports = function(app) {
    app.post('/add-year',  addYear);
    app.get('/year-academic', getAllYear);


    app.post('/add-school' , addSchool);
    app.get('/school', getAllSchool);

    app.post('/add-class', addClass );
    app.get('/class', getAllClass)

    app.post('/add-class-detail', addClassDetail);
    app.get('/class-detail', getAllClassDetail);

    app.post('/add-student', addStudent);
    app.get('/student', getAllStudent);

    app.post('/add-subject', addSubject);
    app.get('/subject', getAllSubject);

    app.post('/add-schedule', addSchedule);
    app.get('/schedule', getAllSchedule);

    app.post('/add-attendence', addAttendence);
    app.get('/attendence', getAllAttendence);
}