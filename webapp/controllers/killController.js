'use strict';

var mongoose = require('mongoose');
var kill = mongoose.model('Kill');

module.exports.addKill = function(req, res){
    let new_kill = new kill(req.body);
    console.log(req.body);
    new_kill.save(function(err, kill){
        if(err){
            res.send(err);
        }
        console.log(kill);
        res.json(kill);
    });
}