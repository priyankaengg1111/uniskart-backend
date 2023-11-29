var express = require('express');
var router = express.Router();
var agentController = require('../controllers/agentController.js');

var {verifyAgentToken} = require('../middleware/auth')

router.post('/register',agentController.create);
router.post('/login',agentController.login);
router.get('/allStudent',verifyAgentToken,agentController.allStudent);


module.exports = router;