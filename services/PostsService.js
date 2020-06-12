const { Posts } = require('../models/Posts');

module.exports = {
  create: (body) => {
    const newPost = new Posts(body);
    return newPost;
  },
};
