const { Schedule } = require("../models/Schedule");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const moment = require('moment');

module.exports = {
  addSchedule: async (req, res) => {
    try {
      const { subjectId, time } = req.body;
      const data = { subjectId, time };
      const schedule = await Schedule.create(data);
      res.status(200).json({
          message: 'Success created data schedule',
          data: schedule
      })
    } catch (error) {
        res.status(400).json({
            message : `Error is ${error}`
        })
    }
  },
  getAllSchedule : async(req, res) => {
    try {
        const schedule = await Schedule.find()
        .populate({path:'subjectId', select: 'subjectName'})
        console.log('jadwal', schedule)
        res.status(200).json({
            message: 'success',
            data: schedule
        })
    } catch (error) {
        res.status(400).json({
            message : `Error is ${error}`
        })
    }

  }
};
