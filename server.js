const express = require('express');
const app = express();
port = process.env.PORT || 3000;
var morgan = require("morgan");
var cors = require('cors');
var routes = require('./webapp/routes/appRoute')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
//Importing configuration file
const config = require('./config')
//Importing models
var kill = require('./webapp/models/killModel')

//configuring database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

//views set up
app.set('views', './webapp/views')
app.set('view engine', 'ejs');

//Using Morgan package for dev
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
app.use(cors());

//routes set up
routes(app);

//start server
app.listen(port);
console.log('server started on port : ' + port);