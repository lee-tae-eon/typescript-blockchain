"use strict";
const never_unknown_void = () => {
    // * unknown - 어떤 타입인지 모를때
    // * 해당타입 정의를 해주고 조건으로 걸어주자
    let test;
    if (typeof test === "number") {
        let plus = test + 1;
    }
    if (typeof test === "string") {
        let plus = test.toLowerCase();
    }
    // * void - 함수가 return 이 없을때
    function hello() {
        console.log("set");
    }
    // * never - 함수가 절대 return 하지 않을때 발생
    // * exception은 가능
    function nevermind(name) {
        if (typeof name === "string") {
            name;
        }
        else if (typeof name === "number") {
            name;
        }
        else {
            // * 이코드는 실행되면안됨
            name;
        }
        // throw new Error("xxx");
    }
};
