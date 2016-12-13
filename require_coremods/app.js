var util = require('util'); // fetching the native module util

var name = "Tony";
var greeting = util.format("Hello, %s", name);
util.log(greeting);