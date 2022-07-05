// Control Flows
// if
const number = 100
const number2 = 110
// Note: constant decaration and intialization both at a time
// syntax: if(expression/condition) {}
if(number>100){
    console.log(true)
}
// if..else
// syntax: if(expression/condition) {} else {}
if(number>100){
    console.log(true)
}else{
    console.log(false)
}

// nested if
// syntax: if(expression/condition) {
//     if(expression/condition){
//  }
// }
if(number2 == 110){
    console.log(true)
    if(number>180){
        console.log(true)
    }
}
let checkComp = 10
let checkComp2 = 10
if(checkComp == checkComp2){
    console.log(true)
}

let someString = 'check'
// swith..case
switch (someString) {
    case 'check1':
        console.log("Not check")
        break;
    case 'check':
        console.log("This is the check")
        break;
    case 'check3':
         console.log("Not check")
            

    default:
        console.log('New')
        break;
}

/// break, continue
// Loops
// for
// Syntax: for(intialization; expression/condition; update){}
for(let i = 0; i< 5; ++i){
    console.log(i)
}
// while
let j = 0
while(j<5){
    console.log(j)
    j++
}
// do..while
let k = 10
do{
    console.log(true)
}while(k<5)
