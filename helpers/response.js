'use strict';
exports.ok = function(req, res) {
	var data = {
		'status': 200,
		'message': 'E-mail '+req.email+' is valid',
		'result': req.result
	};
	res.json(data);
	res.end();
};

exports.success = function(req, res) {
	var data = {
		'status': 200,
		'message': 'Data exist',
		'data': req
	};
	res.json(data);
	res.end();
};

exports.failure = function(req, res) {
	res.json(req);
	res.end();
};