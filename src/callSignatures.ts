function add(a: number, b: number) {
  return a + b;
}
// * function call signature
type Add2Type = (a: number, b: number) => number;
// * 다른 표기 법 - overloading을 위해
type Add3Type = { (a: number, b: number): number };

const add2: Add2Type = (a, b) => {
  return a + b;
};

// * overloading은 함수가 여러개의 call signature를 가지고 있을때 발생
