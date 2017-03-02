module.exports.counter = function(arr){
  return 'There are '+arr.length+' elements in this array';
};

module.exports.adder = function (a,b) {
  return `The sum of the 2 numbers is ${a+b}`; //This is template string under ``
};

module.exports.pi = 3.142;

/*module.exports is the object name for this file
Exporting multiple things
1. module.exports.counter = counter;
  module.exports.adder = adder;
  module.exports.pi = pi;
//Curly brace indicates objects
2.  module.exports = {
  adder:adder,
  counter:counter,
  pi:pi
}
