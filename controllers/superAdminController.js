// controllers/superAdminController.js

const superAdminService = require('../services/superAdminService');

getAllRoles = (req, res, next) => {
  const roles = superAdminService.getAllRoles(req, res, next);
  // return roles;
};

module.exports = { getAllRoles };