'use strict';
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles',
  //multipleStatements: true //this is false by default in node mysql and so it makes sql injection impossible
});
connection.connect();

connection.query('SELECT author FROM articles', function (hiba, eredmeny) {
  if (hiba) {
    console.log(hiba); // show error if any and stop
    return;
  } else {
    console.log(eredmeny); // show result details
  };
});












//const id = '1; DROP TABLE articles;';

/*
connection.query('SELECT * FROM articles WHERE id = ' + connection.escape(id), function (err, result) {

  // connection.escape(variable) will prevent sql injection 100%
  // when you use ? placeholder for insert, no need to use .escape()

  if (err) {
    console.log(err); // show error if any and stop
    return;
  } else {
    console.log(result); // show result details
  }

}); */

