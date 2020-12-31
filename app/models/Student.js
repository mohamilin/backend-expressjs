const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'out', 'alumnin'],
        default: 'active'
    }
});

const Student = new mongoose.model('students', studentSchema);
module.exports = {Student}