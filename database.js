const mysql = require('mysql2/promise');

// async function connectToDatabase() {
    const pool = mysql.createPool({
        host: 'localhost',
        port: 3307,
        user: 'root',
        password: '12345',
        database: 'amazon'
    });

    // return pool;
// }

module.exports = { pool };