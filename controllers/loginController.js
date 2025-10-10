// controllers/userController.js

const loginService = require('../services/loginService');

loginUser = (req, res, next) => {
  const users = loginService.loginUser(req, res, next);
  return users;
};

module.exports = { loginUser };