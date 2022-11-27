// * polymorphism - 다형성

// * call signature를 통해 여러개를 주는 것도 방법이지만
// * polymorphism을 이용해 generic을 주는 것이 더 좋다.
type SuperPrint = {
  // * generic 사용법
  <T>(arr: T[]): void;
  // (arr: boolean[]): void;
  // (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, false, true]);
superPrint(["1", "@", "3"]);
superPrint(["1", "@", "3", true, false]);
