// first module designed to be independent from other set of javascript code
console.log("First module example!");
var greet = function() {
    console.log("This is assigned to greet variable!");
}

// making variables available outside of this module
module.exports = greet;