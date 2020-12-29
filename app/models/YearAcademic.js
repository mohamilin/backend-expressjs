const mongoose = require("mongoose");


const yearAcademicSchema = new mongoose.Schema({
    yearName : {
        type: String,
        required: true
    },
    semester : {
        type: String,
        enum: ['ganjil', 'genap'],
        default: 'ganjil'
    }
});

const YearAcademic = new mongoose.model('years', yearAcademicSchema);
module.exports ={yearAcademicSchema}