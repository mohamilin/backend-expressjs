const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    classId: {
        type: String,
        required: true
    },
    studentId : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: true
    }],
    homeRoomTeacher: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }]
});

const ClassDetail = new mongoose.model('classdetails', classSchema);
module.exports = {ClassDetail}