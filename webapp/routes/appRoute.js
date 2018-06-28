'use strict';

module.exports = function(app){
    var kill = require('../controllers/killController')
    var indexCtrl = require('../controllers/indexController')

    app.route('/').get(indexCtrl.renderMainPage);

    app.route('/addKill').get(function(req, res){
        res.render('addKill')
    })
    app.route("/kill").post(kill.addKill);
}