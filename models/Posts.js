const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
  images: [{
    type: String,
  }],
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  tags: [{
    type: String,
  }],
});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = { Posts, PostsSchema };
