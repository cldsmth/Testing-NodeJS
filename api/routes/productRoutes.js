'use strict';
var router = require('express').Router(),
	product = require('../controllers/productController');

router.get('/list', product.get_all);
 
module.exports = router;