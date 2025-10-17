// controllers/userController.js

const userService = require('../services/userService');

getUsers = (req, res, next) => {
  userService.getAllUsers(req, res, next);
};

createUser = (req, res, next) => {
  userService.createUser(req, res, next);
};

module.exports = { getUsers, createUser };