'use strict';
var functions = require('../../helpers/functions'),
    Product = require('../models/productModel');

exports.get_all = function(req, res) {
    try{
        Product.getAll(function(err, data) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            }else{
                functions.ArrayResponse(res, 200, "Data exist", data);
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};

exports.get_detail = function(req, res) {
    try{
        Product.getDetail(req.params.id, function(err, data) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            }else{
                functions.ArrayResponse(res, 200, "Data exist", data);
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};

exports.insert_data = function(req, res) {
    try{
        var new_product = new Product(req.body);
        if(!new_product.name || !new_product.price || !new_product.status){ //handles null error
            functions.BaseResponse(res, 400, "Please provide name/price/status");
        }else{
            Product.insert(new_product, function(err, data) {
                if(err){
                    functions.ArrayResponse(res, 400, "Error", err);
                }else{
                    functions.BaseResponse(res, 200, "Insert success");
                }
            });
        }
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};

exports.update_data = function(req, res) {
    try{
        Product.edit(req.params.id, new Product(req.body), function(err, data) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            }else{
                functions.BaseResponse(res, 200, "Update success");
            }
        });
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};

exports.delete_data = function(req, res) {
    try{
        Product.delete(req.params.id, function(err, data) {
            if(err){
                functions.ArrayResponse(res, 400, "Error", err);
            }else{
                functions.BaseResponse(res, 200, "Delete success");
            }
        })
    }catch(error){
        functions.BaseResponse(res, 400, error);
    }
};