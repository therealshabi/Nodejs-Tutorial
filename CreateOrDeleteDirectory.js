//Creating or Removing Directory

var fs = require('fs');

//This method will delete if a file with the given name exists otherwise error

fs.unlink('writeme.txt');


//Synchronous Methods

//Create a directory
fs.mkdirSync('stuff');


//Delete a directory
fs.rmdirSync('stuff');


//Asynchronous methods

//Create a Directory

fs.mkdir('stuff',function(){
  fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('./stuff/writeme.txt',data);
  });
});

//Delete a Directory

//We cannot delete a directory without emptying it's contents
fs.unlink('./stuff/writeme.txt',function(){
  fs.rmdir('stuff');
});
