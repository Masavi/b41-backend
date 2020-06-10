const bcrypt = require('bcrypt');

module.exports = {
  comparePasswords: (loggedPassword, registerdPassword) => bcrypt
    .compare(loggedPassword, registerdPassword),
};
