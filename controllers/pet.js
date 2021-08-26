//jshint esversion: 6
const express = require("express");
const petRouter = express.Router();
const Thing = require("../models/thing.js");

petRouter.post('/add', (req,res) => {
    Thing.create(req.body, (err, newThing) => {
        res.redirect('/');
    });
})

 
module.exports = petRouter;