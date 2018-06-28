'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Declaring Kill Schema
var KillSchema = new Schema({
    date : {
        type : Date
    },
    boat : {
        type : String
    },
    isLegend : {
        type : Boolean,
        default : false
    },
    isEmpty : {
        type : Boolean,
        default : true
    },
    createDate : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Kill', KillSchema);