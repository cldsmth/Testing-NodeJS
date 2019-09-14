'use strict';
var conn = require('../../helpers/connection');
var table = 'product';

//object constructor
var Product = function(product) {
    this.name = product.name;
    this.price = product.price;
    this.status = product.status;
    this.created_at = new Date();
};

Product.getAll = function(result) {
	var sql = "SELECT * FROM " + table;
    conn.query(sql, function(err, res) {
        if(err){
            result(err, null);
        }else{  
         	result(null, res);
        }
    });
};

Product.getDetail = function(productId, result) {
	var sql = "SELECT * FROM "+table+" WHERE id = ?";
    conn.query(sql, productId, function(err, res) {             
        if(err){
            result(err, null);
        }else{
            result(null, res[0]);
        }
    });
};

Product.insert = function(newProduct, result) {
	var sql = "INSERT INTO "+table+" SET ?";
    conn.query(sql, newProduct, function(err, res) {   
        if(err){
            result(err, null);
        }else{
            result(null, res.insertId);
        }
    });
};

Product.edit = function(id, product, result) {
	var sql = "UPDATE "+table+" SET name = ?, price = ?, status = ? WHERE id = ?";
  	conn.query(sql, [product.name, product.price, product.status, id], function(err, res) {
      	if(err){
            result(err, null);
        }else{
         	result(null, res);
        }
	});
};

Product.delete = function(id, result) {
	var sql = "DELETE FROM "+table+" WHERE id = ?";
    conn.query(sql, [id], function(err, res) {
        if(err){
            result(err, null);
        }else{
         	result(null, res);
        }
    });
};

module.exports = Product;