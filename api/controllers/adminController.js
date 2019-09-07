'use strict';
var request = require('request');

exports.get_detail = function(req, res){
	try{
        var adminProfileURL = 'https://api.github.com/users/narenaryan';
        var adminProfile = getProfile(adminProfileURL);
        //Get user details after that get followers from URL
        adminProfile.then(resolve => {
            var adminDetails = resolve;
            //Do one more async operation here
            var myFollowers = getProfile(adminDetails.followers_url);
            return myFollowers;
        }).then(result => {
            res.status(200).send({status: 200, message: 'Data exist', data: result});
        }).catch(reject => {
			res.status(400).send({status: 400, message: reject.toString()});
		});
	}catch(error){
		res.status(400).send({status: 400, message: error.toString()});
	}
};

function getProfile(url){
	//Setting URL and headers for request
    var options = {
        url: url,
        headers: {
            'User-Agent': 'request'
        }
    };
    //Return new promise 
    return new Promise(function(resolve, reject){
    	//Do async job
        request.get(options, function(err, resp, body){
            if(err){
            	reject(err);
            }else{
        		resolve(JSON.parse(body));
            }
        })
    })
}