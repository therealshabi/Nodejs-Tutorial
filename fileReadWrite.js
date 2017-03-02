//Reading and Wrting file
var fs = require('fs'); //Module for File Read/Write

var readme = fs.readFileSync('readme.txt','utf8');  //Syncronised File Reading (Blocking code)
console.log(readme);

fs.writeFileSync('writeme.txt',readme); //This is also Syncronous writing


//Asynchronous methods (Quicker method to handle requests)
//This will not block other parts of code
fs.readFile('readme.txt','utf8',function(err,data){
  console.log(data);
  fs.writeFile('write.txt',data);
});

console.log('test');
