const mysql = require('mysql');
const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '123456',
  database: 'apptest'
})
connect.connect();
connect.query('select * from user_seeker', (err, res) => {
  if (err) {
    console.log('query error', err)
    return 
  } else {
    console.log('connect successful!')
  }
})
module.exports.sql = connect