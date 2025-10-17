const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/list', authenticateToken, authorizeRoles('super-admin'), userController.getUsers);

router.get('/create', authenticateToken, authorizeRoles('super-admin'), userController.createUser);

module.exports = router;