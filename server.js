var express = require('express'),
  app = express(),
  port = process.env.PORT || 8183;

app.listen(port);

console.log("testing RESTful API server started on: " + port);