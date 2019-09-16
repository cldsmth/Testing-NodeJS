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

exports.invalid = function(req, res) {
	var data = {
		'status': 400,
		'message': req.message,
		'result': req.result
	};
	res.json(data);
	res.end();
};