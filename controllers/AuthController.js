const { UsersService } = require('../services');
const { comparePasswords } = require('../utils');

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
  login: (req, res) => {
    const { email, password } = req.body;
    // 1) Comprobar que el correo existe
    UsersService.findOneByEmail(email)
      .then((user) => {
        if (!user) res.status(404).json({ message: 'Credentials Error' });
        return comparePasswords(password, user.password);
      })
    // 2) Comparamos la contraseña que llega con la contraseña que ya tenemos almacenada
      .then((isValidPassword) => {
        if (!isValidPassword) res.status(404).json({ message: 'Credentials Error' });
        return res.status(200).json({ loggedIn: isValidPassword });
      })
    // 3) Crear token con las credenciales del usuario
    // 4) Enviar token al cliente
      .catch((err) => res.status(400).json(err));
  },
};
