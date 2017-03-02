//Client Server Code
var http = require('http');

var server = http.createServer(function(req,res){
  console.log('Request was made '+req.url);
  //Making Header of Response
  res.writeHead(200,{'Content-Type': 'text/plain'});
  //Data Sent
  res.end('Hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log("Now Listening to port 3000...");
