// extremely useful property of js
var greeting = "Hello World from greet5";

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
} // greet will not be exposed outside the module and is accessible only by the function above