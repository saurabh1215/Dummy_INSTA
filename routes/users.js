const mongoose = require('mongoose');
const plm= require("passport-local-mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/instaclone");
// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
    // unique: true,
  },
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
  },
  
  password: {
    type: String
  },
  
  profileImage: {
    type: String, // Assuming you store the URL or path to the user's profile picture
  },
  bio:String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post',
  }],
  
});


userSchema.plugin(plm);

// Create the User model
module.exports = mongoose.model('user', userSchema);


