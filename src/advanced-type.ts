// partial
interface UserTesting {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function createUser(data: Partial<UserTesting>) {}
// createUser({
//     id: 1,
//     name: 'john doe',
//     age: 20,
//     // createdAt: new Date(),
// });

// required
// function createUser(data: Required<UserTesting>) {}
// createUser({
//     id: 1,
//     name: 'john doe',
//     age: 20,
//     createdAt: new Date(),
// });

// readonly
// function createUser(data: Readonly<UserTesting>) {
//     // cannot assign!
//     data.id = 10;
// }
// createUser({
//     id: 1,
//     name: 'john doe',
//     age: 20,
//     createdAt: new Date(),
// });

// pick
// function createUser(data: Pick<UserTesting, 'id' | 'name'>) {}
// createUser({
//     id: 1,
//     name: 'john doe',
//     // age: 20,
//     // createdAt: new Date(),
// });

// omit
// function createUser(data: Omit<UserTesting, "id" | "name">) {}
// createUser({
//     // id: 1,
//     // name: 'john doe',
//     age: 20,
//     createdAt: new Date(),
// });

// record
type TestRecord = Record<string, string | number>;
const message: TestRecord = {
    id: '12',
    name: 'john doe',
    address: 'test',
    age: 12,
};

type UsersRecord = Record<string, UserTesting>;
const all: UsersRecord = {
    '1': {
        id: 1,
        name: 'john',
        age: 12,
        createdAt: new Date(),
    },
    '2': {
        id: 2,
        name: 'doe',
        age: 20,
        createdAt: new Date(),
    },
};

// extract
// mengambil yang sama
interface Post {
    id: string;
    title: string;
    createdAt: Date;
}

// type ExtractType = Extract<"id" | "name", "id" | "name">
type ExtractType = Extract<keyof UserTesting, keyof Post>;
type myNewType = Record<string, ExtractType>;

// exclude
// mengambil yang tidak sama
type ExcludeType = Exclude<keyof UserTesting, keyof Post>;
