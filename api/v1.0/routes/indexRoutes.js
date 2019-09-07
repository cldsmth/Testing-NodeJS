var router = require('express').Router();
 
router.get('/', function(req, res, next) {
  res.send('Hello v1.0 GET API from TechBrij.com');
});
 
router.post('/', function(req, res, next) {
  res.send('Hello v1.0 POST API from TechBrij.com');
});
 
module.exports = router;