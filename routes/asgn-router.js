//Dependencies
var Router = require('express').Router();
var asgnController = require('../controllers/asgn-controller');

//Route methods created in the controller
Router.get('/', asgnController.showAsgn);
Router.post('/', asgnController.addAsgn);
Router.put('/', asgnController.changeAsgn);
Router.delete('/', asgnController.deleteAsgn);

module.exports = Router;