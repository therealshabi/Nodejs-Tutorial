/*var stuff = require('./stuff');

console.log(stuff.counter(['shahbaz','shivam','shubhankar']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));
*/

var events = require('events');
var util = require('util');

//Works like a class
var Person = function(name){
  this.name = name;
};

//Every Person will have an Emitter attached to it
util.inherits(Person,events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james,mary,ryu];

//for loop into each element of the array
people.forEach(function (person) {
  person.on('speak',function(message){
    console.log('\n'+person.name + ' said : '+message);
  });
});

james.emit('speak','hey dudes');
ryu.emit('speak','I want a curry');

/*//To create custom Emitter
var myEmitter = new events.EventEmitter();

//Basically like Event Listener
myEmitter.on('someEvent',function (msg) {
  console.log(msg);
});

//Explicitly Emitting Event
myEmitter.emit('someEvent','the event was emitted');
*/
