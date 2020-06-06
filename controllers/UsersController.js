const { UsersService } = require('../services');

module.exports = {
  create: (req, res) => {
    UsersService.create(req.body)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json(err));
  },
};
