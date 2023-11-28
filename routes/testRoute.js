var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController.js');


router.post('/',testController.create);

module.exports = router;