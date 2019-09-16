'use strict';
const exec = require('../../helpers/connection'),
    table = 'product';

module.exports = {
    getAll: function(req, callback){
        var column = [
            'product.id', 
            'product.name', 
            'product.price', 
            exec.knex.raw(`CASE WHEN product.status = 1
                THEN 'Publish'
                WHEN product.status = '2'
                THEN 'Deleted'
                ELSE 'Not Publish'
                END as status
            `),
            'product.created_at',
            'category.id as category_id', 
            'category.name as category_name', 
            'color.id as color_id', 
            'color.name as color_name'
        ]
        return exec.knex(table + ' as product')
            .select(column)
            .leftJoin('category as category', 'category.id', '=', 'product.category_id')
            .leftJoin('color as color', 'color.id', '=', 'product.color_id')
            .where({status: 1})
            .andWhere('product.price', '>', 3000)
            .orderBy('product.created_at', 'desc')
            .limit(5)
            .then(datas => {
                callback(null, datas)
            }).catch(function(error){ 
                callback(error, null)
            });
    }
}