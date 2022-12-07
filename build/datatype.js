"use strict";
// boolean
const isMarried = false;
const isLoading = true;
// string
const animal = 'lion';
const car = 'mazda';
// number
const age = 20;
const price = 12000;
// any
let test = 'unknown';
test = true;
test = 123;
// array
// 2 ways to declare an array
const users = ['unknown', 'hacker'];
const numbers = [1, 2, 3, 4, 5];
// console.log({ users, numbers });
// array of object
const animals = [
    {
        name: 'lion',
        color: 'gray',
    },
    {
        name: 'elephant',
        color: 'orange',
    },
];
const colors = [
    {
        name: 'white',
        code: '#FFF',
    },
    {
        name: 'black',
        code: '#000',
    },
];
// console.log({ animals, colors });
// array multi dimention
const matrix = [
    [1, 2],
    [3, 4],
];
// console.log(matrix);
// array destructuring
let [a, b, c, d] = [1, 2, 3, 'four'];
// console.log(d);
// tuple
const students = ['unknown', 20, 'jakarta'];
// console.log(students);
// enum
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["SUPER_ADMIN"] = "super_admin";
    Role["STUDENT"] = "student";
    Role["TEACHER"] = "teacher";
})(Role || (Role = {}));
const student = Role.STUDENT;
// console.log(student);
// function
function getName() {
    return 'hello everyone';
}
function getAge() {
    return 20;
}
function sayHello(name = 'everyone') {
    return `hello ${name}`;
}
// arrow function
const add = (val1, val2) => {
    return val1 + val2;
};
// console.log(add(1, 3));
// union
let multi = 'unknown';
multi = 123;
let myType;
myType = 'hello';
myType = 10;
// console.log(myType);
