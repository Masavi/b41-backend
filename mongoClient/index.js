/* eslint-disable no-console */
const mongoose = require('mongoose');
// process.env.MI_VARIABLE_DE_ENTORNO -> Así accedemos a variables de entorno

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));
