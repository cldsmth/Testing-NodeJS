var mysql = require('mysql');

var conn = mysql.createConnection({
	socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock', //path to mysql sock in MAMP
  	host: 'localhost',
 	user: 'root',
  	password: 'root',
  	database: 'testing_nodejs'
});

conn.connect(function(err) {
    if(err){
    	throw err;
    }
});

module.exports = conn;