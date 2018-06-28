const express = require('express');
const app = express();
port = process.env.PORT || 3000;
var morgan = require("morgan");
var cors = require('cors');
var routes = require('./webapp/routes/appRoute')
var mongoose = require('mongoose')
//Importing configuration file
const config = require('./config')

//configuring database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

//views set up
app.set('views', './webapp/views')
app.set('view engine', 'ejs');

//Using Morgan package for dev
app.use(morgan('dev'));

//cors
app.use(cors());

//routes set up
routes(app);

//start server
app.listen(port);
console.log('server started on port : ' + port);