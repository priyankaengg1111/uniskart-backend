var express = require('express');
var router = express.Router();
var workExperienceController = require('../controllers/workExperienceController.js');


router.post('/',workExperienceController.create);

module.exports = router;