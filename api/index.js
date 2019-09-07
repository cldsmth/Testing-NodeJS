var router = require('express').Router();
 
router.use('/', require('./routes/indexRoutes'));

module.exports = router;