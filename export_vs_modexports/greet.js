exports = function() {
    console.log("Hello");
}

console.log(exports); // will be a function
console.log(module.exports); // will still be an empty object