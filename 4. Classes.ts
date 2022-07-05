// Classes In Typescript

function ES6(id,fname,lname){
    this.id = id
    this.fname = fname
    this.lname = lname
}


ES6.prototype.getFullName = function (){
    return `Hello ${this.fname} ${this.lname}`
}

let obj9 = new ES6('1','Arjun','SN')
console.log(obj9.getFullName())

// Access Modifiers

// => Private
// => Protected
// => Public
var id = 10
class ES61{
    private id: number
    private fname: string
    protected lname: string

    constructor(id:string,fname:string, lname: string){
        // this.id = id
        this.fname = fname
        this.lname = lname
    }

    public getFullName(): string{
        return `Hello ${this.id} ${this.fname} ${this.lname}`
    }
}

class A extends ES61{

}

let obj10 = new ES61('123','Arjun','SN')


// Getters and Setters
// Getter Method: 
    // => returns the value of the property's value
    // => Accessor

class Typescript{
    private id:string
    private fname: string
    private lname: string

    public get firstName(){
        return this.fname
    }
    public set firstName(theFirstName: string){
        if(!theFirstName){
            throw new Error('The name is Invalid')
        }
        this.fname = theFirstName
    }
}

let obj13 = new Typescript()
obj13.firstName = "Arjun"

console.log(obj13.firstName)

