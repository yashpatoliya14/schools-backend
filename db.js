const dotenv = require('dotenv')
dotenv.config()
const mysql = require('mysql2');


// MySQL connection
const db = mysql.createConnection(process.env.DATABASE_URL);


module.exports = db