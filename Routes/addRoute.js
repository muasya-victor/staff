const express = require('express');
const {response} = require("express");
const routes = express.Router();


routes.get('/add', (req, res)=>{

    res.render('add');

})


module.exports = routes