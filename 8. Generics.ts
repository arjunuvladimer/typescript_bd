// Array of Type T
function getRandomValue<T>(values: any[]): any{
    let getId = Math.floor(Math.random() * values.length)
    return values[getId]
}

let numbers = [1,5123,21,1,2,3]
let colors = ['red','green','blue']

console.log(getRandomValue(numbers))
console.log(getRandomValue(colors))

let randomValue = getRandomValue<number>(colors)

console.log(randomValue)

function checkId<T,U>(id:T,param:U):void{
    console.log(`Data type of Id ${typeof(id)} Type of param ${typeof(param)}`)
}

checkId<string,string>("10","Hello world")

// Interfaces
interface Pair<K,V>{
    key:K
    value: V
}


let date: Pair<string, number>  ={
    key:'Jan',
    value:1
}

// Classes Generics
class List<T>{
    
}