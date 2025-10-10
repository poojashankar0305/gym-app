// services/userService.js

const { generateToken } = require('../middleware/authMiddleware');
const { 
  LOGIN_INVALID_CREDENTIALS,
  LOGIN_NO_CREDENTIALS,
  LOGIN_SUCCESS_MSG
 } = require('../public/constants/APP_MESSAGES');

const users = [
  {
    id: 1,
    role: 'super-admin',
    firstName: 'Pooja',
    lastName: 'Shankar',
    email: 'pooja@test.com',
    username: 'pooja',
    password: 'password123', // In production, hash passwords!
  }
];

  
loginUser = (req, res, next) => {
  console.log(JSON.stringify(req.body));
  if (!req.body.username) {
    return res.status(401).json({ message: LOGIN_NO_CREDENTIALS });
  }
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: LOGIN_INVALID_CREDENTIALS });
  delete user.password;
  const expiresIn = 15 * 60;
  const token = generateToken(user);
  res.json({ token, expiresIn, user });
};

module.exports = { loginUser };