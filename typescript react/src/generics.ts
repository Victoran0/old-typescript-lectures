const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

// generic: the output type is the same as the input type and it could be any type
function identityThree<Type>(val: Type): Type {
    return val
}

// shorthand version
function indentityFour<T>(val: T): T{
    return val
}

function getSearchProducts<T>(products: T[]): T{
    return products[3]
}

const getSearch = <T> (products: T[]): T => {
    return products[3]
}

// react jsx element override:
const jsxOverride = <T,> (products: T[]): T => {
    return products[0]
}


function anotherFunction<T, U extends number>(valOne: T,valTwo: U):object{
    return{
        valOne, valTwo
    }
}

anotherFunction(3, 8)

// A generic type can also extend a predefined interface 

interface Database {
    connection: string,
    username: string,
    password: string
}

function anoFunction<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1, val2
    }
}

anoFunction({connection: 'a', username: 'd', password:'w'},
    {connection: 'w', username: 'r', password: '5'}
)

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}