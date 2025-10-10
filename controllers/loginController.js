// controllers/userController.js

const loginService = require('../services/loginService');

const users = [
  {
    id: 1,
    username: 'john',
    password: 'password123', // In production, hash passwords!
  }
];

loginUser = (req, res, next) => {
  const users = loginService.loginUser(req, res, next);
  res.json(users);
};

module.exports = { loginUser };