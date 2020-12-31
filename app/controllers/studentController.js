const {student, Student} = require('../models/Student');
const mongoose = require('mongoose');
mongoose.set("useFindAndModify", false);

module.exports = {
    addStudent: async(req, res) => {
       try {
        const {fullName, userName, address, status} = req.body;
        const data = {
            fullName, userName, address, status
        }
        
        const student = await Student.create(data)
        res.status(200).json({
            message: 'Success created student',
            data : student
        })

       } catch (error) {
           res.status(400).json({
               message: `error is ${error}`
           })
       }
    },
    getAllStudent : async(req, res) => {
        try {
            const student = await Student.find();
            res.status(200).json({
                message: 'View data student',
                data: student
            })

        } catch (error) {
            res.status(400).json({
                message: `Error is ${error}`
            })
        }

    } 
}