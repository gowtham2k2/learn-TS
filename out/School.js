"use strict";
///<reference path ="./module1.ts" />
class School {
    constructor(schoolName, course, noOfStudent, present) {
        this.schoolName = schoolName;
        this.course = course;
        this.noOfStudents = noOfStudent;
        this.present = present;
    }
    absent() {
        let absent = this.noOfStudents - this.present;
        return absent;
    }
    run() {
        console.log("hello man...");
    }
}
// type obj = Array<School<String, String>>;
let objArr = [
    new School("svm", 1009, 100, 50),
    new School("saveetha", "IT", 200, 150),
    new School("sairam", "ECE", 200, 100)
];
objArr.forEach((elements) => {
    console.log(`School name = ${elements.schoolName}\ncourse = ${elements.course}\nTotal no stud =${elements.noOfStudents}\npresent = ${elements.present}\nabsent = ${elements.absent()}\n\n`);
});
// for (let i = 0; i < objArr.length; i++) {
//     console.log(`School: ${objArr[i].schoolName}\nDepartment: ${objArr[i].course}\nTotal no of Students: ${objArr[i].noOfStudents}\nNo of Students Present: ${objArr[i].present}\nNo of Absents:${objArr[i].absent()}`);
// }
// type BestSchool = ();
function bestSchool() {
    let m = 0;
    let t;
    for (let i = 0; i < objArr.length; i++) {
        let best = objArr[i].present / objArr[i].noOfStudents * 100;
        if (best > m) {
            m = best;
            t = i;
        }
    }
    console.log(`Best school is ${objArr[t].schoolName} and present rate is ${m}`);
}
bestSchool();
var myspace3;
let myspace = (function () {
    return {
        length: 100,
        breadth: 200,
        outData: function () {
            console.log(" this is my space get the hell outta here..!!!");
        }
    };
})();
console.log(myspace);
var outter = mySpace1.outData;
console.log(outter() + " bro");
console.log(mySpace1.name + " remember that..!!!");
//# sourceMappingURL=School.js.map