// services/superAdminService.js

const roles = [
  {
    id: 1,
    role: 'super-admin'
  },
  {
    id: 2,
    role: 'admin'
  },
  {
    id: 3,
    role: 'trainer'
  },
  {
    id: 4,
    role: 'student'
  }
];

  
getAllRoles = (req, res, next) => {
  res.json({ roles });
};

module.exports = { getAllRoles };