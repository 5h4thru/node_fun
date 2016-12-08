// function statement
function greet() {
    console.log('Hi');
}
greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log("Hello World");
}
greetMe(); // This is still first-class

logGreeting(greetMe);

// function expression on the fly
logGreeting(function(){
    console.log("Function created on the fly!")
});