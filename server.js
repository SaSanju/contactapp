var express = require('express');
var app = express();
// var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));

app.listen(3000);
console.log("App listening on port 3000");