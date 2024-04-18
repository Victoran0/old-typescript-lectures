// the tuples make sure the order and amount of the items in the array remain a constant
let tuser: [string, number, boolean]

tuser = ['hc', 1, true]

let rgb: [number, number, number] = [255, 123, 112 ]

// since the tuple is an array, we can use any method of arrays on it
type Uuser = [number, string]

const newUser: Uuser = [112, 'hey']

newUser[0] = 2
newUser[1] = 'hii'
