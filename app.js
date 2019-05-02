//Setup Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//Setup variables
const PORT = process.env.PORT  || 3000 //Establishes port to listen on
var app = express();






//Setup express web server
app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`); //Confirms server is working with console message
})