const mysql = require('mysql2')
const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'a1533806756',
	database: 'demo_db',
})
const statement = 'INSERT INTO test_products SET ?;'
const phoneJSON = require('./phone.json')

for(let phone of phoneJSON){
  connection.query(statement,phone)
}