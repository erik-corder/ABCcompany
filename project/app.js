const express = require('express');
const user = require('./routes/users');
const AddItem = require('./routes/AddItems');
const deduction = require('./routes/deductions');
const AddSalary = require('./routes/salaries');
const givendata = require('./routes/sales/givendataAday');
const salesData = require('./routes/sales/salesdata');
const config = require('./config/database');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express(); 
const port = process.env.PORT || 3000;

mongoose.set('useCreateIndex', true);

app.use(cors());

//passport midleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

//body parser for json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//database connection
const connection = mongoose.connect(config.database,{ useNewUrlParser: true });
if(connection){
  console.log("databased connected");
}else{
  console.log("database not connected");
}

//set file system
app.use(express.static(path.join(__dirname,"public")));

//access user file in routes folder
app.use('/user',user);
app.use('/AddItem',AddItem);
app.use('/Deduction',deduction);
app.use('/Salary',AddSalary);
app.use('/givendataAday',givendata);
app.use('./salesdata',salesData);

//route
app.get('/', function (req, res) {
    res.send('Hello');
});

//server
app.listen(port,function(){
    console.log("liste to port "+port);
});