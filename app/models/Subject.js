const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    classId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classes',
        required: true
    }],
    yearAcademicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'years',
        required: true
    },
    userId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }]
});

const School = new mongoose.model('schools', classSchema);
module.exports = {Schpol}