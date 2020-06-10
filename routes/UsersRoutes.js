const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UsersValidator } = require('../validators');

router.post('/users',
  UsersValidator.create,
  UsersController.create);

router.get('/users',
  UsersController.findAll);

module.exports = router;
