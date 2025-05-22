const dotenv = require('dotenv')
dotenv.config()
const mysql = require('mysql2');


// MySQL connection
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});


module.exports = db