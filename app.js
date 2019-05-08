//Setup Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Setup variables
const PORT = process.env.PORT  || 3000 //Establishes port to listen on
var app = express();
app.use(bodyParser.json())// enables body parser for JSON


//DB connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/asgn-api');


//Routers
var asgnRouter = require('./routes/asgn-router');


//Routes *****TODO - Why can't I use param /asgn-api?******
app.use(asgnRouter);

app.use((req,res) => {
    res.status(404).send('Page not found.');
})

//Setup express web server
app.listen(PORT, () => {
    console.log(`Server is working on port ${PORT}`); //Confirms server is working with console message
})