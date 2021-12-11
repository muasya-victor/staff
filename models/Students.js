const mongoose = require('mongoose');
const {model} = require("mongoose");


const studentSchema = {
    name: String,
    email: String,
    course: String,
    password: String
}
const Student = mongoose.model("student", studentSchema);



module.exports = Student

