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

const Class = new mongoose.model('classes', classSchema);
module.exports = {Class}