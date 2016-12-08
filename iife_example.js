// Immediately Invoked Function Expressions IIFEs
// most common way to tell the engine that this function will be an expression is
// to wrap them around braces
(function (lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe')); // can be used with the same intent as that of the modules

var firstname = 'Jane';
console.log(firstname);