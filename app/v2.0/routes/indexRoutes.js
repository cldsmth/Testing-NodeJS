'use strict';
var router = require('express').Router();
 
router.get('/', function(req, res, next) {
  res.send('Hello v2.0 GET API from TechBrij.com');
});
 
router.post('/', function(req, res, next) {
  res.send('Hello v2.0 POST API from TechBrij.com');
});
 
module.exports = router;