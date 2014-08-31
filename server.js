var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect('mongodb://localhost/test');
//configuration ===============

//config files

var db = require('./config/db');



var port = process.env.PORT || 9000; // Port set-up


var router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); //parse application/json as json
app.use(bodyParser.json({type:'application/vnd.api+json'})); //parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));





//routes ============
require('./app/routes')(app);



//start app =========

app.listen(port);
console.log('Listening to port' +port);
exports = module.exports = app;

