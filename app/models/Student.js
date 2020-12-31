const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true
    },
    userName: {
        type: String
    },
    // email: {
    //     type: String
    // },
    // password: {
    //     type: String
    // },
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