// Inheritance
// Prototypal Inheritance

class PrototTypalInheritance{
    constructor(private fname:string, private lname:string){
        this.fname = fname
        this.lname = lname
    }

    getFullName():string{
        return `Hello ${this.fname} ${this.lname}`
    }
}

class B extends PrototTypalInheritance{
    constructor(
        fname:string,
        lname:string,
    ){
        super(fname,lname)
    }
}


let bObj = new B('Arjun','SN')
bObj.getFullName()

// Method Overiding

class C {
    add(){
        console.log("Printing the class C Add Function")
    }
}

class D extends C{
    add(){
        console.log("Printing the class D Add Function")
    }
    someMethod(){
        super.add()
    }
   
}

let dObj = new D()
dObj.someMethod()

// Multilevel Inheritance

class E extends C{

}

// Heirchical Inheritance

class GrandFather {
    display(){
        console.log("Class F display Function")
    }
}

class Father extends GrandFather{

}

class Son extends Father{

}

let hObj = new Son()
hObj.display()

// Multiple Inheritance Class B extends A,B,C in javascript


// Method Overloading => Doesn't Take Place

// class OverloadCheck{
//     add(a,b){
//         console.log("First Add Function")
//     }
//     add(a,bc,d,e){
//         console.log("Second Add Function")
//     }
// }

// Static Methods

class Payroll{
    static count: number = 0

    constructor(
        private fname: string,
        private lname: string,
    ){
        Payroll.count++
    }
}

let obj14 = new Payroll('Arjun','SN')
let obj15 = new Payroll('Chris','J')

console.log(Payroll.count)

// Abstract Classes

abstract class Employee{
    constructor(private fname: string, private lname: string){

    }
    abstract getSalary():number
    get fullName(): string{
        return `Hello ${this.fname} ${this.lname}`
    }
    checkAbstractMethod(): string{
        return `${this.fullName} has salary ${this.getSalary}`
    }
}

class PermanentEmployee extends Employee{
    constructor(fname: string,  lname: string, private salary:number){
        super(fname,lname)
    }
    getSalary(): number {
        return this.salary
    }
}
let obj19 = new PermanentEmployee('Arjun','SN',132102)
