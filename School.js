///<reference path ="./module1.ts" />
var School = /** @class */ (function () {
    function School(schoolName, course, noOfStudent, present) {
        this.schoolName = schoolName;
        this.course = course;
        this.noOfStudents = noOfStudent;
        this.present = present;
    }
    School.prototype.absent = function () {
        var absent = this.noOfStudents - this.present;
        return absent;
    };
    School.prototype.run = function () {
        console.log("hello man...");
    };
    return School;
}());
// type obj = Array<School<String, String>>;
var objArr = [
    new School("svm", 1009, 100, 50),
    new School("saveetha", "IT", 200, 150),
    new School("sairam", "ECE", 200, 100)
];
objArr.forEach(function (elements) {
    console.log("School name = ".concat(elements.schoolName, "\ncourse = ").concat(elements.course, "\nTotal no stud =").concat(elements.noOfStudents, "\npresent = ").concat(elements.present, "\nabsent = ").concat(elements.absent(), "\n\n"));
});
// for (let i = 0; i < objArr.length; i++) {
//     console.log(`School: ${objArr[i].schoolName}\nDepartment: ${objArr[i].course}\nTotal no of Students: ${objArr[i].noOfStudents}\nNo of Students Present: ${objArr[i].present}\nNo of Absents:${objArr[i].absent()}`);
// }
// type BestSchool = ();
function bestSchool() {
    var m = 0;
    var t;
    for (var i = 0; i < objArr.length; i++) {
        var best = objArr[i].present / objArr[i].noOfStudents * 100;
        if (best > m) {
            m = best;
            t = i;
        }
    }
    console.log("Best school is ".concat(objArr[t].schoolName, " and present rate is ").concat(m));
}
bestSchool();
var myspace3;
var myspace = (function () {
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
