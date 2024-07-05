function printName(temporaryParameterObj) {
    console.log(temporaryParameterObj.name, temporaryParameterObj.age);
}
var eg = {
    name: "naruto",
    country: "konoha",
    age: 15,
    color: "red",
    symbol: "leaf"
};
printName({ name: "tharun", age: 24 });
printName(eg);
var a = {
    color: 'red',
    height: 100,
    widhth: 200
};
console.log(a.height);
var Learn = /** @class */ (function () {
    function Learn(x, y) {
        this.name = x;
        this.age = y;
    }
    Learn.prototype.welcome = function (name) {
        return "".concat(Learn.str, " ").concat(this.name, " and ").concat(name);
    };
    Learn.str = 'hello';
    return Learn;
}());
var obj = new Learn("gowtham");
console.log(obj);
var printy = obj.welcome("magi");
console.log(printy);
var eg2 = {
    name: "hitler",
    age: 34
};
function printer1(eg2) {
    try {
        eg2.name = 520;
        eg2.age = "poda punda";
        console.log("i just changed the data type of eg2 object which has implemented Gow interface they are age=".concat(eg2.age, " and name=").concat(eg2.name, " \nu know implemented property types cant be altered"));
    }
    catch (error) {
        console.log("u must enter correct data type to obeject's properties which has implemented Gow interface");
    }
}
printer1(eg2);
