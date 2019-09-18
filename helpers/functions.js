'use strict';
module.exports.isObjectEmpty = function(data) {
    return Object.keys(data).length === 0 ? true : false;
}

module.exports.isEmpty = function(str) {
	return typeof str == "string" && !str.trim() || typeof str == "undefined" || str === null;
}

module.exports.isNullOrWhiteSpace = function(str) {
    return (!str || str.length === 0 || /\s/.test(str));
}

module.exports.checkEmail = function(email) {
	//return new promise 
    return new Promise(function(resolve, reject){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //do async check email
        if(email.match(mailformat)){
            resolve(true);
        }else{
            reject(false)
        }
    });
}