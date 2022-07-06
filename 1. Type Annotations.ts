
// Type Annotations in Variables
// let variableName: type; // Declaration 
// let variableName: type = value // Definition
// Primitive Datatypes
let a:number = 213
// decimal, hexadecimal, binary, octal, bigInt[2^53 -1]

let b:string = `Hello World  ${a}`
console.log(b)
// "", '', ``[//Template Literals]
let c: boolean = true
let dj:any = null // intentional abesnce of memory
let dk:any = undefined // define in the future

// Non -Primitive Datatypes
// Structured Data
let arrayName:(string | number)[] = [1,1, "2"]
// Unstructured Data
let person: {
    fname: string,
    id: number
} = {
    fname:"Arjun",
    id:123
}

// object vs Object
class ES6{
    add(){
        
    }
    subtract(){
        
    }
}

// let someVar: {}
// someVar.fname = "Arjun"
// let someVar2: {} = {}
// [object object]
// console.log(someVar2.toString())

// Tuples
// number of elements is fixed
// type of elements are known
let employee:[string,number]
employee = ['Arjun', 14]

let rgb:[number,string,number]  = [1,"skdfj",3];

// Enum
enum CheckMonth {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
}

const check4 = {
    statusCheck: CheckMonth.July
}

if(check4.statusCheck === CheckMonth.July ){
    console.log("Its raining ")
}

// Any Type
const obj6 =`a`
let someNum = 11
// Void Type
function display6():void{
    console.log("hello world")
    console.log("hello world")
    console.log("hello world")
}



// Hoisting
// Variable Hoisting
var active:boolean = true
if(active){
    var check:number = 11
}
// Call the variable
console.log(hoistedVariable)

// Declaring the variable
var hoistedVariable





// Scoping of Variables
// 1. Global Scope
var d:number = 10
function add(){
    console.log(d)
}
// 2. Functional/Local Scope
function subtract(){
    var e:number = 11
    console.log(e)
}
// 3. Block Scope
// Temporal Dead Zone => 
{ // Object, Blocks

    let f:number = 124
    let dsfjk
    dsfjk  = 12312
    const jk:number = 123
}




// 4. Lexical Scope
var g:number = 10

function check1(){
   
    console.log(g)
    function check2(){
   
        console.log(g)
    }
    check2()
}
check1()


