'use strict';
var response = require('../../helpers/response'),
    functions = require('../../helpers/functions'),
    model = require('../models/indexModel');

exports.check_email = function(req, res) {
    try{
        var email = req.body.email;
        if(!functions.isEmpty(email)){
            if(!functions.isNullOrWhiteSpace(email)){
                //result callback for function checkEmail
                functions.checkEmail(email).then(resolve => {
                    response.ok({email: email, result: resolve}, res);
                }).catch(reject => {
                    response.failure({status: 400, message: 'Invalid e-mail format', result: reject}, res);
                });
            }else{
                response.failure({status: 400, message: email+' contains whitespace', result: false}, res);
            }
        }else{
            response.failure({status: 400, message: 'Please provide e-mail', result: false}, res);
        }
    }catch(error){
        response.failure({status: 401, message: error.toString(), result: false}, res);
    }
};

exports.get_all = function(req, res) {
    try{
        model.getAll(null, function(errData, resData) {
            if(errData){
                response.failure({status: 401, message: errData.toString()}, res);
            }else{
                if(functions.isObjectEmpty(resData)){
                    response.failure({status: 400, message: 'No data'}, res);
                }else{
                    response.success(resData, res);
                }
            }
        })
    }catch(error){
        response.failure({status: 401, message: error.toString()}, res);
    }
}