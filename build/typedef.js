"use strict";
function initialTypescript() {
    // * typescript 는 데이터와 변수의 타입을 명시적으로 정의할 수도 있고
    // * javscript처럼 변수만 생성해도 됨 - typescript 가 타입 추론을 해줌
    let a = "hello"; //* implicit type
    let b = false; //* explicit type
    let c = [1, 2, 3];
    function createPlayer(name, age) {
        return {
            name,
        };
    }
    const devlee = createPlayer("devlee");
    // devlee.name = "test" //* readonly error
    // * readonly 는 immutable이다.
    const numbers = [1, 2, 3, 4, 5];
    //* Tuple 최소 길이 특정 위치 특정 요소
    const newPlayer = ["!", 1, false];
}
