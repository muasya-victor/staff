const express = require('express');
const routes = express.Router();

routes.get("/about", (req,res)=>{

    res.render('about', {tittle: "about curly comps"})

});

module.exports = routes