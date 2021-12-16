const express = require('express');
const routes = express.Router();
const staff = require("../models/StaffMembers");
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({extended: true}));
routes.get("/staff", (req,res)=>{
    staff.find({}, (err, foundItems)=>{
        if(err){
            console.log("error in staffs table")
        }else {
            res.render('staff', {tittle: "staff portal curly comps", dbdata: foundItems})
        }
    })
})

routes.post('/staff', (req, res)=>{
    const Email = req.body.email;
    const Password = req.body.password;

    // const staffMember = staff({
    //     name: Email,
    //     password: Password,
    //     position: "Staff"
    //
    // })
    //
    // staffMember.save()
    // console.log(staffMember)

    staff.findOne({email: Email}, (err, staffDetails)=>{
        if(!err){
            if (!staffDetails){
                res.redirect('/')
            }else {
                if(staffDetails.email === Email && staffDetails.password === Password){
                    res.redirect('/add');
                    console.log(staffDetails)
                }
            }
        }else{
            res.redirect('/')
        }
    })


})

module.exports = routes