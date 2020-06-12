/* eslint-disable no-console */
const mongoose = require('mongoose');
// process.env.MI_VARIABLE_DE_ENTORNO -> Así accedemos a variables de entorno
const { MONGO_URI } = require('../config');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));
