"use strict";
// type inference
const product = {
    id: 'ID-01',
    name: 'Mouse RGB',
    price: 200000,
};
const product2 = {
    id: 'ID-02',
    name: 'Product 2',
    price: 150000,
    desc: 'testing',
};
const item = {
    id: 'ID-01',
    name: 'Macbook Pro',
    price: 20000000,
    detail: {
        color: 'blue',
        year: 2022,
    },
};
const myself = {
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
const cart1 = {
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
const fullname = {
    firstname: 'unknown',
    lastname: 'idk',
};
const { firstname, lastname } = fullname;
// console.log(lastname);
