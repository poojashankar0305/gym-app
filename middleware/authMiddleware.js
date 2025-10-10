const jwt = require('jsonwebtoken');

// Middleware factory that accepts allowed roles
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      // Assuming user info is in req.user (populated by previous auth middleware)
      const user = req.user;
      console.log(`user data -> ${JSON.stringify(user)}`);
  
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized: No user info' });
      }
  
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden: Access denied' });
      }
  
      next();
    };
  };

  function generateToken(user) {
    const payload = { id: user.id, username: user.username, role: user.role };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' });
  }

  function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
  
    if (!token) return res.status(401).json({ message: 'Token missing' });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });

      console.log(JSON.stringify(user));
      req.user = user; // attach user info to request
      next();
    });
  }
  
  module.exports = { authorizeRoles, authenticateToken, generateToken};
  