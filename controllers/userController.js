// controllers/userController.js

const userService = require('../services/userService');

exports.getUsers = (req, res, next) => {
  const users = userService.getAllUsers(req, res, next);
};