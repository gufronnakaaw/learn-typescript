// boolean
const isMarried: boolean = false;
const isLoading: boolean = true;

// string
const animal: string = 'lion';
const car: string = 'mazda';

// number
const age: number = 20;
const price: number = 12000;

// any
let test: any = 'unknown';
test = true;
test = 123;

// array
// 2 ways to declare an array
const users: string[] = ['unknown', 'hacker'];
const numbers: Array<number> = [1, 2, 3, 4, 5];
// console.log({ users, numbers });

// array of object
const animals: { name: string; color: string }[] = [
    {
        name: 'lion',
        color: 'gray',
    },
    {
        name: 'elephant',
        color: 'orange',
    },
];

const colors: Array<{ name: string; code: string }> = [
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
const matrix: Array<Array<number>> = [
    [1, 2],
    [3, 4],
];
// console.log(matrix);

// array destructuring
let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
// console.log(d);

// tuple
const students: [string, number, string] = ['unknown', 20, 'jakarta'];
// console.log(students);

// enum
enum Role {
    ADMIN = 'admin',
    SUPER_ADMIN = 'super_admin',
    STUDENT = 'student',
    TEACHER = 'teacher',
}

const student: Role = Role.STUDENT;
// console.log(student);

// function
function getName(): string {
    return 'hello everyone';
}

function getAge(): number {
    return 20;
}

function sayHello(name: string = 'everyone'): string {
    return `hello ${name}`;
}
// console.log(sayHello('testing'));

// function signature
type Sum = (val1: number, val2: number) => number;

// arrow function
const add: Sum = (val1: number, val2: number): number => {
    return val1 + val2;
};
// console.log(add(1, 3));

// union
let multi: string | number = 'unknown';
multi = 123;
// console.log(multi);

// type aliases
type CustomType = string | number;
let myType: CustomType;
myType = 'hello';
myType = 10;
// console.log(myType);
