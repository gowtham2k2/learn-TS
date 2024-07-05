interface Gow<T, V> {
    name: T;
    age: V;
}

function printName(temporaryParameterObj: Gow<String, number>) {
    console.log(temporaryParameterObj.name, temporaryParameterObj.age);
} //similar to lambdas

var eg = {
    name: "naruto",
    country: "konoha",
    age: 15,
    color: "red",
    symbol: "leaf"
}

printName({ name: "tharun", age: 24 });
printName(eg);

var a = {
    color: 'red',
    height: 100,
    widhth: 200
}

console.log(a.height);

class Learn {
    name: String | number;
    age?: number;
    static str: string = 'hello';
    constructor(x: String | number, y?: number) {
        this.name = x;
        this.age = y;

    }
    welcome(name: String): String {
        return `${Learn.str} ${this.name} and ${name}`;
    }
}

let obj = new Learn("gowtham");
console.log(obj);
let printy: String = obj.welcome("magi");
console.log(printy);

let eg2: Gow<String, number> = {
    name: "hitler",
    age: 34
}

function printer1(eg2: any) {
    try {
        eg2.name = 520;
        eg2.age = "poda punda";
        console.log(`i just changed the data type of eg2 object which has implemented Gow interface they are age=${eg2.age} and name=${eg2.name} \nu know implemented property types cant be altered`);
    } catch (error) {
        console.log("u must enter correct data type to obeject's properties which has implemented Gow interface");
    }

}

printer1(eg2);


