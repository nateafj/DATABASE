const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const corsOption = require('./corsOptions')


const app = express();
const port = 3002;
app.use(cors(corsOption))

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecom",
});

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

app.get('/products', function (req, res) {
  let selectQuery = "SELECT * FROM ecom";

  connection.query(selectQuery, function (err, results, fields) {
    if (err) {
      console.log(err.message);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
