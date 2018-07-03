'use strict';

var mongoose = require('mongoose');
var kill = mongoose.model('Kill');

module.exports.addKill = function(req, res){
    let new_kill = new kill(req.body);
    if(req.body.isLegend == "on"){
        new_kill.isLegend = true;
    }else{
        new_kill.isLegend = false;
    }
    if(req.body.isEmpty == "on"){
        new_kill.isEmpty = true;
    }else{
        new_kill.isEmpty = false;
    }
    console.log(req.body);
    new_kill.save(function(err, kill){
        if(err){
            res.send(err);
        }
        console.log(kill);
        res.redirect("/");
    });
}