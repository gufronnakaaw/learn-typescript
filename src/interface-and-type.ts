// interface
interface AnimalInterface {
    name: string;
    color: string;
}

// type
type AnimalType = {
    name: string;
    color: string;
};

// merge
// interface
// interface Song {
//     artistName: string;
// }

// interface Song {
//     songName: string;
// }

// type
// cannot merge
// type Song = {
//     songName: string;
// }

// type Song = {
//     artistName: string;
// }

// const mySong: Song = {
//     artistName: 'unknown',
//     songName: 'Your Love'
// }

// intersection and union
// intersection
type typeA = {
    id: number;
    propA: string;
};

type typeB = {
    id: number;
    propB: string;
};

type IntersectionAB = typeA & typeB;

// union
type UnionAB = typeA | typeB;

const myData: UnionAB = {
    id: 1,
    propA: 'this is prop A',
    // propB: 'this is prop B',
};

// implements
// interface and type can do implements
// type Person =  {
//     name: string;
//     age: number;
//     getName(id: number): string;
// }

interface Address {
    street: string;
}

interface Person extends Address {
    name: string;
    age: number;
    getName(id: number): string;
}

class People implements Person {
    name: string;
    age: number;
    street: string;

    constructor(name: string, age: number, street: string) {
        this.name = name;
        this.age = age;
        this.street = street;
    }

    getName(id: number): string {
        return 'testing';
    }
}
