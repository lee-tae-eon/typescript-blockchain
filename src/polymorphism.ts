// * polymorphism - 다형성

// * call signature를 통해 여러개를 주는 것도 방법이지만
// * polymorphism을 이용해 generic을 주는 것이 더 좋다.
type SuperPrint = {
  // * generic 사용법
  <T, M>(arr: T[], b?: M): T;
  // (arr: boolean[]): void;
  // (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => arr[0];

// * another way
function superPrint2<T>(a: T[]) {
  return a[0];
}

// const a = superPrint([1, 2, 3, 4]);
// const b = superPrint([true, false, false, true]);
// const c = superPrint(["1", "@", "3"]);
// const d = superPrint(["1", "@", "3", true, false]);

const a = superPrint2<number>([1, 2, 3, 4]);
const b = superPrint2<boolean>([true, false, false, true]);
const c = superPrint2<string>(["1", "@", "3"]);
const d = superPrint2<string | boolean>(["1", "@", "3", true, false]);

type NewPlayer<E> = {
  name: string;
  extraInfo: E;
};

type LeeExtra = {
  fav: string;
};

type LeePlayer = NewPlayer<LeeExtra>;

const lee: LeePlayer = {
  name: "taeeon",
  extraInfo: {
    fav: "test",
  },
};
