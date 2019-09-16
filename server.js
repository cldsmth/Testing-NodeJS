var express = require('express'),
	app = express(),
  	port = process.env.PORT || 8183,
  	bodyParser = require('body-parser'),
  	cors = require('cors');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); //for parsing application/xwww-form-urlencoded
app.use(cors()); //cross origin

app.use('/api', require('./api')); //importing index api for web

app.listen(port);
console.log('testing RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({status: 404, message: req.originalUrl + ' not found'});
});