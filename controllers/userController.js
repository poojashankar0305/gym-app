// controllers/userController.js

const userService = require('../services/userService');

exports.getUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};