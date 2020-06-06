const express = require('express');

const router = express.Router();
const { Users } = require('../models');

router.post('/api/v1/users', (req, res) => {
  const newUser = new Users(req.body);
  newUser.save()
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
