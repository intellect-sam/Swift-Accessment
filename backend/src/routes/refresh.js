const express = require('express');
const router = express.Router();
const refreshTokenController = require('../controllers/auth/refreshTokenContoller');

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;
