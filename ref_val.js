// pass by value
function change(b) {
    b = 2;
}
var a = 1;
change(a); // the value will not be changed in a because a is '1' which is a primitive value
console.log(a);

// pass by reference
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {}; // c is an empty object
c.prop1 = {};
console.log(c); // c has prop1 to be an object
changeObj(c);
console.log(c); // c.prop1 is now changed to a Function and a new prop2 is added in the changeObj function
