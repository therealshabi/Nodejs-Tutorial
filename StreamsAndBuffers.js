//Streams and Buffers
var http = require('http');
var fs = require('fs');

//Creating a Stream
var myReadStream = fs.createReadStream(__dirname+'/readme.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeme.txt');

//CreateRead extends Emitter
//Reading Data from ReadStream Chunk by Chunk, storing chunk in buffer and sending to user when buffer gets full
//Don't have to wait for whole data to get recieved
myReadStream.on('data',function(chunk){
  console.log('new chunk recieved');
  myWriteStream.write(chunk);
});
