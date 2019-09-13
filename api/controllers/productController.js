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

exports.get_detail = function(req, res) {
    try{
        conn.query('SELECT * FROM product WHERE product_id = ?', [req.params.id], function(err, rows, fields) {
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

exports.insert_data = function(req, res) {
    try{
        var name = req.body.name;
        var price = req.body.price;
        conn.query('INSERT INTO product (product_name, product_price) values (?, ?)', [name, price], function(err, rows, fields) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            } else{
                functions.BaseResponse(res, 200, "Insert success");
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};

exports.update_data = function(req, res) {
    try{
        var id = req.body.id;
        var name = req.body.name;
        var price = req.body.price;
        conn.query('UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?', [name, price, id], function(err, rows, fields) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            } else{
                functions.BaseResponse(res, 200, "Update success");
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};

exports.delete_data = function(req, res) {
    try{
        conn.query('DELETE FROM product WHERE product_id = ?', [req.params.id], function(err, rows, fields) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            }else{
                functions.BaseResponse(res, 200, "Delete success");
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};