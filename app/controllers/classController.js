const {Class} = require("../models/Class");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  addClass: async (req, res) => {
    try {
      const { className, schoolId, yearAcademicId } = req.body;
      const data = {
        className, schoolId, yearAcademicId
      };
      const dataClass = await Class.create(data);
      res.status(201).json({
        message: "success created",
        data: dataClass,
      });
    } catch (error) {
      res.status(404).json({
        message: `not created and error in ${error}`,
      });
    }
  },
  getAllClass: async(req, res) => {
    try {
        const dataClass = await Class.find()
        .populate({path:"schoolId yearAcademic", select: "schoolName yearName semester"});
        // console.log('data', dataClass);
        if(dataClass){
            res.status(200).json({
                status: true,
                message: 'View data',
                data: dataClass
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
