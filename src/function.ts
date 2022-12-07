// function declaration
function sum(val1: number, val2: number): number {
    return val1 + val2;
}

// console.log(sum(1, 2));

// function expression
const tambah = function (val1: number, val2: number): number {
    return val1 + val2;
};
// console.log(tambah(1, 3));

// callback
// with function signature
type Greeter = (message: string) => void;
function request(url: string, cb: Greeter) {
    cb(`your url is ${url}`);
}

// request('https://github.com', function (message) {
//     console.log(message);
// });

type Contact = {
    firstname: string;
    lastname: string;
    language: string;
    gender?: string;
};

function submitContact(
    firstname: string,
    lastname: string,
    language: string = 'english',
    gender?: string
): Contact {
    return {
        firstname,
        lastname,
        language,
    };
}

// console.log(submitContact('first', 'last'));

// rest parameter
function fruits(item: string, ...restItems: Array<string>): string {
    return item + ' ' + restItems.join(' ');
}

// console.log(fruits('apple', 'mango', 'avocado'));

// conditional type with union
// solution 1: union
function testingUnion(param: string | number): string | number {
    return param;
}

// solution 2 : generic
function testingGeneric<T>(param: T): void {
    console.log(param);
}

// testingGeneric<number>(1);
// testingGeneric<string>('for testing');
// testingGeneric<boolean>(true);

// solution 3 : overloading
function testingOverloading(param: string): string;
function testingOverloading(param: number): number;
function testingOverloading(param: any): any {
    return param;
}

console.log(testingOverloading('testing overloading'));
console.log(testingOverloading(1));
