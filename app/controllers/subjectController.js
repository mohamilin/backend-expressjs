const { Subject } = require("../models/Subject");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  addSubject: async (req, res) => {
      try {
          const { subjectName, yearAcademicId, subjectDetail } = req.body;
          const data = {subjectName, yearAcademicId, subjectDetail};
          const subject = await Subject.create(data);
          res.status(200).json({
              message: 'Success add data subject',
              data: subject
          })
      } catch (error) {
          res.status(400).json({
              message: `Error is ${error}`
          })
      }
  },
  getAllSubject: async(req, res) => {
      try {
          const subject = await Subject.find()
          .populate({path: 'yearAcademicId subjectDetail', select: 'yearName', populate : {
              path: 'classId userId', select: 'className username'
          }});
          res.status(200).json({
              message: 'View data subject',
              data: subject
          })
      } catch (error) {
          res.status(400).json({
            message: `Error is ${error}`
          })
      }
  }
};
