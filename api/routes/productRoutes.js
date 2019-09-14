'use strict';
var router = require('express').Router(),
	product = require('../controllers/productController');

router.get('/list', product.get_all);
router.get('/:id', product.get_detail);
router.post('/', product.insert_data);
router.put('/:id', product.update_data);
router.delete('/:id', product.delete_data);
 
module.exports = router;