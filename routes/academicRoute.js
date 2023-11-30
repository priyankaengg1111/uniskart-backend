var express = require('express');
var router = express.Router();
var academicController = require('../controllers/academicController.js');


router.post('/:id',academicController.create);
router.get('/:id',academicController.show);


module.exports = router;