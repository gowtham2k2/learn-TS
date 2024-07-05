"use strict";
class Animal {
    constructor(type, age) {
        this.type = type;
        this.age = age;
    }
    info() {
        console.log(`I am  ${this.type}  and i am  ${this.age}  years old`);
        // above code is = console.log("I am " + this.type + " and i am" + this.age + " years old");
    }
}
class Dog extends Animal {
    constructor(type, age, name, ownerName) {
        super(type, age);
        this.name = name;
        this.ownerName = ownerName;
    }
    petInfo() {
        super.info();
        console.log(" my name is " + this.name + " my owner name is " + this.ownerName);
    }
}
var mypet = new Dog(undefined, 10, "pochitha", "Gowtham");
mypet.petInfo();
//# sourceMappingURL=inherit.js.map