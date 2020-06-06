const { Users } = require('../models');

module.exports = {
  create: (req, res) => {
    const newUser = new Users(req.body);
    newUser.save()
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json(err));
  },
};
