const mongoose = require("mongoose");
const moment = require("moment");
// import moment from 'moment';

const scheduleSchema = new mongoose.Schema({
    subjectId: {
        type: String,
        required: true
    },
    time: [{
        date: {
            type: Date,
            required: true
        },
        start: {
            type: moment().format('LT'),
            required: true
        },
        end: {
            type: moment().format('LT'),
            required: true
        }
    }],
   
    
});

const Schedule = new mongoose.model('schedules', scheduleSchema);
module.exports = {
    Schedule
}