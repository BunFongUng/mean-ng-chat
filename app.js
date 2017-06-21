var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mean-chat-ng4')
.then(function() {
  console.log('connection successfully');
})
.catch(function(err) {
  console.error(err);
});

var chat = require('./routes/chat');

// set middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static(path.join(__dirname, 'dist')));

//set chat routes
app.use('/chat', chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found!');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
