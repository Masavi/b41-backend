const express = require('express');
const { Users } = require('../models');

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => res.json({ message: 'Hello DEV.F' }));

// Users
api.post('/api/v1/users', (req, res) => {
  const newUser = new Users(req.body);
  newUser.save()
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(400).json(err));
});

module.exports = api;
