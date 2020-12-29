const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    nameSchool: {
        type: String,
        required: true
    }
});

const School = new mongoose.model('schools', schoolSchema);
module.exports = {School}