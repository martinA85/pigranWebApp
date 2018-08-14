'use strict';

var moment = require('moment');
var mongoose = require('mongoose');
var kill = mongoose.model('Kill');

module.exports.renderMainPage = function(req, res){
    kill.find({}, function(err, kills){
        if(err){
            res.send(err)
        }

        let killCount = kills.length
        let sloopKill = getSloopCount();
        let gallionKill = getGaleonCount();
        res.render('index', {
            killList : kills,
            killCounts : killCount,
            sloop : sloopKill,
            gallion : gallionKill,
            moment : moment,
        });
    })
}

function getSloopCount(){
    kill.find({boat:"Sloop"}, function(err, kills){
        if(err){
            return "error";
        }
        return kills
    })
}

function getGaleonCount(){
    kill.find({boat:"Gallion"}, function(err, kills){
        if(err){
            return "error";
        }
        return kills
    })
}