const express = require('express');
const routes = express.Router();
const staff = require("../models/StaffMembers");
const student = require("../models/Students");
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({extended: true}));

routes.get('/del', (req, res)=>{
    res.render('remove', {details: req.body.email})
})

routes.post('/del', (req, res)=>{
    const mail = req.body.email;
    const position = req.body.position;
    console.log(mail);

    if (position === "Student") {
        student.deleteOne({email : mail}, (err=>{
            if (err){
                console.log(err)
            }else{
                console.log("del success")
            }

        }))
    }else {
        staff.deleteOne({email : mail}, (err=>{
            if (err){
                console.log(err)
            }else{
                console.log("del success")
            }
        }))

    }
    console.log(position)
    res.redirect('ict/del')

})

module.exports = routes