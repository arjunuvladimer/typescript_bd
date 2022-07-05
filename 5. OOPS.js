// Inheritance
// Prototypal Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrototTypalInheritance = /** @class */ (function () {
    function PrototTypalInheritance(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fname = fname;
        this.lname = lname;
    }
    PrototTypalInheritance.prototype.getFullName = function () {
        return "Hello " + this.fname + " " + this.lname;
    };
    return PrototTypalInheritance;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(fname, lname) {
        return _super.call(this, fname, lname) || this;
    }
    return B;
}(PrototTypalInheritance));
var bObj = new B('Arjun', 'SN');
bObj.getFullName();
// Method Overiding
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.add = function () {
        console.log("Printing the class C Add Function");
    };
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    D.prototype.add = function () {
        console.log("Printing the class D Add Function");
    };
    D.prototype.someMethod = function () {
        _super.prototype.add.call(this);
    };
    return D;
}(C));
var dObj = new D();
dObj.someMethod();
// Multilevel Inheritance
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return E;
}(C));
// Heirchical Inheritance
var GrandFather = /** @class */ (function () {
    function GrandFather() {
    }
    GrandFather.prototype.display = function () {
        console.log("Class F display Function");
    };
    return GrandFather;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Father;
}(GrandFather));
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Son;
}(Father));
var hObj = new Son();
hObj.display();
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
var Payroll = /** @class */ (function () {
    function Payroll(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        Payroll.count++;
    }
    Payroll.count = 0;
    return Payroll;
}());
var obj14 = new Payroll('Arjun', 'SN');
var obj15 = new Payroll('Chris', 'J');
console.log(Payroll.count);
