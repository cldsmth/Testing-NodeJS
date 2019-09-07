var router = require('express').Router();

router.get('/', function(req, res, next) {
  res.send('Hello admin GET API from TechBrij.com');
});
 
router.post('/', function(req, res, next) {
  res.send('Hello admin POST API from TechBrij.com');
});
 
module.exports = router;