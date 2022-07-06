// Type Annotations in Variables
// let variableName: type; // Declaration 
// let variableName: type = value // Definition
// Primitive Datatypes
var a = 213;
// decimal, hexadecimal, binary, octal, bigInt[2^53 -1]
var b = "Hello World  " + a;
console.log(b);
// "", '', ``[//Template Literals]
var c = true;
var dj = null; // intentional abesnce of memory
var dk = undefined; // define in the future
console.log(dj === dk)

// Non -Primitive Datatypes
// Structured Data
var arrayName = [1, 1, "2"];
var arrayName1 = [1, 1, "2"];
console.log(arrayName === arrayName1)
// Unstructured Data
var person = {
    fname: "Arjun",
    id: 123
};
var person1 = {
    fname: "Arjun",
    id: 123
};
console.log(person === person1)
// object vs Object
var ES6 = /** @class */ (function () {
    function ES6() {
    }
    ES6.prototype.add = function () {
    };
    ES6.prototype.subtract = function () {
    };
    return ES6;
}());
// let someVar: {}
// someVar.fname = "Arjun"
// let someVar2: {} = {}
// [object object]
// console.log(someVar2.toString())
// Tuples
// number of elements is fixed
// type of elements are known
var employee;
employee = ['Arjun', 14];
var rgb = [1, "skdfj", 3];
// Enum
var CheckMonth;
(function (CheckMonth) {
    CheckMonth[CheckMonth["January"] = 0] = "January";
    CheckMonth[CheckMonth["February"] = 1] = "February";
    CheckMonth[CheckMonth["March"] = 2] = "March";
    CheckMonth[CheckMonth["April"] = 3] = "April";
    CheckMonth[CheckMonth["May"] = 4] = "May";
    CheckMonth[CheckMonth["June"] = 5] = "June";
    CheckMonth[CheckMonth["July"] = 6] = "July";
    CheckMonth[CheckMonth["August"] = 7] = "August";
})(CheckMonth || (CheckMonth = {}));
var check4 = {
    statusCheck: CheckMonth.July
};
if (check4.statusCheck === CheckMonth.July) {
    console.log("Its raining ");
}
// Any Type
var obj6 = "a";
var someNum = 11;
// Void Type
function display6() {
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
}
// Hoisting
// Variable Hoisting
var active = true;
if (active) {
    var check = 11;
}
console.log(hoistedVariable);
var hoistedVariable;
// Scoping of Variables
// 1. Global Scope
var d = 10;
function add() {
    console.log(d);
}
// 2. Functional/Local Scope
function subtract() {
    console.log(e);
    var e = 11;
    
}
// 3. Block Scope
// Temporal Dead Zone => 
{ // Object, Blocks
    var f = 124;
}
// 4. Lexical Scope
var g = 10;
function check1() {
    console.log(g);
    function check2() {
        console.log(g);
    }
    check2();
}
check1();


var valid = false
if(valid){
    var someVar4 = 10
    console.log("dsfjlkafdsjl")
    console.log("dsfjlkafdsjl")
    console.log("dsfjlkafdsjl")
}
console.log(someVar4)



// Reference someVar4 doesn't exist
// undefined

function add(){
    return 10
    var b = 11
}

console.log(add)