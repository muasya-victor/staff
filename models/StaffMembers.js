const mongoose = require('mongoose')

const staffSchema = {
    name : String,
    // permissions: Number,
    email: String,
    password: String
}


const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff