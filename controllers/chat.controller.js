var Chat = require('../models/Chat');

var chatController = {
  getChatList: function (req, res, next) {
    Chat.find({ room: req.params.room }, function (err, chats) {
      if (err) {
        return next(err);
      }

      res.json({
        data: chats
      });
    });
  },
  createNewChatRoom: function (req, res, next) {
    Chat.create(req.body, function (err, chat) {
      if (err) {
        return next(err);
      }

      res.json(chat);
    });
  }
};

module.exports = chatController;
