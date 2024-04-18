let score: number | string = 33

score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = {
    name: 'hitesh',
    id: 111
}
//  we can also redefine hitesh using a username key

// we can use a function that works for either types, we have to find a way to know which type we want if it does not work on both
const createElement = (id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

const data: (string | number | boolean) [] = ['1', 2, '4', false]

// it can only take any 3 of the predefined values
let seatAllotment: 'aisle' | 'window' | 'front'

seatAllotment = 'aisle'