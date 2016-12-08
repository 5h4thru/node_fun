// Objects are collection of name-value pairs
// object literal: name-value pairs separated by commas and surrounded by curly braces
var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname)
    }
}

person.greet();