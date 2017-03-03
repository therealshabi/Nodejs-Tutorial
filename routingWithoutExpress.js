//Routing without Express Package
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made '+req.url);
  if(req.url==='/home' || req.url==='/'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }
  else if (req.url === '/contact') {
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/contact.html').pipe(res);
  }
  else if(req.url==='/api/ninjas'){
    var ninjas = [{ name: 'Ryu', age: 29},{name : 'Yoshi', age:32}];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(ninjas));
  }
  else{
    //If any other URL is passed
    res.writeHead(404,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);
  }
});

server.listen(3003,'127.0.0.1');
console.log('Server Listening ...');
