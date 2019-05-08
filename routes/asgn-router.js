//Dependencies
var express = require('express').Router();
var asgnController = require('../controllers/asgn-controller');

//Route methods created in the controller
express.post('/asgn', asgnController.addAsgn);
express.get('/asgn', asgnController.showAsgn);
express.put('/asgn', asgnController.changeAsgn);
express.delete('/asgn', asgnController.deleteAsgn);

module.exports = router;