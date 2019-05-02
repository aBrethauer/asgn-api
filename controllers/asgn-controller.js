//Dependencies
var assignment = require('../models/asgn-model');

////////////CRUD functions

//list
exports.listAsgn = function(req, res){
    return res.send(`Listasgn works!`);
}
//create
exports.addAsgn = function (req, res) {
    return res.send(`Addasgn works!`);
}
//retrieve
exports.showAsgn = function(req, res){
    return res.send(`Showasgn works!`);
}

//update
exports.changeAsgn = function(req, res){
    return res.send(`changeasgn works!`);
}

//delete

exports.deleteAsgn = function(req, res){
    res.send('deleteAsgn');
}