var express = require('express'),
  app = express(),
  port = process.env.PORT || 8183;

app.use('/api', require('./api/routes/indexRoutes')); //importing index route
app.listen(port);

console.log('testing RESTful API server started on: ' + port);