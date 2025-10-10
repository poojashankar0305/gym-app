const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/roles', authenticateToken, userController.getUsers);

module.exports = router;