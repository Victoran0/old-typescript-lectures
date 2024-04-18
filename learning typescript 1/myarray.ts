const superHeros: string[] = []
const heroPower: Array<number> = []

type Useer = {
    name: string
    isActive: boolean
}

const allUsers: Useer[] =  []

superHeros.push("spiderman")
heroPower.push(4)

allUsers.push({name: "hsdvns", isActive: true})

// we can also have an array which takes an array that takes a certain type 
// An array that takes array of numbers
const MLModels: number[][] = [
    [255, 255, 255],
    [0, 0, 0]
]