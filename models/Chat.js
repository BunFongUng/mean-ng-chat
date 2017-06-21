var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
  room: string,
  nickname: string,
  message: string,
  updated_at:{
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Chat', ChatSchema);
