//BACKEND

'use strict';

const express = require('express');
//const mysql = require('mysql');
//require('dotenv').config();
const path = require('path');
const app = express();
const PORT = 3000;

/* const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}); */


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// modules & middlewares & db conn
// write BELOW this line



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// write ABOVE this line
// EXPRESS conn check & MYSQL conn check

/* db.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('OK...MySQL connection established');
}); */

app.listen(PORT, () => {
  console.log(`OK...Express listening on ${PORT}`);
});
