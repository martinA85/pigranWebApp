'use strict';

var mongoose = require('mongoose');
var kill = mongoose.model('Kill');
module.exports.addKill = function(req, res){
    let new_kill = new kill(req.body);
    console.log(req.body.isEmpty);
    console.log(req.body.isLegend);
    console.log(req.body.victory);
    if(req.body.isEmpty == "on"){
        new_kill.isEmpty = true;
    }else{
        new_kill.isEmpty = false;
    }
    if(req.body.isLegend == "on"){
        new_kill.isLegend = true;
    }else{
        new_kill.isLegend = false;
    }
    if(req.body.victory == "on"){
        new_kill.victory = true;
    }else{
        new_kill.victory = false;
    }
    new_kill.save(function(err, kill){
        if(err){
            res.send(err);
        }
        res.redirect("/");
    });
}