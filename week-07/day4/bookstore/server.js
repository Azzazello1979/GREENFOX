'use strict';

const dotenv = require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const table_book_mast = 'book_mast';
const PORT = 3000;
app.use('/static', express.static('static'));
app.use(express.json());

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookinfo'
  //if this error: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
  //run: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
});
conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log('connection to DB is OK ✨');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.get('/alltitles', (req, res) => {
  
  conn.query(`SELECT book_name FROM ${table_book_mast};`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    };
    console.log('data successfully requested from DB');
    res.send(result);
    //res.json(result);
  });
});

app.get('/allbooks', (req, res) => {
  
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ${table_book_mast}
    JOIN category ON book_mast.cate_id = category.cate_id
    JOIN author ON book_mast.aut_id = author.aut_id
    JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, (err, result) => {
    if (err) {
      console.log(err.toString());
      return;
    };
    console.log('data successfully requested from DB');
    res.send(result);
    //res.json(result);
  });
});

app.listen(PORT, () => {console.log(`Server is up and running on port ${PORT} 🔥`);});