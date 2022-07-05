// Arithematic Operators
// [+,-,/,%,++,--]
let a = 10
console.log(++a)
// Relational Operators
// [<,>,<=,>=,==]
let b = 11
if(a < b){
    console.log(true)
}
// Logical Operators
// [&&, ||, !]
// && => Both Statements are true then && is true
// || => If one of the statment is true then it is true
if(!(a==10 || b==10)){
    console.log(true)
}else{
    console.log(false)
}
// Bitwise Operators
// [&, |, ^, ~, <<, >>, >>>]
// & => Both the statements should be true
// | => Any one of the statement should be true
// ^ => Neither both the statement should be true nor false
let c = 10 // => 1010
// => 1010 => 2^3 + 2^2 + 2^1 + 2^0 =>  8+0+2+0 => 10
// => 1111 => 8 + 4 + 2 + 1
// => 0001 0000
let d = 11 // => 1011
let e = c ^ d
// 1010
// ^
// 1011
// -----
// 0001 =>  1
console.log(e)
//  Left Shift : <<
let f = 10
// 1010 => 0010 1000 => 2^5 + 2^3 => 40
console.log(f<<2)
// Right Shift: >>
let g = 11
console.log(f>>2)
// 1011 => 0010  => 2
// Zero Fill Right Shift
let m = -2
console.log(m>>>1)
// 2147483647 .... 3 2 1 0 -2147483647, 2147483646, 2147483645  -3 
// Miscileaneous Operators
// (typeof, ?, instanceof, +, - )
var num:number = 2

var result = num>0 ? "positive": "negative"
console.log(result)

var y = -num
console.log("value of v:"+ y)

