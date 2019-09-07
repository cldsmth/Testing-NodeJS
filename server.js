var express = require('express'),
	app = express(),
  	port = process.env.PORT || 8183;

app.use('/api', require('./api')); //importing index api for web
app.use('/', require('./app')); //importing index api for mobile

app.listen(port);
console.log('testing RESTful API server started on: ' + port);

app.use(function(req, res) {
  res.status(404).send({status: 404, message: req.originalUrl + ' not found'});
});