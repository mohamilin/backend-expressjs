const { YearAcademic } = require("../models/YearAcademic");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

module.exports = {
  addYear: async (req, res) => {
    try {
      const { yearName, semester } = req.body;
      const data = {
        yearName,
        semester,
      };
      const yearAcademic = await YearAcademic.create(data);
      res.status(201).json({
        message: "success created",
        data: yearAcademic,
      });
    } catch (error) {
      res.status(404).json({
        message: `not created and error in ${error}`,
      });
    }
  },
  getAllYear: async(req, res) => {
    try {
        const yearAcademic = await YearAcademic.find();
        if(yearAcademic){
            res.status(200).json({
                status: true,
                message: 'View data',
                data: yearAcademic
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
