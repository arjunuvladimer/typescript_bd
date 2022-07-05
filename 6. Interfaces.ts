interface Json{
    toJSON(): string
}

class Employee implements Json{
    private fname:string
    constructor(fname: string, lname:string){
        this.fname = fname
    }
    toJSON(): string {
        return JSON.stringify(this.fname)
    }
}

let obj = new Employee('Arjun','SN')
console.log(obj.toJSON())


interface Banking{
    send(email: string): boolean
    queue(email: string): boolean
}

interface Customer extends Banking{
    later(email: string, after:number): boolean
}

interface Employee extends Customer, Banking{
    
}

class Messages implements Customer{
    send(email: string): boolean {
        return true
    }
    queue(email: string): boolean {
        return true
    }
    later(email: string, after:number):boolean{
        return true
    }
}