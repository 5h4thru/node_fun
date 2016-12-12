var greetings = require('./greetings.json'); // the extension is important if it is not a .js file
// module.exports is not necessary in case of using a json file

var greet = function() {
    // console.log('Hello');
    console.log(greetings.en);
}

module.exports = greet;