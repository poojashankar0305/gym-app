const express = require('express');
const router = express.Router();
const superAdminController = require('../controllers/superAdminController');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/roles', authenticateToken, authorizeRoles('super-admin'), superAdminController.getAllRoles);

module.exports = router;