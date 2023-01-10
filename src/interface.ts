type Nick = "test" | "lee" | "eon";
type Health = 1 | 5 | 10;

// * interface 는 object의 shape을 결정해주려는 역할로 만들어진 type 정의이다.
interface Standards {
  nickname: Nick;
  healthBar: Health;
}

const test: Standards = {
  nickname: "test",
  healthBar: 1,
};

// interface SuperUser {
//   name: string;
// }

// interface HealthPlayer extends SuperUser {}
// * 위 interfae는 아래처럼쓰일 수 있다.
type SuperUser = {
  name: string;
};
// * & 연산자 = AND 연산자
type HealthPlayer = SuperUser & {};

const option: HealthPlayer = {
  name: "taeeon",
};

// * ----------------------------------
// user의 추상 클래스와 player 클래스를 구현 해보자.
// abstract class는 상속받는 다른 클래스가 가질 property와 메소드를 지정하도록 해준다.
// repeat: asbtract class는  instance를 허용하지 않는다.
// non exist on javascript , so abstarct class is changed to general class in javascript

// on top - this is cause why use the interface
// interface is disapper on compile
// 인터페이스를 쓸 때 클래스가 특정 형태를 따르도록 강제하는 방법.
// 추상 클래스를 interface로 바꿔보자
// abstract class IUser {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }

interface IUser {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// interface를 class에서 extends할때는 typescript에서 제공하는 implements를 사용하자.
// interface를 상속할 때에는 property를 private, protected 으로 만들지 못한다.
// file size를 줄이는데 큰 역할을 할수있다.
// 여러개의 interface를 동시에 상속이 가능하다.
// 동시에 여러 곳에서 사용가능 함수의 파라미터 타입도 되고 아무튼 여러 곳에서 사용가능하다는 장점이 있다.
class IPlayer implements IUser, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `${name} hello how are you!! ${this.fullName()}`;
  }
}
