var p = {
    name: "Arjun",
    id: 123,
    email: "arjun@gmail.com",
    country: "india"
};
function alphaNumeric(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Invalid String or Number');
}
console.log(alphaNumeric(10, 11));
// Type Casting
var a = "hello";
console.log(a.length);
// Type Assertions
var abc = "hello world";
console.log(abc);
var string1 = abc;
console.log(string1);
console.log(typeof string1);
