var express = require('express');
var http = require('http');
var router = express.Router();
var mongoose = require('mongoose');
var io = require('socket.io')(server);
var Chat = require('../models/Chat');

var app = express();
var server = http.createServer(app);


server.listen(4000);

//socket io
io.on('connection', function(socket) {
  console.log('User connected');

  socket.on('disconnect', function() {
    console.log('User disconnected');
  });

  socket.on('save-message', function(data) {
    console.log('message: ', data);
    io.emit('new-message', {
      message: data
    });
  });
});

// GET ALL CHATS
router.get('/:room', function(req, res, next) {
  Chat.find({ room: req.params.room }, function(err, chats) {
    if(err) {
      return next(err);
    }

    res.json({
      data: chats
    });
  });
});

router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

module.exports = router;
