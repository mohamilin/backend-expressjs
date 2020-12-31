const {ClassDetail} = require("../models/ClassDetail");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  addClassDetail: async (req, res) => {
    try {
      const { classId, studentId, homeRoomTeacher } = req.body;
      const data = {
        classId, studentId, homeRoomTeacher
      };
      const dataClassDetail = await ClassDetail.create(data);
      res.status(201).json({
        message: "success created",
        data: dataClassDetail,
      });
    } catch (error) {
      res.status(404).json({
        message: `not created and error in ${error}`,
      });
    }
  },
  getAllClassDetail: async(req, res) => {
    try {
        const dataClassDetail = await ClassDetail.find()
        .populate({path:"classId, studentId, homeRoomTeacher", select: "className fullName username"});
        // console.log('data', dataClass);
        if(dataClassDetail){
            res.status(200).json({
                status: true,
                message: 'View data',
                data: dataClassDetail
            })
        } else {
            res.status(404).json({
                status: false,
                message: 'Data not found'
            })
        }
    } catch (error) {
        res.status(400).json({
            message: `Error is ${error}`
        })
    }
  },
};
