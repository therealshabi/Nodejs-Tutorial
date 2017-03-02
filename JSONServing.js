//Streams and Buffers
var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req,res){
  console.log('request was made '+req.url);
  res.writeHead(200,{'Content-type' : 'application/json'});
  var myObj = {
    name:'Ryu',
    job:'Ninja',
    age:29
  };

//  Converts an Object into JSON format (serialized format)
  res.end(JSON.stringify(myObj));  //Parameter should be String or buffer
});

server.listen(3002,'127.0.0.1');
console.log('Server Listening ...');
