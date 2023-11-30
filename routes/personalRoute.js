var express = require('express');
var router = express.Router();
var personalInformatonController = require('../controllers/personalInformatonController.js');


router.post('/:id',personalInformatonController.create);
router.get('/:id',personalInformatonController.show);

module.exports = router;