// create a function constructor
function Person(firstname, lastname) {
    this.firstname  = firstname;
    this.lastname = lastname;
}

// Prototyping so that 'john' can inherit from it
// this will be the prototype of any object created using function 'Person'
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

// create the object
var john = new Person('John','Doe');
console.log(john.firstname);
john.greet();

// example of prototype chaining
// here we assign a function constructor to the prototype
// we can now create objects using the object created earlier
Person.prototype.protochain = function Test(age) {
    this.age = age;
}
testJohn = new john.protochain(26);
console.log(testJohn.age);
console.log(john.age); // will be undefined
console.log(john.__proto__);