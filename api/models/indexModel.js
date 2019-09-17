'use strict';
var conn = require('../../helpers/connection'),
    table = 'product';

module.exports = {
    getAll: function(req, callback){
        var column = [
            'pro.id', 
            'pro.name', 
            'pro.price', 
            conn.knex.raw(`CASE WHEN pro.status = 1
                THEN 'Publish'
                WHEN pro.status = 2
                THEN 'Deleted'
                ELSE 'Not Publish'
                END as status
            `),
            'pro.created_at',
            'cat.id as category_id', 
            'cat.name as category_name', 
            'col.id as color_id', 
            'col.name as color_name'
        ]
        return conn.knex(table + ' as pro')
            .select(column)
            .leftJoin('category as cat', 'cat.id', '=', 'pro.category_id')
            .leftJoin('color as col', 'col.id', '=', 'pro.color_id')
            .where({status: 1})
            .andWhere('pro.price', '>', 3000)
            .orderBy('pro.created_at', 'desc')
            .limit(5)
            .then(datas => {
                callback(null, datas)
            }).catch(function(error){ 
                callback(error, null)
            });
    }
}