const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    
});

const Student = new mongoose.model('students', studentSchema);
module.exports = {Student}