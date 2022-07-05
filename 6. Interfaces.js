var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.fname = fname;
    }
    Employee.prototype.toJSON = function () {
        return JSON.stringify(this.fname);
    };
    return Employee;
}());
var obj = new Employee('Arjun', 'SN');
console.log(obj.toJSON());
var Messages = /** @class */ (function () {
    function Messages() {
    }
    Messages.prototype.send = function (email) {
        return true;
    };
    Messages.prototype.queue = function (email) {
        return true;
    };
    Messages.prototype.later = function (email, after) {
        return true;
    };
    return Messages;
}());
