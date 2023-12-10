var express = require('express');
var router = express.Router();
var mainInfoController = require('../controllers/mainInfoController.js');



router.get('/:id',mainInfoController.show);

module.exports = router;