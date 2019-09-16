'use strict';
var response = require('../../helpers/response'),
    functions = require('../../helpers/functions');

exports.check_email = function(req, res) {
    try{
        var email = req.body.email;
        if(!functions.isEmpty(email)){
            if(!functions.isNullOrWhiteSpace(email)){
                //result callback for function checkEmail
                functions.checkEmail(email).then(resolve => {
                    response.ok({email: email, result: resolve}, res);
                }).catch(reject => {
                    response.invalid({status: 400, message: 'Invalid e-mail format', result: reject}, res);
                });
            }else{
                response.invalid({status: 400, message: email+' contains whitespace', result: false}, res);
            }
        }else{
            response.invalid({status: 400, message: 'Please provide e-mail', result: false}, res);
        }
    }catch(error){
        response.invalid({status: 401, message: error.toString(), result: false}, res);
    }
};