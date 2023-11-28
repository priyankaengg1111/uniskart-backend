var express = require('express');
var router = express.Router();
var personalInformatonController = require('../controllers/personalInformatonController.js');


router.post('/',personalInformatonController.create);

module.exports = router;