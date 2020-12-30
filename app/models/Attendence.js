const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    scheduleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
   
    status: {
        type: String,
        enum: [null,'H', 'I', 'A', 'C', 'D'],
        default: null
    }
   
    
});

const Schedule = new mongoose.model('schedules', scheduleSchema);
module.exports = {
    Schedule
}