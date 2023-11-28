var express = require('express');
var router = express.Router();
var agentController = require('../controllers/agentController.js');


router.post('/register',agentController.create);
router.post('/login',agentController.login);


module.exports = router;