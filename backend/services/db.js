const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = mysql.createConnection(config.db);
    const [data] = await connection.execute(sql, params);
    return data;
}

module.exports = { query };
