//require modules
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//initialize express
var app = express();
//set a database location variable
var dbUrl = 'mongodb://localhost/extinct-mammals';

//connecting to the mongo database
mongoose.connect(dbUrl);

//initialize body-parser
app.use(bodyParser());

console.log("server.js");

var api = require('./api');

app.get('/mammals', api.get);

app.post('/mammals', api.post);


//starting the server to listen on specified port
var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});


module.exports = app;