
for(let i = 0; i< 5; ++i){
    console.log(i)
}

let obj = {
    fname:"Arjun",
    lname:"SN"
}

for(let i in obj){
    console.log(obj[i])
}

let array1 = [1,2,3,4]
for(let key of array1){
    console.log(key)
}

var statusVal = false
if(statusVal){
    let aj = 10
}
// console.log(aj)

// Blocks, Object, Functional Blocks
{
    var blockvar = 10
}
console.log("Block Variable:" + blockvar)



var identity // Declaration
identity = 11 // Intialization
console.log(identity++) // => identity = 11 + 1 => 11

console.log(++identity) // => 1 + identity  = 11 => 12
 

// function add(a,b){
//     return a-b
// }

// let sum = add("11","10")

// console.log(sum)

// function restParameterizedFunction(...oneIdentity){
//     console.log(...oneIdentity)
// }
// restParameterizedFunction(1,"2",3,4,5)

// function sum(...numbers){
//     let sum = 0
//     numbers.forEach((num) => sum+=num )
//     return sum
// }

// console.log(sum(1,2,3,5,6))

// // class ES6{
// //     constructor(){
// //         this.a = 10
// //     }
// //     static add(){

// //     }
// //     subtract(){

// //     }
// // }

// // ES6.add()

// // var objCheck = new ES6() // Constructor => Properties
// // objCheck.add()

// var objCheck1 = new ES6() // Constructor => Properties
// objCheck.add()

// Method Overloading

class OverloadCheck{
    add(a,b){
        console.log("First Add Function")
    }
    add(a,b,c){
        console.log("Second Add Function")
    }
    add(a,b,c,d,e){
        console.log("Third Add Function")
    }
}

var checkObj = new OverloadCheck()
checkObj.add(1,2)


