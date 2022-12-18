"use strict";
const test = {
    nickname: "test",
    healthBar: 1,
};
const option = {
    name: "taeeon",
};
// * ----------------------------------
console.log("test");
class IUser {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class IPlayer extends IUser {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return this.fullName();
    }
}
