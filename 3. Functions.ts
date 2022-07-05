// Functions
function add(a: number, b: number): number{
    console.log("Hello World")
    return a+b
}

let sum = add(10,20)

console.log(sum)

// Anonymous Functions / Lambda Function / Fat Arrow Functions

let subtract: (c:number, d:number) => number

// Default Parameterized Function

function defaultFunctionParameters(a,b = 100){
    return a*b
}

let result = defaultFunctionParameters(10)

console.log(result)

// Recursive Functions

function factorial(num){
    if(num <=0){
        return 1
    }else{
        return num * factorial(num - 1)
            // 5 * factorial(5-1)
                    // 4 * factorial(4 -1)
                        // 3 * factorial(3 -1)
                            // 1 * factorial(1 -1)
                                    // 1* 1
    }
}

console.log(factorial(5))


// Rest Parameterized Functions

function restParameterizedFunction(...oneIdentity){
    console.log(...oneIdentity)
}
restParameterizedFunction(1,2,3,4,5)

// Hoisting
console.log(hoistedFunction())

function hoistedFunction(){
    return 10
}

// console.log(hoistedVariable)

// var hoistedVariable = 11