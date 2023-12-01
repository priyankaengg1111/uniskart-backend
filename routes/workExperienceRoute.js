var express = require('express');
var router = express.Router();
var workExperienceController = require('../controllers/workExperienceController.js');


router.post('/:id',workExperienceController.create);

router.put('/:id',workExperienceController.update);

router.get('/:id',workExperienceController.show);


module.exports = router;