var express = require('express');
var router = express.Router();
var academicController = require('../controllers/academicController.js');


router.post('/',academicController.create);

module.exports = router;