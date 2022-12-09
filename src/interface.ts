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
    return this.fullName();
  }
}
