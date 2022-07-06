// Classes In Typescript
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
function ES6(id, fname, lname) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
}
ES6.prototype.getFullName = function () {
    return "Hello " + this.fname + " " + this.lname;
};
var obj9 = new ES6('1', 'Arjun', 'SN');
console.log(obj9.getFullName());
// Access Modifiers
// => Private
// => Protected
// => Public
var id = 10;
var ES61 = /** @class */ (function () {
    function ES61(id, fname, lname) {
        // this.id = id
        this.fname = fname;
        this.lname = lname;
    }
    ES61.prototype.getFullName = function () {
        return "Hello " + this.id + " " + this.fname + " " + this.lname;
    };
    return ES61;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return A;
}(ES61));
var obj10 = new ES61('123', 'Arjun', 'SN');
// Getters and Setters
// Getter Method: 
// => returns the value of the property's value
// => Accessor
var Typescript = /** @class */ (function () {
    function Typescript() {
    }
    Object.defineProperty(Typescript.prototype, "firstName", {
        get: function () {
            return this.fname;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error('The name is Invalid');
            }
            this.fname = theFirstName;
        },
        enumerable: true,
        configurable: true
    });
    return Typescript;
}());
var obj13 = new Typescript();
obj13.firstName = "Arjun";
console.log(obj13.firstName);
