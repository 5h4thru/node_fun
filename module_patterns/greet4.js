function Greet() {
    this.greeting = "Hello World by passing the function constructor instead of the object!!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

// replace the object with the function constructor itself instead of creating a new object
module.exports = Greet;