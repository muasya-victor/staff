const express = require('express')
const student = require("../models/Students");
const staff = require("../models/StaffMembers");
const routes = express.Router();
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({extended: true}));

routes.get("/", (req,res)=>{

    res.render('home', {tittle: "welcome to curly comps", page:"home page"})


})

routes.post('/', (req, res)=>{
    const Name = req.body.name;
    const Email = req.body.email;
    const Password = req.body.password;
    const Course = req.body.course;
    const Position = req.body.position;

    console.log(Name,Email, Password, Course, Position);

    const newStudent= new student({
        name: Name,
        email: Email,
        course: Course,
        password: Password
    })

    const newStaff= new staff({
        name : Name,
        // permissions: Number,
        email: Email,
        password: Password
    })

    if (Position === "Student"){
        newStudent.save()
    }else {
        newStaff.save()
    }
    res.redirect("/add");

})



module.exports = routes