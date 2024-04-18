interface Person {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string  **does the same as job as the syntax below**
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

// adding keys to an existing interface
interface Person {
    githubToken: string
}

interface Mouse {
    name: string,
    specy: string,
    animalNum: number
}

// inheritance or extending an existing interface
interface Admin extends Person, Mouse {
    role: 'admin' | 'ta' | 'lenarr'
}

const hittes: Admin = {
    dbId: 22,
    email: 'jshbdc',
    userId: 22, 
    startTrial: () => "trial started", 
    getCoupon: (name: 'hees', val: 3) => 33,
    githubToken: 'yes',
    role: 'lenarr',
    name: 'mouse',
    specy: 'rat',
    animalNum: 4

}

hittes.email = 'sjbfnds'
// hittes.dbId = 333 cant work as we know