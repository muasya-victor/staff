require('dotenv').config();
//global modules
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const app = express();

//local mudules
const homeRoutes = require('./Routes/homeRoutes')
const staffRoutes = require('./Routes/staffRoutes');
const aboutRoutes = require('./Routes/aboutRoutes');
const studentRoutes = require('./Routes/studentRoutes');
const addRoute = require('./Routes/addRoute');
const delRoute = require('./Routes/delRoutes');
const studentPortalRoute = require("./Routes/studentPortalRoute");
let Data = [];



app.use(express.static('public'))
app.set('view engine', 'ejs');
console.log(process.env.SECRET);
//mongodb://localhost:27017/schoolDB
mongoose.connect(`mongodb+srv://victron:${process.env.SECRET}@cluster0.ef346.mongodb.net/CURLYCPMPSDB?retryWrites=true&w=majority`);


app.use(homeRoutes);
app.use(aboutRoutes);
app.use(staffRoutes);
app.use(studentRoutes);
app.use(addRoute);
app.use(delRoute);
app.use(studentPortalRoute);



app.listen( process.env.PORT|| 3000, ()=>{
    console.log("app started on port 3000");
})