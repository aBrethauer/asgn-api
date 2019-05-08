//Dependencies
var assignment = require('../models/asgn-model');

////////////CRUD functions

//list
exports.listAsgn = function(req, res){
 return res.send('Listasgn works!');
}
//create - POST
exports.addAsgn = function (req, res) {
   return res.send(`AddAssn works.`)    
}
//retrieve - GET
exports.showAsgn = function(req, res){
    return res.send(`Showasgn works!`);
}

//update - PUT
exports.changeAsgn = function(req, res){
    return res.send(`changeasgn works!`);
}

//delete - DELETE

exports.deleteAsgn = function(req, res){
    return res.send('deleteAsgn');
}