'use strict';
var functions = require('../../helpers/functions');

exports.check_email = function(req, res) {
    try{
        var email = req.body.email;
        if(!functions.isEmpty(email)){
            if(!functions.isNullOrWhiteSpace(email)){
                //result callback for function checkEmail
                functions.checkEmail(email).then(resolve => {
                    res.status(200).send({status: 200, message: 'E-mail '+email+' is valid', result: resolve});
                }).catch(reject => {
                    res.status(400).send({status: 400, message: 'Invalid e-mail format', result: reject});
                });
            }else{
                res.status(400).send({status: 400, message: email+' contains whitespace', result: false});
            }
        }else{
            res.status(400).send({status: 400, message: 'Please provide e-mail', result: false});
        }
    }catch(error){
        res.status(401).send({status: 401, message: error.toString()});
    }
};