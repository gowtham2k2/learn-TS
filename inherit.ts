class Animal {
    type: String|undefined;
    age: number;
    constructor(type: String, age?: number) {
        this.type = type;
        this.age = age;
    }

    info() {
        console.log(`I am  ${this.type}  and i am  ${this.age}  years old`);
        // above code is = console.log("I am " + this.type + " and i am" + this.age + " years old");
    }
}

class Dog extends Animal {
    name: String;
    ownerName: String;
    constructor(type?: String, age?: number, name?: String, ownerName?: String) {
        super(type, age);
        this.name = name;
        this.ownerName = ownerName;
    }

    petInfo() {
        super.info();
        console.log(
            " my name is " + this.name + " my owner name is " + this.ownerName
        );
    }
}

var mypet = new Dog(undefined, 10, "pochitha", "Gowtham");
mypet.petInfo();
