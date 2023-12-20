const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
// Define the user schema
const postSchema = new mongoose.Schema({
  picture:String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  caption: String,
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }],
  
});




// Create the User model
module.exports = mongoose.model('post', postSchema);


