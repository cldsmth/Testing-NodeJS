'use strict';
const knex = require('knex')({
    client: 'mysql',
    connection: {
    	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock', //path to mysql sock in MAMP
	    host: 'localhost',
	    user: 'root',
	    password: 'root',
	    database: 'testing_nodejs'
    }
});

module.exports = {
    knex
}