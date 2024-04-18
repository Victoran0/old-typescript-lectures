// class User {
//     email: string; name: string;
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// the above code also mean the below code
class User {
    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(
            public email: string, 
            public name: string,
            private userId: string
    ){}
    
    // we can also have a private method/function
    private deletetoken() {
        console.log('deleted')
    }

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setter function do not have a specialized return type in TS
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

// inheritance in classes
class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4
    }
}

const hitesh = new User('shbd', 'hdsyufsind', 'jd')