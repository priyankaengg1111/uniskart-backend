var express = require('express');
var router = express.Router();
var agentController = require('../controllers/agentController.js');
var studentController = require('../controllers/studentController.js');


router.post('/',studentController.create);

module.exports = router;