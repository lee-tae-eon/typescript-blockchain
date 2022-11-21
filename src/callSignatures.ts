function add(a: number, b: number) {
  return a + b;
}
// * function call signature
type Add2Type = (a: number, b: number) => number;

const add2: Add2Type = (a, b) => {
  return a + b;
};

// * overloading은 함수가 여러개의 call signature를 가지고 있을때 발생
type Add3Type = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
// * - overloading이 일어난 후 b 는 number or string이 되기 때문에 error 발생 그래서 type check
const add3: Add3Type = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// * ex
// Router.push({
//   path: "/",
//   state: 1
// })
// Router.push("/")

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log("test");
  } else {
    console.log(config.path);
  }
};
