const {School} = require("../models/School");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  addSchool: async (req, res) => {
    try {
      const { schoolName } = req.body;
      const data = {
        schoolName,
      };
      const school = await School.create(data);
      res.status(201).json({
        message: "success created",
        data: school,
      });
    } catch (error) {
      res.status(404).json({
        message: `not created and error in ${error}`,
      });
    }
  },
  getAllSchool: async(req, res) => {
    try {
        const school = await School.find();
        if(school){
            res.status(200).json({
                status: true,
                message: 'View data',
                data: school
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
