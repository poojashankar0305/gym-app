// services/superAdminService.js
const { 
  createConnection
 } = require('../public/database/dbConnect');
  
 const { 
  tablenames
 } = require('../public/database/tableName');

getAllRoles = async (req, res, next) => {
  let connection = await createConnection();
  try{
    let rolesQuery = `SELECT * from ${tablenames.ROLES} r where isDeleted=0`;
    let [result] = await connection.query(rolesQuery);
    res.status(200).json({ status: 200, roles: result});
  }catch(error){
    console.log(error);
    res.status(500).json({status: 500, message: 'Something Went wrong. Please contact administrator'});  
  }finally{
    await connection.end();
    console.log(`connection ended succussfully`);
  }
};

module.exports = { getAllRoles };