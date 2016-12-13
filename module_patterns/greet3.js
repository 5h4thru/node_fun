// replacing exports with own object
function Greet() {
    this.greeting = "Hello World by sending a new object of the function!!!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greet();
// only run once because the results are cached