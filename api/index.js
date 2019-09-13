'use strict';
var router = require('express').Router();
 
router.use('/', require('./routes/indexRoutes'));
router.use('/admin', require('./routes/adminRoutes'));
router.use('/product', require('./routes/productRoutes'));

module.exports = router;