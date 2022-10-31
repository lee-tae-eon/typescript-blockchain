// * typescript 는 데이터와 변수의 타입을 명시적으로 정의할 수도 있고
// * javscript처럼 변수만 생성해도 됨 - typescript 가 타입 추론을 해줌

let a = "hello"; //* implicit type
let b: boolean = false; //* explicit type
let c = [1, 2, 3];

// * 명시적 타입은 최소한으로 쓰는 게 좋다. 타입스크립트가 타입 추론을 하도록 하는게 나음

type Age = number;

type Player = {
  name: string;
  age?: Age;
};

const player: Player = {
  name: "devlee",
  age: 3,
};
const playLynn: Player = {
  name: "Lynn",
};

function createPlayer(name: string, age?: number): Player {
  return {
    name,
  };
}
