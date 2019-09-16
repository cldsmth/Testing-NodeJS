'use strict';
const exec = require('../../helpers/connection'),
    table = 'product';

module.exports = {
    getAll: function(req, callback){
        return exec.knex(table)
            .select('*')
            .orderBy('created_at', 'DESC')
            .then(datas => {
                callback(null, datas)
            }).catch(function(error){ 
                callback(error, null)
            });
    }
}