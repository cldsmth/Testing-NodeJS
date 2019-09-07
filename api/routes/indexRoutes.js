var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('Hello index GET API from TechBrij.com');
});
 
router.post('/', function(req, res, next) {
  res.send('Hello index POST API from TechBrij.com');
});
 
module.exports = router;