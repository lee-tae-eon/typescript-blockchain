"use strict";
function add(a, b) {
    return a + b;
}
const add2 = (a, b) => {
    return a + b;
};
// * - overloading이 일어난 후 b 는 number or string이 되기 때문에 error 발생 그래서 type check
const add3 = (a, b) => {
    if (typeof b === "string")
        return a;
    return a + b;
};
const push = (config) => {
    if (typeof config === "string") {
        console.log("test");
    }
    else {
        console.log(config.path, config.state);
    }
};
const add4 = (a, b, c) => {
    return a + b;
};
