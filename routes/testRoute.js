var express = require('express');
var router = express.Router();
var testController = require('../controllers/testController.js');


router.post('/:id',testController.create);
router.put('/:id',testController.update);

router.get('/:id',testController.create);


module.exports = router;