const mongoose = require("mongoose");
const moment = require("moment");
// import moment from 'moment';

const scheduleSchema = new mongoose.Schema({
    subjectId: {
        type: String,
        ref: 'subjects',
        required: true
    },
    time: [{
        date: {
            type: Date,
            required: true
        },
        start: {
            type:  Date,
            required: true
        },
        end: {
            type: Date,
            required: true
        }
    }],
   
    
});

const Schedule = new mongoose.model('schedules', scheduleSchema);
module.exports = {
    Schedule
}