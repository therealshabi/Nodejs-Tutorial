//Client Server Code
var http = require('http');
var fs = require('fs');

//Creating a Stream
var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');

//CreateRead extends Emitter
//Reading Data from ReadStream Chunk by Chunk, storing chunk in buffer and sending to user when buffer gets full
myReadStream.on('data',function(chunk){
  console.log('new chunk recieved');
  console.log(chunk);
});
