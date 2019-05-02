//Dependencies
var express = require('express');
var router = express.Router();
var asgnController = require('../controllers/asgn-controller');

//Route methods created in the controller
router.post('/asgn', asgnController.addAsgn);
router.get('/asgn', asgnController.showAsgn);
router.put('/asgn', asgnController.changeAsgn);
router.delete('/asgn', asgnController.deleteAsgn);

module.exports = router;