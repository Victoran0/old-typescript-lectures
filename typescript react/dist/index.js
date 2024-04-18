"use strict";
// class User {
//     email: string; name: string;
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
// the above code also mean the below code
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    // we can also have a private method/function
    deletetoken() {
        console.log('deleted');
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter function do not have a specialized return type in TS
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// inheritance in classes
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User('shbd', 'hdsyufsind', 'jd');
