// type inference
const product = {
    id: 'ID-01',
    name: 'Mouse RGB',
    price: 200000,
};

// interface
interface Product {
    id: string;
    name: string;
    price: number;
    desc: string;
}

const product2: Product = {
    id: 'ID-02',
    name: 'Product 2',
    price: 150000,
    desc: 'testing',
};

// console.log(product2);

// nested object
interface Item {
    id: string;
    name: string;
    price: number;
    detail: ItemDetail;
}

interface ItemDetail {
    color: string;
    year: number;
}

const item: Item = {
    id: 'ID-01',
    name: 'Macbook Pro',
    price: 20000000,
    detail: {
        color: 'blue',
        year: 2022,
    },
};

// nested array of object
interface UserTest {
    id: number;
    name: string;
    address: Array<UserAddress>;
}

interface UserAddress {
    street: string;
    city: string;
}

const myself: UserTest = {
    id: 1,
    name: 'unknown',
    address: [
        {
            street: 'jaksel',
            city: 'jakarta',
        },
        {
            street: 'cinere',
            city: 'depok',
        },
    ],
};

// nested object of object
interface Cart {
    id: number;
    orderDate: string;
    items: {
        [key: string]: CartItems;
    };
}

interface CartItems {
    id: string;
    name: string;
    quantity: number;
}

const cart1: Cart = {
    id: 1,
    orderDate: '2022-12-06',
    items: {
        product1: {
            id: 'p1',
            name: 'Iphone 13 Pro',
            quantity: 1,
        },
        product2: {
            id: 'p2',
            name: 'MSI Laptop',
            quantity: 1,
        },
    },
};

// object destructuring
interface TestInterface {
    firstname: string;
    lastname: string;
}

const fullname: TestInterface = {
    firstname: 'unknown',
    lastname: 'idk',
};

const { firstname, lastname }: TestInterface = fullname;

// console.log(lastname);
