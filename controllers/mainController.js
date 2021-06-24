const { Body } = require('node-fetch');
const data = require('../models/data.json');
const { validationResult } = require('express-validator');

exports.renderer=(req, res, next) => {res.render('pages/home')}
exports.serveData=(req, res, next) => {res.json(data);}
exports.updateData=async (req, res, next) => {
    if(validationResult(req).isEmpty()){
        let member={
            name:req.body.name,
            power:req.body.power,
            age: req.body.age    
        }

        let i=data.avengers.findIndex((a)=>a.name===req.body.name);
        if (i>=0)
            data.avengers[i]=member;
        else
            data.avengers.push(member);
        res.sendStatus(200);
    }
    else {
        console.log("failed validation");
        res.sendStatus(400);
    }
}