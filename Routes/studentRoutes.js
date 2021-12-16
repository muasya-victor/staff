require('dotenv');
const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const student = require("../models/Students");
routes.use(bodyParser.urlencoded({extended: true}));


routes.get("/student", (req,res)=> {

    student.find({}, (err, Data)=>{
        if(!err){
            res.render('student', {tittle: "student portal curly comps", dbdata: Data})
        }
    })

})

// routes.post('/student', (req, res)=>{
//
//     const data = {
//         email :req.body.email,
//         password : req.body.password
//     }
//
//     student.findOne({email: data.email}, (err, studentDetails)=>{
//         if(!err){
//
//             Data.push(data)
//             res.redirect('/student/'+studentDetails.name)
//
//             console.log(Data);
//
//         }
//     })
//
//
// })


module.exports = routes