const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'kaloricketabulky'
});
 
connection.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected to db");
});
 
module.exports = connection;