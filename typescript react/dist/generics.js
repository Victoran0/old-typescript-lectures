"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// generic: the output type is the same as the input type and it could be any type
function identityThree(val) {
    return val;
}
// shorthand version
function indentityFour(val) {
    return val;
}
function getSearchProducts(products) {
    return products[3];
}
const getSearch = (products) => {
    return products[3];
};
// react jsx element override:
const jsxOverride = (products) => {
    return products[0];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne, valTwo
    };
}
anotherFunction(3, 8);
function anoFunction(val1, val2) {
    return {
        val1, val2
    };
}
anoFunction({ connection: 'a', username: 'd', password: 'w' }, { connection: 'w', username: 'r', password: '5' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
