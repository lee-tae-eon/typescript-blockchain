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

abstract class IUser {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class IPlayer extends IUser {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
