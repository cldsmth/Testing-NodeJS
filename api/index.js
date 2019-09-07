'use strict';
var router = require('express').Router();
 
router.use('/', require('./routes/indexRoutes'));
router.use('/admin', require('./routes/adminRoutes'));

module.exports = router;