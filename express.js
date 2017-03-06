//This module is basically a function
var express = require('express');

//This makes an app to access all the functionalities of express
var app = express();

//General form app.get('route','function(req,res)')
app.get('/',function(req,res){
  res.send("this is the homepage");
});

app.get('/contact',function(req,res){
  res.send("this is the contact page");
});

//listening to port
app.listen(3000);
