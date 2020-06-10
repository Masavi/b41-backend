const express = require('express');

const router = express.Router();

// Routes
router.use(require('./UsersRoutes'));

module.exports = router;
