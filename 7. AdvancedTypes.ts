// Intersection Types
interface Employee{
    name:string
    salary: number
}

interface Customer{
    name:string
    id: number
}

interface Address{
    email: string
    country: string
}

type Payroll = Customer & Address
type Salary = Employee & Address

let p: Payroll = {
    name:"Arjun",
    id: 123,
    email: "arjun@gmail.com",
    country: "india"
}


// Guards

type stringNumber = string | number

function alphaNumeric(a: stringNumber, b: stringNumber){
    if(typeof a === 'number' && typeof b==='number'){
        return a+b
    }
    if(typeof a === 'string' && typeof b==='string'){
        return a.concat(b)
    }

    throw new Error('Invalid String or Number')
}

console.log(alphaNumeric(10,11))


// Type Casting
let a: unknown = "hello"

console.log((a as string).length)

// Type Assertions

let abc: unknown = "hello world"
console.log(abc)

let string1 = <String> abc
console.log(string1)
console.log(typeof string1)

// Class Intersection
class Partner{
    display():boolean{
        return true
    }
}

class Business{
    display2():boolean{
        return true
    }
}

type BusinessPartner = Partner | Business

function customer(partner: BusinessPartner){
    let message: string
    if(partner instanceof Business){
        message = partner.display2() ? "Business String": "Issue"
    }
}