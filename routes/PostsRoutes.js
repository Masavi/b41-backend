const express = require('express');

const router = express.Router();

const { PostsController } = require('../controllers');
const { PostsValidator } = require('../validators');

router.post('/users/:id/posts',
  PostsValidator.create,
  PostsController.create);

module.exports = router;
