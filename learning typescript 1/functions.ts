function addTwo(num: number): number {
    return num + 2
}

let loginUser = (name: string, phoneNum: number, isPaid: boolean) => {

}

//  declaring type for functions return value

const getHello = (s: string): string => {
    return ''
}

const heros = ['thor', 'spiderman', 'ironman']

heros.map((hero): string => {
    return `the hero is ${hero}`
})

// void function

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function errorMsg(): never {
    throw new Error('eeyah')
}