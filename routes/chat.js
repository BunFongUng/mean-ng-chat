var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var chatController = require('../controllers/chat.controller');

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
