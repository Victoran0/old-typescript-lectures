function detectType(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if (!id){
        console.log('please provide ID')
        return
    }
    id.toLowerCase()
}

interface Usr {
    name: string,
    email: string,
}

interface Admn {
    name: string,
    email: string,
    isAdmin: boolean
}

// using the in operator
function isAdminAccount(account: Usr | Admn)    {
    if ('isAdmin' in account) {
        return account.isAdmin
    }
    return false
}
// using instanceof operator

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return 'bird food'
    }
}

interface Circle {
    kind: 'circle',
    radius: number
}

interface Square {
    kind: 'square',
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

// This would work fine even if we have future cases added to Shape
function getArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}