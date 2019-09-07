var express = require('express');
var router = express.Router();
 
router.use('/v1.0', require('../v1.0/routes/indexRoutes'));
router.use('/v2.0', require('../v2.0/routes/indexRoutes'));

router.get('/', function(req, res, next) {
  res.send('Hello Index GET API from TechBrij.com');
});
 
router.post('/', function(req, res, next) {
  res.send('Hello Index POST API from TechBrij.com');
});
 
module.exports = router;