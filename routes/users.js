const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', userController.getUsers);

router.get('/admin-only', authorizeRoles('admin'), userController.getUsers);

router.get('/trainer-or-student', authorizeRoles('trainer', 'student'), userController.getUsers);

router.get('/all-roles', authorizeRoles('admin', 'client', 'trainer', 'student'), userController.getUsers);

module.exports = router;