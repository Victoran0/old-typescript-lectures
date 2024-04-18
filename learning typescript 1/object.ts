// key-value pairs in typescript
const obj: {[key: string | number]: string | number} = {};

obj['222'] = 'nope'

const User = {
    name: 'Victor',
    email: "fuckme@mail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name: 'vic', isPaid: true})

function createCource(): {name: string, price: number} {
    return {name: 'vic', price: 100}
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

const creatingUser = (user: User): User => {
    return {name: '', email: '', isActive: false}
}

creatingUser({name: '', email: '', isActive: true})


type Userr = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
}

let myUser: Userr = {
    _id: '1234',
    name: 'sghvbs',
    email: 'sjbfsk',
    isActive: false
}

// readonly values can not be mutated
myUser.email = 'jsjfnusi'
myUser._id = 'hsbjfdj'

// merging types
type cardNumber = {
    cardnum: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}