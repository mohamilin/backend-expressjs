const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    yearAcademicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'years',
        required: true
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schools',
        required: true
    }
});

const Class = new mongoose.model('classes', classSchema);
module.exports = {Class}