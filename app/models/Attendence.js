const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema({
    nameAttendence: [{
        scheduleId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },

        status: {
            type: String,
            enum: [null,'H', 'I', 'A', 'C', 'D'],
            default: null
        }
    }]
});

// const attendenceSchema = new mongoose.Schema([
//   {
//     scheduleId: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//     },

//     status: {
//       type: String,
//       enum: [null, "H", "I", "A", "C", "D"],
//       default: null,
//     },
//   },
// ]);

const Attendence = new mongoose.model("attendences", attendenceSchema);
module.exports = {
  Attendence,
};
