const express = require('express');
const routes = express.Router();
const _ = require('lodash');
const student = require("../models/Students");

routes.get("/student/:name", (req, res)=>{
    const link = req.params.name;

    Data.forEach((item)=>{
        if (_.lowerCase(link) === _.lowerCase(item.name)){
            student.findOne({email: Data.email}, (err, studentDetails)=>{
                if(!err){
                    res.render("/student/"+studentDetails.name, {dbdata:Data.email})
                    console.log(Data);

                }
            })
        }
    })
})
module.exports = routes