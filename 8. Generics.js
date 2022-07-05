// Array of Type T
function getRandomValue(values) {
    var getId = Math.floor(Math.random() * values.length);
    return values[getId];
}
var numbers = [1, 5123, 21, 1, 2, 3];
var colors = ['red', 'green', 'blue'];
console.log(getRandomValue(numbers));
console.log(getRandomValue(colors));
var randomValue = getRandomValue(colors);
console.log(randomValue);
function checkId(id, param) {
    console.log("Data type of Id " + typeof (id) + " Type of param " + typeof (param));
}
checkId(10, "Hello world");
