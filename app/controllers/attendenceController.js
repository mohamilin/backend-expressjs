const { Attendence } = require("../models/Attendence");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  addAttendence: async (req, res) => {
    try {
      const { nameAttendence } = req.body;
      const data = {
        nameAttendence,
      };
      const attendance = await Attendence.create(data);
      res.status(201).json({
        message: "success created",
        data: attendance,
      });
    } catch (error) {
      res.status(404).json({
        message: `not created and error in ${error}`,
      });
    }
  },
  getAllAttendence: async (req, res) => {
    try {
      const attendence = await Attendence.find().populate({
        path: "nameAttendence",
        select: "",
        populate: {
          path: "scheduleId",
          select: "subjectId time ",
          populate: {
            path: "subjectId",
            select: "subjectName yearAcademicId subjectDetail",
            populate: {
                path: 'subjectDetail',
                select: 'classId userId',
                populate: {
                    path: 'classId userId',
                    select: 'className username'
                }
            }
          },
        },
      });
      res.status(200).json({
        message: "View data attendence",
        data: attendence,
      });
    } catch (error) {
      res.status(404).json({
        message: `not created and error in ${error}`,
      });
    }
  },
};
