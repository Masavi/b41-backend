const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    /*
        el objeto req.headers contiene adentro el atributo "authorization" y viene así:
        authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
          .eyJpZCI6IjVlZTAzNjIzMTJiN2FlNzM0YTkxMWNmYSIs
          ImVtYWlsIjoiZmVybmFuZG9AZ21haWwuY29tIiwiZmlyc
          3RfbmFtZSI6IkZlcm5hbmRvIiwiaWF0IjoxNTkxNzU2NDExfQ
          .QJkiOKOhZmyTq8m6lh8OpfYnGZLceqJtjr3YQoTcfVM'
    */
    try {
      const { authorization } = req.headers;
      // authorization.split(' '); // -> [ "Bearer", "eyJhbG..." ]
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.decoded = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Auth error', error });
    }
  },
};
