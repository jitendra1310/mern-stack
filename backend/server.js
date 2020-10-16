const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Bodypasar Middelware
app.use(bodyParser.json())

//Database config 
const mdb = require('./config/key').mongoURI;

// Connect MongoDB
mongoose
    .connect(mdb)
    .then(()=> console.log("Mongo DB Connect"))
    .catch(err => console.log(err));

const port = process.env.port || 5000;

//Start server
app.listen(port,() => console.log('Server started on port : ${port}'));