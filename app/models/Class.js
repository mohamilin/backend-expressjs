const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    nameClass: {
        type: String,
        required: true
    },
    yearAcademicId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'years',
        required: true
    }
});

const Class = new mongoose.model('schools', classSchema);
module.exports = {Class}