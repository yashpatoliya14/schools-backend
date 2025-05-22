const express = require('express');
const app = express();
const dotenv = require('dotenv')
const schoolRouter = require('./routes/schoolRoutes');
const db = require('./db');

dotenv.config()
const port = process.env.PORT;

app.use(express.json()); 
app.use(express.urlencoded()); 

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use("/api",schoolRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
