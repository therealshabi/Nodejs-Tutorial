 //This module is basically a function
var express = require('express');
//For Parsing Body of Request, mainly in POST requests
var bodyParser = require('body-parser');

//This makes an app to access all the functionalities of express
var app = express();

//Middleware for Parsing Body of Request
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Setting Template Engine EJS
app.set('view engine','ejs');

//Middleware for Serving static file(s)
/* This will be helpful if we want to keep our css files in
separately and want to render it in an html page or View ,
Here, all files in assets folderwill be rendered as static files*/
app.use('/assets',express.static('assets'));

//General form app.get('route','function(req,res)')
app.get('/',function(req,res){
  //res.send("this is the homepage");
  //res.sendFile(__dirname+'/index.html');
  res.render('index');
});

app.get('/contact',function(req,res){
  //req query is map which stores the query along with the get request
  //console.log(req.query);
  //res.send("this is the contact page");
  //res.sendFile(__dirname+'/contact.html');
  res.render('contact',{qs : req.query});
});

//POST request on Contact Page along with Middleware (urlencodedParser) for Parsing the conatct data
app.post('/contact',urlencodedParser,function(req,res){
  console.log(req.body);
  //Render used for Rendering a View
  res.render('contact-success',{data : req.body});
});

//Dynamic Requests
app.get('/profile/:id',function(req,res){
  res.send("You requested to see a profile with the id of "+req.params.id);
});

app.get('/profile/:id/:name',function(req,res){
  //res.send("You requested to see a profile with the name of "+req.params.name);
  /*
    renders the Template Engine EJS for this request, default path will be under views folder
  */
  // data is basically simulation of a Database
  var data = {age : 29, job : 'Ninja',hobbies : ['eating','fighting','fishing']};
  res.render('profile',{person:req.params.name,data : data});
});

//listening to port
app.listen(3000);
