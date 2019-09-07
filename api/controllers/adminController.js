'use strict';
var request = require('request');

exports.get_detail = function(req, res){
	try{
		var adminProfile = getProfile();
		adminProfile.then(resolve => {
			var adminDetails = resolve;
			res.status(200).send({status: 200, message: 'Data exist', data: adminDetails});
		}).catch(reject => {
			res.status(400).send({status: 400, message: reject.toString()});
		});
	}catch(error){
		res.status(400).send({status: 400, message: error.toString()});
	}
};

function getProfile(){
	//setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    //return new promise 
    return new Promise(function(resolve, reject){
    	//do async job
        request.get(options, function(err, resp, body){
            if(err){
            	reject(err);
            }else{
        		resolve(JSON.parse(body));
            }
        })
    })
}