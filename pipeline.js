//Streams and Buffers
var http = require('http');
var fs = require('fs');

//Creating a Stream
var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

//Pipe used to pipe between readStream and writeStream
//Piping is always From Readable Stream to a WritableStream
myReadStream.pipe(myWriteStream);

var server = http.createServer(function(req,res){
  console.log('request was made '+req.url);
  res.writeHead(200,{'Content-type' : 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
  //Response is also a write stream so we can pipe into it
  myReadStream.pipe(res);
});

server.listen(3005,'127.0.0.1');
console.log('Server Listening ...');
