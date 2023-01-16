"use strict";
const test = {
    nickname: "test",
    healthBar: 1,
};
const option = {
    name: "taeeon",
};
// interface를 class에서 extends할때는 typescript에서 제공하는 implements를 사용하자.
// interface를 상속할 때에는 property를 private, protected 으로 만들지 못한다.
// file size를 줄이는데 큰 역할을 할수있다.
// 여러개의 interface를 동시에 상속이 가능하다.
// 동시에 여러 곳에서 사용가능 함수의 파라미터 타입도 되고 아무튼 여러 곳에서 사용가능하다는 장점이 있다.
class IPlayer {
    constructor(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `${name} hello how are you!! ${this.fullName()}`;
    }
}
const playerA = {
    name: "taeeon",
    lastName: "taeeon2",
};
const playerB = {
    name: "taeeon",
    lastName: "taeeon2",
    health: 32,
};
class UserA {
    constructor(firstName) {
        this.firstName = firstName;
    }
}
// * typescript community에서는 클래스나 오브젝트의 shape를 define 하고 싶으면
// * interface를 사용하고 다른 모든경우에서는 type을 쓰라고 권장한다.
