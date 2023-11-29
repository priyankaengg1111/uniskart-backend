var express = require('express');
var router = express.Router();
var agentController = require('../controllers/agentController.js');
var studentController = require('../controllers/studentController.js');
var {verifyAgentToken} = require('../middleware/auth')
//gg
router.post('/',verifyAgentToken,studentController.create);

module.exports = router;