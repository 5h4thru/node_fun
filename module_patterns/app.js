var greet1 = require('./greet1.js');
// greet will be a function
greet1();

var greet2 = require('./greet2').greet; // more common way is to mention explicitly what we are looking for
greet2(); // check greet2.js file for understanding

var greet3 = require('./greet3');
greet3.greet();

var Greet4 = require('./greet4');
// greet4 is now a constructor function
var g4 = new Greet4();
g4.greet();

var greet5 = require('./greet5');
greet5.greet();