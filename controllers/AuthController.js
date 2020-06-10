
const { UsersService } = require('../services');

module.exports = {
  register: (req, res) => {
    UsersService.create(req.body)
      .then((user) => {
        // eslint-disable-next-line no-param-reassign
        user.password = undefined;
        res.status(201).json(user);
      })
      .catch((err) => res.status(400).json(err));
  },
};
