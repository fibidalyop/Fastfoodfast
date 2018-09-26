'use strict';

var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 5000;

express().use(express.static(path.join(__dirname, 'public'))).set('views', path.join(__dirname, 'views')).set('view engine', 'ejs').get('/', function (req, res) {
  return res.render('pages/index');
}).listen(PORT, function () {
  return console.log('Listening on ' + PORT);
});