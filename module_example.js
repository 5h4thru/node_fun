// Pulling the greet.js module in this file
// Invoke a special function (require) that node makes available in its JS core
require('./greet.js'); // .js extenstion is not necessary
//greet();

// assign the require() to a variable that will catch the result of whatever is attached to module.exports
var greet = require('./greet.js');
greet();