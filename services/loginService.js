// services/userService.js

const { generateToken } = require('../middleware/authMiddleware');

const users = [
  {
    id: 1,
    username: 'john',
    password: 'password123', // In production, hash passwords!
  }
];

  
loginUser = (req, res, next) => {
  if (!req?.body) {
    return res.status(401).json({ message: 'Please provide valid credentials' });
  }
  const { username, password } = req?.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = generateToken(user);
  res.json({ token });
};

module.exports = { loginUser };