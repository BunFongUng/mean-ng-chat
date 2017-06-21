var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

try {
  mongoose.connect('mongodb://localhost/mean-chat-ng4');
} catch (error) {
  mongoose.createConnection('mongodb://localhost/mean-chat-ng4');
}

mongoose.connection
.once('open', function() {
  console.log('MongoDB running');
})
.on('error', function(err) {
  throw err;
});
