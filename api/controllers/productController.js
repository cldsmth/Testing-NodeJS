'use strict';
var functions = require('../../helpers/functions'),
    conn = require('../../helpers/connection');

exports.get_all = function(req, res) {
    try{
        conn.query('SELECT * FROM product', function(err, rows, fields) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            }else{
                functions.ArrayResponse(res, 200, "Data exist", rows);
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};