var router = require('express').Router();
 
router.use('/v1.0', require('./v1.0/routes/indexRoutes'));
router.use('/v2.0', require('./v2.0/routes/indexRoutes'));

module.exports = router;