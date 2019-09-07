'use strict';
var router = require('express').Router(),
	admin = require('../controllers/adminController');

router.get('/profile', admin.get_detail);
 
module.exports = router;