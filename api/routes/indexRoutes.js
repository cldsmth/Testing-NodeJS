'use strict';
var router = require('express').Router(),
	index = require('../controllers/indexController');

router.get('/list', index.get_all);
router.post('/check_email', index.check_email);
 
module.exports = router;