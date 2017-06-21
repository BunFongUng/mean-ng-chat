var express = require('express');
var router = express.Router();
var http = require('http');
var io = require('socket.io')(server);
var chatController = require('../controllers/chat.controller');

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
router.get('/:room', chatController.getChatList);

router.post('/', chatController.createNewChatRoom);

module.exports = router;
