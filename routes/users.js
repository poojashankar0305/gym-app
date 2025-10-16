const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/list', authenticateToken, authorizeRoles('super-admin'), userController.getUsers);

module.exports = router;