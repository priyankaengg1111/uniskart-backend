var express = require('express');
var router = express.Router();
var workExperienceController = require('../controllers/workExperienceController.js');


router.post('/:id',workExperienceController.create);
router.get('/:id',workExperienceController.show);


module.exports = router;