"use strict";
// function declaration
function sum(val1, val2) {
    return val1 + val2;
}
// console.log(sum(1, 2));
// function expression
const tambah = function (val1, val2) {
    return val1 + val2;
};
function request(url, cb) {
    cb(`your url is ${url}`);
}
function submitContact(firstname, lastname, language = 'english', gender) {
    return {
        firstname,
        lastname,
        language,
    };
}
// console.log(submitContact('first', 'last'));
// rest parameter
function fruits(item, ...restItems) {
    return item + ' ' + restItems.join(' ');
}
// console.log(fruits('apple', 'mango', 'avocado'));
// conditional type with union
// solution 1: union
function testingUnion(param) {
    return param;
}
// solution 2 : generic
function testingGeneric(param) {
    console.log(param);
}
function testingOverloading(param) {
    return param;
}
console.log(testingOverloading('testing overloading'));
console.log(testingOverloading(1));
