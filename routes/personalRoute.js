var express = require('express');
var router = express.Router();
var personalInformatonController = require('../controllers/personalInformatonController.js');


router.post('/:id',personalInformatonController.create);
router.put('/:id',personalInformatonController.update);
router.get('/:id',personalInformatonController.show);

module.exports = router;