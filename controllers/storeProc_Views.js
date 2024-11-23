const database = require('../database');

const db = database.pool;


async function executeStoredProcedure(procedureName, params) {
  

  try {
      // Use CALL keyword to execute stored procedure
      const [rows] = await db.query(`CALL ${procedureName}(?)`, params);
      
      // MySQL returns results in a nested array, so we need to access the first set of results
      return rows[0];
  } catch (error) {
      console.error('Error executing stored procedure:', error);
      throw error;
  } 
}


  async function queryView(viewName) {
    
  
    try {
      const [rows, fields] = await db.execute(`SELECT * FROM ${viewName}`);
      
      return rows;
    } catch (error) {
      console.error('Error querying view:', error);
      throw error;
    } 
  }

module.exports = { executeStoredProcedure, queryView };