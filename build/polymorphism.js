"use strict";
// * polymorphism - 다형성
const superPrint = (arr) => arr[0];
// * another way
function superPrint2(a) {
    return a[0];
}
// const a = superPrint([1, 2, 3, 4]);
// const b = superPrint([true, false, false, true]);
// const c = superPrint(["1", "@", "3"]);
// const d = superPrint(["1", "@", "3", true, false]);
const a = superPrint2([1, 2, 3, 4]);
const b = superPrint2([true, false, false, true]);
const c = superPrint2(["1", "@", "3"]);
const d = superPrint2(["1", "@", "3", true, false]);
const lee = {
    name: "taeeon",
    extraInfo: {
        fav: "test",
    },
};
