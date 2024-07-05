"use strict";
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
class Learn {
    constructor(x, y) {
        this.name = x;
        this.age = y;
    }
    welcome(name) {
        return `${Learn.str} ${this.name} and ${name}`;
    }
}
Learn.str = 'hello';
let obj = new Learn("gowtham");
console.log(obj);
let printy = obj.welcome("magi");
console.log(printy);
let eg2 = {
    name: "hitler",
    age: 34
};
function printer1(eg2) {
    try {
        eg2.name = 520;
        eg2.age = "poda punda";
        console.log(`i just changed the data type of eg2 object which has implemented Gow interface they are age=${eg2.age} and name=${eg2.name} \nu know implemented property types cant be altered`);
    }
    catch (error) {
        console.log("u must enter correct data type to obeject's properties which has implemented Gow interface");
    }
}
printer1(eg2);
//# sourceMappingURL=learn.js.map