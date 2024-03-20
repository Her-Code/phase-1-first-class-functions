function receivesAFunction(callback) {
    // Call the provided callback function
    callback();
}
function returnsANamedFunction() {
    // Define and return a named function
    return function namedFunction() {
        // Function body can be empty for this test
    };
}
function returnsAnAnonymousFunction() {
    return function() {
        // This is an anonymous function
    };
}
